---
layout: post
title: Continuous testing of Django applications against Windows/Azure with MS SQL
author: sam
img: /aristotle/images/blog/scripts.png
thumbnail: /aristotle/images/blog/scripts.png
---

Given the size of Microsoft, their reputation in enterprise environments and the growth of Azure as a cloud platform, its fair to say that ignoring Microsoft (and their associated products) in your test scripts will limit the ability for your app to grow. We’ve had a few requests on the level of support for Aristotle under Windows and Microsoft environments, so recently we’ve explored what it takes to reliably deploy Django applications under a Microsoft/Azure stack.

First of all, since Travis-CI doesn’t have Windows support, if you are serious about testing on the Microsoft/Azure stack, [Appveyor](https://www.appveyor.com/) is _the_ service to use. Plus its free for open-source projects, which is always a plus – and its great to see this support from Microsoft. If you are used to running tests on Travis-CI, you’ll find it a breeze to add this into your test suite on GitHub.

The easiest way to get an `appveyor.yml` run script ready is to copy your `.travis.yml` to `appveyor.yml` and go from there. From that point we trimmed back the test matrix to _only_ those environments we cared about on Microsoft/Azure – which was specifically running the tests against MS/SQLServer. Its unlikely that we’ll come across someone who wants to deploy on a Windows machine against a Postgres or MySQL database, so those were trimmed.

To connect to MS SQL Server 2016 we used `django-pyodbc-azure`, which provides excellent Django-ORM compatibility. However, installing it can be troublesome. Versions of `django-pyodbc-azure` are designed to match Django versions, so using `pip` to install it, like so `pip install django-pyodbc-azure` could install a version that’s incompatible with your installed version of Django. However, its common in Travis-CI test versions to specify a matrix of environment variables, and Appveyor has similar functionality. This makes it a snap to install Django and `django-pyodbc-azure` using the same environment variable. Below is a modified sample of the `appveyor.yml` we used to test the Aristotle Metadata Registry that shows how to correctly install matching libraries:

    services:
      - mssql2016
    environment:
      global:
        PYTHON_HOME: "C:/Python27"
      matrix:
          - DJANGO_VERSION: '1.8,<1.9'
          - DJANGO_VERSION: '1.9,<1.10'
    install:
      - cmd: |
            "%PYTHON_HOME%/Scripts/pip.exe" install -q "django_pyodbc_azure>%DJANGO_VERSION%"
            "%PYTHON_HOME%/Scripts/pip.exe" install "Django>%DJANGO_VERSION%"
    

This will ensure the correct versions of Django and `django-pyodbc-azure` are installed.

Next step is configuring your Django `settings.py` file to point to your database. Again, thanks to `django-pyodbc-azure` this is as simple as configuring your `DATABASES` dictionary with the azure engine:

    DATABASES = {
        'default': {
            'NAME': 'master',
            'ENGINE': 'sql_server.pyodbc',
            'HOST': '(local)\SQL2016',
            'USER': 'sa',
            'PASSWORD': 'Password12!',
        }
    }
    

Your settings might change based on the exact services you are connecting to, but regardless the prefix `(local)` in the `HOST` setting is literal. So for MS SQL Server 2016 use `(local)\SQL2016`, for MS SQL Server use `(local)\SQL2014` and so on. For production servers this will change to be the IP of the MS SQL server you are connecting to.

Once that is done, you can commit your `appveyor.yml` file connect your github account to Appveyor and test your django app against Windows/Azure and SQL Server 2016. As for speed, we’ve found Appveyor runs to be comparable to Travis-CI runs using comparable setups – however free accounts can only run one test script at a time, which may slow your matrix builds down.

[Our full `appveyor.yml` config file for testing the Aristotle Metadata Registry on Windows/Azure against Django 1.8 with the MS SQL Server 2016 is available on Github](https://github.com/aristotle-mdr/aristotle-metadata-registry/blob/develop/appveyor.yml)

Additional gotchas that come up on Windows/Azure and Appveyor:

*   You can’t upgrade pip using `pip.exe`, Windows won’t allow it! Instead, if you want to upgrade pip, you need to upgrade it using python:
    
        "%PYTHON_HOME%/python.exe" -m pip install --upgrade pip
        
    
*   Our default approach of “pure-python libraries first” really helped make this a simple affair. Coming from the Linux/Ubuntu/Apt-based world, automated deployment of libraries isn’t easy for someone new to the environment. This isn’t to say its bad, its just different and different always makes things a little more difficult.
*   It seems that when ordering by datetime fields, MS SQL has different behaviour to Postgres and SQLite. With the later retaining the insert id, whereas MS SQL doesn’t seem to have a defined order when timestamps are the same. I wouldn’t say either is “correct” behaviour, but its worth knowing about during testing when two items may be created close enough that they appear to have been created at the “same” timestamp. This can (and should) be fixed with a simple pause in the Django test script to make sure things are ordered as expected.
*   Some custom Django migrations may not work due to the differences in SQL flavours. On MS SQL we had trouble with copying into AutoFields, and also had trouble changing AutoFields. However, since these were for movements away from legacy architectures we have a skip migration rule for MS SQL until those [django migrations are squashed](https://docs.djangoproject.com/en/1.10/topics/migrations/#migration-squashing)
*   Powerscript is hard – actually, Powerscript probably isn’t, but its different enough to bash to make translation easy. This can be solved by trimming your `appveyor.yml` back to just whats needed for the Windows/Azure/MS SQl specific tests and using simple `cmd` declarations.
*   Appveyor is great for testing of Microsoft services, but its something to consider as a complement to Travis-CI, not a replacement. All our coverage tests still run on Travis-CI and are reported to Coveralls. This is unlikely to change, and its unlikely we will report coverage from Appveyor to Coveralls – the positive is this just incentivises not writing database specific code as MS SQL-only code will show as skipped lines in Coveralls.
*   You might be tempted to test against a Postgres/Windows/Azure environment, but I would say don’t – unless you want extra hassle. Its unlikely to be a common environment, and Travis-CI and Appveyor use different settings for connecting to Postgres – namely Travis-CI sets no password, whereas Appveyor does. Its not hard to get around, but I’m not certain its worth the effort.