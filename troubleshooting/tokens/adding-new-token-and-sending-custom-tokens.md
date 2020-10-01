---
title: Unable to See Tokens (How to add a custom token)
description: Tokens
tags:
  - Tokens
priority: 100
date_published: '2017-01-25'
date_modified: '2020-10-01'
---

If you can't see a token when you access your address with MyCrypto, you simply need to add it as a custom token to your interface. MyCrypto ships with a list of tokens that it will automatically scan your address for, which is updated with every release. However, it may happen that a new token is not on this list just yet, in case you will have to manually add it to your interface.

Any ERC-20 token can be added to your local MyCrypto interface by following these instructions.

After accessing your address, click the `Scan For Tokens` button, on the right-hand side of the interface.

![Scan for tokens](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/scan-for-tokens.png)

Your tokens should appear if the token is on our token list. If you have a balance, you won't have to load it again — it will automatically load in the future.

![Token balances](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/token-balances.png)

If your token is not on the list, click the "Add Custom Token" button which will bring up the fields below.

![Add custom token](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/add-custom-token.png)

## Adding a custom token

To add a custom token, you will have to find the contract address of the token that you would like to add. You can use Etherscan or Ethplorer to find this address.

<Accordion>
<AccordionItem title="Finding the contract address with Etherscan">

After accessing your address with MyCrypto, click the Etherscan link as highlighted below.

![Etherscan link](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/etherscan-link.png)

Click the token balance drop-down, and a list of tokens on your address will show up, and click the token that you would like to add to your MyCrypto interface.

![Etherscan tokenlist](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/etherscan-tokenlist.png)

Then copy the contract address of this token, highlighted in red.

![Etherscan contract address](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/etherscan-contract-address.png)

</AccordionItem>
<AccordionItem title="Finding the contract address with Ethplorer">

<!-- 1. On the ["Send"](https://mycrypto.com/account) page on MyCrypto, click `View Address` and paste *your* address.

2. In a new tab, go to [Ethplorer.io](https://ethplorer.io/). 

3. Navigate to your address.

4. Scroll down until you see `Token Balances`.

5. Click on the token that you want to add from the tokens shown in your wallet.

6. You will be taken to a page that will you show all the information needed to add your token. Please look at the following image for further guidance.
![Token information](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/token-information.png)

7. Back on MyCrypto, click the `Add Custom Token` button on the right sidebar.

8. Paste the `Contract Address`, `Symbol`, and `Decimals` that you got from Ethplorer.io.

9. Click `"Save"`.

🎉You can now send your new token and see it's balance in the sidebar! -->

</AccordionItem>
</Accordion>

Enter the contract address in the `Address` field. You will notice that the `Decimals` and `Token Symbol` fields will be filled in for you automatically.

If there is an issue with adding a custom token, try adding it again but suffixing the name with `-1`. For example `MYC` becomes `MYC-1`.

![Custom token fields filled](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/custom-token-fields-filled.png)

Then click the `Save` button.

![Custom token added](../../assets/troubleshooting/tokens/adding-new-token-and-sending-custom-tokens/custom-token-added.png)

## Removing a custom token

To remove a custom token, click the little ( - ) icon next to the token. This will remove it from the interface. It will not delete or remove the token from the address itself. They are still safely stored in your address, we promise.

## Related articles

* [Can I store any coin in MyCrypto?](/general-knowledge/about-mycrypto/does-mycrypto-support-bitcoin-or-other-coins)
* [Adding a token as a default token in MyCrypto](/developers/add-token-to-default-list)
