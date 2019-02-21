---
layout: post
title: Aristotle-MDR v1.4.0 now available on our Open Registry
author: sam
---

The latest version of the Aristotle Metadata Registry is now available on 
[Github](//github.com/aristotle-mdr/aristotle-metadata-registry/releases/tag/v.1.4.0)
and the [Python Package Manager](//pypi.python.org/pypi/aristotle-metadata-registry/1.4.0).

This change brings a host of stability changes to improve deployment on Postgres and Elasticsearch,
changes to the underlying database architecture to improve metadata analytic querying.

It also, includes two new additions from the ISO 11179 specification - Organizations and Identifiers.
Organization will allow us to build new and better extensions to support data management where information isn't standardised - our first test caase
will be the upgrade of the [Aristotle Dataset Extensions](//github.com/aristotle-mdr/aristotle-dataset-extensions)
to support the [W3C DCAT data registry format](//www.w3.org/TR/vocab-dcat/), but we've already seen a bunch of interest in using Organizations in publishing workflows.

By implementing 11179 identifiers, we're building capability for metadata records to have multiple identifiers with fully qualified namespaces. This will improve how Aristotle instances
are federated, and also improve how Aristotle and other metadata systems and formats will be able to communicate using common identifiers. For users, this also provides more assurance
around accessing information without having to expose internal database identifiers, and will prevent clashes between systems.

For example, the [Aristotle open registry ](//registry.aristotlemetadata.com) includes a lot of content from the [AIHW METeOR Metadata Registry](//meteor.aihw.gov.au).
With the addition of Organizations and Identifiers, '`meteor`' is now a fully qualified namespace in the Aristotle open registry, which means a user can browse to
[`/identifier/meteor/349510`](//registry.aristotlemetadata.com/identifier/meteor/349510) on the open registry, and every other Aristotle system that was
federating METeOR content and get the exact same metadata - *every time* - and link it back to the [authoritative source on METeOR](//meteor.aihw.gov.au/content/index.phtml/itemId/349510).

**This represents a big step forward for federated standards-based government metadata systems!**

Also included is a new research project in the [Aristotle labs](//registry.aristotlemetadata.com/labs) - a [Data Dictionary CSV Uplaoder](//registry.aristotlemetadata.com/labs/daedalus/uploader).
This project is still in development, but we've been collaborating with metadata custodians to get feedback on a minimum specification for Data Dictionaries to help new users quickly build
metadata for import into a registry, without requiring extensive training or specialised tools.
This format is based on [ISO 11179](//metadata-standards.org/11179/) and the fields from AS4590 and allows a user to build a data dictionary within a standard spreadsheet tool and upload a CSV to
help populate a registry with new metadata - and by *tying this format into the Aristotle Metadata Registry, we can perform intelligent heuristics to improve metadata reuse and identification within the registry 
to improve data matching efforts down stream*.

Below is a sample of the data dictionary format, made using Excel:
![An image of a sample of the data dictionary format, made using Excel](//registry.aristotlemetadata.com/static/labs/data_dictionary_excel.png)

When imported using the new uploader, fields can be matched to records that are already in the database:
![An image of the data dictionary format](//cloud.githubusercontent.com/assets/2173174/18980405/46949234-8717-11e6-9212-6596027617c8.png)

You can provide feedback on the [data dictionary tool on its GitHub page](//github.com/aristotle-mdr/daedalus-data-dictionary), or by emailing us with the details below.

---

Due to the underlying changes to the database architecture, its advised to check out the
[Aristotle wiki for details on how to upgrade to version 1.4](//github.com/aristotle-mdr/aristotle-metadata-registry/wiki/Upgrading-extensions-to-support-v1.4).
