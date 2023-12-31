---
title: "Viewing and Exporting Models"
---

:::info
This page assumes you have already dumped and extracted all of the files from your copy of the supported Xenoblade game(s).
:::

## What You Need

- The latest version of [BrawlCrate](https://github.com/soopercool101/BrawlCrate/releases/) (models)
OR
- The latest version of [BRRESViewer](https://gamebanana.com/tools/download/6293) (models + animations)

## Instructions

### Section I.1 - Extracting Assets using BrawlCrate
### Section I.2 - Extracting Assets using BRRESViewer

<!-- 
Brresviewer takes brres, kyp, and mca. A model must be loaded to preview animations.
File/Export All Files lets you extract the model, textures, and animations.(PSK and PSA are preferred)
DN UnPSA Toolkit is also strongly recommended, as it lets you combine the PSA files which contain only one animation into a PSA that holds multiple animations. Extremely helpful when porting animations to other 3d engines.
DN UnPSA Toolkit[https://www.fileplanet.com/archive/p-64806/Unreal-Tournament-DN-UnPSA-Toolkit-v0-38b]

Translating to modern files
If you have access to 3ds Max, it is recommended to use it when processing psk and psa files. If not, Blender also works.
Blender Plugin[https://github.com/Befzz/blender3d_import_psk_psa]
3ds Max Plugin[https://www.gildor.org/projects/unactorx]
For 3ds Max, its as simple as launching the script, importing the respective PSK and PSA, and loading the animations.
Then Batch Export, tick multi-take FBX box, and export animations. Youd also might need to fix the model normals.
For Blender, its less streamlined, but still works. Simple import/export options for PSK and PSA. Not much to say.

Extracting map models from Xenoblade 1(Wii)
Use brresviewer to open the MAP file, then you can export as psk/obj(doesn't matter since no animations).
Then import into 3ds Max/Blender & export if using psk. Don't expect the maps to contain a lot, majority of objects are stored elsewhere/inaccesable. -->
