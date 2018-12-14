---
title: 'Transaction Failed: TX Fee not Refunded'
description: Transactions
priority: 8
date_published: '2017-07-05'
date_modified: '2018-11-29'
---


*"Why didn't I get my transaction fee (TX Fee) back, even though my transaction failed?"*

**Ethereum is the network—the blockchain. Ether (ETH) is the fuel for that network. When you send tokens, interact with a contract, send ETH, or do anything else on the blockchain, you must pay for that computation. That payment is calculated in `Gas` and gas is paid in `ETH`.**

You are paying for the *computation*, regardless of whether your transaction succeeds or fails. Even if it fails, the miners must validate and execute your transaction *(compute)* and therefore you must pay for that computation just like you would pay for a successful transaction.

You can see your TX fee (`gas limit` * `gas price`) in ETH & USD when you search for your transaction on [etherscan.io](https://etherscan.io/tx/0xd0790ea27df12a3b4ce026ee2ffc7402c30cf7d988eef17b5c1d899c52a70b67).

This is **not** a TX  fee that MyCrypto, or any other service provider, receives. This fee is paid to miners for mining transactions, putting them into blocks, and securing the blockchain.

### Related

*   [Gas and Transaction Fees](https://support.mycrypto.com/gas/)
*   [Transaction Failed: Out of Gas](https://support.mycrypto.com/transactions/transaction-failed-out-of-gas.html)
