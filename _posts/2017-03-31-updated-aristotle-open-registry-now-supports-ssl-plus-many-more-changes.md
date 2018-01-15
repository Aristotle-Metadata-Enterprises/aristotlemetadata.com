---
layout: post
title: Updated Aristotle Open Registry now supports SSL (plus many more changes!)
author: sam
img: /aristotle/images/blog/aristotle-1.5.png
thumbnail: /aristotle/images/blog/aristotle-1.5.png
---

This week we migrated the [Aristotle Open Registry](https://registry.aristotlemetadata.com) over to new infrastructure, which has brought massive speed improvements site-wide as well as added support for encrypted connections for improved security. Along with this upgrade, the Aristotle Open Registry is now running version 1.5 of the Aristotle Metadata Registry.

![](/aristotle/images/blog/aristotle-1.5.png)

They key area of concern that we’ve addressed was around the speed of certain actions that relied on the search engine supporting Aristotle, such as creating content using wizards or using the [data dictionary uploader in the labs](https://registry.aristotlemetadata.com/labs/daedalus/uploader). To improve this we’ve made changes to the Aristotle metadata search component that reduce the number of matches needed for hits as well by upgrading our search engine, so the speed of queries is now much quicker. Thanks to this change, users of the site will see much shorter response times when creating data elements through the metadata wizards, as well as having the option to create metadata without going through the wizards.

Users will also notice the new default darker theme that meets the [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG20/) – and thanks to [work we did to automate our WCAG testing]({% post_url 2017-02-06-introducing-wcag-zoo %}) we can be certain that we will always meet and exceed the needs of our diverse user base.

Along with all of this, the new site includes [all of the features of the Aristotle Metadata Registry v1.5](http://aristotlemetadata.com/blog/2017/03/aristotle-metadata-registry-v1-5-released/), including:

*   A revamped look for the dashboard, to make performing common actions quicker and clearer
*   Adding extra detail to metadata beyond what’s available in ISO 11179 using Slots
*   Creating taxonomies within ISO 11179 using Metadata Relations and Roles

As always, we look forward to feedback from new and existing users around the product as we continue rolling these changes out for the open registry and for all of our clients.