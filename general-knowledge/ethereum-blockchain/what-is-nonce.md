---
title: What is nonce?
description: Transactions
priority: 4
date_published: '2017-07-05'
date_modified: '2017-09-26'
---

In Ethereum, every transaction has a nonce. The nonce is the number of transactions sent from a given address.

Each time you send a transaction, the nonce increases by `1`. There are rules about what transactions are valid, and the nonce is used to enforce some of these rules. Specifically:

*- **Transactions must be in order:** You cannot have a transaction with a nonce of `1` mined before one with a nonce of `0`.
* **No skipping!** You cannot have a transaction with a nonce of `2` mined if you have not already sent transactions with a nonce of `1` and `0`.

### Why?

This field prevents double-spends, as the nonce is the order in which transactions are sorted. In order for a double-spend to be successful, you typically ...

* Send a transaction to one party
* Wait for it to register
* Collect something in return from this first transaction
* Quickly send another transaction with a high gas price
* Have this second transaction mined first, therefore invalidating what would have been the first transaction

This is why exchanges wait for you to have a certain number of confirmations before allowing you to trade freshly-deposited funds.

## With Ethereum, the above is not possible

This method of double-spending is not possible on the Ethereum blockchain because each transaction has a nonce included with it. Even if you attempt to do the above, it will not work because the second transaction (nonce of `3`) cannot be mined before the first transaction (nonce of `2`).
