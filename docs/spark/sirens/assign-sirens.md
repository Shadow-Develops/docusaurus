---
sidebar_position: 2
description: How to assign sirens to vehicles using SIREN_ASSIGNMENTS table in SIRENS.lua
---

# Assign Sirens

### SIREN_ASSIGNEMENTS Table

```lua title="SIRENS.lua"
SIREN_ASSIGNMENTS = {
--['<gameName>'] = { <airhorn tone>, <siren tone-1>, <siren tone-2>, ... <siren tone-n> },
['DEFAULT'] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
['FIRETRUK'] = { 12, 13, 14, 11 },
['AMBULAN'] = { 1, 2, 3, 4, 11 },
['LGUARD'] = { 1, 2, 3, 4, 11 },
}
```

In this table you can add additional vehicles for assignment using the vehicles `<gameName>` exactly as found in `vehicles.meta`. **It is case sensitive**.

<details>
    <summary>vehicles.meta example:</summary>
    ```xml
    ...
    <modelName>so2</modelName> <!-- SPAWN NAME -->
    <handlingId>so2</handlingId>
    <gameName>so2</gameName> <!-- GAME NAME (WHAT LVC USES) -->
    <vehicleMakeName />
    <expressionDictName>null</expressionDictName>
    ...
    ```
</details>

- Both R\* and LVC:v3 truncate down to 11 characters. **It is important that the first 11 characters are unique.**
  - **Example**:\
    If my addon vehicles `<gameName>` is "_2008 Ford CVPI CHP_" and I have another vehicle "_2008 Ford CVPI LSPD_" both of these after truncate equate to "_2008 Ford C_" therefor LVC:v3 will not be able to differentiate these.

:::danger[Warning]
**The default or fallback key `['DEFAULT']` should always be present and never removed. Doing so will result in issues.**
:::

### **Wildcards**

Supported Wildcards:

- `#` represents 1 or more digits.

#### How it works

1. LVC:v3 checks for vehicle profile matching game name. _e.g._ `['2008fpiu1']`
2. If not found, attempts wildcard search, meaning wildcards will be used _secondary_ to custom profiles. _e.g._ `['2008fpiu#']`
3. If not found, attempts a less specific wildcard search, leading and trailing numbers. _e.g._ `['#fpiu#']` _(v3.2.7)_
4. If not found, use default profile. _e.g._ `['DEFAULT']`

_Example_:\
\* `['veh#'] = { ... }` will be used for vehicles with game names `veh1`, `veh2`, ..., `veh9999`, etc. where exact profile not found.

:::info
Examples and premade packs can be found here: [LVC:v3 Extras](https://github.com/TrevorBarns/luxart-vehicle-control-extras/).
:::
