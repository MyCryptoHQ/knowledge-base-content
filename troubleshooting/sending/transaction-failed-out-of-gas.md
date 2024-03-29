---
title: 'Transaction Failed: Out of Gas'
description: Transactions
tags:
  - Transactions
  - Gas
priority: 60
date_published: '2017-07-05'
date_modified: '2021-10-26'
related_articles:
  - general-knowledge/ethereum-blockchain/what-is-gas
  - how-to/sending/how-to-know-what-gas-limit-to-use
---

Each transaction (TX) on the Ethereum blockchain (including token and contract transactions) requires gas, which is paid in Ether. You can think of this as a transaction fee. The more computational effort a transaction takes, the more gas you need.

MyCrypto estimates how much gas you will need - but there may be an occasional technical error.

## How to solve

Manually increasing the "Gas Limit." First, try doubling the amount of gas that MyCrypto estimates and sending again.

Any excess gas will be returned to you, so you could even triple or quadruple it.

We are always trying to improve how we estimate gas as contracts become more complex. However, please understand that with greater complexity comes increased chances for errors to occur.
