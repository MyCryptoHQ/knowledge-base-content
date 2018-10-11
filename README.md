# MyCrypto Knowledge Base content

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

This repository contains all content for the new (WIP) [MyCrypto Knowledge Base](https://support.mycrypto.com). For the main Knowledge Base code, see [MyCryptoHQ/knowledge-base](https://github.com/MyCryptoHQ/knowledge-base).

## Getting Started

If you want to edit content with a live preview on the Knowledge Base, the easiest way is to clone the main repo ([MyCryptoHQ/knowledge-base](https://github.com/MyCryptoHQ/knowledge-base)).

```bash
git clone --recurse-submodules https://github.com/MyCryptoHQ/knowledge-base.git
```

Navigate to the content folder and create a new remote with the URL of your fork of this repo.

```bash
cd knowledge-base/src/content
git remote add my-repo URL
git checkout -b my-update-branch
```

Now you can edit the content in the content folder. When done editing, simply commit the changes and run the following command

```bash
git push -u my-repo my-update-branch
```

Alternatively, you can just fork this repository and make your changes, but you won't be able to preview the changes on the Knowledge Base.

## License

The Knowledge Base content is [MIT licensed](./LICENSE).
