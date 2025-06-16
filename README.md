# Django 95

Welcome! Django 95 is an admin theme for [Django](https://www.djangoproject.com) inspired by the Windows 95 UI.

![Django 95 changelist](/screenshots/changelist.png)


## Status

Django 95 is in initial development and not currently recommended for production use. However, theoretically, everything should work. So, for those who are curious, please do try it out.


## Requirements

Django 95 is being built and tested against Django 5.2.


## Install

Clone or download `django-95` into your project's root directory.

Rename the app directory from `django-95` to `django_95`.

Then edit your project's `settings.py` file and add `'django_95'` to `INSTALLED_APPS`:

```py
INSTALLED_APPS = [
    'django_95',
    'django.contrib.admin',
    ...
]
```

*Note*: `django_95` must be added before `django.contrib.admin`. This is necessary to allow any admin template override files in the `django_95` app to take priority.
