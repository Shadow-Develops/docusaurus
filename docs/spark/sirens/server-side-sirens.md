---
sidebar_position: 3
description: Stream custom sirens from the server to SPARK
---

# Server Sided Siren Integration

## Introduction

> [Youtube Video Tutorial: https://www.youtube.com/watch?v=KSEyeDQf5VQ](https://www.youtube.com/watch?v=KSEyeDQf5VQ)

Below are two third-party resources that allow for streaming of R\* audio files from server to client. These audio files can be for various things but some people use them for sirens.

- **Server-Sided-Sounds-and-Sirens (SAS)**\
   Supports up to 214 tones for FREE. I am in no way affiliated with this resource or its creator.\
  [Server Sided Sounds and Sirens Github](https://github.com/fk-1997/Server-Sided-Sounds-and-Sirens)

- **WM-ServerSirens (WM-SS)**\
   Provides 8 tones for free, but for more there is a paywall. I am in no way affiliated with 'Walshey Modifications' or this resource.\
  [WM-ServerSirens Release Page CFX](https://forum.cfx.re/t/release-wm-serversirens-fivem-server-side-siren-resource-walshey-marcus/1491908)

---

## How to Integrate

### 1. Request Audio Bank

First we need to request the audio bank, this loads the audio for the client prior to use. We can place these lines anywhere in SIRENS.lua.

:::warning
Currently only 7 audio banks are supported. We are not sure why, seems like a FiveM lua limitation.
:::

**Server-Sided-Sounds-and-Sirens:**\
Below are the audio banks supported by SAS. **You only need to request audio banks you intend to use.** All audio banks below support 6 tones each, besides the last one, OISS_SSA_VEHAUD_ETC, which supports 16 tones.

```lua
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSPD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSPD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSSD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSSD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCSO_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SAHP_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SAHP_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SAHP_BIKE", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_NOOSE_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_NOOSE_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_FIB_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_FIB_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_RHPD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_RHPD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_DPPD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_DPPD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSIA_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSIA_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSPP_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSPP_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSFD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSCOFD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_LSCOFD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCFD_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_BCFD_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SANFIRE_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SAMS_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_SAMS_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_USFS_NEW", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_USFS_OLD", false)
RequestScriptAudioBank("DLC_SERVERSIDEAUDIO\\OISS_SSA_VEHAUD_ETC", false)
```

**WM-ServerSirens**:

- Free:

  ```lua
  RequestScriptAudioBank("DLC_WMSIRENS\\SIRENPACK_ONE", false)
  ```

- Paid:

  ```lua
  RequestScriptAudioBank("DLC_WALSHEY\\SIRENPACK_ONE", false)
  RequestScriptAudioBank("DLC_WALSHEY\\SIRENPACK_TWO", false)
  RequestScriptAudioBank("DLC_WALSHEY\\SIRENPACK_THREE", false)
  RequestScriptAudioBank("DLC_WALSHEY\\SIRENPACK_FOUR", false)
  ```

:::warning
Make sure you are using ASCII quotes not UTF8 quotes from CFX forum post. Correct: " vs Incorrect: “. This will result in a parsing error and many other errors as SIRENS.lua file will not be loaded.
:::

### 2. Configuration of SIRENS table (SIRENS.lua)

Now that we have told GTA V to load the requested audio banks from Step 1, we now need to create the specific tones.

- To add additional tones copy & paste additional lines into the SIRENS table.
  - Take note of the incrementing numbers, they are the siren IDs and we will need them to assign sirens later. These are not generated so you may have to manually renumber lines.
  - You can change the name to your desired siren name such as 'Wail', 'Yelp', '295-Wail', 'FSS-Rumbler'. See: [configure-sirens](configure-sirens 'mention') for more information.

<details>

<summary>Server-Side-Sirens-and-Sounds Example</summary>

[View Raw / View in New Tab](https://pastebin.com/raw/jM98Pjtt)

```lua title="SIRENS.lua > Sirens Table"
SIRENS = {
--[[1]]   { Name = "Airhorn",       String = "SIRENS_AIRHORN",                              Ref = 0 }, --1
--[[2]]   { Name = "Wail",          String = "VEHICLES_HORNS_SIREN_1",                      Ref = 0 }, --2
--[[3]]   { Name = "Yelp",          String = "VEHICLES_HORNS_SIREN_2",                      Ref = 0 }, --3
--[[4]]   { Name = "Priority",      String = "VEHICLES_HORNS_POLICE_WARNING",               Ref = 0 }, --4
--[[5]]   { Name = "Futura",        String = "RESIDENT_VEHICLES_SIREN_WAIL_01",             Ref = 0 }, --5
--[[6]]   { Name = "Hetro",         String = "RESIDENT_VEHICLES_SIREN_WAIL_02",             Ref = 0 }, --6
--[[7]]   { Name = "Sweep-1",       String = "RESIDENT_VEHICLES_SIREN_WAIL_03",             Ref = 0 }, --7
--[[8]]   { Name = "Sweep-2",       String = "RESIDENT_VEHICLES_SIREN_QUICK_01",            Ref = 0 }, --8
--[[9]]   { Name = "Hi-Low",        String = "RESIDENT_VEHICLES_SIREN_QUICK_02",            Ref = 0 }, --9
--[[10]]  { Name = "Whine Down",    String = "RESIDENT_VEHICLES_SIREN_QUICK_03",            Ref = 0 }, --10
--[[11]]  { Name = "Powercall",     String = "VEHICLES_HORNS_AMBULANCE_WARNING",            Ref = 0 }, --11
--[[12]]  { Name = "QSiren",        String = "VEHICLES_HORNS_FIRETRUCK_WARNING",            Ref = 0 }, --12
--[[13]]  { Name = "Fire Yelp",     String = "RESIDENT_VEHICLES_SIREN_FIRETRUCK_WAIL_01",   Ref = 0 }, --13
--[[14]]  { Name = "Fire Yelp",     String = "RESIDENT_VEHICLES_SIREN_FIRETRUCK_QUICK_01",  Ref = 0 }, --14
-- START OF SAS --
--[[15]]  { Name = "New LSPD HORN",         String = "OISS_SSA_VEHAUD_LSPD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --15
--[[16]]  { Name = "New LSPD ADAM",         String = "OISS_SSA_VEHAUD_LSPD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --16
--[[17]]  { Name = "New LSPD BOY",          String = "OISS_SSA_VEHAUD_LSPD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --17
--[[18]]  { Name = "New LSPD CHARLES",      String = "OISS_SSA_VEHAUD_LSPD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --18
--[[19]]  { Name = "New LSPD DAVID",        String = "OISS_SSA_VEHAUD_LSPD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --19
--[[20]]  { Name = "New LSPD EDWARD",       String = "OISS_SSA_VEHAUD_LSPD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSPD_NEW_SOUNDSET"}, --20
--[[21]]  { Name = "Old LSPD HORN",         String = "OISS_SSA_VEHAUD_LSPD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --21
--[[22]]  { Name = "Old LSPD ADAM",         String = "OISS_SSA_VEHAUD_LSPD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --22
--[[23]]  { Name = "Old LSPD BOY",          String = "OISS_SSA_VEHAUD_LSPD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --23
--[[24]]  { Name = "Old LSPD CHARLES",      String = "OISS_SSA_VEHAUD_LSPD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --24
--[[25]]  { Name = "Old LSPD DAVID",        String = "OISS_SSA_VEHAUD_LSPD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --25
--[[26]]  { Name = "Old LSPD EDWARD",       String = "OISS_SSA_VEHAUD_LSPD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSPD_OLD_SOUNDSET"}, --26
--[[27]]  { Name = "New LSSD HORN",         String = "OISS_SSA_VEHAUD_LSSD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --27
--[[28]]  { Name = "New LSSD ADAM",         String = "OISS_SSA_VEHAUD_LSSD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --28
--[[29]]  { Name = "New LSSD BOY",          String = "OISS_SSA_VEHAUD_LSSD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --29
--[[30]]  { Name = "New LSSD CHARLES",      String = "OISS_SSA_VEHAUD_LSSD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --30
--[[31]]  { Name = "New LSSD DAVID",        String = "OISS_SSA_VEHAUD_LSSD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --31
--[[32]]  { Name = "New LSSD EDWARD",       String = "OISS_SSA_VEHAUD_LSSD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSSD_NEW_SOUNDSET"}, --32
--[[33]]  { Name = "Old LSSD HORN",         String = "OISS_SSA_VEHAUD_LSSD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --33
--[[34]]  { Name = "Old LSSD ADAM",         String = "OISS_SSA_VEHAUD_LSSD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --34
--[[35]]  { Name = "Old LSSD BOY",          String = "OISS_SSA_VEHAUD_LSSD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --35
--[[36]]  { Name = "Old LSSD CHARLES",      String = "OISS_SSA_VEHAUD_LSSD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --36
--[[37]]  { Name = "Old LSSD DAVID",        String = "OISS_SSA_VEHAUD_LSSD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --37
--[[38]]  { Name = "Old LSSD EDWARD",       String = "OISS_SSA_VEHAUD_LSSD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSSD_OLD_SOUNDSET"}, --38
--[[39]]  { Name = "New BCSO HORN",         String = "OISS_SSA_VEHAUD_BCSO_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --39
--[[40]]  { Name = "New BCSO ADAM",         String = "OISS_SSA_VEHAUD_BCSO_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --40
--[[41]]  { Name = "New BCSO BOY",          String = "OISS_SSA_VEHAUD_BCSO_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --41
--[[42]]  { Name = "New BCSO CHARLES",      String = "OISS_SSA_VEHAUD_BCSO_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --42
--[[43]]  { Name = "New BCSO DAVID",        String = "OISS_SSA_VEHAUD_BCSO_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --43
--[[44]]  { Name = "New BCSO EDWARD",       String = "OISS_SSA_VEHAUD_BCSO_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_BCSO_NEW_SOUNDSET"}, --44
--[[45]]  { Name = "Old BCSO HORN",         String = "OISS_SSA_VEHAUD_BCSO_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --45
--[[46]]  { Name = "Old BCSO ADAM",         String = "OISS_SSA_VEHAUD_BCSO_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --46
--[[47]]  { Name = "Old BCSO BOY",          String = "OISS_SSA_VEHAUD_BCSO_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --47
--[[48]]  { Name = "Old BCSO CHARLES",      String = "OISS_SSA_VEHAUD_BCSO_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --48
--[[49]]  { Name = "Old BCSO DAVID",        String = "OISS_SSA_VEHAUD_BCSO_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --49
--[[50]]  { Name = "Old BCSO EDWARD",       String = "OISS_SSA_VEHAUD_BCSO_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_BCSO_OLD_SOUNDSET"}, --50
--[[51]]  { Name = "New SAHP HORN",         String = "OISS_SSA_VEHAUD_SAHP_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --51
--[[52]]  { Name = "New SAHP ADAM",         String = "OISS_SSA_VEHAUD_SAHP_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --52
--[[53]]  { Name = "New SAHP BOY",          String = "OISS_SSA_VEHAUD_SAHP_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --53
--[[54]]  { Name = "New SAHP CHARLES",      String = "OISS_SSA_VEHAUD_SAHP_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --54
--[[55]]  { Name = "New SAHP DAVID",        String = "OISS_SSA_VEHAUD_SAHP_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --55
--[[56]]  { Name = "New SAHP EDWARD",       String = "OISS_SSA_VEHAUD_SAHP_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_SAHP_NEW_SOUNDSET"}, --56
--[[57]]  { Name = "Old SAHP HORN",         String = "OISS_SSA_VEHAUD_SAHP_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --57
--[[58]]  { Name = "Old SAHP ADAM",         String = "OISS_SSA_VEHAUD_SAHP_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --58
--[[59]]  { Name = "Old SAHP BOY",          String = "OISS_SSA_VEHAUD_SAHP_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --59
--[[60]]  { Name = "Old SAHP CHARLES",      String = "OISS_SSA_VEHAUD_SAHP_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --60
--[[61]]  { Name = "Old SAHP DAVID",        String = "OISS_SSA_VEHAUD_SAHP_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --61
--[[62]]  { Name = "Old SAHP EDWARD",       String = "OISS_SSA_VEHAUD_SAHP_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_SAHP_OLD_SOUNDSET"}, --62
--[[63]]  { Name = "Bike SAHP HORN",        String = "OISS_SSA_VEHAUD_SAHP_BIKE_HORN",            Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --63
--[[64]]  { Name = "Bike SAHP ADAM",        String = "OISS_SSA_VEHAUD_SAHP_BIKE_SIREN_ADAM",      Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --64
--[[65]]  { Name = "Bike SAHP BOY",         String = "OISS_SSA_VEHAUD_SAHP_BIKE_SIREN_BOY",       Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --65
--[[66]]  { Name = "Bike SAHP CHARLES",     String = "OISS_SSA_VEHAUD_SAHP_BIKE_SIREN_CHARLES",   Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --66
--[[67]]  { Name = "Bike SAHP DAVID",       String = "OISS_SSA_VEHAUD_SAHP_BIKE_SIREN_DAVID",     Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --67
--[[68]]  { Name = "Bike SAHP EDWARD",      String = "OISS_SSA_VEHAUD_SAHP_BIKE_SIREN_EDWARD",    Ref = "OISS_SSA_VEHAUD_SAHP_BIKE_SOUNDSET"}, --68
--[[69]]  { Name = "New NOOSE HORN",        String = "OISS_SSA_VEHAUD_NOOSE_NEW_HORN",            Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --69
--[[70]]  { Name = "New NOOSE ADAM",        String = "OISS_SSA_VEHAUD_NOOSE_NEW_SIREN_ADAM",      Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --70
--[[71]]  { Name = "New NOOSE BOY",         String = "OISS_SSA_VEHAUD_NOOSE_NEW_SIREN_BOY",       Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --71
--[[72]]  { Name = "New NOOSE CHARLES",     String = "OISS_SSA_VEHAUD_NOOSE_NEW_SIREN_CHARLES",   Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --72
--[[73]]  { Name = "New NOOSE DAVID",       String = "OISS_SSA_VEHAUD_NOOSE_NEW_SIREN_DAVID",     Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --73
--[[74]]  { Name = "New NOOSE EDWARD",      String = "OISS_SSA_VEHAUD_NOOSE_NEW_SIREN_EDWARD",    Ref = "OISS_SSA_VEHAUD_NOOSE_NEW_SOUNDSET"}, --74
--[[75]]  { Name = "Old NOOSE HORN",        String = "OISS_SSA_VEHAUD_NOOSE_OLD_HORN",            Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --75
--[[76]]  { Name = "Old NOOSE ADAM",        String = "OISS_SSA_VEHAUD_NOOSE_OLD_SIREN_ADAM",      Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --76
--[[77]]  { Name = "Old NOOSE BOY",         String = "OISS_SSA_VEHAUD_NOOSE_OLD_SIREN_BOY",       Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --77
--[[78]]  { Name = "Old NOOSE CHARLES",     String = "OISS_SSA_VEHAUD_NOOSE_OLD_SIREN_CHARLES",   Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --78
--[[79]]  { Name = "Old NOOSE DAVID",       String = "OISS_SSA_VEHAUD_NOOSE_OLD_SIREN_DAVID",     Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --79
--[[80]]  { Name = "Old NOOSE EDWARD",      String = "OISS_SSA_VEHAUD_NOOSE_OLD_SIREN_EDWARD",    Ref = "OISS_SSA_VEHAUD_NOOSE_OLD_SOUNDSET"}, --80
--[[81]]  { Name = "New FIB HORN",          String = "OISS_SSA_VEHAUD_FIB_NEW_HORN",              Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --81
--[[82]]  { Name = "New FIB ADAM",          String = "OISS_SSA_VEHAUD_FIB_NEW_SIREN_ADAM",        Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --82
--[[83]]  { Name = "New FIB BOY",           String = "OISS_SSA_VEHAUD_FIB_NEW_SIREN_BOY",         Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --83
--[[84]]  { Name = "New FIB CHARLES",       String = "OISS_SSA_VEHAUD_FIB_NEW_SIREN_CHARLES",     Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --84
--[[85]]  { Name = "New FIB DAVID",         String = "OISS_SSA_VEHAUD_FIB_NEW_SIREN_DAVID",       Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --85
--[[86]]  { Name = "New FIB EDWARD",        String = "OISS_SSA_VEHAUD_FIB_NEW_SIREN_EDWARD",      Ref = "OISS_SSA_VEHAUD_FIB_NEW_SOUNDSET"},  --86
--[[87]]  { Name = "Old FIB HORN",          String = "OISS_SSA_VEHAUD_FIB_OLD_HORN",              Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --87
--[[88]]  { Name = "Old FIB ADAM",          String = "OISS_SSA_VEHAUD_FIB_OLD_SIREN_ADAM",        Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --88
--[[89]]  { Name = "Old FIB BOY",           String = "OISS_SSA_VEHAUD_FIB_OLD_SIREN_BOY",         Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --89
--[[90]]  { Name = "Old FIB CHARLES",       String = "OISS_SSA_VEHAUD_FIB_OLD_SIREN_CHARLES",     Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --90
--[[91]]  { Name = "Old FIB DAVID",         String = "OISS_SSA_VEHAUD_FIB_OLD_SIREN_DAVID",       Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --91
--[[92]]  { Name = "Old FIB EDWARD",        String = "OISS_SSA_VEHAUD_FIB_OLD_SIREN_EDWARD",      Ref = "OISS_SSA_VEHAUD_FIB_OLD_SOUNDSET"},  --92
--[[93]]  { Name = "New RHPD HORN",         String = "OISS_SSA_VEHAUD_RHPD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --93
--[[94]]  { Name = "New RHPD ADAM",         String = "OISS_SSA_VEHAUD_RHPD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --94
--[[95]]  { Name = "New RHPD BOY",          String = "OISS_SSA_VEHAUD_RHPD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --95
--[[96]]  { Name = "New RHPD CHARLES",      String = "OISS_SSA_VEHAUD_RHPD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --96
--[[97]]  { Name = "New RHPD DAVID",        String = "OISS_SSA_VEHAUD_RHPD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --97
--[[98]]  { Name = "New RHPD EDWARD",       String = "OISS_SSA_VEHAUD_RHPD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_RHPD_NEW_SOUNDSET"}, --98
--[[99]]  { Name = "Old RHPD HORN",         String = "OISS_SSA_VEHAUD_RHPD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --99
--[[100]]  { Name = "Old RHPD ADAM",        String = "OISS_SSA_VEHAUD_RHPD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --100
--[[101]]  { Name = "Old RHPD BOY",         String = "OISS_SSA_VEHAUD_RHPD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --101
--[[102]]  { Name = "Old RHPD CHARLES",     String = "OISS_SSA_VEHAUD_RHPD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --102
--[[103]]  { Name = "Old RHPD DAVID",       String = "OISS_SSA_VEHAUD_RHPD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --103
--[[104]]  { Name = "Old RHPD EDWARD",      String = "OISS_SSA_VEHAUD_RHPD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_RHPD_OLD_SOUNDSET"}, --104
--[[105]]  { Name = "New DPPD HORN",        String = "OISS_SSA_VEHAUD_DPPD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --105
--[[106]]  { Name = "New DPPD ADAM",        String = "OISS_SSA_VEHAUD_DPPD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --106
--[[107]]  { Name = "New DPPD BOY",         String = "OISS_SSA_VEHAUD_DPPD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --107
--[[108]]  { Name = "New DPPD CHARLES",     String = "OISS_SSA_VEHAUD_DPPD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --108
--[[109]]  { Name = "New DPPD DAVID",       String = "OISS_SSA_VEHAUD_DPPD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --109
--[[110]]  { Name = "New DPPD EDWARD",      String = "OISS_SSA_VEHAUD_DPPD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_DPPD_NEW_SOUNDSET"}, --110
--[[111]]  { Name = "Old DPPD HORN",        String = "OISS_SSA_VEHAUD_DPPD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --111
--[[112]]  { Name = "Old DPPD ADAM",        String = "OISS_SSA_VEHAUD_DPPD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --112
--[[113]]  { Name = "Old DPPD BOY",         String = "OISS_SSA_VEHAUD_DPPD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --113
--[[114]]  { Name = "Old DPPD CHARLES",     String = "OISS_SSA_VEHAUD_DPPD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --114
--[[115]]  { Name = "Old DPPD DAVID",       String = "OISS_SSA_VEHAUD_DPPD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --115
--[[116]]  { Name = "Old DPPD EDWARD",      String = "OISS_SSA_VEHAUD_DPPD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_DPPD_OLD_SOUNDSET"}, --116
--[[117]]  { Name = "New LSIA HORN",        String = "OISS_SSA_VEHAUD_LSIA_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --117
--[[118]]  { Name = "New LSIA ADAM",        String = "OISS_SSA_VEHAUD_LSIA_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --118
--[[119]]  { Name = "New LSIA BOY",         String = "OISS_SSA_VEHAUD_LSIA_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --119
--[[120]]  { Name = "New LSIA CHARLES",     String = "OISS_SSA_VEHAUD_LSIA_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --120
--[[121]]  { Name = "New LSIA DAVID",       String = "OISS_SSA_VEHAUD_LSIA_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --121
--[[122]]  { Name = "New LSIA EDWARD",      String = "OISS_SSA_VEHAUD_LSIA_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSIA_NEW_SOUNDSET"}, --122
--[[123]]  { Name = "Old LSIA HORN",        String = "OISS_SSA_VEHAUD_LSIA_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --123
--[[124]]  { Name = "Old LSIA ADAM",        String = "OISS_SSA_VEHAUD_LSIA_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --124
--[[125]]  { Name = "Old LSIA BOY",         String = "OISS_SSA_VEHAUD_LSIA_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --125
--[[126]]  { Name = "Old LSIA CHARLES",     String = "OISS_SSA_VEHAUD_LSIA_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --126
--[[127]]  { Name = "Old LSIA DAVID",       String = "OISS_SSA_VEHAUD_LSIA_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --127
--[[128]]  { Name = "Old LSIA EDWARD",      String = "OISS_SSA_VEHAUD_LSIA_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSIA_OLD_SOUNDSET"}, --128
--[[129]]  { Name = "New LSPP HORN",        String = "OISS_SSA_VEHAUD_LSPP_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --129
--[[130]]  { Name = "New LSPP ADAM",        String = "OISS_SSA_VEHAUD_LSPP_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --130
--[[131]]  { Name = "New LSPP BOY",         String = "OISS_SSA_VEHAUD_LSPP_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --131
--[[132]]  { Name = "New LSPP CHARLES",     String = "OISS_SSA_VEHAUD_LSPP_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --132
--[[133]]  { Name = "New LSPP DAVID",       String = "OISS_SSA_VEHAUD_LSPP_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --133
--[[134]]  { Name = "New LSPP EDWARD",      String = "OISS_SSA_VEHAUD_LSPP_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSPP_NEW_SOUNDSET"}, --134
--[[135]]  { Name = "Old LSPP HORN",        String = "OISS_SSA_VEHAUD_LSPP_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --135
--[[136]]  { Name = "Old LSPP ADAM",        String = "OISS_SSA_VEHAUD_LSPP_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --136
--[[137]]  { Name = "Old LSPP BOY",         String = "OISS_SSA_VEHAUD_LSPP_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --137
--[[138]]  { Name = "Old LSPP CHARLES",     String = "OISS_SSA_VEHAUD_LSPP_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --138
--[[139]]  { Name = "Old LSPP DAVID",       String = "OISS_SSA_VEHAUD_LSPP_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --139
--[[140]]  { Name = "Old LSPP EDWARD",      String = "OISS_SSA_VEHAUD_LSPP_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSPP_OLD_SOUNDSET"}, --140
--[[141]]  { Name = "New LSFD HORN",        String = "OISS_SSA_VEHAUD_LSFD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --141
--[[142]]  { Name = "New LSFD ADAM",        String = "OISS_SSA_VEHAUD_LSFD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --142
--[[143]]  { Name = "New LSFD BOY",         String = "OISS_SSA_VEHAUD_LSFD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --143
--[[144]]  { Name = "New LSFD CHARLES",     String = "OISS_SSA_VEHAUD_LSFD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --144
--[[145]]  { Name = "New LSFD DAVID",       String = "OISS_SSA_VEHAUD_LSFD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --145
--[[146]]  { Name = "New LSFD EDWARD",      String = "OISS_SSA_VEHAUD_LSFD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSFD_NEW_SOUNDSET"}, --146
--[[147]]  { Name = "Old LSFD HORN",        String = "OISS_SSA_VEHAUD_LSFD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --147
--[[148]]  { Name = "Old LSFD ADAM",        String = "OISS_SSA_VEHAUD_LSFD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --148
--[[149]]  { Name = "Old LSFD BOY",         String = "OISS_SSA_VEHAUD_LSFD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --149
--[[150]]  { Name = "Old LSFD CHARLES",     String = "OISS_SSA_VEHAUD_LSFD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --150
--[[151]]  { Name = "Old LSFD DAVID",       String = "OISS_SSA_VEHAUD_LSFD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --151
--[[152]]  { Name = "Old LSFD EDWARD",      String = "OISS_SSA_VEHAUD_LSFD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_LSFD_OLD_SOUNDSET"}, --152
--[[153]]  { Name = "New LSCOFD HORN",      String = "OISS_SSA_VEHAUD_LSCOFD_NEW_HORN",           Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --153
--[[154]]  { Name = "New LSCOFD ADAM",      String = "OISS_SSA_VEHAUD_LSCOFD_NEW_SIREN_ADAM",     Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --154
--[[155]]  { Name = "New LSCOFD BOY",       String = "OISS_SSA_VEHAUD_LSCOFD_NEW_SIREN_BOY",      Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --155
--[[156]]  { Name = "New LSCOFD CHARLES",   String = "OISS_SSA_VEHAUD_LSCOFD_NEW_SIREN_CHARLES",  Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --156
--[[157]]  { Name = "New LSCOFD DAVID",     String = "OISS_SSA_VEHAUD_LSCOFD_NEW_SIREN_DAVID",    Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --157
--[[158]]  { Name = "New LSCOFD EDWARD",    String = "OISS_SSA_VEHAUD_LSCOFD_NEW_SIREN_EDWARD",   Ref = "OISS_SSA_VEHAUD_LSCOFD_NEW_SOUNDSET"}, --158
--[[159]]  { Name = "Old LSCOFD HORN",      String = "OISS_SSA_VEHAUD_LSCOFD_OLD_HORN",           Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --159
--[[160]]  { Name = "Old LSCOFD ADAM",      String = "OISS_SSA_VEHAUD_LSCOFD_OLD_SIREN_ADAM",     Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --160
--[[161]]  { Name = "Old LSCOFD BOY",       String = "OISS_SSA_VEHAUD_LSCOFD_OLD_SIREN_BOY",      Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --161
--[[162]]  { Name = "Old LSCOFD CHARLES",   String = "OISS_SSA_VEHAUD_LSCOFD_OLD_SIREN_CHARLES",  Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --162
--[[163]]  { Name = "Old LSCOFD DAVID",     String = "OISS_SSA_VEHAUD_LSCOFD_OLD_SIREN_DAVID",    Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --163
--[[164]]  { Name = "Old LSCOFD EDWARD",    String = "OISS_SSA_VEHAUD_LSCOFD_OLD_SIREN_EDWARD",   Ref = "OISS_SSA_VEHAUD_LSCOFD_OLD_SOUNDSET"}, --164
--[[165]]  { Name = "New BCFD HORN",        String = "OISS_SSA_VEHAUD_BCFD_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --165
--[[166]]  { Name = "New BCFD ADAM",        String = "OISS_SSA_VEHAUD_BCFD_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --166
--[[167]]  { Name = "New BCFD BOY",         String = "OISS_SSA_VEHAUD_BCFD_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --167
--[[168]]  { Name = "New BCFD CHARLES",     String = "OISS_SSA_VEHAUD_BCFD_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --168
--[[169]]  { Name = "New BCFD DAVID",       String = "OISS_SSA_VEHAUD_BCFD_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --169
--[[170]]  { Name = "New BCFD EDWARD",      String = "OISS_SSA_VEHAUD_BCFD_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_BCFD_NEW_SOUNDSET"}, --170
--[[171]]  { Name = "Old BCFD HORN",        String = "OISS_SSA_VEHAUD_BCFD_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --171
--[[172]]  { Name = "Old BCFD ADAM",        String = "OISS_SSA_VEHAUD_BCFD_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --172
--[[173]]  { Name = "Old BCFD BOY",         String = "OISS_SSA_VEHAUD_BCFD_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --173
--[[174]]  { Name = "Old BCFD CHARLES",     String = "OISS_SSA_VEHAUD_BCFD_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --174
--[[175]]  { Name = "Old BCFD DAVID",       String = "OISS_SSA_VEHAUD_BCFD_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --175
--[[176]]  { Name = "Old BCFD EDWARD",      String = "OISS_SSA_VEHAUD_BCFD_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_BCFD_OLD_SOUNDSET"}, --176
--[[177]]  { Name = "New SanFire HORN",     String = "OISS_SSA_VEHAUD_SANFIRE_NEW_HORN",          Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --177
--[[178]]  { Name = "New SanFire ADAM",     String = "OISS_SSA_VEHAUD_SANFIRE_NEW_SIREN_ADAM",    Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --178
--[[179]]  { Name = "New SanFire BOY",      String = "OISS_SSA_VEHAUD_SANFIRE_NEW_SIREN_BOY",     Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --179
--[[180]]  { Name = "New SanFire CHARLES",  String = "OISS_SSA_VEHAUD_SANFIRE_NEW_SIREN_CHARLES", Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --180
--[[181]]  { Name = "New SanFire DAVID",    String = "OISS_SSA_VEHAUD_SANFIRE_NEW_SIREN_DAVID",   Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --181
--[[182]]  { Name = "New SanFire EDWARD",   String = "OISS_SSA_VEHAUD_SANFIRE_NEW_SIREN_EDWARD",  Ref = "OISS_SSA_VEHAUD_SANFIRE_NEW_SOUNDSET"}, --182
--[[183]]  { Name = "Old SanFire HORN",     String = "OISS_SSA_VEHAUD_SANFIRE_OLD_HORN",          Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --183
--[[184]]  { Name = "Old SanFire ADAM",     String = "OISS_SSA_VEHAUD_SANFIRE_OLD_SIREN_ADAM",    Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --184
--[[185]]  { Name = "Old SanFire BOY",      String = "OISS_SSA_VEHAUD_SANFIRE_OLD_SIREN_BOY",     Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --185
--[[186]]  { Name = "Old SanFire CHARLES",  String = "OISS_SSA_VEHAUD_SANFIRE_OLD_SIREN_CHARLES", Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --186
--[[187]]  { Name = "Old SanFire DAVID",    String = "OISS_SSA_VEHAUD_SANFIRE_OLD_SIREN_DAVID",   Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --187
--[[188]]  { Name = "Old SanFire EDWARD",   String = "OISS_SSA_VEHAUD_SANFIRE_OLD_SIREN_EDWARD",  Ref = "OISS_SSA_VEHAUD_SANFIRE_OLD_SOUNDSET"}, --188
--[[189]]  { Name = "New SAMS HORN",        String = "OISS_SSA_VEHAUD_SAMS_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --189
--[[190]]  { Name = "New SAMS ADAM",        String = "OISS_SSA_VEHAUD_SAMS_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --190
--[[191]]  { Name = "New SAMS BOY",         String = "OISS_SSA_VEHAUD_SAMS_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --191
--[[192]]  { Name = "New SAMS CHARLES",     String = "OISS_SSA_VEHAUD_SAMS_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --192
--[[193]]  { Name = "New SAMS DAVID",       String = "OISS_SSA_VEHAUD_SAMS_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --193
--[[194]]  { Name = "New SAMS EDWARD",      String = "OISS_SSA_VEHAUD_SAMS_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_SAMS_NEW_SOUNDSET"}, --194
--[[195]]  { Name = "Old SAMS HORN",        String = "OISS_SSA_VEHAUD_SAMS_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --195
--[[196]]  { Name = "Old SAMS ADAM",        String = "OISS_SSA_VEHAUD_SAMS_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --196
--[[197]]  { Name = "Old SAMS BOY",         String = "OISS_SSA_VEHAUD_SAMS_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --197
--[[198]]  { Name = "Old SAMS CHARLES",     String = "OISS_SSA_VEHAUD_SAMS_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --198
--[[199]]  { Name = "Old SAMS DAVID",       String = "OISS_SSA_VEHAUD_SAMS_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --199
--[[200]]  { Name = "Old SAMS EDWARD",      String = "OISS_SSA_VEHAUD_SAMS_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_SAMS_OLD_SOUNDSET"}, --200
--[[201]]  { Name = "USFS HORN",            String = "OISS_SSA_VEHAUD_USFS_NEW_HORN",             Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --201
--[[202]]  { Name = "USFS ADAM",            String = "OISS_SSA_VEHAUD_USFS_NEW_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --202
--[[203]]  { Name = "USFS BOY",             String = "OISS_SSA_VEHAUD_USFS_NEW_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --203
--[[204]]  { Name = "USFS CHARLES",         String = "OISS_SSA_VEHAUD_USFS_NEW_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --204
--[[205]]  { Name = "USFS DAVID",           String = "OISS_SSA_VEHAUD_USFS_NEW_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --205
--[[206]]  { Name = "USFS EDWARD",          String = "OISS_SSA_VEHAUD_USFS_NEW_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_USFS_NEW_SOUNDSET"}, --206
--[[207]]  { Name = "USFS HORN",            String = "OISS_SSA_VEHAUD_USFS_OLD_HORN",             Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --207
--[[208]]  { Name = "USFS ADAM",            String = "OISS_SSA_VEHAUD_USFS_OLD_SIREN_ADAM",       Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --208
--[[209]]  { Name = "USFS BOY",             String = "OISS_SSA_VEHAUD_USFS_OLD_SIREN_BOY",        Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --209
--[[210]]  { Name = "USFS CHARLES",         String = "OISS_SSA_VEHAUD_USFS_OLD_SIREN_CHARLES",    Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --210
--[[211]]  { Name = "USFS DAVID",           String = "OISS_SSA_VEHAUD_USFS_OLD_SIREN_DAVID",      Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --211
--[[212]]  { Name = "USFS EDWARD",          String = "OISS_SSA_VEHAUD_USFS_OLD_SIREN_EDWARD",     Ref = "OISS_SSA_VEHAUD_USFS_OLD_SOUNDSET"}, --212
--[[213]]  { Name = "Misc. ADAM",           String = "OISS_SSA_VEHAUD_ETC_ADAM",                  Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --213
--[[214]]  { Name = "Misc. BOY",            String = "OISS_SSA_VEHAUD_ETC_BOY",                   Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --214
--[[215]]  { Name = "Misc. CHARLES",        String = "OISS_SSA_VEHAUD_ETC_CHARLES",               Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --215
--[[216]]  { Name = "Misc. DAVID",          String = "OISS_SSA_VEHAUD_ETC_DAVID",                 Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --216
--[[217]]  { Name = "Misc. EDWARD",         String = "OISS_SSA_VEHAUD_ETC_EDWARD",                Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --217
--[[218]]  { Name = "Misc. FRANK",          String = "OISS_SSA_VEHAUD_ETC_FRANK",                 Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --218
--[[219]]  { Name = "Misc. GEORGE",         String = "OISS_SSA_VEHAUD_ETC_GEORGE",                Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --219
--[[220]]  { Name = "Misc. HENRY",          String = "OISS_SSA_VEHAUD_ETC_HENRY",                 Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --220
--[[221]]  { Name = "Misc. IDA",            String = "OISS_SSA_VEHAUD_ETC_IDA",                   Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --221
--[[222]]  { Name = "Misc. JOHN",           String = "OISS_SSA_VEHAUD_ETC_JOHN",                  Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --222
--[[223]]  { Name = "Misc. KING",           String = "OISS_SSA_VEHAUD_ETC_KING",                  Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --223
--[[224]]  { Name = "Misc. LINCOLN",        String = "OISS_SSA_VEHAUD_ETC_LINCOLN",               Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --224
--[[225]]  { Name = "Misc. MARY",           String = "OISS_SSA_VEHAUD_ETC_MARY",                  Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --225
--[[226]]  { Name = "Misc. NANCY",          String = "OISS_SSA_VEHAUD_ETC_NANCY",                 Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --226
--[[227]]  { Name = "Misc. OCEAN",          String = "OISS_SSA_VEHAUD_ETC_OCEAN",                 Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --227
--[[228]]  { Name = "Misc. PAUL",           String = "OISS_SSA_VEHAUD_ETC_PAUL",                  Ref = "OISS_SSA_VEHAUD_ETC_SOUNDSET"}, --228
}
```

</details>

<details>

<summary>WM-ServerSiren Example</summary>

[View Raw / View in New Tab](https://pastebin.com/raw/nurDwSDX)

```lua title="SIRENS.lua > SIRENS Table"
SIRENS = {
--[[1]]  { Name = "Airhorn", String = "SIRENS_AIRHORN", Ref = 0 }, --1
--[[2]]  { Name = "Wail",         String = "VEHICLES_HORNS_SIREN_1", Ref = 0 }, --2
--[[3]]  { Name = "Yelp",         String = "VEHICLES_HORNS_SIREN_2", Ref = 0 }, --3
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
-- START OF WM-SERVERSIRENS --
--[[15]]  { Name = "Example Tone", String = "SIREN_ALPHA", Ref = "DLC_WMSIRENS_SOUNDSET" }, --15
--[[16]]  { Name = "Siren Bravo", String = "SIREN_BRAVO", Ref = "DLC_WMSIRENS_SOUNDSET" }, --16
--[[17]]  { Name = "Custom C",         String = "SIREN_CHARLIE", Ref = "DLC_WMSIRENS_SOUNDSET" }, --17
--[[18]]  { Name = "Yelp",         String = "SIREN_DELTA", Ref = "DLC_WMSIRENS_SOUNDSET" }, --18
--[[19]]  { Name = "Priority",         String = "SIREN_ECHO",         Ref = "DLC_WMSIRENS_SOUNDSET" }, --19
--[[20]]  { Name = "Siren 3",         String = "SIREN_FOXTROT", Ref = "DLC_WMSIRENS_SOUNDSET" }, --20
--[[21]]  { Name = "Yelp",         String = "SIREN_GOLF",         Ref = "DLC_WMSIRENS_SOUNDSET" }, --21
--[[22]]  { Name = "Custom H",         String = "SIREN_HOTEL", Ref = "DLC_WMSIRENS_SOUNDSET" }, --22
}
```

</details>

- To replace tones change the **`String`** to the desired siren string `SIREN_XXXX` or `OISS_SSA_XXXX` and the **`Ref`** to `DLC_WMSIRENS_SOUNDSET` or `OISS_SSA_VEHAUD_XXXX`.\
  ⚠️ _This is not recommended. Instead, consider managing the use of default tones by removing them from SIREN_ASSIGNEMENTS if so desired._

### Troubleshooting

First, to determine if it is a LVC or AWC issue use the Server Side Audio Tester, follow readme on configuration.

- If it works in SSAT then it is an LVC configuration error, verify your audio banks, strings, and refs for typos.
- If it does not work in SSAT, it is likely your AWC is corrupt, too large, or has a tone that is too large. Try "balancing" tone sizes across multiple AWCs use empty wav files to fill empty tone slots.

[Server Side Audio Tester Github](https://github.com/TrevorBarns/Server-Side-Audio-Tester)

### Example Siren Pack

[Siren Mega Pack (4 police + 1 Fire Rescue Siren)](<https://github.com/TrevorBarns/luxart-vehicle-control-extras/tree/master/Siren%20Packs/Server%20Sided%20Mega%20Pack%20A%20(5%2B1)>)
