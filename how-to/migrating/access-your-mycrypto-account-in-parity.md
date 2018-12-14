---
title: '[MyCrypto ➡ Parity] Access Your MyCrypto Account in Parity'
description: Migrating to/from MyCrypto
priority: 3
date_published: '2017-07-05'
date_modified: '2018-11-29'
---

Starting from Parity v1.10, the Parity Ethereum client (the node) has been separated from the Parity User Interface (UI). The user interface, accessible from the browser in previous versions up to and including 1.9, is now available as a standalone app. Parity UI isn’t actively maintained anymore.

### Place your Keystore file in the following locations:

*  `C:\Users\You\AppData\Roaming\Parity\Ethereum`

*  `/Users/you/Library/Application Support/io.parity.ethereum`

*  `/home/you/.local/share/io.parity.ethereum`

Then, open Parity and away you go. 🎉

Command-line options:
```
--keys-path=[PATH]
  Specify the path for JSON key files to be found (default: $BASE/keys)
```

### Related Reading

*  [How to find your keystore file](https://support.mycrypto.com/migration/location-of-mist-geth-wallet-files.html)
