---
title: Releasing ENS names
description: ENS
priority: 30
date_published: '2018-06-14'
date_modified: '2019-04-01'
---

## How to release Your ENS name after a year

1. Navigate to MyCrypto's contracts tab <https://mycrypto.com/contracts/interact>.
2. In the **Select Existing Contract** dropdown, select the *ENS: ETH Registrar (Auction)* option. Here is a picture of where you should be:

![](https://i.imgur.com/A8ZnIR2.jpg)

Click the *Access* button.

3. In the **Select a Function** dropdown, select the *releaseDeed* function.

![](https://i.imgur.com/myiGZNM.jpg)

4. Fill in the **\_hash** field with the labelhash that you can find by looking up your ENS name on <https://etherscan.io/enslookup>.
5. Below the **\_hash** field, access the account that owns this ENS address by selecting your method of access, going through the normal method for unlocking your address and clicking the *Unlock* button.
6. Verify that the correct gas price is selected for the current ETH network congestion.
7. Click the *Write* Button. An overlay should open that asks for a gas limit. A gas limit of 300,000 should work (unneeded, excess, gas won't be consumed). Click the *Generate Transaction* button.
8. Verify your raw transaction and then click *Yes, I am sure! Make transaction*. Once this transaction goes through, your ENS name should be released.
