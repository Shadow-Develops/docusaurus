---
sidebar_position: 3
description: Configuration of fundamental settings located in SETTINGS.lua
---

# Settings

Configuration of fundamental settings located in `SETTINGS.lua`.

## Set your Community ID

This is the unique set of characters that identifies your players' saved settings.

- The ID should be 4-6 alphanumerical characters.
- Spaces are not allowed and will not work, dashes can be used instead.
- Some examples may be your servers abbreviation, name, etc.
  - Examples: `RedneckRp`, `LSRP`, `BobsServer`, `Test-Server`, etc.

> The purpose of this string is to differentiate the client side saves between servers. Since it is possible (and likely) that servers may use the same profile names, but different profile siren assignments.

:::warning[Change Notice]
The ID **should be set once, and never changed** as it will result in loss of SPARK saves for all players. **It is not public facing** so even if the server name changes it does not need to change.
:::

## Defaults

Any setting that includes `default` within the name means players can change it within game and what you place here will be overridden; however, that shouldn't stop you from configuring the defaults for your server!

## Configured Vehicles

Ensure any vehicle you have added a [vehicle configuration file](/spark/config.md) is within this array. If you configure a vehicle and don't add it to this list, the configuration will NOT work.

> Should like: `{'f150gw', 'arrowp'}`

## Controls

### Register Key Maps

Users may change these in their `GTA V > Settings > Hotkeys > FiveM` settings.

More info: [CFX Cookbook - How RegisterKeyMappings Work](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/)

- `open_menu_key`: sets default key for opening SPARK Menu.
- `lockout_default_key`: sets default key for toggling SPARK control lock, which disabled all controls.
- The SPARK function keys are also changeable within the settings.
  - Default Function Keys:
    - Cruise Lights = `DECIMAL`
    - Corner Cruise Lights = `NUMPAD6`
    - Full Light Kill = `PLUS`
    - Traffic Advisor Center = `NUMPAD5`
    - Park Pattern = `NUMPAD0`
    - Front Light Kill = `NUMPAD1`
    - Front Light Kill = `NUMPAD4`
    - Rear Flood Lighting = `NUMPAD2`
    - Front Flood Lighting = `NUMPAD3`
    - Right Flood Lighting = `NUMPAD7`
    - Left Flood Lighting = `NUMPAD8`
    - Traffic Advisor Left = `NUMPAD7`
    - Traffic Advisor Right = `NUMPAD8`
    - Wig Wags = `NUMPAD9`

### Indicator Controls

These static keys cannot be changed by the end user and support controller keys as well.

- `hazard_key`: when held for hazard_hold_duration toggle 4-way flashers.
- `left_signal_key`: toggle left turn signal.
- `right_signal_key`: toggle right turn signal.
