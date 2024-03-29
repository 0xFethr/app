export const StreamABI = [
	{
		"inputs": [
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "createStream",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "deleteStream",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ISuperfluid",
				"name": "_host",
				"type": "address"
			},
			{
				"internalType": "contract ISuperToken",
				"name": "_goerliDaiX",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "updateStream",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "accountList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"inputs": [],
		"name": "goerliDaiX",
		"outputs": [
			{
				"internalType": "contract ISuperToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			}
		],
		"name": "isFlowing",
		"outputs": [
			{
				"internalType": "bool",
				"name": "flowRate",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "readFlowRate",
		"outputs": [
			{
				"internalType": "int96",
				"name": "flowRate",
				"type": "int96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]