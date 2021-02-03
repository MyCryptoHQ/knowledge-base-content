---
title: How to make an offline transaction
description: Offline
tags:
  - Offline
  - Transactions
priority: 90
date_published: '2017-07-05'
date_modified: '2021-01-27'
---

If you are [using MyCrypto offline and locally](/how-to/offline/how-to-run-mycrypto-offline-and-locally), it is not possible to send transactions from the offline computer. An internet connection is required to send or broadcast a transaction. To do this, you should use a **second** computer that does have an internet connection. This comes with the advantage that your private key never leaves the offline computer and malware won't be able to steal your private key.

## 1. Getting the gas price & nonce

First we need to find the [nonce](/general-knowledge/ethereum-blockchain/what-is-nonce) that you need to use for your transaction. On your online computer, enter your Ethereum address on [Etherscan.io](https://etherscan.io/), and find the latest transaction _from_ your address. Click "Click to see More", and find the value next to "Nonce". To get the nonce value for your offline transaction, you add 1 to this value.

[You can find instructions on getting the correct Gas Price value here](/how-to/sending/how-to-know-what-gas-price-to-use).

## 2. Filling in the transaction information

Next, go to your offline computer, open the MyCrypto desktop application and go to the "View & Send" tab, then access your wallet. Fill in the TO address and the amount you want to send. Optionally, you can select a token to send from the list. There should already be a default value in the "Gas Price (gwei)" box. However, you can find the current advised gwei to use at [ETHGasStation](https://www.ethgasstation.info/). You can read more about gas [here](/general-knowledge/ethereum-blockchain/what-is-gas). In the "Nonce" box you want to fill in the nonce you got from step 1.

If you just want to send a transaction to another address (not a contract), leave the gas limit at 21,000. Increasing the gas limit will **not** get your transaction verified faster, as you can read about [here](/general-knowledge/ethereum-blockchain/what-is-gas). If you are sending a transaction to a contract or including any additional data, you have to use more gas. Any excess gas will be returned to you. If you want to include data with your transaction, also fill that in now. Unless you are specifically told to include data, you will likely not need it.

## 3. Signing the transaction

The next step is to sign the transaction. Click the blue "Sign Transaction" box, and the signed transaction will appear at the bottom of the page.

## 4. Sending the transaction

Finally, copy the signed transaction to your **online** computer. It will not possible to change any of the transaction information after signing the transaction, so it is safe to copy it to another computer. On the ["Broadcast Transaction"](https://app.mycrypto.com/broadcast-transaction) page, fill in your signed transaction from step 3. Click the "Send Transaction" button and your transaction should be broadcast.
