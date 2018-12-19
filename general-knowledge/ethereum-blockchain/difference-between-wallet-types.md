---
title: Differences between wallet types (e.g. private key vs keystore)
description: Private Keys & Passwords
priority: 12
date_published: '2017-07-05'
date_modified: '2018-07-17'
---

> What are the different types of private key formats that I can use to access my wallet?

The ETH is stored on the blockchain, your private key or Keystore File or whatever piece of information you have proves ownership of that ETH, which allows you to move it.

At the end of the day, you are always signing with your private key.

However, for additional functionality (like protecting it with a password) there are formats & ways of storing your private key:

## MetaMask

* [Learn More Here](https://support.mycrypto.com/migration/moving-from-private-key-to-metamask.html)

## Hardware wallets

* [Learn More Here](https://support.mycrypto.com/hardware-wallets/hardware-wallet-recommendations.html)

## Parity Signer

* [Learn More Here](https://support.mycrypto.com/accessing-your-wallet/how-to-use-the-parity-signer-with-mycrypto.html)

## Keystore File (UTC / JSON)

* This is encrypted by the password you chose.
* If you cannot use one of the options above, this is the recommended version to save.
* This Keystore file matches the format used by Mist so you can easily import it in the future.
* Make sure to have multiple backups.
* Keystore files are insecure. If you unlock your account on a phishing site with a keystore file, the phishers will get full access to your wallet. Use one of the options above, or the [MyCrypto Desktop App](https://download.mycrypto.com/).

[How to Properly Save and Backup your Wallet](https://support.mycrypto.com/getting-started/backing-up-your-new-wallet.html)

![](https://i.imgur.com/j5S7mJU.png)

## Mnemonic Phrases

* Typically these come in 12-word or 24-words.
* They can derive multiple addreses - meaning your phrase actually is able to create multiple accounts, addresses, and private keys.
* [MyCrypto](https://download.mycrypto.com), Ledger, TREZOR, MetaMask, and Jaxx create these for you.
* Mnemonic phrases are insecure. If you unlock your account on a phishing site with a mnemonic phrase, the phishers will get full access to your wallet. Use one of the options above, or the [MyCrypto Desktop App](https://download.mycrypto.com/).

![](https://i.imgur.com/DPcFCuY.png)

![](https://i.imgur.com/uq7STuc.png)

## Private Key (unencrypted)

* This is the unencrypted text version of your private key, meaning no password is necessary.
* If someone were to find your unencrypted private key, they could access your wallet without a password.
* For this reason, encrypted versions are typically recommended. To learn about how you can encrypt your private key, [click here for more information](https://support.mycrypto.com/private-keys-passwords/how-to-change-ethereum-account-password-unencrypted-encrypted.html).
* However, you should print the paper wallet or save this in an **offline** environment (like a piece of paper or USB drive). This ensures a lost password does not result in lost ETH, and acts as another backup.
* Private keys are insecure. If you unlock your account on a phishing site with a private key, the phishers will get full access to your wallet. Use one of the options above, or the [MyCrypto Desktop App](https://download.mycrypto.com/).

![](https://i.imgur.com/Ek8ghxf.png)

## Related articles

* [Protecting Yourself and Your Funds](https://support.mycrypto.com/security/securing-your-ethereum.html)
* [How to Properly Save and Backup your Wallet](https://support.mycrypto.com/getting-started/backing-up-your-new-wallet.html)
