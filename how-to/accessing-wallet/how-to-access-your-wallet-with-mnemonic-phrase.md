---
title: How to Access Your Wallet with Mnemonic Phrase
description: Accessing your Wallet
priority: 15
date_published: '2017-06-20'
date_modified: '2018-12-19'
---

## Important Information

We do not recommend that you access your wallet via mnemonic phrase.

### Why?

Mnemonic phrases are vulnerable for two reasons:

1. Theft
   * Using a mnemonic phrase requires you to either physically type it into the website or copy & paste to access the wallet. If you enter this information into a phishing website, your funds **WILL BE STOLEN**.

2. Not Recoverable if Lost or Forgotten
   * MyCrypto does not store any information. We only have access to information that is publicly available on the blockchain. Hardware wallets at least give you a chance to restore your wallet if you lose the device using the 12-word seed phrase, if you have backed it up correctly.
   * If you forget the mnemonic phrase or lose the file where you saved it, there is no guarantee that you will ever gain access back to the wallet.

## Accessing your wallet

We no longer allow accessing your mnemonic phrase using the MyCrypto.com website. Instead, you have to download the [MyCrypto desktop app](https://download.mycrypto.com/). A more detailed explanation of why we decided on this change can be found [here](https://medium.com/mycrypto/a-safer-mycrypto-79d65196e7d8).

1. Follow our guide on [running MyCrypto offline and locally](/how-to/offline/how-to-run-mycrypto-offline-and-locally).
2. Open the MyCrypto desktop application.
3. The "View & Send" tab will appear. Click "Mnemonic Phrase."
4. Enter your 12-word phrase. If you entered a password when you created the wallet, enter that as well. Failure to do so can change the list of addresses that you can access. 
5. Click "Choose address" and your list of wallets will show up.

### Side Note

You can share your public wallet address with others so they can send you cryptocurrency or tokens. Your account will not be compromised; just make sure to send them your PUBLIC wallet address and not your private key.

**TIP**: If you are planning to send a large sum to any wallet, we recommend that you first send a small amount to test before depositing a large amount.

You only need your address in order to see your balance. **Do not** enter your private key anywhere if you just want to check the balance or see incoming and outgoing transactions.

Instead, search your address (or bookmark it) on [Etherscan](https://etherscan.io) or [Etherchain](https://www.etherchain.org/).

While you are at it, you should bookmark [https://mycrypto.com/account](https://mycrypto.com/account) as well.

MyCrypto is a client-side wallet, which means you hold your own keys. If someone gets your private key (Keystore file, mnemonic, passwords), they have complete access to your funds. There are no stopping transactions, canceling transactions, or resetting passwords. Once a transaction is on the blockchain, it is final.

For this reason, it is very, very important to keep your private key a secret and use it as rarely as possible. Only enter it on sites after double checking to be sure you are on the correct site.

## Related articles

* [Backing up your wallet](/how-to/backup-restore/how-to-save-back-up-your-wallet)
* [Sending & Receiving](/contact-us/)
* [Protecting Yourself and Your Funds](/staying-safe/protecting-yourself-and-your-funds)
* [Difference between an exchange and MyCrypto](/general-knowledge/ethereum-blockchain/difference-between-wallet-types)
