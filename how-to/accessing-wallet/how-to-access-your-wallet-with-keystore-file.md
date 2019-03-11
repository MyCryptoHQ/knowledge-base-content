---
title: How to Access Your Wallet with Keystore File
description: Accessing your Wallet
priority: 15
date_published: '2017-06-20'
date_modified: '2018-12-19'
---

## Important Information

We do not recommend that you access your wallet via Keystore file.

### Why?

Keystore files are vulnerable for two reasons:

1. Theft
   * To use a keystore file means you need to upload this file online and type in a password to unlock the file. If you enter this into a fake phishing website, your funds **WILL BE STOLEN**

2. Not recoverable if Lost or Forgotten
   * MyCrypto does not store any information. We only have access to information that is publicly available on the blockchain. Hardware wallets at least give you a chance to restore your wallet if you lose the device using the 12-word seed phrase if you have backed it up correctly.
   * If you lose the keystore file or forget the password, there is almost no guarantee that you will ever gain access back to the wallet

### What is a Keystore File?

A keystore file (sometimes called a UTC file) in Ethereum is an encrypted version of your private key. They are generated using your private key and a password that you use to encrypt it. If you open up your keystore file in a text editor it contains data pertaining to the encryption of the private key.

**Note**: Your keystore file has a .json file extension. If you try to convert it to any other file extension, then it may break when you try to convert it back. Don't do this. If you want to understand the contents of your json file, reference this [medium article by Julien.Maffre](https://medium.com/@julien.maffre/what-is-an-ethereum-keystore-file-86c8c5917b97).

### Accessing your wallet

We no longer allow accessing your keystore file using the MyCrypto.com website, instead, you have to download the [MyCrypto desktop app](https://download.mycrypto.com/). A more detailed explanation on why we decided for this change can be found [here](https://medium.com/mycrypto/a-safer-mycrypto-79d65196e7d8).

1. Follow our guide on [running MyCrypto offline and locally](/how-to/offline/how-to-run-mycrypto-offline-and-locally).

2. Open the MyCrypto desktop application.

3. The "View & Send" tab will appear, click "Keystore File".

4. Click "SELECT WALLET FILE" and navigate to your keystore file.

5. Enter the password used to encrypt the file when the wallet was made.

6. Click "Unlock" and your wallet will show up.

7. Find your account address, next to a colorful, circular icon. This icon visually represents your address.
   * If you printed out your wallet, check to be sure the circles match. They should be the same colors and shapes. Otherwise, something went wrong and you should start over.

### Side note

You can share your public wallet address with others so they can send you Ethereum or ERC-20 tokens. Your account will not be compromised, just make sure to send them your PUBLIC wallet address and not your private key.

**TIP**: If you are planning on sending a large amount of ETH to any wallet, we recommend that you first send a small amount to test first before depositing a large amount.

You only need your address in order to see your balance. **Do not** enter your private key anywhere if you just want to check the balance or see incoming and outgoing transactions.

Instead, search your address (or bookmark it) on [Etherscan](https://etherscan.io) or [Etherchain](https://www.etherchain.org/).

While you are at it, you should bookmark [https://mycrypto.com/account](https://mycrypto.com/account) as well.

MyCrypto is a client-side wallet, which means you hold your own keys. If someone gets your private key (keystore file, mnemonic, passwords), they have complete access to your funds. There are no stopping of transactions, canceling transactions, or resetting passwords. Once a transaction is on the blockchain, it's final.

For this reason, it is very, very important to keep your private key a secret and use it as rarely as possible. Only enter it on sites after double-checking to be sure you are on the correct site.

## Related articles

* [Backing up your wallet](/how-to/backup-restore/how-to-save-back-up-your-wallet)
* [Sending & Receiving](/contact-us/)
* [Protecting Yourself and Your Funds](/staying-safe/protecting-yourself-and-your-funds)
* [Difference between an exchange and MyCrypto](/general-knowledge/about-mycrypto/whats-the-difference-between-an-exchange-and-mycrypto)
