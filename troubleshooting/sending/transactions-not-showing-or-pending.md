---
title: Transactions Not Showing Up or Pending Forever
description: Transactions
priority: 1
date_published: '2017-12-07'
date_modified: '2018-02-25'
---

At times, combinations of new users, increased interest, popular apps like CryptoKitties, and misc. ICOs can create quite a mess of the transaction (TX) pool. This sometimes results in an accumulation of pending TXs that take longer than normal to send, and is a network issue that affects all exchanges and clients.

In these cases, there is simply not enough space in the blocks for the miners to mine all the transactions, and most systems are not currently set up to monitor the massive quantity of transaction requests. This will hinder everyone's ability to send transactions, including our own.

## Helpful tools and resources to get your transaction to send

* [See all the transactions that are pending here](https://etherscan.io/txsPending)
* [Learn about **Gas**, **TX Fees**, and how to get your TX to go through](/general-knowledge/ethereum-blockchain/what-is-gas)
* [Replace a **pending TX** that you may have not sent with insufficient gas](/how-to/sending/checking-or-replacing-a-transaction-after-it-has-been-sent)
* [Learn about what a **nonce** is and how it controls which transactions are mined, or not mined](/general-knowledge/ethereum-blockchain/what-is-nonce)
* [See what the **optimal gas price** for sending transactions is here (can be really helpful)](https://ethgasstation.info/)

## Other Tips

* Try switching the network in the top right to use a different node. There are four nodes that allow you to interact with ETH: MyCrypto, Etherscan, Infura, and Giveth. If one is not working, simply try another one.
* If you get a transaction hash for your transaction but it isn't showing up on Etherscan, you can check and replace the TX with one that has a higher gas price here: [https://mycrypto.com/tx-status](https://mycrypto.com/tx-status)
* If you sent **FROM an exchange**, your best bet is to just be patient. There have been instances when we received over 1000 messages within a 24-hour period. Many exchanges have a much larger user base. :(
* There are additional issues created by this increased traffic that result in unclear error messages on MyCrypto. We're sorry for this and are continuously working to improve these messages. If you receive an error, try pressing the generate button again, or changing the network via the dropdown in the top right. However, be careful that you don't actually send the same transaction twice. If it says "transaction hash already imported" or "same nonce," you MAY have already sent that transaction, in which case, it's waiting to be mined. If both transactions get mined, you will send twice as much as you mean to.

If you have any other questions, please let us know, but your answer is likely in the links above.

Thank you for understanding.

## For Visual Learners

![](../images/transactions/txpool_01.jpg)

![](../images/transactions/txpool_02.jpg)

![](../images/tx_pool_infographic.png)
