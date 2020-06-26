---
title: How to interact with a Multisig Contract
description: FAQ
tags: [Addresses, Transactions]
priority: 40
date_published: '2017-06-20'
date_modified: '2019-07-19'
---

## Getting Started

1. Go to the [contract tab on MyCrypto](https://mycrypto.com/contracts/interact).
2. From the dropdown, select the Mist Multisig Contract ABI.

## Do the stuff

1. First, enter YOUR Contract Address in the `Contract Address` field at the top.

2. Second, you want to **EXECUTE**.
   1. Select `execute`from the dropdown.
   2. Enter the address you want to send to in the `_to`field.
   3. Enter the amount you want to send in the `_value`field.
   4. Leave the `data` field empty.
   5. *It is recommended that you test with a small amount first!*
   6. Unlock the owners address and click `WRITE` button.
   7. A pop up will appear. Leave `Amount to Send` as `0`.
   8. Click the `Generate Transaction` button & confirm & send.

3. Click the Transaction ID that outputs with the success message. Copy this ID.

4. If it's a multisig with TWO owners, you will need to refresh that page and choose **CONFIRM** this time.
   1. In step 3, you opened the TX ID from the `EXECUTE`call. You should have a page like this open: [https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3](https://etherscan.io/tx/0x0c643a1ae66637217f24791df05071c7849941a1231cf9fa2a0daf145da833e3)
   2. Click the `Event Logs`tab.
   3. On the above link ([https://etherscan.io/tx/0x47e4cc87...#eventlog](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog) - not YOUR link), the `_h` field would be `9228aeaf3ed560274899483646ea4ce9b322bccffac60cac2d035d08752617f4`
   4. Look at the above link and see where it says `9228a....`. Look at your link and see what YOUR `_h` is. Copy it.
   5. Go back to MyCrypto where you have the CONFIRM open and paste that hash into the `_h` field.
   6. Click the `"WRITE"` button again and unlock the second owner's account.
   7. Generate & send the transaction.

5. Make sure everything went as intended.

6. IF your multisig is a 3 of 5 multisig, you will repeat the confirm process for each owner until it reaches the necessary approvals. Luckily, the `_h`value is the same for each of them.

7. See another approval for my previous example here: [https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog](https://etherscan.io/tx/0x47e4cc8748e296d9b5d85ebd9bd705177bb1940517b084a2efcca11feeb2391d#eventlog).

8. You can then repeat this process whenever you want to send ETH.

## Source

[https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/](https://www.reddit.com/r/ethereum/comments/5nev1a/help_needed_how_to_find_multisig_contract_wallet/)
