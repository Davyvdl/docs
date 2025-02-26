---
title: Become a Validator
sidebar_position: 3
---

## Become a Validator

Testnet validators are core members and organizations wanting to run and maintain their LUKSO Testnet node in a stable environment over a long period to ensure healthy uptimes, stability, and quick response times from clients as demand from developers rises.

If you want to become a whitelisted validator on our testnet, prepare your validator keys, set up your node environment, and contact [testnet-validators@lukso.network](mailto:testnet-validators@lukso.network).

![Testnet Launchpad](/img/network/testnet-launchpad.png)

After you become whitelisted, visit the official [Testnet Deposit Launchpad](https://deposit.testnet.lukso.network/) and cautiously generate the specified number of keys you are allowed. Then continue depositing your LYXt to them.

:::caution Genesis validators

As a validator, you need to import your validator deposit key (`keystore-xxx-[timestamp].json` files that you have generated using the [LUKSO Wagyu](https://github.com/lukso-network/tools-wagyu-key-gen) or [LUKSO CLI Keygen](https://github.com/lukso-network/tools-key-gen-cli) tools. Ensure you safely copy them to your node before starting the validator node.

:::

## Starting a Validator

As while running a regular node, you have multiple options to start your validator:

- **LUKSO CLI Validator**
- **Docker Compose Setup**
- **Configure a LUKSO Compatible Client**

Please refer to the regular [Node Guide](./running-a-node.md) that explains the differences between those setups and how to get the correct network configurations.

### LUKSO CLI Validator Node

Set up your regular node using the LUKSO CLI as described in the [Node Guide](./running-a-node.md).

The instructions are the same as for mainnet node, please refer to [mainnet validator guide](../mainnet/become-a-validator.md#using-lukso-cli). You will simply have to add `--testnet` after each commands to make it work for testnet. The command will look like this:

```bash
$ lukso validator import --validator-keys "./path/to/your/keys/folder" --testnet

$ lukso validator list --testnet

$ lukso start --validator --transaction-fee-recipient "0x1234..." --testnet

$ lukso logs validator --testnet
```

### Using Docker

Our official Docker container provides a base template for images to run the LUKSO validator nodes. Make sure you have Docker and Docker Compose installed on your system.

The instructions are the same as for mainnet node, please refer to [mainnet validator guide](../mainnet/become-a-validator.md#using-docker). You will simply have to download the [**testnet** genesis files](https://github.com/lukso-network/network-configs/tree/main/testnet/shared) instead of the mainnet ones.

### Custom Validator Node

If you are a pro user or want to set up the testnet node in a cloud environment, you can follow the instructions in the following repositories to manually configure the Ethereum clients:

- [Network Configurations](https://github.com/lukso-network/network-configs/testnet)
- [Client Specifications](https://github.com/lukso-network/network-configs#binary-applications)

## Need Help?

Check the [Network FAQ](../faq/validator.md) section.

Ask your question in the validators channel on the [official LUKSO Discord server](https://discord.gg/lukso).
