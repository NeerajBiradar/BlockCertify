const ABI = [
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "certificate_id",
                    "type": "string"
                }
            ],
            "name": "certificateGenerated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificates",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "uid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "candidate_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "course_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "org_name",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificate_id",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_uid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidate_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_course_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_org_name",
                    "type": "string"
                }
            ],
            "name": "generateCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificate_id",
                    "type": "string"
                }
            ],
            "name": "getCertificate",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "_uid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidate_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_course_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_org_name",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificate_id",
                    "type": "string"
                }
            ],
            "name": "isVerified",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
]

export default ABI;