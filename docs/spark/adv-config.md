---
sidebar_position: 5
description: Debugging and advanced configuration functionality
---

# Advanced Configuration

## Debug Mode

To temporarily toggle _debug mode_ use chat command `/lvcdebug` this resets on resource restart. For persistent debug mode use convar below.

### **Resource Convars (fxmanifest.lua)**

- `debug_mode` increases console logging for client, prints \<gameName> of vehicle if no profile was found.

:::info
Changing covars require the `refresh` command to be ran first, then restart the resource for changes to take effect.
:::

## Custom HUD

### Custom Graphics

The in game siren controller display or heads-up-display UI can be modified to your liking, you will need an understanding of HTML, Javascript, and NUI.\
You can also change the menu banner image within the `stream` folder and the `spark.ytd`.\
_Support is minimally provided for both of these._

### Move Default HUD location

All HUD related functions/code is located in the UI folder. The default position of the HUD is set in `UI/html/style.css`.\
Keep in mind users can change the position and scale in-game via the menu, so these are just the default values

```css title="Default UI"
#sirenbox {
	display: none;
	position: absolute;
	overflow: hidden;
	width: 602px;
	height: 161px;
	left: 0%;
	top: 68%;
	transform-origin: left top;
	transform: scale(0.6);
	background-image: url('../controllers/default/background.png');
}
```

```css title="Custom Controller"
#whelen-gw {
	display: none;
	position: absolute;
	overflow: hidden;
	width: 848px;
	height: 448px;
	right: 1.5%;
	top: 68%;
	transform-origin: right top;
	transform: scale(0.5);
	background-image: url('../controllers/whelen-gw/main_ui.png');
}
```

**The relevant attributes are: _left_, _right_, _top_, and _transform-origin_.**

- _left_ determines how far in percentage of the screen resolution should the HUD be placed from the left edge. _Default UI looks best on the left._
- _right_ determines how far in percentage of the screen resolution should the HUD be placed from the right edge. _Custom Controllers look better on the right._
- _top_ determines how far down from the top the HUD should be placed.
- _transform-origin_ attribute determines which way the HUD should expand on size adjustment. For a bottom right aligned HUD you would want the transform-origin to be `right bottom`. This ensures that the HUD does not expand outside of the screen space.

## Custom Audio Schemes

Custom front end sound effects can be added. Create a new folder in `/UI/sounds` with the desired name of your scheme.

:::warning
Sound scheme names cannot have any spaces in them.
:::

Add scheme name to `button_sfx_scheme_choices` in `SETTINGS.lua`.
