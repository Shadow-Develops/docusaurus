---
sidebar_position: 2
description: Instructions on how to install SPARK into your server.
---

# Installation

With SPARK being a simple FiveM Script, the installation should be pretty easy.

> Download the latest release `SPARK vX.X.X.zip` (not source code) from [Github releases](https://github.com/AgentBUB/spark/releases).

## Steps

1. Take the `RageUI` folder from `dependencies` folder, and put it into your resources folder.
   1. SPARK uses a modified version of RageUI, so ensure you install the provided version.
2. Take the `spark` folder and place it into your resources folder.
   1. You MUST leave the name as `spark` or it will error out.
3. Add `ensure RageUI` then `ensure spark` into your server.cfg (RageUI must be first).

## Notices

:::warning[fxmanifest]
This resource utilizes [globbing](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/#globbing) which may not be supported in some linux environments.

Releases will include a `fxmanifest-no-gobbling.zip` which contain a compatible fxmainfest.lua without globbing; however, you will have to manually add all CONFIG folder files into the fxmanifest when adding new ones.
:::

:::info[Update]
If you are updating make sure to run `refresh` before restarting SPARK, this ensures new files that were added will be loaded.
:::
