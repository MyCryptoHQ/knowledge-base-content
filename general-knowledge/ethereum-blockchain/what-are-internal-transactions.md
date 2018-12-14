---
title: What are Internal Transactions
description: Transactions
priority: 100
date_published: '2018-02-06'
date_modified: '2018-02-06'
---

Internal transactions, despite the name (which isn't part of the yellowpaper; it's a convention people have settled on) are not actual transactions. They are also not included directly in the blockchain; they are value transfers that were initiated by executing a smart contract (smart contract Ether or Token transfer).

Certain Ether and Token transfers require calling a smart contract to perform the transfer. These show up as internal transactions and are not indicated on the main ETH transaction history on etherscan.io. There should be a separate tab for "Internal Transactions" when you look up you wallet address in [etherscan.io](https://etherscan.io/)

When withdrawing, you need to make sure that the receiving address supports smart contracts, like MyCrypto.

![](https://i.imgur.com/KRrv6r8.jpg)

If you can't see your transaction, please take a look at our article [here](https://support.mycrypto.com/transactions/transactions-not-showing-or-pending.html)

If you see that your transaction was successful but you can't see the tokens in your account, please refer to our article about [adding a custom token to your MyCrypto Interface here](https://support.mycrypto.com/tokens/adding-new-token-and-sending-custom-tokens.html)
