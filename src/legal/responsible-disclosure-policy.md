---
layout: legal
title: Aristotle Metadata Privacy Policy
head_scripts: |
    <link id="theme-style" rel="stylesheet" href="/aristotle/css/legal.css">

---

# Responsible disclosure of security vulnerabilities policy

If you have discovered a potential security vulnerability within an Aristotle Metadata system, we encourage you to disclose it to us as quickly as possible and in a responsible manner in accordance with this Responsible Disclosure Policy.

## Overview
Aristotle Metadata takes the security of our systems and our client systems very seriously. We value the work of security vulnerability researchers who contribute to that security.

The purpose of this policy is to ensure that security vulnerabilities in our systems and applications are identified and mitigated in a timely manner. For that purpose, this policy allows security researchers to share their findings with us in good faith.

You can report a potential security vulnerability by following the steps set out in this Policy. 

If you report a vulnerability under this policy, you must keep it confidential. Do not make your research public until we have finished investigating and fixed or mitigated the vulnerability. Otherwise, we may may take legal action. If you have not exploited the vulnerability or prematurely disclosed its possible existence, we will not take any legal action against you.

If you have any questions, please contact the our Security Team by sending an email to security@aristotlemetadata.com.

## What this policy covers
We allow you to conduct responsible security vulnerability research and testing only on our services and products to which you have authorised access. This policy does not cover any action that is unlawful or contrary to legally enforceable terms and conditions for using our services and products.

The following types of research are strictly prohibited:

* accessing or attempting to access accounts or data that does not belong to you
* attempting to modify or destroy any data
* executing or attempting to execute a denial of service (DoS) attack
* any activity that degrades our system’s performance
* sending or attempting to send unsolicited or unauthorised email, spam or any other form of unsolicited messages
* conducting social engineering (including phishing) of Aristotle Metadata employees, contractors or customers or any other party
* posting, transmitting, uploading, linking to, sending or storing malware, viruses or similar harmful software that could impact * our services, products or customers or any other party
* testing third party websites, applications or services that integrate with our services or products
* the use of automated vulnerability scanners
* exfiltrating any data under any circumstances
* any kind of activity that portrays you as acting from or on behalf Aristotle Metadata, or our clients, agents or employees.
* any activity that violates any law.

We do not waive any rights or claims with respect to such activities and may take action if these are undertaken.

This policy does not authorise individuals or groups to undertake hacking or penetration testing against our systems or systems operated on beehalf of Aristotle Metadata.

The following finding types are excluded from this Responsible Disclosure Program:

* reports from automated vulnerability scanners
* descriptive error messages such as stack traces, application or server errors
* HTTP 404 codes or pages, or other HTTP non-200 codes or pages
* fingerprinting or banner disclosure on common and public services
* disclosure of known public files or directories, such as robots.txt
* clickjacking and other issues only exploitable through clickjacking
* CSRF on forms that are available to anonymous users, such as contact, login and logout forms
* CSRF with minimal security implications
* content spoofing or text injection
* presence of application or web browser ‘autocomplete’ or ‘save password’ functionality
* lack of Secure or HTTPOnly flags on non-sensitive cookies
* Login or Forgot Password page brute force and account lockout not enforced
* enabled HTTP methods (such as OPTIONS, TRACE, DELETE, PUT, WEBDAV, etc.) without a valid attack scenario
* missing HTTP security headers, such as Strict Transport Security, X-Frame-Options, X-SSS-Protection, etc.
* host header or CSV injection without a valid attack scenario
* HTTP or DNS cache poisoning
* missing best practices in SSL/TLS configuration without a working proof of concept
* self-exploitation issues (such as self XSS, cookie reuse, self-denial of service, etc.)
* issues related to mobile applications that require the host device to be either rooted or jailbroken
* issues related to brute forcing, rate limiting and other denial of service type attacks
* weak password policy implementation
* use of a known-vulnerable libraries or frameworks (e.g. outdated JQuery or AngularJS) without a valid attack scenario
* issues that rely on outdated or unpatched browsers and platforms to be abused.

This list is not limited and will likely change as the threat landscape evolves.

## How to report a potential security vulnerability
You can responsibly disclose potential security vulnerabilities to the Aristotle Metadata Information Security Team by emailing security@aristotlemetadata.com. If you consider the email should be encrypted, our PGP key can be found below. Ensure that you include details of the potential security vulnerability and exploit with enough information to enable the Security Team to reproduce your steps.

[Download PGP key]()

When reporting a potential security vulnerability, please include as much information as possible, including:

* date the vulnerability was observed
* location of the vulnerability (e.g. URL, domain etc)
* an explanation of the potential security vulnerability
* a list of products and services that may be affected (where possible)
* steps to reproduce the vulnerability
* prior conditions (e.g. logged in, not logged in, previous actions etc) where applicable
* proof-of-concept code (where applicable)
* names of any files that were uploaded to our systems
* the names of any test accounts you have created (where applicable), and
* your contact information.

## What happens next?

Once you have reported a potential security vulnerability, we will contact you within 5 days with an initial response. We will keep you informed on our progress investigating the potential security vulnerability and will also notify you when the investigation has been completed and the matter addressed, if necessary.

Subject to any regulatory and legal requirements, all reports to us will be kept strictly confidential, including the details of the potential security vulnerability as well as the identity of all researchers involved in reporting it. Once the investigation has been completed, we may, subject to your consent, publicly recognise you on this page as a researcher involved in identifying the vulnerability. If a report is found to be a duplicate or is otherwise already known to us, the report will not be eligible for public recognition.

Please note that we do not compensate individuals or organisations for identifying potential or confirmed security vulnerabilities.

## Recognition

We thank the researchers who help keep our products and services safe by reporting security vulnerabilities responsibly in accordance with this Policy.

* Aristotle Metadata has recieved no reported security vulnerabilities as at 03/03/2023

## Acknowledgements

We thank the Consumer Data Right for providing their [Responsible Disclosure Policy](https://www.cdr.gov.au/resources/responsible-disclosure-security-vulnerabilities-policy) under a [Creative Commons Attribution 3.0 Australia](https://www.cdr.gov.au/disclaimer-copyright). Their policy provided assistance with the development of this policy. 
