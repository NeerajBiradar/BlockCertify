import { ConnectButton ,useActiveAccount} from "thirdweb/react";
import { client } from "../client";
import React, { useState } from "react";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { prepareContractCall } from "thirdweb"
import { useSendTransaction } from "thirdweb/react"
import axios from 'axios'; // Add this import

const contract = getContract({
  client,
  chain: defineChain(59141),
  address: "0x2F3B0F36217d311192d8678D2c627302852259FC"
});

function Generate() {
  const account = useActiveAccount();
  let [email,setEmail] = useState("");
  let [_certificate_id, setCertificateId] = useState("");
  let [_rollNo, setrollNo] = useState("");
  let [_name, setName] = useState("");
  let [_course_name, setCourseName] = useState("");
  let [_org_name, setOrgName] = useState("");

  const { mutate: sendTransaction } = useSendTransaction();

  const generateUniqueCertificateId = (roll, name, course, organization) => {
    // Create a string by concatenating all inputs
    const baseString = `${roll}${name}${course}${organization}`;
    
    // Generate a hash using a simple algorithm (you might want to use a more robust method in production)
    let hash = 0;
    for (let i = 0; i < baseString.length; i++) {
      const char = baseString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Convert the hash to a hexadecimal string and take the first 8 characters
    const uniqueId = Math.abs(hash).toString(16).slice(0, 8).toUpperCase();
    
    // Add a prefix to make it clear this is a certificate ID
    return `CERT-${uniqueId}`;
  };

  const handleSubmit = async () => {
    // Generate the unique certificate ID
    const uniqueCertificateId = generateUniqueCertificateId(_rollNo, _name, _course_name, _org_name);
    console.log(uniqueCertificateId);

    try {
      // Send data to the backend
      await axios.post('http://localhost:3000/api/generate', {
        email: email,
        certificateId: uniqueCertificateId
      });

      // Prepare and send the blockchain transaction
      const transaction = prepareContractCall({
        contract,
        method: "function generateCertificate(string _certificate_id, string _rollNo, string _name, string _course_name, string _org_name)",
        params: [uniqueCertificateId, _rollNo.toUpperCase(), _name.toUpperCase(), _course_name.toUpperCase(), _org_name.toUpperCase()]
      });
      console.log(transaction);
      sendTransaction(transaction);

      // Clear form fields after successful submission
      setEmail("");
      setCertificateId("");
      setrollNo("");
      setName("");
      setCourseName("");
      setOrgName("");

    } catch (error) {
      console.error("Error generating certificate:", error);
      alert("Error generating certificate. Please try again.");
    }
  };

  return (

    <div className="flex flex-col items-center mt-20 min-h-screen bg-[#060B0F]">
      <h2 className="text-4xl font-bold text-white mb-8">Generate Certificate</h2>
      <form className="bg-[#0A0E12] p-8 rounded-xl border border-white w-full max-w-md">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="certificate_id"
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value.toUpperCase())}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="uid"
            type="text"
            placeholder="Unique Identity"
            value={_rollNo}
            onChange={(e) => setrollNo(e.target.value.toUpperCase())}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="_name"
            type="text"
            placeholder="Name"
            value={_name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="course_name"
            type="text"
            placeholder="Course Name"
            value={_course_name}
            onChange={(e) => setCourseName(e.target.value.toUpperCase())}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#1A1E24] leading-tight focus:outline-none focus:shadow-outline"
            id="org_name"
            type="text"
            placeholder="Organization Name"
            value={_org_name}
            onChange={(e) => setOrgName(e.target.value.toUpperCase())}
          />
        </div>
        <div className="flex mb-6">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Certificate",
              url: "localhost",
            }}
          />
        </div>

        {account && <div className="flex items-center">

          <button
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Generate
          </button>

        </div>}
      </form>
    </div>

  );
}

export default Generate;
