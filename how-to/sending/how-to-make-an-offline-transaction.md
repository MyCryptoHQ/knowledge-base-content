---
title: How to make an offline transaction
description: Offline
priority: 6
date_published: '2017-07-05'
date_modified: '2018-12-14'
---

If you are [using MyCrypto offline and locally](https://support.mycrypto.com/offline/running-mycrypto-locally.html), it is not possible to send transactions from the offline computer. An internet connection is required to send or broadcast a transaction. To do this, you should use a **second** computer that does have an internet connection. This comes with the advantage that your private key never leaves the offline computer and malware won't be able to steal your private key.

## 1. Getting the gas price & nonce

Start off by going to the ["Offline Transaction" page](https://legacy.mycrypto.com/#offline-transaction) on your **online** computer and fill in your address. Please note that this is the address you want to send FROM, not TO. This will generate the nonce for the transaction. You can read more about what a nonce is [here](https://support.mycrypto.com/transactions/what-is-nonce.html).

## 2. Filling in the transaction information

Next, go to your offline computer, open the MyCrypto desktop application and go to the "View & Send" tab, then access your wallet. Fill in the TO address and the amount you want to send. Optionally, you can select a token to send from the list. There should already be a default value in the "Gas Price (gwei)" box. However, you can find the current advised gwei to use at [ethgasstation.info](https://www.ethgasstation.info/). You can read more about gas [here](https://support.mycrypto.com/gas/what-is-gas-ethereum.html). In the "Nonce" box you want to fill in the nonce you got from step 1.

If you just want to send a transaction to another address (not a contract), leave the gas limit at 21,000. Increasing the gas limit will **not** get your transaction verified faster, as you can read about [here](https://support.mycrypto.com/gas/what-is-gas-ethereum.html). If you are sending a transaction to a contract or including any additional data, you have to use more gas. Any excess gas will be returned to you. If you want to include data with your transaction, also fill that in now. Unless you are specifically told to include data, you will likely not need it.

## 3. Signing the transaction

The next step is to sign the transaction. Click the blue "Sign Transaction" box, and the signed transaction will appear at the bottom of the page.

## 4. Sending the transaction

Finally, copy the signed transaction to your **online** computer. It will not possible to change any of the transaction information after signing the transaction, so it is safe to copy it to another computer. On the ["Broadcast Transaction"](https://mycrypto.com/pushTx) page, fill in your signed transaction from step 3. Click the "Send Transaction" button and your transaction should be broadcast.
