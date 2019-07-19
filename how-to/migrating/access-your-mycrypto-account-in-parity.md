---
title: '[MyCrypto ➡ Parity] Access Your MyCrypto Account in Parity'
description: Migrating to/from MyCrypto
priority: 50
date_published: '2017-07-05'
date_modified: '2019-07-19'
---

Starting from Parity v1.10, the Parity Ethereum client (the node) has been separated from the Parity User Interface (UI). The user interface, accessible from the browser in previous versions up to and including 1.9, is now available as a standalone app. Parity UI isn’t actively maintained anymore.

## Place your Keystore file in the following locations:

* Windows: `C:\Users\You\AppData\Roaming\Parity\Ethereum`
* Mac: `~/Library/Application Support/io.parity.ethereum`
* Linux: `~/.local/share/io.parity.ethereum`

Then, open Parity and away you go. 🎉

Command-line options:

```text
--keys-path=[PATH]
  Specify the path for JSON key files to be found (default: $BASE/keys)
```

## Related articles

* [Access Your MyCrypto Account in Geth](/how-to/migrating/access-your-mycrypto-account-in-geth-or-mist)
