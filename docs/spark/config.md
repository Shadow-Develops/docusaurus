---
sidebar_position: 4
description: How to deal with vehicle CONFIG files.
---

# Vehicle Configs

Here you will be able to learn how to handle vehicle configs that are placed within the `CONFIGS` folder.

:::info[Reminders]
All files within the `CONFIGS` folder **MUST** be named their spawn code then `.lua`. Example: `f150gw.lua`

All configured vehicles **MUST** be within the `configured_vehicles` array in the `SETTINGS.lua`.
:::

## Configuration Options

### Controller

The controller UI that appears for the vehicle. The following are the current controllers available:

> `default`, `whelen-gw`, `whelen-skeet`, `arrow`, `pathfinder`, `cencom`, `zthree`, `matrix`, `matrix-bat`, `matrix-extras`

### Door Kill

If the vehicle has extra 5 setup for door kill lights. This means, when the door is open the extra is disabled (lights go off).

> `true` (On) or `false` (Off)

### TAC

If the vehicle has Traffic Advisory extras.

> `true` (On) or `false` (Off)

### PP

If the vehicle has Park Pattern extras.

> `true` (On) or `false` (Off)

### Repair

If the vehicle has to be repaired when changing extras, aka the extras HAVE collisions enabled.

> `true` (On) or `false` (Off)

### Stages

The extras for stage lighting. Each stage is defined by `one`, `two`, and `three` and the extras that should be enabled for them should be placed inside the `{}` and separated by a comma.

### Functions (extras)

The following is a list of all the functions that can be put into the `extras` configuration data:

> `parkpattern`, `cruise`, `fullLightKill`, `rearFlood`, `leftFlood`, `rightFlood`, `frontLightKill`, `cornercruise`, `tac`, `tal`, `tar`, `wigwags`, `frontFlood`

## Base Vehicles

These are the common vehicles you will be creating config files for.

```lua title="spawn-code.lua"
local data = {
   -- The controller image folder name
   controller = "spawn-code",

   -- If the vehicle has door kill function / extras
   doorKill = true,

   -- If the vehicle has traffic advisory function / extras
   tac = true,

   -- If the vehicle has park pattern function / extras
   pp = true,

   -- If the vehicle has to be repaired when changing extras (Extras HAVE collisions)
   repair = true,

   -- Stage lighting extras (Leave as nil to disable)
   stages = nil,

   -- The extra configurations for SPARK's special functions
   extras = {
        ["functionName"] = {
            enabled = {
                on = {1, 2}, -- Extra Number that is turned on
                off = {} -- Extra Number that is turned off
            },
            disabled = {
                on = {},
                off = {1, 2}
            },
        },
    },
}

return data
```

## Vehicles with Stage Lighting

These vehicles have stage lighting extras.

```lua title="spawn-code.lua"
local data = {
   -- The controller image folder name
   controller = "spawn-code",

   -- If the vehicle has door kill function / extras
   doorKill = false,

   -- If the vehicle has traffic advisory function / extras
   tac = false,

   -- If the vehicle has park pattern function / extras
   pp = false,

   -- If the vehicle has to be repaired when changing extras (Extras HAVE collisions)
   repair = false,

    -- Stage lighting extras (Leave as nil to disable)
   stages = {
      one = {1}, -- Extra Numbers
      two = {2},
      three = {3, 4}
   },

   -- The extra configurations for SPARK's special functions
   extras = {
        ["functionName"] = {
            enabled = {
                on = {5}, -- Extra Number that is turned on
                off = {} -- Extra Number that is turned off
            },
            disabled = {
                on = {},
                off = {5}
            },
        },
    },
}

return data
```
