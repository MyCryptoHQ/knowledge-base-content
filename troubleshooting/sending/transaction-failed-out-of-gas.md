---
title: 'Transaction Failed: Out of Gas'
description: Transactions
priority: 6
date_published: '2017-07-05'
date_modified: '2018-11-29'
---


Each transaction (TX) on the Ethereum blockchain (including token and contract transactions) requires "gas," which is paid in Ether. You can think of this as a transaction fee. The more computational effort a transaction takes, the more gas you need.

MyCrypto estimates how much gas you will need - but there may be an occasional technical error.

**Solution: Manually increasing the "Gas Limit." First, try doubling the amount of gas that MyCrypto estimates and sending again.**

Any excess gas will be returned to you, so you could even triple or quadruple it.

We are always trying to improve how we estimate gas as contracts become more complex. However, sometimes we still get it wrong. We apologize for the inconvenience.

### More Information About Gas

*   A standard TX will be 21000 gas, at a gas price of 0.00000002 ETH, so the total TX fee will be 0.00042 Ether.
*   With tokens, the amount of gas required typically ranges between 50000 gas - 100000 gas, so the total TX fee increases to 0.001 ETH - 0.002 ETH.
*   The amount of ETH or tokens you are sending does **not** affect the amount of gas you need.
*   <span>_GAS LIMIT_ is the maximum amount of GAS you will send with your transaction. This is in units of GAS.
*   <span>_GAS PRICE_, which you will not see except on the offline page, is how much each unit of gas costs. We set it at 0.00000002 ETH.</span>

### Related

*   [What is Gas?](https://support.mycrypto.com/gas/what-is-gas-ethereum.html)
*   [What is gas (StackExchange)](https://ethereum.stackexchange.com/questions/3/what-is-gas-and-transaction-fee-in-ethereum)
*   [What is gas? (CryptoCompare)](https://www.cryptocompare.com/coins/guides/what-is-the-gas-in-ethereum/)
*   [Can someone explain gas to me?](https://www.reddit.com/r/ethereum/comments/271qdz/can_someone_explain_the_concept_of_gas_in_ethereum/)
*   [I don't understand the concept of gas.
    ](https://www.reddit.com/r/ethereum/comments/3fnpr1/can_someone_possibly_explain_the_concept_of/)
