---
title: Using MyCrypto For Cold Storage
description: Offline
priority: 80
date_published: '2017-07-05'
date_modified: '2019-04-01'
---

## Preface

The following assumes you are **not** using a Ledger or TREZOR hardware wallet. Due to their ease of use and security, [we recommend a hardware wallet for cold storage](/staying-safe/hardware-wallet-recommendations).

To save / backup your Ledger or TREZOR device, simply write down the 24-word phrase on the card they provide and keep it very, very safe. Never put this key on an online device or type it in to MyCrypto.com.

You can run MyCrypto.com on your computer and this computer can be a cold-storage or offline computer. This means it is a computer that is not connected to the internet and *will never be connected to the internet again.* You can generate a wallet completely offline & send Ether or Tokens from the "View & Send" page.

## How to

* First off, follow our guide on [running MyCrypto offline and locally](/how-to/offline/how-to-run-mycrypto-offline-and-locally).

* Open the "Create New Wallet" tab in the MyCrypto desktop application. Click "Generate a Keystore File".

* Enter a strong but easy to remember password. Do not forget it.
  * *This encrypts (protects) your private key. It does not generate your private key. This password alone will **not** be enough to access your Ether.*

* Click the `"Generate New Wallet"` button.

* Download your `Keystore / UTC file` & save this file to a USB drive.
  * *This is the encrypted version of your private key. You need the password to access it. It is safer than your unencrypted private key but you must have your password to access it in the future.*

* Read the warning. If you understand it, click the `"Continue"` button.

* Print your paper wallet backup and/or *carefully* hand-write the `private key` on a piece of paper.
  * *If you are writing it, it is recommended you write it 2 or 3 times. This decreases the chance your messy handwriting will prevent you from accessing your wallet later.*

* Copy & paste your address into a text document somewhere. Get it to your primary, online computer.
  * *Use the QR code or a different USB drive. It is best if you do not hand-write it*
  * *Search your address on [Etherscan](https://etherscan.io/). Bookmark this page. This is how you will view your balance at any time*

* Send a small amount of Ether (0.0001 ETH) from an exchange or another wallet to your new offline wallet.

* On your offline device, unlock your wallet from the Keystore / UTC file on your USB drive or via the private key that you printed out.  Ensure it unlocks the wallet you are sent to and matches the bookmark you have.
  * *Do not simply leave your new wallet open. Pretend you are coming back a year later to access your riches. Can you do it?*

* Send a small amount of Ether (0.00001 ETH) from this new wallet to another address.
  * *Perhaps our donation address? We are a free, open-source service. There are no fees, no ads, no tracking, no cookies, no selling your data.*

* Ensure you have recorded all necessary bits of information and the addresses match at all times. If they don't, you mis-wrote something somewhere. That means it's time to start from the beginning in order to make sure you never lose access to your funds.

Doing all of this is tedious, but it ensures you (1) have complete access to your funds (2) the address you sent to is correct and matches the private key you have saved and (3) you can rest easily for years to come, knowing you will be able to access your ETH later.

---

## Safe storage of backups

It is recommended that you store backups of both forms of your key (the keystore file version and paper wallet version) in physically separate, offline environments.

This prevents loss of the private key & password due to: dead hard drive, lost USB drive, wet piece of paper, etc. Keep in mind that physical loss can affect an entire area (e.g. fire, flood).

### We cannot recover your key

MyCrypto is not a web wallet and cannot recover your private key or password, access your account, move funds, recover funds, nor cancel/reverse transactions.

We are a client-side interface that allows you to interact with the Ethereum blockchain. Please secure & back up your key like the millions of dollars it could someday be worth.

### Related articles

* [What is the difference between private key & Keystore / UTC file?](/general-knowledge/ethereum-blockchain/difference-between-wallet-types)
* [Protecting yourself and your funds](/staying-safe/protecting-yourself-and-your-funds)
