---
layout: post
title: Announcing the release of Aristotle Tooltip!
author: dylan
---
# Aristotle Tooltip
We are pleased to announce the release of Aristotle Tooltip, an easy way to improve the depth and accuracy of information
presented on your website, by leveraging high quality Aristotle Metadata Registry powered metadata. Aristotle Tooltips are easily integrable
on any website, and display definitions and links to metadata that accurately describe your website content. Aristotle
Tooltips are designed to have a consistent, appealing look and feel, regardless of the design of your website, and to look
good and be accessible at all screen sizes. Security was prioritized during design so that Aristotle Tooltip users can feel 
confident they're keeping their clients safe as well as informed. 

We've leveraged the jsDelivr CDN, which has more than 750 points of presence worldwide to ensure that anyone can access
the Aristotle Tooltip rapidly and reliably. Additionally, we've been ruthless in reducing the size of the library (20kB gzipped;
 130 times smaller than the average mobile camera picture) while still maintaining legacy browser support (IE11+ compatible) to
 ensure that every user never has to wait to view valuable contextual information.
  
As a testament to our confidence in the usefulness of Aristotle Tooltip, we use it in all of our production Aristotle
Cloud deployments to assist our clients in better organising their metadata. Perhaps you've even seen one of the characteristic
popovers already?

## Quick Start
So you're already convinced, and can't wait to get started? 

Here's how you incorporate __aristotle_tooltip__ into your website
### Module Bundler:

Install the aristotle-tooltip package:
```console
frankie@aristotle:~$ npm i aristotle_tooltip
```
In your application, import the `aristotle_tooltip` module, and the core css:
```javascript
import {addAristotle} from 'aristotle_tooltip'
import 'aristotle_tooltip/dist/tooltip.css'
```
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@aristotle-metadata-enterprises/aristotle_tooltip@latest/dist/tooltip.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aristotle-metadata-enterprises/aristotle_tooltip@latest/dist/tooltip.css">
```
Place the script tag at the very bottom of the `<body>` and the style sheet in the `<head>` as per usual.
 They must be placed before your own scripts, because of how the underlying Tippy.js library adds the tooltips.

### Usage
To add a tooltip for a piece of content on your webpage
```html
A <a href="#" data-aristotle-id="498427">person</a> is known by the company they keep
```
### Setup
Aristotle Tooltip is exposed as a global variable, so all you need to do to add all tooltips to a particular page
is pass in a couple of options and add `aristotleTooltip.addAristotle(options);` to your Javascript. For a more comprehensive
explanation of all the options (and Aristotle Tooltip supports configuration), our [NPM library](https://www.npmjs.com/package/@aristotle-metadata-enterprises/aristotle_tooltip)
has a complete list of options.
 
```javascript
let options = {
  'url': 'https://registry.aristotlemetadata.com',
  'definitionWords': 50,
  'longDefinitionWords': 75,
};
aristotleTooltip.addAristotle(options);

```



