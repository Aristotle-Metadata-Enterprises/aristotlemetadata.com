---
layout: post
title: Aristotle Metadata Registry v4.5.0 released
author: aristotle
category: releases
releases_only: yes
---

### Aristotle Metadata Registry v4.5.0 is now available to all clients.

This is a minor feature release which adds support for typeahead dropdowns for some non-metadata items, adds a new API endpoint for getting lists of metadata changed over time and adds a new status GraphQL filter for metadata items.

Previously, Aristotle only provided a standard dropdown when selecting Managed Items, such as Representation Classes. This improvement adds support for typeahead dropdowns to be used for managed items.

![](/aristotle/images/blog/2020-10-19-rep_class_dropdown.gif "Representation class dropdown")


Other features added in this release include:

- Implementing filtering on statuses in GraphQL
- Adds concept delta endpoint to return the most recent changes to each item across a date range
- Implements autocomplete select component for representation classes

The following issues have also been resolved:

- Only notify active users of signups
- Various small performance improvements for autocomplete statuses
- Performance improvements to id search in concept autocomplete dropdown
- Allow value domain to be saved with no classification      
- Fixes id search in concept autocomplete dropdown 

Discuss this post on our community forum: https://community.aristotlemetadata.com/

