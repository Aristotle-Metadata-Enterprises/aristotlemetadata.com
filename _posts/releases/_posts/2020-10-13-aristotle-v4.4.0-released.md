---
layout: post
title: Aristotle Metadata Registry v4.4.0 released
author: sam
category: releases
---

### Aristotle Metadata Registry v4.4.0 is now available to all clients.

This is a minor feature release this minor release includes improvements to how the "metadata dropdown selectors" work when linking metadata items together.

Previously, Aristotle searched for an exact match of the text in the search bar, and returned results by the date created.
This improvement adds two great new features do the dropdowns:
1. The metadata dropdown selectors can now handle misspellings or reorderings - in the example below, while searching for the incorrectly spelled "*employmant* state" the selector correctly returns the "Status in employment" metadata item.
2. Search results are now returned based on how closely the item matches the given text and how recently a user viewed the item, so items that you have recently viewed will be returned higher.

Users can also continue to search via the IDs of items to get precice matches as well.

![](/aristotle/images/blog/2020-10-13-metadata_dropdown.gif "Metadata dropdown")


Other features added in this release include:
 * Remove more symbols from names in search to improve results on partial name searching
 * Adds trigram search to metadown dropdown search
 * Make all file breadcrumbs links to help with navigating to the front page
 * Changing item's stewardship organisation now also removes the item from the workgroup

The following issues have also been resolved:
 * Fix for saving classification items through API
 * Fix classification editor saving bug
 * Add value domains as relation of classification
 * Fix for cloudfront distribution not correctly serving CKEDITOR assets
 * Fixes accessing of static files due to Django 3.1 upgrade

Discuss this post on our community forum: https://community.aristotlemetadata.com/

