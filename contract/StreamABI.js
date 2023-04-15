export const StreamABI = [
	{
		"inputs": [
			{
				"internalType": "contract ISuperfluid",
				"name": "host",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "cfaV1",
		"outputs": [
			{
				"internalType": "contract ISuperfluid",
				"name": "host",
				"type": "address"
			},
			{
				"internalType": "contract IConstantFlowAgreementV1",
				"name": "cfa",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			}
		],
		"name": "createFlowIntoContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			},
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			}
		],
		"name": "createFlowToAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			},
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			}
		],
		"name": "deleteFlowFromContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			}
		],
		"name": "deleteFlowIntoContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			}
		],
		"name": "sendTokenToContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciver",
				"type": "address"
			},
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			}
		],
		"name": "updateFlowFromContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			}
		],
		"name": "updateFlowIntoContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]