---
title: Private Key Not Working
description: Private Keys & Passwords
tags:
  - Private Keys
priority: 70
date_published: '2017-07-05'
date_modified: '2020-07-01'
---

Be sure there is no space at the beginning or end of your private key. We validate based on the number of characters. If you saved another version (for example, the UTC / Keystore file) it may also be worth trying that file as well.

Please be sure that you are **carefully and accurately** typing your private key. A single wrong character will open a different wallet than "yours".

Some wallets, like Exodus, may export a private key that begins with `0x`. If you remove these two characters from the beginning, you may be able to access your account.

For reference private key looks like this: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`

## Related articles

[Lost Private Key](/troubleshooting/accessing-wallet/lost-eth-private-key)
[Private Key vs Keystore File](/general-knowledge/ethereum-blockchain/difference-between-wallet-types)
