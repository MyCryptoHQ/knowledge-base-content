---
date_published: '2021-07-07'
date_modified: '2021-07-20'
---

Transactions might fail for a variety of reasons. These usually affect transactions to smart contracts, or token transfers.

## Token transfers

When a token transfer fails, it might be because you are trying to transfer more tokens than your account holds. MyCrypto will automatically prevent you from doing this, but this might not be the case if you added a [custom token](/how-to/tokens/how-to-add-a-custom-token) with the wrong decimal number. Using an incorrect decimal number might result in your dashboard showing a greater amount of tokens than you actually hold, resulting in a failed transaction upon trying to transfer it elsewhere.

The token you are trying to send might also be 'locked', resulting in a failed transaction when you try to transfer it. This might happen with tokens you didn't transfer to your account yourself, and might require a KYC process before 'unlocking' this token.

## Transaction fee

Ethereum is the network—the blockchain. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in [Gas](/general-knowledge/ethereum-blockchain/what-is-gas) and gas is paid in ETH.

You are paying for the computation, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction (compute) and therefore you must pay for that computation just like you would pay for a successful transaction.

This is not a transaction fee that MyCrypto, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain.
