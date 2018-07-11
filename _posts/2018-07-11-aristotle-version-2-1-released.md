---
layout: post
title: Aristotle Metadata Registry v2.1 now publically available
author: sam
---
We are proud to announce that the Aristotle Metadata Registry version 2.1 is now avaible for public access.
This new release can be [downloaded from GitHub](https://github.com/aristotle-mdr/aristotle-metadata-registry/releases/tag/v2.1.0)
or [from PyPI](https://pypi.org/project/aristotle-metadata-registry/2.1.0/).

We are in the process of rolling out this version to all our users of Aristotle Cloud, and will be updating the
[Aristotle user documentation](https://help.aristotlemetadata.com) for these changes in the coming weeks.

The changes in this release include:

* New Features:
  * Ability to order Data Elements within Data Element Derivations
  * Ability to order Slots and Identifiers
  * Slots now have view permissions (Public, Private, Workgroup only) that can restrict who can see slots. This allows publicly visible metadata to have private additional content.
  * New option allowing users to self signup to a registry
  * Registration Authorities can now be retired. Retired Registration Authorities will still show in the list of Registration Authorities, and their endorsements will appear against metadata, but won't be selectable for new registrations or reviews.
* Data change: Removal of short_name as a field for concepts. During migration this is added to a new public slot. This brings us further in line with the ISO standard.
* UI Changes:
  * Improved notifications loading
  * Minor design of Metadata InfoBox when showing last updating user
  * Changed where the root URL `aristotle.example.com/` resolves: for anonymous users it redirects to `aristotle.example.com/home`, for logged in users it redirects to their dashboard at `aristotle.example.com/account/home/`. Logged in users can still access the home page by navigating to `aristotle.example.com/home`
* API changes:
    * Aristotle now supports Rest API token authentication. This allows users to securely authenticate with the API without providing their password. 
* Back-end changes:
  * Removed official support for Windows & MSSQL
  * Simplified configuration for testing
  * Fix glossary migrations
