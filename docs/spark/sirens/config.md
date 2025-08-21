---
sidebar_position: 1
description: How to define siren tones in SIRENS table located in SIRENS.lua
---

# Configure Sirens

**Example Sirens Table (w/o server sided sirens)**

```lua title="SIRENS.lua"
SIRENS = {
--[[1]]  { Name = "Airhorn", String = "SIRENS_AIRHORN", Ref = 0 }, --1
--[[2]]  { Name = "Wail", String = "VEHICLES_HORNS_SIREN_1", Ref = 0 }, --2
--[[3]]  { Name = "Yelp", String = "VEHICLES_HORNS_SIREN_2", Ref = 0 }, --3
--[[4]]  { Name = "Priority", String = "VEHICLES_HORNS_POLICE_WARNING", Ref = 0 }, --4
--[[5]]  { Name = "Futura", String = "RESIDENT_VEHICLES_SIREN_WAIL_01", Ref = 0 }, --5
--[[6]]  { Name = "Hetro", String = "RESIDENT_VEHICLES_SIREN_WAIL_02", Ref = 0 }, --6
--[[7]]  { Name = "Sweep-1", String = "RESIDENT_VEHICLES_SIREN_WAIL_03", Ref = 0 }, --7
--[[8]]  { Name = "Sweep-2", String = "RESIDENT_VEHICLES_SIREN_QUICK_01", Ref = 0 }, --8
--[[9]]  { Name = "Hi-Low",String = "RESIDENT_VEHICLES_SIREN_QUICK_02",Ref = 0 }, --9
--[[10]]  { Name = "Whine Down",String = "RESIDENT_VEHICLES_SIREN_QUICK_03", Ref = 0 }, --10
--[[11]]  { Name = "Powercall", String = "VEHICLES_HORNS_AMBULANCE_WARNING", Ref = 0 }, --11
--[[12]]  { Name = "QSiren", String = "VEHICLES_HORNS_FIRETRUCK_WARNING", Ref = 0 }, --12
--[[13]]  { Name = "Fire Yelp", String = "RESIDENT_VEHICLES_SIREN_FIRETRUCK_WAIL_01", Ref = 0 }, --13
--[[14]]  { Name = "Fire Yelp", String = "RESIDENT_VEHICLES_SIREN_FIRETRUCK_QUICK_01", Ref = 0 }, --14
}
```

- For most users, **`Name`** is the only field that needs to be modified. It determines the default name for each tone and will be displayed in LVC:v3 Menu, these can be generic like "Siren 1, Siren 2, etc." or specific based on departments recommended siren. The end user will be able to change these.
- For advanced users:
  - **`String`** and **`Ref`** can be changed to change which audio file is pulled based on tone. Rearranging default resident.rpf names is not recommended as it serves no benefit. Instead rearranging the siren assignments order would be easier. The only time changing `String` and `Ref` would be recommended is for integration of server side siren integration. See [Server Sided Audio Integration](https://github.com/TrevorBarns/luxart-vehicle-control/wiki/Server-Sided-Audio-Integration).
  - **`Option`** an additional key can be added to each tones table determines the default option state that each tone is in. The end user can change these later.\
     _Example:_ `{ Name = "CustomName", String = "SIREN_STRING", Ref = 0, Option = 1 },`
    | Option Value | Behavior |
    |---|---|---|
    | 1 | Cycle & Button |
    | 2 | Cycle Only |
    | 3 | Button Only |
    | 4 | Disabled |
