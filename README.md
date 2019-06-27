# Udacity Blockchain Capstone

This project includes a Real Estate token management solution to manage the ownership of real estates.
The smart contracts can be deployed to the ethereum network and tokens can be proven using zkSNARKs.

# Install

Run npm install -S to install the required packages.

# Build and Run

In order to build the contracts in the subfolder eth-contracts run the command truffle compile in order to compile the contracts.
Afterwards the contracts can be deployed using the truffle command truffle migrate.

# Test

Use the command truffle test in  oder to test the smart contracts inside the eth-contracts folder.

# zkSNARKs

In order to create a proofable token a docker image zokrates/zokrates has been used.
The command to run this image:

docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash

Afterwards the following commands can be used to create the verifier files:

Compile
/path/to/zokrates compile -i square.code

Setup
/path/to/zokrates setup

Compute Witness
/path/to/zokrates compute-witness -a <a> <b>

Generate Proof 
/path/to/zokrates generate-proof

Export Verify contract
path/to/zokrates export-verifier

# Contract Addresses

The contract has been deployed to the rinkeby network.
The address of the contract is 0x0eeD8Fe409b39CffcD3f8C5c1E0ae0Eb3099046a. The ABI of the contract can be found in /eth-contracts/build/contracts(SolnSquareVerifier.json.

# OpenSea Marketplace

In order to demonstrate the token management of real estate objects an OpenSea marketplace for the Tokens has been created.
This acts as the frontend for the real estate token and can be accessed on https://rinkeby.opensea.io/assets/real-estate-v60.

# Used Packages

"openzeppelin-solidity"
"solc"
"solc-js"
"truffle-hdwallet-provider"

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
