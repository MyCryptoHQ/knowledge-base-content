---
title: How to Access Your Wallet with a Secret Recovery Phrase
description: Accessing your Wallet
tags:
  - Private Keys
priority: 100
date_published: '2017-06-20'
date_modified: '2021-06-23'
---

## Important Information

We do not recommend that you access your wallet via Secret Recovery Phrase.

### Why?

Secret Recovery Phrase are vulnerable for two reasons:

1. Theft

   - Using a Secret Recovery Phrase requires you to either physically type it into the website or copy & paste to access the wallet. If you enter this information into a phishing website, your funds **WILL BE STOLEN**.

2. They are not recoverable if lost or stolen
   - MyCrypto does not store any information. We only have access to information that is publicly available on the blockchain. Hardware wallets at least give you a chance to restore your wallet if you lose the device using the 12-word seed phrase, if you have backed it up correctly.
   - If you forget the Secret Recovery Phrase or lose the file where you saved it, there is no guarantee that you will ever gain access back to the wallet.

## Accessing your wallet

<Alert>

The MyCrypto desktop application is part of an older version of MyCrypto that is not actively maintained. You can find the latest version of MyCrypto on [mycrypto.com](https://mycrypto.com).

</Alert>

MyCrypto does not allow you to use the web application to access your Secret Recovery Phrase. Instead, you have to download the [MyCrypto desktop app](https://download.mycrypto.com/). A more detailed explanation of why we decided on this change can be found [here](https://medium.com/mycrypto/a-safer-mycrypto-79d65196e7d8).

1. Follow our guide on [running MyCrypto offline and locally](/how-to/offline/how-to-run-mycrypto-offline-and-locally).
2. Open the MyCrypto desktop application.
3. The "View & Send" tab will appear. Click "Mnemonic Phrase."
4. Enter your Secret Recovery Phrase. If you entered a password when you created the wallet, enter that as well. Failure to do so can change the list of addresses that you can access.
5. Click "Choose address" and your list of wallets will show up.

## Related articles

- [Backing up your wallet](/how-to/backup-restore/how-to-save-back-up-your-wallet)
- [Sending & Receiving](/contact-us/)
- [Protecting Yourself and Your Funds](/staying-safe/protecting-yourself-and-your-funds)
- [Difference between an exchange and MyCrypto](/general-knowledge/ethereum-blockchain/difference-between-wallet-types)
