---
title: How to Send Tokens from a Mist Multisig Contract
tags:
  - Tokens
priority: 90
date_published: '2020-06-26'
date_modified: '2020-10-08'
---

<Alert>

If you're looking to send Ether from a Mist multisig contract, please refer to [this article](/how-to/sending/how-to-interact-with-a-multisig-contract) instead.

</Alert>

If you have tokens in a Mist multisig contract, sending them from the contract is slightly more complicated than a regular ETH transaction. In order to send tokens, you need to generate input data for the transaction, and use that as `data` field for the `execute` function. Carefully follow the steps below in order to send tokens from your Mist multisig contract.

- Navigate to [the contracts page on MyCrypto](https://mycrypto.com/contracts/interact).

  - If you are using a private key, keystore file or mnemonic phrase, please use the [desktop application](https://download.mycrypto.com) instead.

- Select the Mist Multisig Contract from the drop down menu.

- Enter your contract address in the "Contract Address Field".

- Click on "Access".

- Under "Read / Write Contract," select "execute". You should see a few more input fields.
  - In "\_to," enter the **address of the token contract for the token you want to send.**
  - In "\_value," enter 0. This field is for Ether transactions only.
  - Use the tool below to generate data, and enter it in the "\_data" field.

<TokenInputData />

Now, you can follow the steps as described in [this article](/how-to/sending/how-to-interact-with-a-multisig-contract), starting from the 7th step under "Sending a Transaction".
