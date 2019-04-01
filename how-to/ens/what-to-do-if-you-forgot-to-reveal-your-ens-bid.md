---
title: What to do if You Forgot to Reveal Your ENS Bid
description: ENS
priority: 90
date_published: '2017-07-05'
date_modified: '2019-04-01'
---

## If there are other bidders

You can get 0.5% back by manually revealing, [as written up here](/how-to/ens/manually-revealing-your-ens-bid). Unfortunately, you must reveal during the reveal period in order to win the name or get the full amount back.

## If there are no other bidders

As soon as the auction is over, please start a new auction for the same name.

Three days later, reveal your original bid and you will get it. Do not tell anyone else about your name (unless you are emailing us for support because we can't help you otherwise) during this period.

### To start an auction via MyCrypto without bidding

1. Go to the Send page
2. Send to [`0x6090a6e47849629b7245dfa1ca21d94cd15878ef`](https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef)
3. Amount: `0`
4. Gas Limit: `500000`
5. Data: `[SEE BELOW]`

#### To get your data string

1. Go to [https://etherscan.io/enslookup?q=yourname.eth](https://etherscan.io/enslookup?q=yourname.eth)
2. Type in your name and press lookup
3. Copy the string after *"Label Hash [yourname]"*
4. Remove the `0x` from the beginning
5. Add `0xede8acdb` to the beginning

**It should look like** `0xede8acdb07aa9c7e03a795d250a2ac48bd73b9c7f8adab69a549cebd97fc157a093a5a4a`

## Related articles

* [Alex van de Sande's "How to Recover a Bid on the ENS"](https://gist.github.com/alexvandesande/1c48dfbb330d67aeb79bc5b1103c6abe)
* [Importing a bid created in MyCrypto (or imToken) into ENS and vice versa](https://medium.com/@nhirsch/importing-a-bid-created-in-mew-into-ens-and-vice-versa-60b31a174e98)
