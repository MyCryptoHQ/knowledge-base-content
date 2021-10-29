---
title: How can MyCrypto send offline?
description: Offline
tags:
  - Offline
  - MyCrypto
priority: 60
date_published: '2017-07-05'
date_modified: '2021-10-26'
---

One of the important things that you need to understand is that every address already "exists". When you "create a wallet" you are not actually doing anything on the blockchain or communicating with the blockchain in any way.

Creating a wallet means you get a randomly generated private key and the address (public key) that corresponds to that private key. You will need your private key in order to access your address to send transactions. Please keep your private key(s) safe and secure. [How to Store and Guard your Private Key](/staying-safe/how-to-securely-store-and-guard-your-private-key)

You can do this on a device that is connected to the internet or one that is not.

Cold storage is a device that is not, and will never be, connected to the internet. This means that even if someone were to completely hack you and your computer and your phone, your key would be safe. Yay!

One common cold storage method is a simple piece of paper. Bad folks on the internet can't hack your paper. (But you should still watch out for your roommate!)

So your ETH is on the blockchain and for offline or cold storage, your private key is kept offline and is never introduced to an online device.

Regardless of what service you use to "store" your ETH, your ETH are lines of code on the Ethereum blockchain. Transactions add more lines of code and all these lines together determine what address has what balance.

Your private key or keystore file is simply the way you _access and prove ownership of a particular address on the blockchain._

The part that usually confuses people is how MyCrypto can generate a valid wallet without being online.

This is because the software, in this case MyCrypto, is able to generate a valid public key (wallet address) based on programmatic algorithms and "rules" of you will, that will work on the public "online" blockchain and simultaneously be unique, based on how the software generates it.

Your password enables you to decrypt a keystore file, which can be used to unlock your wallet down the road.

You can generate a transaction offline using the same MyCrypto software in an offline environment and then broadcast that transaction code using an online device.

This way your private key can remain secure on the offline device, and it can be used to generate a valid transaction for the online device to broadcast.
