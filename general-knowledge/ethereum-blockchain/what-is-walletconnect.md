---
title: What is WalletConnect?
description: Getting Started
priority: 120
date_published: '2020-03-16'
date_modified: '2020-03-16'
---

![WalletConnect logo](../../assets/general-knowledge/ethereum-blockchain/what-is-walletconnect/walletconnect-logo.png)

WalletConnect is an open protocol made to facilitate a secure connection between mobile cryptocurrency wallets and desktop applications, such as dapps. Transactions are made through an encrypted connection by scanning a QR code, and are confirmed on the mobile device. As the private key never leaves the user’s device, their funds are never at risk and the possibility of a hijack is very low. 

WalletConnect was initially shared with the public by Richard Burton in [2018](https://medium.com/balance-io/walletbridge-a-simple-way-for-web-based-dapps-to-talk-to-mobile-wallets-5c4015f1838c), and is in active development. A plethora of mobile wallets currently support the WalletConnect protocol, such as [Trust](https://trustwallet.com/), [Argent](https://www.argent.xyz/), and the [mobile Metamask app](https://metamask.io/). 

## Why Should I Use WalletConnect?

A few of the most popular options for interacting with a dapp include using a desktop browser-only extension like [Metamask](https://metamask.io/), or a mobile wallet/Ethereum browser like [Cipher](https://www.cipherbrowser.com/) or [Status](https://status.im/). The problem with these solutions is that funds are generally ‘stuck’ on one platform, and would make it difficult to switch between mobile and desktop, unless the recovery phrase would be exported which could result in serious security implications.

![QR code](../../assets/general-knowledge/ethereum-blockchain/what-is-walletconnect/qr-connection.png)

With WalletConnect, only one device, like a mobile wallet, needs to store the funds and that device is enabled to interact with dapps on a different platform, like a desktop. This way, the funds never leave the original source, but the user can still utilize different dapps on other devices to manage their crypto.

## How Does It Work?

A supported dapp will allow the user to access their address by scanning a QR code with their mobile wallet. Once scanned, the mobile app will ask them to confirm that they want to share their wallet address with the dapp.

![CryptoKitties example](../../assets/general-knowledge/ethereum-blockchain/what-is-walletconnect/cryptokitties-example.png)

Once this is confirmed, the dapp won’t actually be able to send any transactions from the address that was just connected on its own. The user must make an additional, manual confirmation for each transaction that’s made on the dapp interface from their mobile device. This way, the private key is always securely stored on the user’s device, and they have full control of which transactions get broadcast to the network.

## Further reading

* [WalletConnect: A simple way for web-based dapps to talk to mobile wallets](https://medium.com/balance-io/walletbridge-a-simple-way-for-web-based-dapps-to-talk-to-mobile-wallets-5c4015f1838c)
* [Exploring WalletConnect | Facilitating communication between desktop dapps & mobile wallets!](https://medium.com/@dedicatedguy/exploring-walletconnect-facilitating-thcommunication-between-desktop-dapps-mobile-wallets-f0a4424c0c2c)
