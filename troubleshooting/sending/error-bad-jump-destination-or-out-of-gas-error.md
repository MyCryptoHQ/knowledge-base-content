---
title: Transaction has a 'Bad Jump Destination' or 'Out of Gas' Error
description: Transactions
tags:
  - Transactions
  - Gas
priority: 85
date_published: '2017-07-05'
date_modified: '2021-01-15'
---

When a transaction fails due to a `Bad jump destination` or `Out of Gas` error, the ETH never actually leaves your address. If you check your balance on [Etherscan](https://etherscan.io/), [Ethplorer](https://ethplorer.io/), or MyCrypto, you should see the same amount you had before.

Keep in mind that while you do get any ETH back you sent, the gas fees are not returned. This goes to the miners as a reward for processing your transaction, even if it fails.

There are a lot of complicated things about gas and transactions, but luckily [we have a pretty sweet write-up that should help clarify things](/general-knowledge/ethereum-blockchain/what-is-gas).

## Related articles

- [What is Gas?](/general-knowledge/ethereum-blockchain/what-is-gas)
- [Transaction Failed: Out of Gas](/troubleshooting/sending/transaction-failed-out-of-gas)
