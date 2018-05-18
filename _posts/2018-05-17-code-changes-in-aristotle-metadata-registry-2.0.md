---
layout: post
title: Code management changes to the Aristotle Metadata Registry in version 2.0
author: sam
---

# Code management changes to the Aristotle Metadata Registry in version 2.0

The largest change to Aristotle MDR in version 2.0 is moving to a [mono-repo](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/) to manage both the core Aristotle MDR code and all related extensions in a single managed Git repository. This change makes it easier for us to version extensions and set dependencies of related code. By managing the Aristotle ecosystem as a single repository, we can clearly communicate to ourselves and to our developer community which extensions are compatible with the main Aristotle MDR system.

Open-source developers are still free to create community managed extensions, and declare which versions of Aristotle they are compatible with, and this change make it easier for those dependencies to be manged especially if they rely on multiple Aristotle components.

For example, if a developer extended the Aristotle API they can set their dependencies to version 2.0 of Aristotle and know they will be getting Aristotle MDR core code and API code that are compatible.


## How are Aristotle and its extensions installed now?
The biggest change for developers and system administrator is that `pip install aristotle-metadata-registry` now installs not just the `aristotle_mdr` python library, but every other Aristotle extension as well, including Dataset and Indicator extensions, download types and APIs. This is a change to previous versions of Aristotle where the core code and its components were listed as separate requirements.

Its important to note that these extensions aren't all required when setting which Django are installed for a deployment of the Aristotle Metadata Registry, and a settings file used to deploy a system using Aristotle 1.6 should work with Aristotle 2.0 with few or any changes. They are all available on the system when installed using pip, which means Aristotle 2.0 will take up a little more space than earlier versions.

## Installing Aristotle with a smaller selection of extensions

If there are space requirements, it is still possible to only install the required components. However this is not as simple as a regular pip installation. Each subdirectory in the mono-repo python directory includes a `setup.py` with dependencies and installation instructions, and can be installed as a stand-alone python package.

Using pipenv it is possible to specify a dependency in a `Pipfile` that installs just a single directory from a git repository. For example, if only the core Aristotle code and API were desired for installation

    [packages]
    aristotle-metadata-registry = {git = "https://github.com/aristotle-mdr/aristotle-metadata-registry", subdirectory = "python/aristotle-metadata-registry", ref = "v2.0.0", editable = true}
    aristotle-mdr-api = {git = "https://github.com/aristotle-mdr/aristotle-metadata-registry", subdirectory = "python/aristotle-mdr-api", ref = "v2.0.0", editable = true}

In this way it become possible to mix versions of Aristotle components to either, install an older version of Aristotle with a new version of an extension:

    [packages]
    aristotle-metadata-registry == 1.6.5
    aristotle-mdr-api = {git = "https://github.com/aristotle-mdr/aristotle-metadata-registry", subdirectory = "python/aristotle-mdr-api", ref = "v2.0.0", editable = true}

Or in future, install components from two separate versions within the mono-repo.

    [packages]
    aristotle-metadata-registry = {git = "https://github.com/aristotle-mdr/aristotle-metadata-registry", subdirectory = "python/aristotle-metadata-registry", ref = "v2.1.0", editable = true}
    aristotle-mdr-api = {git = "https://github.com/aristotle-mdr/aristotle-metadata-registry", subdirectory = "python/aristotle-mdr-api", ref = "v2.2.0", editable = true}

However, *neither of these approaches are recommended or supported*. While we endevour to ensure that installations of Aristotle can be done with a limited set of installed apps, our testing is done against the entire mono-repo and installation using pip is the recommended method.
