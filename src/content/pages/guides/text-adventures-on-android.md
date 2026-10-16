---
title: "How to play classic text adventures on Android for free"
description: "Play Colossal Cave Adventure and other classic interactive fiction free on Android in a Linux terminal with UserLAnd, bsdgames and frotz."
apps: [userland, zmachine]
answer: "Install <strong>UserLAnd</strong> (free), set up <strong>Debian</strong> with a <strong>Terminal</strong> connection, and run <code>sudo apt install bsdgames frotz</code>. Type <code>adventure</code> to play Colossal Cave Adventure, or use <code>frotz</code> to play Infocom-format story files. For the Zork series ready to play, see Z-Machine."
order: 30
steps:
  - name: "Install UserLAnd"
    text: "Get UserLAnd free from Google Play."
  - name: "Set up Debian in a terminal"
    text: "On the <strong>Apps</strong> tab, tap <strong>Debian</strong>, enter a username and password, and choose <strong>Terminal</strong>."
  - name: "Install the games"
    text: "Run <code>sudo apt update && sudo apt install bsdgames frotz</code>."
  - name: "Play Colossal Cave Adventure"
    text: "Type <code>adventure</code>. Then try commands such as <code>look</code>, <code>take lamp</code> or <code>go north</code>."
  - name: "Play other interactive fiction"
    text: "Download a story file (<code>.z5</code>, <code>.z8</code> and similar) and run <code>frotz</code> followed by its file name. The Interactive Fiction Archive has thousands of free games."
faq:
  - q: "What is Colossal Cave Adventure?"
    a: "The first text adventure, from the 1970s. It inspired Zork, including its maze of twisty little passages."
  - q: "Can I play Zork this way?"
    a: "frotz plays Zork story files if you have them. To play Zork I, II and III, Beyond Zork, Zork Zero and Return to Zork without finding any files, use <a href=\"/games/zork/\">Z-Machine</a>."
related: [games/zork, guides/install-software-with-apt, games/oregon-trail]
---
