export const SocialABI = [
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AlreadyDisLiked",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "AlreadyLiked",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "AlreadySubscribed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotEnoughFunds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotTheRequiredRole",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UserAlreadyPresent",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UserNotPresent",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_post",
				"type": "uint256"
			}
		],
		"name": "addView",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allPosts",
		"outputs": [
			{
				"internalType": "address",
				"name": "poster",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "upVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "downVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "views",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ipfsText",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "takenDown",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "allUsers",
		"outputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_ipfsImages",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_ipfsText",
				"type": "string"
			}
		],
		"name": "createPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currPostID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "deletePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deleteUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "postID",
				"type": "uint256"
			}
		],
		"name": "disLikePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllValidPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "poster",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "upVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "downVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "views",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "ipfsImages",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ipfsText",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "takenDown",
						"type": "bool"
					}
				],
				"internalType": "struct MainContract.Post[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllViewedPostsByUser",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDisLikedPosts",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLikedPosts",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getPost",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "poster",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "upVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "downVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "views",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "ipfsImages",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ipfsText",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "takenDown",
						"type": "bool"
					}
				],
				"internalType": "struct MainContract.Post",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSubscriberedUsers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "wallet",
						"type": "address"
					},
					{
						"internalType": "uint256[]",
						"name": "likedPosts",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "disLikedPosts",
						"type": "uint256[]"
					},
					{
						"internalType": "address[]",
						"name": "subscribedUsers",
						"type": "address[]"
					}
				],
				"internalType": "struct MainContract.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "grantAdminRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "grantCoOwnerRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "postID",
				"type": "uint256"
			}
		],
		"name": "likePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "makePostInvalid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
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
				"internalType": "uint256",
				"name": "postID",
				"type": "uint256"
			}
		],
		"name": "removeFromDisLiked",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "postID",
				"type": "uint256"
			}
		],
		"name": "removeFromLiked",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "poster",
				"type": "address"
			}
		],
		"name": "subscribeToPoster",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transferAllToOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
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