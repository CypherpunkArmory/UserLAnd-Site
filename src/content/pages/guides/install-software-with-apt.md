---
title: "How to install Linux software on Android"
description: "Install any Linux package on Android with apt, pacman, apk or dnf inside UserLAnd. Commands for Ubuntu, Debian, Kali, Arch, Alpine and Fedora."
apps: [userland]
answer: "Start a distribution in <strong>UserLAnd</strong>, then use its package manager: <code>sudo apt install &lt;package&gt;</code> on Ubuntu, Debian and Kali, <code>sudo pacman -S</code> on Arch, <code>sudo apk add</code> on Alpine, and <code>sudo dnf install</code> on Fedora. It works just like on a PC, with no root needed on Android."
order: 20
steps:
  - name: "Start a session"
    text: "Open UserLAnd and tap your distribution on the Apps tab, or reconnect from the Sessions tab."
  - name: "Refresh the package list"
    text: "On Ubuntu, Debian or Kali, run <code>sudo apt update</code>. The password is the Linux password you chose during setup."
  - name: "Install what you need"
    text: "For example, <code>sudo apt install git python3 build-essential</code>."
  - name: "Run it"
    text: "Command-line programs run in the terminal. Graphical programs appear when you're connected through a Graphical (VNC) session."
faq:
  - q: "Why does sudo ask for a password?"
    a: "It's the Linux password you set when you created the filesystem in UserLAnd, not your Android PIN."
  - q: "Can I compile software?"
    a: "Yes. Install a compiler (<code>build-essential</code> on Debian-based systems) and build as usual. Large builds are slower on a phone than on a PC."
  - q: "Some programs fail with permission or kernel errors. Why?"
    a: "Standard mode runs on Android's kernel without root, so software that needs kernel modules, raw sockets or systemd may not work. VM mode (UserLAnd Pro, on supported devices) runs a full Linux kernel."
related: [linux/how-to-run-linux-on-android, guides/run-linux-apps-free-with-userland, linux/virtual-machine-on-android]
---

## Package manager cheat sheet

| Distribution | Update | Install | Search |
|---|---|---|---|
| Ubuntu, Debian, Kali | `sudo apt update` | `sudo apt install git` | `apt search git` |
| Arch | `sudo pacman -Syu` | `sudo pacman -S git` | `pacman -Ss git` |
| Alpine | `sudo apk update` | `sudo apk add git` | `apk search git` |
| Fedora | `sudo dnf upgrade` | `sudo dnf install git` | `dnf search git` |
