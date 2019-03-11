---
title: What to do if you forgot how much you bid
description: ENS
priority: 10
date_published: '2017-07-05'
date_modified: '2018-12-14'
---

First, look up your address on [Etherscan](https://etherscan.io) in order to find the transaction in which you placed your bid. 

Look for:

* An outgoing transaction (orange)
* To [ENS-Registrar](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef)
* With an ETH value > 0.01 ETH *(not one that says "0 Ether")*
* Was sent 2-4 days ago *(if you are just revealing your bid now)*
* That, when you click on the transaction hash, has "Function: newBid(bytes32 sealedBid)" under "Input Data"

Once you find this, copy and paste the value in the "Input Data" into a text document and remove the "MethodId:" and "[0]:" so that it looks like this: `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`.

Now, go to [https://legacy.mycrypto.com/helpers.html](https://legacy.mycrypto.com/helpers.html)

Scroll to the "ENS" section. Depending on what you saved, enter the following:

* The address you bid from
* ENS Name you bid on *(no '.eth' at the end!)*, or the namehash from the long string under "Hashed ENS Name (Label Hash)"
* The amount you think you bid
* Your secret or the sha3 secret from the long string under "Your Secret (Hashed)"

When you do this, the following four fields will populate with long data. You'll want compare the string you copied earlier (`0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`) to the string shown under **"New Bid Data."**

## Change the amount you bid until the strings match

Copy the "Reveal Data" string, go to [https://mycrypto.com/account](https://mycrypto.com/account), and unlock the wallet for the address that you placed the bid on. This address should also be the same address entered on the <https://legacy.mycrypto.com/helpers.html>.

## Enter the following information into the fields

* To: 0x6090a6e47849629b7245dfa1ca21d94cd15878ef
* Amount: 0 ETH
* Gas Limit: 200000
* Data: From the "Reveal Data" field on [https://legacy.mycrypto.com/helpers.html](https://legacy.mycrypto.com/helpers.html)

## Generate and sign your transaction

Click your transaction hash after you send it. Ensure there are no errors (you may have to refresh a few times).

Then, in a new tab, go to [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth) and type in the name you bid on. You should see a very recent transaction from your address with "Unseal Bid" next to it.

**If you win the auction, come back to finalize it in a couple days.** Congrats!
