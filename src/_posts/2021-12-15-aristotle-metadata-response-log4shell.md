---
layout: post
title: Aristotle Metadata Log4J Vulnerability report
author: aristotle_devops

---

**Summary: Aristotle Metadata has been made aware of the Log4Shell (CVE-2021-44228) vulnerability and has taken all mitigating steps to protect against this vulnerability.**

Log4Shell (CVE-2021-44228) is a zero-day vulnerability in Log4j, a popular Java logging framework, that is currently impacting web services worldwide.

Aristotle Metadata devops staff first became aware of the Log4Shell vulnerability on 10 December 2021 when this vulnerability was first published to the information security community.

Aristotle Metadata staff have performed an analysis of our system architecture and have identified AWS OpenSearch as our only infrastrucutre system current deployed based on or using the Java framework. No other Aristotle Metadata services are developed using the Java framework. Additionally, all other services are developing using containerised platforms using minimal operating systems to lower the security profile and reduce the risk of security threat.

Aristotle Metadata staff have also assessed the level of risk and exposure the Log4Shell vulnerability, and believe that the Log4Shell vulnerability presents a low risk for our clients. Aristotle Metadata uses the AWS OpenSearch for rich-text search features for metadata content of the Aristotle Metadata Registry, and all AWS OpenSearch systems are controlled with virtual private networks that restrict all outgoing traffic from AWS OpenSearch services to the wider internet. Additionally, all search services operate on separate infrastructure to authentication data, and as such no personally indentifying information was at risk of exposure.

Aristotle Metadata store all network logs using the AWS CloudWatch service in isolated have investigated network traffic and have identified no traffic that indicates the Log4Shell exploit has been utilised on any Aristotle Metadata services. Additionally, [analysis from Elastic.co engineers](https://xeraa.net/blog/2021_mitigate-log4j2-log4shell-elasticsearch/) has shown that the Log4Shell vulnerability is not exploitable to extract indexed data in an ElasticSearch instance, and as such no Aristotle Metadata client information was at risk of exflitration due to this vulnerability.

As a client of Amazon Web Services (AWS), Aristotle Metadata inherits many of the protections of the AWS Shared Responsibility Model. One of these protections is the availability of "hotpatches", bug fixes and security updates for AWS services - including AWS OpenSearch. [On 13 December 2021, Amazon Web Services made security updates available for the Log4Shell vulnerability for all appropriate AWS Services](https://aws.amazon.com/blogs/security/using-aws-security-services-to-protect-against-detect-and-respond-to-the-log4j-vulnerability/), including AWS OpenSearch. Aristotle Metadata has taken all reasonable steps to implement these infrastructure and network updates for all clients.

Aristotle Metadata is proud to provide services to academic and government clients globally, and are dedicated to the ongoing security of our infrastructure for all clients.