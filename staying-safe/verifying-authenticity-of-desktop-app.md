---
title: Verifying the Authenticity of the Desktop Application
description: Security & Phishing
priority: 50
date_published: '2018-05-01'
date_modified: '2018-08-16'
---

After downloading the desktop application, it's highly recommended to verify the checksum of the application. This ensures that you are using the real MyCrypto desktop application and not one that has been tampered with by someone else.

To begin, download the desktop application and the signed checksums (`checksums.txt.gpg`) from [download.mycrypto.com](https://download.mycrypto.com/) and place both files in a folder somewhere.

**Important**: Always check for the green **"MyCrypto, Inc." SSL certificate** your browser before downloading and do not continue if the SSL certificate is missing or you see a SSL warning.

Verifying the checksums is platform-specific, so follow the instructions that apply to you. Instructions are available for Windows, macOS and Linux.

## Windows
#### 1. Download and install gpg4win
To verify the signature of the checksums file, you need [gpg4win](https://gpg4win.org/get-gpg4win.html). In the installer, it is not necessary to select any of the optional options.

#### 2. Open a command prompt
In the folder with the MyCrypto application and the checksums.txt.gpg file, open a PowerShell command prompt by holding shift and right clicking. Then click "Open PowerShell here".

#### 3. Import the signing GPG key
To import the signing GPG key, run the following command in PowerShell:
```powershell
> Invoke-RestMethod https://keybase.io/tayvano/pgp_keys.asc | gpg --import
```
If all goes well, you should see "public key from Taylor <tayvano [at] gmail.com>" imported.

#### 4. Checking the checksums signature
To check the signature of the `checksums.txt.gpg` file, you have to run the following command in PowerShell:
```powershell
> gpg --output checksums.txt --decrypt checksums.txt.gpg
```
If all goes well, you should see "Good signature from 'Taylor <tayvano [at] gmail.com>'". It will also create a `checksums.txt` file with the checksums of the application.

#### 5. Hashing the application
The last step is to hash the application and check the hash to see if it matches with the one in the `checksums.txt` file. To do this, run the following command in PowerShell:
```powershell
> CertUtil -hashFile windows_VERSION_MyCrypto.exe SHA256
```
Make sure to replace the filename (windows_VERSION_MyCrypto.exe) with the actual filename of the file you downloaded. You should see "SHA256 hash of windows_VERSION_MyCrypto.exe:" with the hash below. Open the `checksums.txt` file and check if the hash matches with the one in the file.

## macOS
#### 1. Download and install curl and gpg
To download the signing GPG key, which is used to verify that the checksums were signed by MyCrypto, you need curl. **Usually curl is already available on your system.** You can test this by opening a terminal and running `curl --help`. If it is not installed yet, the easiest way to install curl is by using [Homebrew](https://brew.sh/). Open a terminal and run the following command:
```bash
$ brew install curl
```
You also have to install gpg from [here](https://gpgtools.org/). After installation, you don't have to open the application.

#### 2. Open a terminal and navigate to the folder
Open a terminal and use the following command to go to the folder with the MyCrypto files:
```
$ cd /path/to/folder
```
Make sure to replace '/path/to/folder' with the actual path of the files.

#### 3. Import the signing GPG key
To import the signing GPG key, run the following command in the terminal:
```bash
$ curl https://keybase.io/tayvano/pgp_keys.asc | gpg --import
```
If all goes well, you should see "public key from Taylor <tayvano [at] gmail.com>" imported.

#### 4. Checking the checksums signature
To check the signature of the `checksums.txt.gpg` file, you have to run the following command in a terminal:
```bash
$ gpg --output checksums.txt --decrypt checksums.txt.gpg
```
If all goes well, you should see "Good signature from 'Taylor <tayvano [at] gmail.com>'". It will also create a `checksums.txt` file with the checksums of the application.

#### 5. Hashing the application
The last step is to hash the application and check the hash to see if it matches with the one in the `checksums.txt` file. To do this, run the following command in a terminal:
```bash
$ shasum -a 256 mac_VERSION_MyCrypto.dmg
```
Make sure to replace the filename (mac_VERSION_MyCrypto.dmg) with the actual filename of the file you downloaded. You should see the hash. Open the `checksums.txt` file and check if the hash matches with the one in the file.

## Linux
#### 1. Download and install curl and gpg
To download the signing GPG key, which is used to verify that the checksums were signed by MyCrypto, you need curl. **Usually curl and gpg are already available on your system.** You can test this by opening a terminal and running `curl --help` and `gpg --help`. If either one is not installed yet, you have to install it using the package manager of your specific Linux distro.

For example, if you are on Debian, Ubuntu or a similar distro:
```bash
$ apt-get install curl gnupg
```

If you are on Arch Linux or a similar distro:
```bash
$ pacman -S curl gnupg
```

If you are on CentOS or a similar distro:
```bash
$ yum install curl gnupg
```

#### 2. Open a terminal and navigate to the folder
Open a terminal and use the following command to go to the folder with the MyCrypto files:
```
$ cd /path/to/folder
```
Make sure to replace '/path/to/folder' with the actual path of the files.

#### 3. Import the signing GPG key
To import the signing GPG key, run the following command in the terminal:
```bash
$ curl https://keybase.io/tayvano/pgp_keys.asc | gpg --import
```
If all goes well, you should see "public key from Taylor <tayvano [at] gmail.com>" imported.

#### 4. Checking the checksums signature
To check the signature of the `checksums.txt.gpg` file, you have to run the following command in a terminal:
```bash
$ gpg --output checksums.txt --decrypt checksums.txt.gpg
```
If all goes well, you should see "Good signature from 'Taylor <tayvano [at] gmail.com>'". It will also create a `checksums.txt` file with the checksums of the application.

#### 5. Hashing the application
The last step is to hash the application and check the hash to see if it matches with the one in the `checksums.txt` file. To do this, run the following command in a terminal:
```bash
$ sha256sum linux_PLATFORM_VERSION_MyCrypto.AppImage
```
Make sure to replace the filename (linux_PLATFORM_VERSION_MyCrypto.AppImage) with the actual filename of the file you downloaded. You should see the hash. Open the `checksums.txt` file and check if the hash matches with the one in the file.
