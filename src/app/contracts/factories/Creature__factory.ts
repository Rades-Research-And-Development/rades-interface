/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Creature, CreatureInterface } from "../Creature";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "marketplace",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ab238038062001ab2833981016040819052620000349162000200565b6040518060400160405280600d81526020016c5261646573204372656174756560981b81525060405180604001604052806002815260200161524360f01b8152508160009081620000869190620002d7565b506001620000958282620002d7565b505050620000b2620000ac620000c660201b60201c565b620000ca565b620000bf8160016200011c565b50620003a3565b3390565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001293383836200012d565b5050565b816001600160a01b0316836001600160a01b031603620001935760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200025d57607f821691505b6020821081036200027e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002d257600081815260208120601f850160051c81016020861015620002ad5750805b601f850160051c820191505b81811015620002ce57828155600101620002b9565b5050505b505050565b81516001600160401b03811115620002f357620002f362000232565b6200030b8162000304845462000248565b8462000284565b602080601f8311600181146200034357600084156200032a5750858301515b600019600386901b1c1916600185901b178555620002ce565b600085815260208120601f198616915b82811015620003745788860151825594840194600190910190840162000353565b5085821015620003935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6116ff80620003b36000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063a22cb46511610071578063a22cb46514610258578063b88d4fde1461026b578063c87b56dd1461027e578063e985e9c514610291578063f2fde38b146102cd57600080fd5b8063715018a6146102245780638da5cb5b1461022c57806395d89b411461023d578063a14481941461024557600080fd5b806323b872dd116100e957806323b872dd146101985780632a55205a146101ab57806342842e0e146101dd5780636352211e146101f057806370a082311461020357600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e6101293660046111db565b6102e0565b60405190151581526020015b60405180910390f35b61014b610300565b60405161013a9190611250565b61016b610166366004611263565b610392565b6040516001600160a01b03909116815260200161013a565b610196610191366004611298565b6103b9565b005b6101966101a63660046112c2565b6104d3565b6101be6101b93660046112fe565b610504565b604080516001600160a01b03909316835260208301919091520161013a565b6101966101eb3660046112c2565b6105b0565b61016b6101fe366004611263565b6105cb565b610216610211366004611320565b61062b565b60405190815260200161013a565b6101966106b1565b6008546001600160a01b031661016b565b61014b6106c5565b610196610253366004611298565b6106d4565b61019661026636600461133b565b6106fa565b61019661027936600461138d565b610705565b61014b61028c366004611263565b61073d565b61012e61029f366004611469565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101966102db366004611320565b6107b1565b60006102eb8261082a565b806102fa57506102fa8261084b565b92915050565b60606000805461030f9061149c565b80601f016020809104026020016040519081016040528092919081815260200182805461033b9061149c565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b5050505050905090565b600061039d8261089b565b506000908152600460205260409020546001600160a01b031690565b60006103c4826105cb565b9050806001600160a01b0316836001600160a01b0316036104365760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104525750610452813361029f565b6104c45760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161042d565b6104ce83836108fa565b505050565b6104dd3382610968565b6104f95760405162461bcd60e51b815260040161042d906114d6565b6104ce8383836109e7565b60008281526007602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b03169282019290925282916105795750604080518082019091526006546001600160a01b0381168252600160a01b90046001600160601b031660208201525b602081015160009061271090610598906001600160601b031687611539565b6105a29190611558565b915196919550909350505050565b6104ce83838360405180602001604052806000815250610705565b6000818152600260205260408120546001600160a01b0316806102fa5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161042d565b60006001600160a01b0382166106955760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161042d565b506001600160a01b031660009081526003602052604090205490565b6106b9610b58565b6106c36000610bb2565b565b60606001805461030f9061149c565b6106dc610b58565b6106f6828260405180602001604052806000815250610c04565b5050565b6106f6338383610c37565b61070f3383610968565b61072b5760405162461bcd60e51b815260040161042d906114d6565b61073784848484610d05565b50505050565b60606107488261089b565b600061075f60408051602081019091526000815290565b9050600081511161077f57604051806020016040528060008152506107aa565b8061078984610d38565b60405160200161079a92919061157a565b6040516020818303038152906040525b9392505050565b6107b9610b58565b6001600160a01b03811661081e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161042d565b61082781610bb2565b50565b60006001600160e01b0319821663152a902d60e11b14806102fa57506102fa825b60006001600160e01b031982166380ac58cd60e01b148061087c57506001600160e01b03198216635b5e139f60e01b145b806102fa57506301ffc9a760e01b6001600160e01b03198316146102fa565b6000818152600260205260409020546001600160a01b03166108275760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161042d565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061092f826105cb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610974836105cb565b9050806001600160a01b0316846001600160a01b031614806109bb57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806109df5750836001600160a01b03166109d484610392565b6001600160a01b0316145b949350505050565b826001600160a01b03166109fa826105cb565b6001600160a01b031614610a205760405162461bcd60e51b815260040161042d906115a9565b6001600160a01b038216610a825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161042d565b610a8f8383836001610dcb565b826001600160a01b0316610aa2826105cb565b6001600160a01b031614610ac85760405162461bcd60e51b815260040161042d906115a9565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6008546001600160a01b031633146106c35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042d565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610c0e8383610e53565b610c1b6000848484610fec565b6104ce5760405162461bcd60e51b815260040161042d906115ee565b816001600160a01b0316836001600160a01b031603610c985760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161042d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d108484846109e7565b610d1c84848484610fec565b6107375760405162461bcd60e51b815260040161042d906115ee565b60606000610d45836110ed565b600101905060008167ffffffffffffffff811115610d6557610d65611377565b6040519080825280601f01601f191660200182016040528015610d8f576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d9957509392505050565b6001811115610737576001600160a01b03841615610e11576001600160a01b03841660009081526003602052604081208054839290610e0b908490611640565b90915550505b6001600160a01b03831615610737576001600160a01b03831660009081526003602052604081208054839290610e48908490611657565b909155505050505050565b6001600160a01b038216610ea95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161042d565b6000818152600260205260409020546001600160a01b031615610f0e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161042d565b610f1c600083836001610dcb565b6000818152600260205260409020546001600160a01b031615610f815760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161042d565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b156110e257604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061103090339089908890889060040161166f565b6020604051808303816000875af192505050801561106b575060408051601f3d908101601f19168201909252611068918101906116ac565b60015b6110c8573d808015611099576040519150601f19603f3d011682016040523d82523d6000602084013e61109e565b606091505b5080516000036110c05760405162461bcd60e51b815260040161042d906115ee565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109df565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061112c5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611158576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061117657662386f26fc10000830492506010015b6305f5e100831061118e576305f5e100830492506008015b61271083106111a257612710830492506004015b606483106111b4576064830492506002015b600a83106102fa5760010192915050565b6001600160e01b03198116811461082757600080fd5b6000602082840312156111ed57600080fd5b81356107aa816111c5565b60005b838110156112135781810151838201526020016111fb565b838111156107375750506000910152565b6000815180845261123c8160208601602086016111f8565b601f01601f19169290920160200192915050565b6020815260006107aa6020830184611224565b60006020828403121561127557600080fd5b5035919050565b80356001600160a01b038116811461129357600080fd5b919050565b600080604083850312156112ab57600080fd5b6112b48361127c565b946020939093013593505050565b6000806000606084860312156112d757600080fd5b6112e08461127c565b92506112ee6020850161127c565b9150604084013590509250925092565b6000806040838503121561131157600080fd5b50508035926020909101359150565b60006020828403121561133257600080fd5b6107aa8261127c565b6000806040838503121561134e57600080fd5b6113578361127c565b91506020830135801515811461136c57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156113a357600080fd5b6113ac8561127c565b93506113ba6020860161127c565b925060408501359150606085013567ffffffffffffffff808211156113de57600080fd5b818701915087601f8301126113f257600080fd5b81358181111561140457611404611377565b604051601f8201601f19908116603f0116810190838211818310171561142c5761142c611377565b816040528281528a602084870101111561144557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561147c57600080fd5b6114858361127c565b91506114936020840161127c565b90509250929050565b600181811c908216806114b057607f821691505b6020821081036114d057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561155357611553611523565b500290565b60008261157557634e487b7160e01b600052601260045260246000fd5b500490565b6000835161158c8184602088016111f8565b8351908301906115a08183602088016111f8565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008282101561165257611652611523565b500390565b6000821982111561166a5761166a611523565b500190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116a290830184611224565b9695505050505050565b6000602082840312156116be57600080fd5b81516107aa816111c556fea26469706673582212206a00750e5c612a8c651bad4e317eb7c7451414de99dae5dfdc567a3b9298b4c564736f6c634300080f0033";

type CreatureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreatureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Creature__factory extends ContractFactory {
  constructor(...args: CreatureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    marketplace: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Creature> {
    return super.deploy(marketplace, overrides || {}) as Promise<Creature>;
  }
  override getDeployTransaction(
    marketplace: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(marketplace, overrides || {});
  }
  override attach(address: string): Creature {
    return super.attach(address) as Creature;
  }
  override connect(signer: Signer): Creature__factory {
    return super.connect(signer) as Creature__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreatureInterface {
    return new utils.Interface(_abi) as CreatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Creature {
    return new Contract(address, _abi, signerOrProvider) as Creature;
  }
}