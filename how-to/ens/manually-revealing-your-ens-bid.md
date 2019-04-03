---
title: Manually Revealing ENS Bids
description: ENS
priority: 60
date_published: '2017-07-05'
date_modified: '2019-04-01'
---

## Get your bid transaction hash

First, look up your address on [Etherscan](https://etherscan.io) in order to find the transaction in which you placed your bid. 

Look for:

* An outgoing transaction (orange)
* To [ENS-Registrar](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef)
* With an ETH value >= 0.01 ETH *(not one that says "0 Ether")*
* Was sent 2-4 days ago *(if you are just revealing your bid now)*
* That, when you click on the TX hash, has "Function: newBid(bytes32 sealedBid)" under "Input Data"

Once you find this, copy and paste the value in the "Input Data" into a text document and remove the "MethodId:" and "[0]:" so that it looks like this: `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`.

## Generate reveal information

1. Now, go to [https://legacy.mycrypto.com/helpers.html](https://legacy.mycrypto.com/helpers.html)

2. Scroll to the "ENS" section. Depending on what you saved, enter the following:
   * The address you bid from
   * ENS Name you bid on *(no '.eth' at the end!)* or the namehash from the long string under "Hashed ENS Name (Label Hash)"
   * The amount you bid
   * Your secret or the sha3 secret from the long string under "Your Secret (Hashed)"

3. When you do this, the following four fields will populate with long data. You'll want compare the string you copied earlier ( `0xce92dced69faf18dd0953d9124d7917234b0efc05c78fd0d9abfc6ffb32d512680fdbb65`) to the string shown under **"New Bid Data."** These two should match.

4. Pro-tip: Copy the finalize data from the Helpers page and save it somewhere. This will allow you to easily finalize the transaction in a few days.

5. Copy the "Reveal Data" string.

## Send transaction to reveal

1. In a new tab, go to [https://mycrypto.com/account](https://mycrypto.com/account) and unlock the wallet for the address that you placed the bid on. This address should also be the same address entered on the <https://legacy.mycrypto.com/helpers.html>.

2. Enter the following information into the fields:
   * To: 0x6090a6e47849629b7245dfa1ca21d94cd15878ef
   * Amount: 0 ETH
   * Gas Limit: 200000
   * Data: From the "Reveal Data" field on [https://legacy.mycrypto.com/helpers.html](https://legacy.mycrypto.com/helpers.html)

3. Generate and sign your transaction.

4. Click your transaction hash after you send it. Ensure that there are no errors (you may have to refresh after about a minute).

5. Then, in a new tab, go to [Etherscan](https://etherscan.io/enslookup?q=yourname.eth) and type in the name you bid on. You should see a very recent transaction from your address with "Unseal Bid" next to it.
