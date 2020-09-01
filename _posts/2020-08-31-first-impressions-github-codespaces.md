---
layout: post
title: First impressions of Github Codespaces
author: sam
img: /aristotle/images/blog/codespaces/codespaces-jekyll.png
thumbnail: /aristotle/images/blog/codespaces/codespaces-jekyll.png
---

Github recently launched their new [Github codespaces](https://github.com/features/codespaces) service - an online, in-browser Integrated Development Environment powered by [Visual Studio Code](https://code.visualstudio.com/). This environment allows someone to quickly load a virtual machine and a complete code editing interface, that is all accessible within the browser without having to install anything on the users machine. If you are familiar with products like [Amazon Web Services's Cloud 9 IDE] (https://aws.amazon.com/cloud9/) or its predecessor C9.io this will probably feel very familiar.

As one of the lucky few who were given access to the GitHub Codespaces beta program I had the opportunity to test it out and offer my thoughts below.

## First impressions
There were a few small changes that needed to be done to the [Aristotle Metadata home page](https://github.com/Aristotle-Metadata-Enterprises/aristotlemetadata.com/), (including making this blogpost) and it was dead easy opening a Codespace to start working. This website is a basic [Jekyll](https://jekyllrb.com/) static site, so it offers a basic test of whats available in Codespaces already. Loading a codespace took about a minute, which is comparable to AWS Cloud9 . As someone who used Cloud9 when it was C9.io, Codespaces reminded me a lot of that - its a simple way to open an editor and a virtual machine for a GitHub project. Opening a code space for a project is literally as easy as GitHub says - click "Open in Codespace" on a repository and it does the rest - no need to configuring or decommission a server, its all handled for you.

![How to open Codespaces](/aristotle/images/blog/codespaces/codespaces-opening-project.png "How to open Codespaces")

The [documentation for Codespaces](https://docs.github.com/en/github/developing-online-with-codespaces/about-codespaces) is also great. Whats i didn't know is that GitHub can also [load your dotfiles directly into each new Codespace](https://docs.github.com/en/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account), so your preferences (`.bashrc` and similar files) will follow you across Codespaces.


## Editing files
Being based on Visual Studio Code, **Yes, Codespaces has a Dark Mode**.

![Default Codespaces Editor](/aristotle/images/blog/codespaces/codespaces-dark-editor.png "Default Codespaces Editor")

Although if you are using different browsers to open your workspace (which I had to do for reasons below), your colour scheme preferences won't follow you across browsers. I'm not a regular user of Visual Studio Code, but it seems to includes all the standard features you expect from a browser, such as syntax highlighting, VIm and Emac keybindings (which work very well in browser), and autosave which is enabled by default, and I promptly disabled.

You can also drag-and-drop files from your local machine into Codespaces filesystem, and preview and edit certain non-text files in the browser, such as images, both of which are really handy for web development.

## Terminal emulator
Codespaces includes a powerful terminal editor that seems to be based on a stock Debian image. The only thing I didn't like is that separate terminals are accessed using a dropdown instead of with tabs, but this is a minor detail.

**Big news: Docker is here**, and it works well.

![Docker in Codespaces](/aristotle/images/blog/codespaces/codespaces-docker.png "Docker in Codespaces")

One of my biggest issues with C9.io was the lack of Docker support, which was solved when AWS bought Cloud9 but comes with the extra complexity of configuring your Amazon machine. So being able to simply run Docker in the browser is great. Docker-compose isn't installed by default, and I haven't had a chance to see how that works.

The only issue I found with the terminal emulator was you can only paste with right-click into Chromium-based browsers like Chrome or Edge, *Firefox users beware*.

## Serving sites
[Codepsaces does a great job of handling port forwarding for you ](https://docs.github.com/en/github/developing-online-with-codespaces/developing-in-a-codespace), so you can simply start you server process (on a non-Port 80 port) and if GitHub detects a `localhost:PORT` combination it makes it accessible for you by clicking on the URL, as shown below:

![Jekyll in Codespaces](/aristotle/images/blog/codespaces/codespaces-jekyll.png "Jekyll in Codespaces")

Loading and reloading Jekyll was fast, and by the time I clicked the forwarded link or switched tabs to preview changes to the site, it was already refreshed. 
~~**However, this is another Chromium-only feature the clikcable port forward links don't work in Firefox**~~  this seems to be fixed now in Firefox.

One other minor issue is you can't open your site in a private window or different browser to view the server without logging into GitHub. This isn't a huge issue, but if you are trying to view what your site looks like under different browser or when logged out it can be troublesome.

![Aristotle Home Page in Codespaces](/aristotle/images/blog/codespaces/codespaces-final-site.png "Aristotle Home Page in Codespaces")

## Final thoughts

**This is amazing** and may start to become my default IDE - as a co-founder who is spending less time as a developer, and more time in meetings, writing emails, strategy papers, letters and tenders, *this is just amazing*! Most of my daily tools are Windows based, so I've been spending a lot of time getting Windows Subsystem for Linux working alongside the rest of my daily workflow, which comes with its own headaches. So being able to quickly checkout a branch, make changes and take some load of my local machine seems very promising.

There are a lot of features here to review that I haven't had a chance to look at, including collaborative workspaces, Git integration and connecting with a local version of Visual Studio, but from a quick glance everything works smoothly.

Overall, its an extremely quick way to get started on a project, and I look forward to writing an update after I've had a chance getting the Aristotle Metadata Registry software, with all its many dependencies, running in codespaces under Docker-compose.

Discuss this post on our community forum: https://aristotle.trydiscourse.com/
