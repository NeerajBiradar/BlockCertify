import React, { useState } from 'react';
import { createThirdwebClient, getContract, prepareContractCall } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";

// create the client with your clientId
const client = createThirdwebClient({
  clientId: "b441772e5ce64d1bed0fb46b134fe8d0" // Replace with your actual client ID
});

// connect to your contract
const contract = getContract({
  client,
  chain: defineChain(59141),
  address: "0x2F3B0F36217d311192d8678D2c627302852259FC"
});

function CertificateGenerator() {
  const [formData, setFormData] = useState({
    certificate_id: '',
    uid: '',
    candidate_name: '',
    course_name: '',
    org_name: ''
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = prepareContractCall({
      contract,
      method: "function generateCertificate(string _certificate_id, string _uid, string _candidate_name, string _course_name, string _org_name)",
      params: [formData.certificate_id, formData.uid, formData.candidate_name, formData.course_name, formData.org_name]
    });
    sendTransaction(transaction);
    console.log(transaction)
  };

  return (
    <div>
      <h2>Generate Certificate</h2>
      <form onSubmit={handleSubmit}>
        <input name="certificate_id" value={formData.certificate_id} onChange={handleInputChange} placeholder="Certificate ID" required />
        <input name="uid" value={formData.uid} onChange={handleInputChange} placeholder="UID" required />
        <input name="candidate_name" value={formData.candidate_name} onChange={handleInputChange} placeholder="Candidate Name" required />
        <input name="course_name" value={formData.course_name} onChange={handleInputChange} placeholder="Course Name" required />
        <input name="org_name" value={formData.org_name} onChange={handleInputChange} placeholder="Organization Name" required />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
  );
}

export default CertificateGenerator;