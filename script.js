const contractAddress = "A0x049A9514DcA1e20771Fb5bBA138891C4Ff9e641b";
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; 

let web3;
let contract;
let accounts;

document.getElementById('connectWallet').onclick = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        contract = new web3.eth.Contract(abi, contractAddress);
        alert("Wallet connected: " + accounts[0]);
    } else {
        alert("Install MetaMask!");
    }
};

document.getElementById('stakeButton').onclick = async () => {
    let amount = document.getElementById('stakeAmount').value;
    await contract.methods.stake(amount).send({ from: accounts[0] });
};

document.getElementById('unstakeButton').onclick = async () => {
    await contract.methods.unstake().send({ from: accounts[0] });
};
