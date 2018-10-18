const homeText = `
# Welcome to UserLAnd

The easiest way to run a GNU/Linux distribution or application on Android.

## Features:

* Run full GNU/Linux distributions or specific applications on top of Android.
* Install and uninstall like a regular app.
* No root required.

## How to get started:

* Define a session &mdash; This describes what filesystem you are going to use, what server you want to run (SSH, VNC, etc), and how you want to connect to it (ConnectBot or bVNC).
* Define a filesystem while defining a session &mdash; This describes what distribution or application you want to install (only supports Debian GNU/Linux, but more coming soon).
* Once defined, just tap on the session to start up. This will download necessary assets, setup the filesystem, start the server, and connect to it. This will take several minutes for the first start up, but will be quicker afterwards.

A normal first session might look like this:

* sudo apt update <- sudo or su because you are not fake root initially, update because you need to do this
* sudo apt install wget <- install whatever you want to use
* wget http://www.debian.org/ <- use it

But, you can do so much more than that... your phone is not just a play thing anymore.

This app is 100% free and open source software under the MIT/Expat license. Please [download our source code and file issues](https://github.com/CypherpunkArmory/UserLAnd/).`; at GitHub

export default homeText;
