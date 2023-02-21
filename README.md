# BookWalker Screenshot Simulator

This code is a proof-of-concept.

The idea was to be able to back-up BookWalker purchases and to be able to run them through Mokuro.

However, because of the need to crop images (an extra step) and because the original JPEG image files are not accessible as they are when buying from Kobo or Amazon, I decided to stick with buying manga through Kobo.

## Software Requirements

This has only been tested on Chromium.  It should work on all Chromium-based browsers, including Google Chrome and Microsoft Edge.  It has not been tested on Firefox, but may work on Firefox as well.

## Setup

Before running this, certain settings are required.

Open the volume you want to save a back-up copy of.

Click on the cover image to display the menu.

Select the gear icon at the top-left to bring up the settings menu.

For "Page Moving Direction", select "Vertical".

Open the browser's console.  In Chromium, you can press Ctrl+Shift+I, then click on the "Console" option between "Elements" and "Sources".

## Code Limitations

This is is designed to be used from a Javascript console.  It should simple to extend it to display a button to click to initiate download, and then put into an extension such as Tampermonkey.

Settings are written directly into the code.

It should be simple to extend the code to detect whether the direction is set to vertical or hortizontal, but I have only implemented support for vertical.

BookWalker's canvas for displaying images is designed for showing two pages side-by-side.  The consequence for saving single-page images is that they will have white bars padding the left and right sides of pages.  You can use bulk image editing software to remove these.

If BookWalker updates their website's HTML, this code may cease to function.

## How to Use

Ensure you are on the cover image of your purchased manga or a free preview.

*Warning: If you are scrolled down to a later page, earlier images will be skipped.*

Paste the Javascript code into the console, then press Enter.

Every two seconds, an image download then move to the next image.

The time between images is required to ensure images load before being saved.  If blank images are being saved, change the "delayTime" variable before to a larger number, such as 3000 for three seconds.

Wait for volume to complete saving.
