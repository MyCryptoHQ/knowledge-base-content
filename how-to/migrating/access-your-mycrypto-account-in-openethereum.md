---
title: '[MyCrypto ➡ OpenEthereum] Access Your MyCrypto Account in OpenEthereum'
description: Migrating to/from MyCrypto
tags:
  - Private Keys
priority: 50
date_published: '2017-07-05'
date_modified: '2020-10-20'
---

In [December of 2019](https://www.parity.io/parity-ethereum-openethereum-dao/), Parity transitioned its Parity Ethereum client to a DAO ownership and maintainer model, and was renamed to OpenEthereum.

You can import keystore files into OpenEthereum with the following command-line instructions:

```bash
$ openethereum account list
0x00780865dcc3c7dbffd943136107e70b8270286b
0x00dfc93112abd2578503b667b95491b101281f2b

$ openethereum account import ./keystore-file.json
1 account(s) imported

$ openethereum account list
0x003324332f7a9c2fb9536fcc4246a0bb4ea1b63f
0x00780865dcc3c7dbffd943136107e70b8270286b
0x00dfc93112abd2578503b667b95491b101281f2b
```

## Related articles

- [Access Your MyCrypto Account in Geth](/how-to/migrating/access-your-mycrypto-account-in-geth-or-mist)
