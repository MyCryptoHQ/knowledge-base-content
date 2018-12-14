---
title: Importing a bid created in MyCrypto into ENS and vice-versa
description: ENS
priority: 10
date_published: '2018-02-14'
date_modified: '2018-12-14'
---


The fields of the JSON files created by MyCrypto and ENS (registrar.ens.domains) appear to be different but in fact they have different names and styles for the same thing.

Here is a comparison of the two JSON files and how they compare to each other:

#### BELOW IS A MyCrypto JSON FILE (push enter, ie. add a line after each “,” to get it to look like this) :

“name”:same as name in ENS,
 “nameSHA3”:”0x + keccak-256 of name”, same as “hash” in ENS=identical but different labels
 “owner”:same as owner in ENS, identical 
 “value”:same as value in ENS, identical
 “secret”: same as secret in ENS, identical
 “secretSHA3”: 0x + keccak-256 of “secret above”, same as hexSecret in ENS, identical but different label

#### BELOW IS AN ENS JSON FILE (push enter, ie. add a line after each “,” to get it to look like this) :

“_id”: unique to ENS, pick one from an existing ENS JSON file and modify it a bit
 “date”: unique to ENS, pick one from and existing ENS JSON file and modify it a bit. (note you can create a system generated _id and date to use in your bid by bidding minimum and downloading bid before then rejecting the bid in metamask. use the _id and date in the recreated ENS bid from the MyCrypto data)

“mastersalt”: unique to ENS, can remove this line after calculations w/keccak.
 “depositAmount”: unique to ENS, use same as value below in cases with no mask,
 “name”: same as name in MyCrypto,
 “hash”: “0x + keccak-256 of name”, identical label in MyCrypto
 “value”: same as value in MyCrypto, identical label in MyCrypto
 “owner”: same as owner in MyCrypto, identical label in MyCrypto
 “secret”: same as 3 word secret in MyCrypto, 0x + keccak-256 of mastersalt+name
 “hexSecret”: same as secretSHA3 in MyCrypto, 0x + keccak-256 of secret above
 “shaBid”: unique to ENS, calculate using Method Response of Line 2 in ReadContract: https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#readContract
 “revealed”: unique to ENS,
 “revealing”: unique to ENS

note: spaces after : in ENS, no space after “ in MyCrypto

The only thing you need to “calculate” is the shaBid field which is calculated and checked as being valid by using Alex Vandesande’s explanation here: https://gist.github.com/alexvandesande/1c48dfbb330d67aeb79bc5b1103c6abe. If you masked your bid, “value” field is same as ”value” field in JSON. If you masked your bid do not use the depositAmout for value. depositAmount is the sum of the value plus the mask which is the “value” shown in EtherScan.io for the original bid transaction! So in the one case of the readContract (line2), “value” = bid (without mask value) but in the etherscan.io transaction, “Value” = bid + mask amount.

### Successful example of Bid created in MyCrypto, converted to bid in ENS and Reveled in ENS:

#### Bid (copied from window) on MyCrypto:

{“name”:”cambisios”,”nameSHA3":”0xcaed7aab3e1fb55f399df412e16ab31c313396a117393d72d62b7250fa4fae54",”owner”:”0x5e845154125e0127e3143f9e483a52691bd66e80",”value”:”11000000000000000",”secret”:”water plastic twin”,”secretSHA3":”0xc484935f816b7ea5648a777f2ae97a0dd893ed892e4426b35e8251f43c7a556d”}

#### Converted to and then revealed in ENS:

{
 “_id”: “iwY6jYQhWgzexwGf3”,
 “date”: 1499128431536,
 “depositAmount”: “11000000000000000”,
 “name”: “cambisios”,
 “hash”: “0xcaed7aab3e1fb55f399df412e16ab31c313396a117393d72d62b7250fa4fae54”,
 “value”: “11000000000000000”,
 “owner”: “0x5e845154125e0127e3143f9e483a52691bd66e80”,
 “secret”: “water plastic twin”,
 “hexSecret”: “0xc484935f816b7ea5648a777f2ae97a0dd893ed892e4426b35e8251f43c7a556d”,
 “shaBid”: “0x8a3650ced3b72b836a7b05c62e223220c5a4a18019cb79647f18a7577da53d54”,
 “revealed”: false,
 “revealing”: false
 }],

## Source

- https://medium.com/@nhirsch/importing-a-bid-created-in-mew-into-ens-and-vice-versa-60b31a174e98
