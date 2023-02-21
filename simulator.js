// Use the volume name in the file name when downloading.  If the volume name includes a character not supported by your filesystem, you can manually enter something here.
const volumeName = document.title

// Delay time in miliseconds.  If you get blank images, increase this number and try again.  The higher the number, the slower the volume will take to fully download.
const delayTime = 2000

// Do not modify code beyond this line unless you know what you are doing.

// Function for delaying code for a set amount of time.
const delay = ms => new Promise(res => setTimeout(res, ms))

// Track which images have already been downloaded.  This prevents downloading the same image multiple times.
const downloadedPages = []

// Download a single image from a canvas.
function DownloadPage(canvas) {
    if (downloadedPages.includes(canvas.parentElement.id)) {
        return
    }
    const fileName = `${volumeName} ${canvas.parentElement.id.replace('wideScreen', ' Page ')}.png`
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    const downloadLink = document.createElement("a")
    downloadLink.href = image
    downloadLink.download = fileName
    downloadLink.click()
    // Remember that this image has been downloaded.
    downloadedPages.push(canvas.parentElement.id)
}


// Determine how many pages are expected.
const pageCount = document.querySelector('#pageSliderCounter').textContent.split('/')[1]

// Loops through canvases until all expected images have downloaded.
while (downloadedPages.length < pageCount) {

    // Grab all available canvases.
    const canvases = document.querySelectorAll("canvas.default")

    // Track how many images are downloaded this iteration.
    let downloadedImageCount = 0
    for (let canvas of canvases) {
        canvas.scrollIntoView()

        if (downloadedPages.includes(canvas.parentElement.id)) {
            continue
        }

        // Wait for image to load.
        await delay(delayTime);

        DownloadPage(canvas)
        downloadedImageCount += 1
    }

    // If no images were downloaded, then likely all images are downloaded, and the loop can be exited.  This situation shouldn't occur, but is here just in case.
    if (0 == downloadedImageCount) {
        console.log("Downloading complete!")
        break
    }

}
