---
layout: post
title: "Introducing WCAG-Zoo: Automated testing for a more accessible web"
author: larrn
img: /aristotle/images/blog/braille.jpg
thumbnail: /aristotle/images/blog/braille.jpg
---

Our mission with the Aristotle Metadata Registry is to help people make sense of information needed to make change possible, and we are always trying to find new ways to do this.
A big part of this is making sure information is available to everyone.
That’s why we’re introducing a new addition into our continuous testing to check color contrast, access keys, descriptions for images, and the navigation using headings to make information more accessible.

We want to make your Aristotle experience as easy and simple as we can.
The new addition we are introducing into our continuous tester checks pages against common tests from the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/intro/wcag.php),
to make it easier for everyone, including people with disabilities to access metadata using Aristotle.
To do this, we’re working to make sure everything that’s going into Aristotle is automatically checked against the WCAG guidelines.
For example, one of the things we’re now continuously checking is the color scheme for Aristotle to see if the colors are clashing too much,
if the contrast is strong enough for someone with color-blindness to be able to distinguish between two different colors on the screen.
This is important because we want to be readily accessible for everyone, from people with, like said before,
[color-blindness to people who can’t see at all and older people, who are making up a growing portion of the online community.](http://www.abc.net.au/news/2017-02-04/elderly-use-of-social-media-and-technology-on-the-rise/8240508).
By integrating these checks into our continuous testing process, will can automatically check to see if Aristotle meets many of the minimum requirements for WCAG compliance.

To aid in this process, [we’ve created the WCAG-Zoo](http://wcag-zoo.readthedocs.io/en/latest/), and are [releasing it as an open-source product](https://github.com/data61/wcag-zoo) so that others can integrate the same checks into their own software to check if a system is WCAG compliant as new things are added or when changes are made.

These additions to our continuous testing are another way Aristotle is improving the ease of use of your metadata. It is always testing things behind the scenes and before problems arise to making sure everything is working and accessible for everyone.

[Image credit – Dave Halberstadt CC-BY-ND](https://www.flickr.com/photos/thetrouseredape/6881366056/in/photolist-bu5Nom-5bahaZ-nGpHZy-6Ckw3i-b6bpN-4P1CGK-sR9am-67oiTG-bQcCVX-8fgeo-5TWf89-7nJ1v5-p3bUC-bWegg-7BNrYX-5EmHMZ-5859uM-5859uP-s3n7kF-cv7igQ-8wYdZy-b67YJZ-76R7fp-5T66i2-8hHis-4iKnEq-8yfUL9-3UQgD4-sdU7J-bBi1cy-6CpDfU-9jVrKV-bKzjB-5hRqei-hKW1d-3msP5o-2qm9U-noMiHC-qiT6b-86vtQZ-8VCm2w-bBi1ch-ogNwJ-21itLH-qiT3P-7kD6Bn-anuJS7-b6bq3-dJnYv1-wrxTE)
