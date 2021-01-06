---
layout: post
title: What is Metadata?
author: sam
img: /aristotle/images/blog/aristotle-icons.jpg
thumbnail: /aristotle/images/blog/aristotle-icons.jpg
---

What is Metadata?
=================

To understand metadata, its useful to briefly discuss data - where data is a recorded
piece of information about something of interest. This could be a table of student records, 
a catalogue of music, or a collection of images.
In all these cases the data (the records, music or images), are things of interest we wish to
understand.

Stuctural vs. Descriptive Metadata
==================================

Metadata is then additional information about this data that gives it more scope and context -
hence the common description "data about data". However, not all metadata is the same.
The name of an artist is useful to know about music, but equally important is a record description
telling us how the music is stored in the file - an image of sheet music, an audio recording, the sampling rate and so on.

Here we encounter the two types of metadata "descriptive metadata" which gives us more context,
and "stuctural metadata" which describes the exact way in which data is stored. People more commonly
encounter "descriptive metadata" when dealing with information, and find it more useful as it
helps them understand the data they are seeing, where as 'stuctural metadata' is the information
computer systems use to interpret data and display it in the correct fashion.

To help illustrate this, lets look at an example - a simple image:

https://www.flickr.com/photos/mustangjoe/7541745348

In this image, "descriptive metadata" shows the location the image was taken,
details about how the picture was taken including the shutter speed or if the flash was used.
These are all useful for discovery, as a search for images taken at a certain time, without a flash,
with a very fast shutter speed in certain locations might give a set of images from a sporting match.
But this metadata will be unique to each different image, depending on where and under what conditions it was taken.

This is contrasted with "structural metadata" which doesn't change as frequently, and is useful behind the scenes.
As the name implies, "structural metadata" defines how data in constructed and how to make sense of it. With our image,
the "descriptive metadata" shown above is stored in the EXIF format which defines how theise fields are recorded.
For example, dates in the EXIF format are exactly 20 characters wide, and the exposure time is recorded as a
ration of two positive integers that express a fraction of a second. This can be quite dry, technical content but it
means that when image software encounters the collection of bytes 
``82 9a 00 01 03 20``
in an EXIF header it can correctly interpret it as "1/800 second exposure time".

http://www.media.mit.edu/pia/Research/deepview/exif.html

Structural metadata in Aristotle
================================

The Aristotle Metadata Registry captures "structural metadata" for datasets based on the ISO/IEC 11179 standard.
Initially this standard was designed for describing columns in data tables.

