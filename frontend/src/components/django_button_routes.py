#!/usr/bin/env python3
"""
Single Django file app.py - Handles button click destinations
Run with: python app.py
"""

import os
import sys
from django.conf import settings
from django.core.wsgi import get_wsgi_application
from django.http import HttpResponse
from django.urls import path
from django.core.management import execute_from_command_line

# Configure Django settings
settings.configure(
    DEBUG=True,
    SECRET_KEY='your-secret-key-here',
    ROOT_URLCONF=__name__,
    ALLOWED_HOSTS=['*'],
    USE_TZ=True,
)

# View functions for button destinations
def request_demo(request):
    """Handle /request-demo/ route - where Request Demo button leads"""
    return HttpResponse(
        "<h1>Request Demo Page</h1>"
        "<p>Welcome! You clicked the Request Demo button.</p>"
        "<p>This is where demo request logic would go.</p>"
    )

def start_free_trial(request):
    """Handle /start-free-trial/ route - where Start Free Trial button leads"""
    return HttpResponse(
        "<h1>Start Free Trial Page</h1>"
        "<p>Welcome! You clicked the Start Free Trial button.</p>"
        "<p>This is where free trial setup logic would go.</p>"
    )

# URL routing
urlpatterns = [
    path('request-demo/', request_demo, name='request_demo'),
    path('start-free-trial/', start_free_trial, name='start_free_trial'),
]

# Django application setup
application = get_wsgi_application()

if __name__ == '__main__':
    # Run Django development server
    execute_from_command_line(sys.argv)
