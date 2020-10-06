---
title: How To Access Your Energy Web Chain Tokens
description: Networks & Nodes
tags:
  - Networks
priority: 20
date_published: '2020-09-30'
date_modified: '2020-09-30'
---

Energy Web Chain ("EWC") is a blockchain designed to be used for the energy sector. Its utility token is Energy Web Token ("EWT") and this article will explain how you can access these tokens using MyCrypto.

EWC is a separate network and blockchain from Ethereum and is not a token on the Ethereum blockchain. The term "token" may cause confusion, but keep in mind that EWT is separate from Ethereum.

## Switching to the Energy Web network

You can use MyCrypto's network switcher to change your interface to use the Energy Web Chain, instead of the Ethereum network that MyCrypto connects to by default.

If you use the [MyCrypto.com](https://mycrypto.com/) website, you can find the network switcher at the top-right of your interface. If you are using the [MyCrypto desktop app](https://download.mycrypto.com/), you can find this at the bottom-left of the interface. Click "Show Other Networks" to find the EWC network.

Keep in mind that when you are connected to this network, you will not see your Ethereum or ERC-20 funds. Simply switch back to the Ethereum network if you wish to access these funds again.

## Accessing your Energy Web Tokens

<Accordion>
<AccordionItem title="Ledger">

To interact with EWT using your Ledger device, you have to use the EnergyWebChain app on your Ledger device, **not** the Ethereum app. If you do not have this app installed, you can use [Ledger Live](https://www.ledger.com/ledger-live) to install it.

After accessing your Ledger device with MyCrypto, you will notice that a list of different addresses will show up instead of the addresses that you would see if you were connected to the Ethereum network. You are free to use these for your Energy Web Tokens.

If you have accidentally sent EWT to your Ethereum addresses previously, you can still access these by clicking the drop-down field next to "Addresses" and selecting the "Ledger (ETH)" option.

![Ethereum addresses on Ledger](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/ledger-derivation.png)

You will see your Ethereum addresses displayed alongside their EWT funds.

</AccordionItem>
<AccordionItem title="Trezor">

Access your Trezor device like usual. You will notice that a list of different addresses will show up, instead of the addresses that you would see if you were connected to the Ethereum network. You are free to use these for your Energy Web Tokens.

If you have accidentally sent EWT to your Ethereum addresses previously, you can still access these by clicking the drop-down field next to "Addresses" and selecting the "TREZOR (ETH)" option.

![Ethereum addresses on Trezor](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/trezor-derivation.png)

You will see your Ethereum addresses displayed alongside their EWT funds.
</AccordionItem>
<AccordionItem title="Private Key/Mnemonic Phrase/Keystore File">

You can access your address like usual and you'll be able to see your EWT right away.

![EWT address and funds](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/ewt-funds.png)

From here, you are free to interact with your EWT however you wish. 

</AccordionItem>
</Accordion>

## Accessing your EWTB (Bridged) tokens

Energy Web has developed the EWT Bridged (EWTB) token, which is an ERC-20 token on the Ethereum blockchain. You can mint EWTB tokens through its interface which you can find at [bridge.energyweb.org](https://bridge.energyweb.org). This method allows you to transfer EWT from the Energy Web Chain to the Ethereum blockchain.

If your Ethereum address contains EWTB tokens, you might not see them in your interface right away. In this case, you have to manually add this token as a [custom token](/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens).

The contract address of EWTB is `0x178c820f862b14f316509ec36b13123da19a6054`, you can also find this address on [Etherscan](https://etherscan.io/token/0x178c820f862b14f316509ec36b13123da19a6054).

![Adding the EWTB token](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/add-custom-token-ewtb.png)

After adding this token to your interface, you will be able to see your EWTB and interact with it however you wish. Do keep in mind that you have to be connected to the Ethereum network in order to view and send them.

![Custom token added](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/ewtb-added.png)

## Accessing the Volta testnet

To access the Volta testnet, choose the Volta network in the network switcher. After accessing your address, you can interact with the Volta network however you'd like.

![VT address and funds](../../assets/how-to/nodes-networks/how-to-access-energy-web-chain-tokens/vt-funds.png)
