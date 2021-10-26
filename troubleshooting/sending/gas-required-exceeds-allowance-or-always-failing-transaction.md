---
title: Gas required exceeds allowance or always failing transaction
tags:
  - Gas
  - Transactions
date_published: '2020-11-17'
date_modified: '2021-10-26'
related_articles:
  - how-to/sending/how-to-know-what-gas-limit-to-use
---

This error can occur when interacting with a contract, and means that MyCrypto could not estimate the gas limit for your transaction.

This error can be caused by a few reasons, including:

- The gas limit required for your transaction is higher than the block gas limit. You can see the current block gas limit for the Ethereum mainnet [here](https://ethstats.io/).
- Contract execution for your transaction will fail, so the gas limit cannot be estimated.

In the case that the gas limit for the transaction is too high, you can send multiple transactions with the contract interactions you want to do, rather than to do a single transaction with a large execution cost. If you're not sure how to do this, you can reach out to us through the contact form, or reach out to the developers of the contract you are interacting with.

In the other case, please make sure that the data you are using for the transaction is correct. You can verify this with the developers of the contract you are interacting with.

Additionally, it's possible that MyCrypto was not able to estimate the gas limit for another reason, in which case it can help to manually specify a gas limit. Keep in mind that transactions with a contract interaction always need more than 21,000 gas. You can read more about [finding which gas limit to use here](/how-to/sending/how-to-know-what-gas-limit-to-use).
