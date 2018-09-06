const homeText = `
# Welcome to UserLAnd

The easiest way to run a Linux distribution or application on Android.

## Features:

* Run full linux distros or specific applications on top of Android.
* Install and uninstall like a regular app.
* No root required.

## How to get started:

* Define a session - This describes what filesystem you are going to use, what server you want to run (ssh or vnc), and how you want to connect to it (ConnectBot or bVNC).
* Define a filesystem while defining a session - This describes what distro or application you want to install (only supports debian, but more coming soon).
* Once defined, just tap on the session to start up. This will download necessary assets, setup the filesystem, start the server, and connect to it. This will take several minutes for the first start up, but will be quicker afterwards.

A normal first session might look like this:

* sudo apt update <- sudo or su because you are not fake root initially, update because you need to do this
* sudo apt install wget <- install whatever you want to use
* wget https://google.com <- use it

But, you can do so much more than that...your phone is not just a play thing anymore.

This app is fully open source. You can find our code and file issues [here](https://github.com/CypherpunkArmory/UserLAnd/).
`;

export default homeText;