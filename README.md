# BookWalker Screenshot Simulator

This UserScript saves images of the canvas pages from BookWalker, similar to manually taking screenshots of the pages.

The use case is to create backups of BookWalker purchases and run them through Mokuro.

There is no support for cropping the saved images, so that needs to be done separately if desired.

## Software Requirements

This has only been tested on Chromium.  It should work on all Chromium-based browsers, including Google Chrome and Microsoft Edge.  It has not been tested on Firefox, but it may work on Firefox as well.

## Setup

This is a UserScript, so you will need to install an extension such as TamperMonkey and install it there.

Open the volume you want to save a backup copy of.

If the "Page Transition" or "Spread Double" shows an error message, change the reader settings:

* Click on the cover image to display the menu.
* Select the gear icon at the top-left to bring up the settings menu.
* For "Page Moving Direction", select "Vertical".

If the "Current Page" shows a message saying "scroll to page 1", press the Home key on your keyboard.

## How to Use

Select "Download Volumes" from the user interface.

The extension will start downloading images.

The browser may display a window saying BookWalker wants to download multiple files.  Accept this to make sure the download continues smoothly.

Every two seconds, an image is downloaded and then moved to the next one.

The time between images is required to ensure images load before being saved.  If blank images are being saved, change the "Delay Time (seconds)" variable to a larger value, such as 3 seconds.

Wait for the volume to complete saving.

## Code Limitations

A delay between images is required because images are displayed on a canvas, and there is no DOM event to know when an image has been displayed on a canvas.

BookWalker's canvas for displaying images is designed to show two pages side by side.  The consequence of saving single-page images is that they will have white bars padding the left and right sides of the pages.  You can use bulk image editing software to remove these.

If BookWalker updates its website's HTML, this code may cease to function.
