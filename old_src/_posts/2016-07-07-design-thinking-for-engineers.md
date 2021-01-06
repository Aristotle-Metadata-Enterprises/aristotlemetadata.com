---
layout: post
title: The quiet role of developers in design thinking
author: sam
img: /aristotle/images/blog/silicon-valley.jpg
thumbnail: /aristotle/images/blog/silicon-valley-thumb.png
---

In a recent episode of Silicon Valley, main character and developer Richard Hendricks
laments that users would love his product if only they understood it. 
Soon, his investors come to the conclusion that the only people who Richard had 
test the product were other engineers.

More than just a great piece of comedy, it is also a stark warning for many developers and startups
on the reliance of a testers with similar background and how this can alienate the eventual target
market.

---

When I began developing the Aristotle Metadata Registry this was not a mistake I planned to
repeat. Despite the relatively niche market of data and metadata management, there are always
users who will be new or those who have new approaches who need the product to be useful for them.
Hence our long-term plan of not only building a standards-compliant metadata registry but
also of working with not just metadata experts but also design experts to help us make this field
more accessible than ever before.

As our communications co-ordinator Lauren has 
[already](/blog/2016/06/usability-sessions.html)
[covered](/blog/2016/07/design-jam.html),
thanks to the resources of
[ThinkPlace](http://www.thinkplaceglobal.com), we were able to run some focus groups who insights were used in a
design jam that distilled the experiences of these users into a set of new designs, to
be implemented in the upcoming release of the Aristotle Metadata Registry. From this experience,
I want to share some of my thoughts on how design thinking impacts developers and their role in this process.


Lesson 1 - Developers need to step back during design
=====================================================

During the user sessions I was invisible to the users, and
due to scheduling conflicts I wasn't able to attend the design jam. This meant that
for the entire first part of the design process the lead developer of the product was not in the room - 
and **in hindsight not having a developer present was the most important factor in the design success**.
My absence meant there was no one to explain the product,
and it and its design had to stand 100% on its own, during user testing and during the design jam.

Looking at the designs that came out of the design jam, I am certain I would have
jumped in and tried to explain how the things work. But in a real world scenario, this isn't
possible, the product will have stand alone, and if the development doesn't support this there will be trouble. 
Had I been there, what would have happened instead would design built on compromise, rather than the innovation that was needed.
By not being there, this gave the design team the freedom to show users actually needed for the product to succeed.


Lesson 2 - New designs will challenge your vision - thats meant to happen
=========================================================================

For me, Aristotle has been a labour of love, having spent many countless unpaid hours on
research and development of a product in the expectation this would pay off. This is not uncommon
for developers, especially early on and while this familiarity can bring early success, 
it puts you very close to the product, unable to step back when needed.

At first glance, the designs I was shown were beyond my initial expectations.
My picture of a metadata registry was dry and technical, while the designs that came
back were wild and bright. What was important in the designs wasn't just the finished product
but also the concepts that went into it. My own defensiveness came from recognising weakness and
while many of the designs not highlighted these weakness they also proposed improvements.

By allowing the developer-drivens designs to be challenged, and meeting that head allows for a stronger outcome.
Whereas being defensive of your work protects it but also limits the products growth.

Lesson 3 - Design and development are iterative and require compromise and communication
========================================================================================

No part of design or development is perfect - and the process to improve Aristotle has been iterative,
with designs challenged and changed as they moved from idea to execution.
However, the key in our iterations has been communication, I recall a discussion with one of
the design team about changes to the search interface, which I have paraphrased below:

> "Why have we changed the search results layout? Google is a leader in search, and we've tried to copy that layout"
>
> "Google has to deal with unstructured information - we have more structure to work with so the results need to show that and take advantage of it"

In my mind, mimicking Google made sense and changing from that seemed counterintuitive.
But the key in this dynamic, wasn't having a development go from following one design
to another without understanding why, but was in actively questioning the change with the
goal to understanding it. The new design quickly won out and was implemented with no change because of it.

Similar discussions have risen from both sides, where designs changed too much of the underlying
archtecture. One of the core principles of Aristotle has been adhering to the ISO/IEC 11179 metadata 
registry standard because I believe that its a standard that is not only achievable but also the best way
for describing data. Some of the designs shifted too far away from this, but our teams commitment
to communication and compromise has won out - where the standard has been too difficult for users,
we've taken on an approach of improving our own documentation or working around these restrictions
so as to not compromise these core values while still designing a quality product.


The results, I hope speak for themselves. Below are three iterations from our design process, focusing
on the landing page for a metadata registry. On the left is the original design for the demonstration
registry, in the center one of the later designs from the design jam, and on the right the final design
as it was implemented - which will be live later this week.

![Side by side by side](/aristotle/images/blog/side_by_side_by_side.png "Side by side by side")


This process has been really useful for my own understanding of the ["design squiggle"](http://cargocollective.com/central/The-Design-Squiggle),
a thought tool in the 'design thinking' space, showing how the process of design is meant to be
disruptive, before working through processes to come up with a well thought out end product.

![Design squiggle](/aristotle/images/blog/squiggle.png "Design squiggle")

While the core architecture of the Aristotle Metadata Registry is relatively fixed,
I don't think Aristotle is out of the wild 'uncertainty' phase yet. We've just scratched
the surface of the user interface with much more to refine.
As the product evolves and [our community](/community) grows I look forward to running these
sessions again and seeing what concepts our designers come up with next
- naturally there won't be a developer in site, but now I can say that is actually for the best.
