---
title: 'Error: Cannot Send Due to Insufficient Funds'
description: Gas & Transaction Fees
priority: 4
date_published: '2017-07-05'
date_modified: '2017-09-26'
---
If you are getting the error, `"WARNING: Your ether or token balance isn't high enough to complete this transaction. Please send more funds or switch to a different wallet."`, it means you do not have enough **ETH** in your account to cover the cost of gas.

Each transaction (including token and contract transactions) requires gas, and that gas is paid in ETH. You can think of this as a transaction fee.

### Solution: Send 0.01 ETH to that public address in order to be able to make the transaction.

A standard transaction (TX) will be `21000` gas at a gas price of `0.00000002 ETH`, so the total TX fee will be `0.00042 ETH`. Sending tokens typically costs `50000 gas - 100000 gas`, so the total TX fee increases to `0.001 ETH - 0.002 ETH`.

The number displayed in that error message is the amount required to cover the cost of the TX in Wei. Take that number and divide by `1000000000000000000`. This will give you the amount of Ether you need to send to that account and make the transaction.

### More Information About Gas

*   A standard TX will be 21000 gas at a gas price of 0.00000002 ETH, so the total TX fee will be 0.00042 Ether.
*   SEnding tokens typically costs 50000 gas - 100000 gas, so the total TX fee increases to 0.001 ETH - 0.002 ETH.
*   The amount of ETH or tokens you are sending <span>does not</span> affect the amount of gas you need.
*   _GAS LIMIT_ is the maximum amount of GAS you will send with your transaction. This is in units of GAS.
*   _GAS PRICE_, which you will not see except on the offline page, is how much each unit of gas costs. We set it at 0.00000002 ETH.

### Related Reading

*   [What is Gas?](https://support.mycrypto.com/gas/what-is-gas-ethereum.html)
*   [What is gas (StackExchange)](https://ethereum.stackexchange.com/questions/3/what-is-gas-and-transaction-fee-in-ethereum)
*   [What is gas? (CryptoCompare)](https://www.cryptocompare.com/coins/guides/what-is-the-gas-in-ethereum/)
*   [Can someone explain gas to me?](https://www.reddit.com/r/ethereum/comments/271qdz/can_someone_explain_the_concept_of_gas_in_ethereum/)
*   [I don't understand the concept of gas.](https://www.reddit.com/r/ethereum/comments/3fnpr1/can_someone_possibly_explain_the_concept_of/)
