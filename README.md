# USB File Sorter

My car stereo supports playing mp3 files off of a USB thumbdrive. Unfortunately,
it doesn't always sort files and folders alphabetically. Instead, it sorts them
based on the order they were put onto the drive. Some internet searching reveals
I am not the only person with this problem: [1], [2], [3].

This is a little script that I use to solve the problem. It's pretty simple and
could be extended with more features and a GUI, etc. I just wanted to upload it
for posterity and in hopes that it might help someone else with the same
problem.

## Usage

Install [Node.js].

1. Delete all the files from your USB drive.
2. Change `sourcePath` and `destPath` to appropriate folders for your computer.
3. Run `node app.js` and wait as the files are copied over.

## Future Features

* GUI
* Pass command-line arguments instead of hard-coding constants
* Do the re-ordering without having to delete everything and copying (I'm not
  sure if this is even possible, but would be worth looking into)
* Visual feedback as the files are copied over

## Car Stereo Models

This list is of car stereo models that need the fix. Useful for SEO when people
are searching for their model number.

* Pioneer AVH-P2400BT
* 2012 Honda Civic Factory Radio CD Player 39100-TR0-A81

Send a PR or [open an issue] with your model number to add it to this list.

## License

[ISC License]

[1]:http://www.murraymoffatt.com/software-problem-0010.html
[2]:http://avic411.com/index.php?/topic/37189-track-ordering-broken-on-usb-and-sd-media/
[3]:http://community.crutchfield.com/car_audio_and_video/f/27/receivers/t/25024/how-should-i-structure-audio-files-on-usb-drive-for-playback-on-pioneer-avh-p3400bh-head-unit
[Node.js]:http://nodejs.org
[open an issue]:https://github.com/oakmac/usb-file-sorter/issues
[ISC License]:LICENSE.md
