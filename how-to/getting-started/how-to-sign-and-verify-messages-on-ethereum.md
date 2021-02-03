---
title: How to sign & verify messages on Ethereum
description: Addresses & Balances
tags:
  - Accounts
  - Ethereum
priority: 70
date_published: '2018-04-18'
date_modified: '2021-01-27'
---

With Ethereum, signatures are a way of providing evidence that a specific user has access to a specific address.

For example, if user A wants to provide evidence to user B that user A has access to address X, they could sign a message with their private key, stating that user A has access to address X, then share the signed signature with user B. If the signature is correct, user B can verify that user A has access to address X without user A ever having to share their private key to user B.

### Signing a message

1. Go to the [message signing page on MyCrypto](https://app.mycrypto.com/sign-message).
2. Access your wallet.

![](../../assets/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum/accessing-wallet.png)

3. Enter the message that you wish to use to prove your ownership of the address.

![](../../assets/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum/signing-message.png)

4. Click the big blue "Sign Message" button.
5. Your signed message will appear in a box below. It should look a bit like this:

```json
{
  "address": "0x2a3052ef570a031400BffD61438b2D19e0E8abef",
  "msg": "This is proof that I, user A, have access to this address.",
  "sig": "0x4e1ce8ea60bc6dfd4068a35462612495850cb645a1c9f475eb969bff21d0b0fb414112aaf13f01dd18a3527cb648cdd51b618ae49d4999112c33f86b7b26e9731b",
  "version": "2"
}
```

You can use this message as proof that you own an address, and share it with anyone.

### Verifying a message

1. Go to the [message verifying page on MyCrypto](https://app.mycrypto.com/verify-message).
2. Enter the signed message that you want to check, and click "Verify Message."

![](../../assets/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum/verifying-message.png)

If the signature is correct, a green bar will be displayed.
