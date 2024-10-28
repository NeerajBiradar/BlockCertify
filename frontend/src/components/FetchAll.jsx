import React, { useState } from "react";
import { useReadContract } from "thirdweb/react";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Create the client with your clientId
const client = createThirdwebClient({
  clientId: "b441772e5ce64d1bed0fb46b134fe8d0"
});

// Connect to your contract
const contract = getContract({
  client,
  chain: defineChain(59141),
  address: "0x2F3B0F36217d311192d8678D2c627302852259FC"
});

function FetchAll() {
  const [certificateId, setCertificateId] = useState("");
  const { data, isPending } = useReadContract({
    contract,
    method: "function getCertificate(string _certificate_id) view returns (string _uid, string _candidate_name, string _course_name, string _org_name)",
    params: [certificateId]
  });
  console.log(isPending);
  const handleSubmit = (e) => {
    e.preventDefault();
    // The useReadContract hook will automatically refetch when certificateId changes
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-4xl font-bold text-white mb-4">Fetch Certificate</h2>
      <form onSubmit={handleSubmit} className="bg-[#060B0F] p-8 rounded-xl border border-white">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="certificateId">
            Certificate ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="certificateId"
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Fetch Certificate
          </button>
        </div>
      </form>

      {isPending && <p className="text-white mt-4">Loading...</p>}

      {!isPending && (
        <div className="mt-4 text-white bg-[#060B0F] p-8 rounded-xl border border-white">
          <h3 className="text-2xl font-bold">Certificate Details:</h3>
          <p>UID: {data[0]}</p>
          <p>Candidate Name: {data[1]}</p>
          <p>Course Name: {data[2]}</p>
          <p>Organization Name: {data[3]}</p>
        </div>
      )}
    </div>
  );
}

export default FetchAll;
