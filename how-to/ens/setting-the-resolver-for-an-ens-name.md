---
title: Setting the resolver for an ENS name
description: ENS
priority: 100
date_published: '2017-05-05'
date_modified: '2019-04-01'
---

## Set the resolver for your name

1. Go to the contracts tab.
2. Choose ENS - Registry: 0x314159265dD8dbb310642f98f50C066173C1259b. Click `"Access"`.
3. Select `setResolver`.
4. Go to mycrypto.com/ens and search for the ens name you wish to resolve to grab your namehash.
5. Enter the namehash of your name under `node (bytes32)`.
6. Enter the Public Resolver Address under `resolver (address)`: `0x5FfC014343cd971B7eb70732021E26C35B744cc4`
7. Unlock the owner's account.
8. Click WRITE.
9. Generate and send this transaction, leaving "Amount to Send" as 0.
10. [Transaction should look like this.](https://etherscan.io/tx/0x60eec50b492375bce25684f806599873b7f682e1ba504c8bed7cc90c33368118)

### Set the address that your name will resolve to

1. Go to the contracts tab.
2. Choose ENS-Public Resolver: 0x5FfC014343cd971B7eb70732021E26C35B744cc4. Click "Access".
3. Select `setAddr`.
4. Find your name on etherscan.io and copy the namehash.
5. Enter the namehash of your name under "node (bytes32)".node (bytes32):
6. Enter the address you would like to resolve to under `addr (address)`.
7. Unlock the owner's account.
8. Click `WRITE`.
9. Generate and send this transaction, leaving "Amount to Send" as 0.
10. [Transaction should look like this.](https://etherscan.io/tx/0xe4b8cbbb9c30a9066e4d430e347e07442ccc99b927ed73280792aee718ecbd30)
