# Django Single File Application for HackerRank-style Navbar
# Run with: python manage.py runserver (after setting up Django project)

from django.conf import settings
from django.urls import path, include
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import Template, Context
from django.views.decorators.csrf import csrf_exempt
import json

# Configure Django settings
if not settings.configured:
    settings.configure(
        DEBUG=True,
        SECRET_KEY='your-secret-key-here',
        ROOT_URLCONF=__name__,
        ALLOWED_HOSTS=['*'],
        INSTALLED_APPS=[
            'django.contrib.contenttypes',
            'django.contrib.auth',
            'django.contrib.sessions',
            'django.contrib.messages',
            'django.contrib.staticfiles',
        ],
        MIDDLEWARE=[
            'django.middleware.security.SecurityMiddleware',
            'django.contrib.sessions.middleware.SessionMiddleware',
            'django.middleware.common.CommonMiddleware',
            'django.middleware.csrf.CsrfViewMiddleware',
            'django.contrib.auth.middleware.AuthenticationMiddleware',
            'django.contrib.messages.middleware.MessageMiddleware',
            'django.middleware.clickjacking.XFrameOptionsMiddleware',
        ],
        TEMPLATES=[{
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        }],
        STATIC_URL='/static/',
    )

# Navbar configuration data
NAVBAR_CONFIG = {
    'brand': {
        'name': 'HackerRank',
        'url': '/',
        'logo_url': '/static/logo.png'
    },
    'navigation': {
        'products': {
            'title': 'Products',
            'url': '/products/',
            'dropdown': {
                'products': [
                    {'name': 'Screen', 'url': '/products/screen/', 'description': 'Technical screening platform'},
                    {'name': 'Interview', 'url': '/products/interview/', 'description': 'Live coding interviews'},
                    {'name': 'Engage', 'url': '/products/engage/', 'description': 'Developer engagement'},
                    {'name': 'SkillUp', 'url': '/products/skillup/', 'description': 'Skill development platform'}
                ],
                'features': [
                    {'name': 'Certified Assessments', 'url': '/features/certified-assessments/'},
                    {'name': 'Plagiarism Detection', 'url': '/features/plagiarism-detection/'},
                    {'name': 'Real-World Questions', 'url': '/features/real-world-questions/'},
                    {'name': 'Integrations', 'url': '/features/integrations/'}
                ]
            }
        },
        'solutions': {
            'title': 'Solutions',
            'url': '/solutions/',
            'dropdown': {
                'solutions': [
                    {'name': 'What We Do', 'url': '/solutions/what-we-do/'},
                    {'name': 'Set Up Your Skills Strategy', 'url': '/solutions/skills-strategy/'},
                    {'name': 'Showcase Your Tech Brand', 'url': '/solutions/tech-brand/'},
                    {'name': 'Optimize Your Hiring Process', 'url': '/solutions/hiring-process/'},
                    {'name': 'Mobilize Your Internal Talent', 'url': '/solutions/internal-talent/'},
                    {'name': 'AI Data Services', 'url': '/solutions/ai-data-services/'}
                ],
                'use_cases': [
                    {'name': 'Use Cases', 'url': '/solutions/use-cases/'},
                    {'name': 'Remote Hiring', 'url': '/solutions/remote-hiring/'},
                    {'name': 'University Hiring', 'url': '/solutions/university-hiring/'}
                ]
            }
        },
        'resources': {
            'title': 'Resources',
            'url': '/resources/',
            'dropdown': {
                'learn': [
                    {'name': 'Learn', 'url': '/resources/learn/'},
                    {'name': 'Blog', 'url': '/resources/blog/'},
                    {'name': 'Roles Directory', 'url': '/resources/roles-directory/'},
                    {'name': 'Resource Library', 'url': '/resources/library/'},
                    {'name': 'Customer Stories', 'url': '/resources/customer-stories/'},
                    {'name': 'Developer Skills Report', 'url': '/resources/skills-report/'}
                ],
                'support': [
                    {'name': 'Product Help', 'url': '/support/product-help/'},
                    {'name': 'What\'s New', 'url': '/support/whats-new/'},
                    {'name': 'Partners', 'url': '/support/partners/'},
                    {'name': 'Support', 'url': '/support/'}
                ]
            }
        },
        'pricing': {
            'title': 'Pricing',
            'url': '/pricing/'
        },
        'for_developers': {
            'title': 'For Developers',
            'url': '/developers/'
        }
    },
    'auth_buttons': {
        'login': {
            'title': 'Log In',
            'url': '/login/',
            'class': 'login-btn'
        },
        'demo': {
            'title': 'Request Demo',
            'url': '/demo/',
            'class': 'demo-btn'
        },
        'signup': {
            'title': 'Create a free account',
            'url': '/signup/',
            'class': 'signup-btn'
        }
    }
}

# Views
def home_view(request):
    """Main homepage view"""
    template_str = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HackerRank - Navbar Backend</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .navbar { background: white; border-bottom: 1px solid #e5e7eb; padding: 0 2rem; }
            .nav-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; }
            .logo { font-size: 1.5rem; font-weight: bold; color: #00b74a; text-decoration: none; }
            .nav-links { display: flex; align-items: center; gap: 2rem; }
            .nav-item { position: relative; }
            .nav-link { text-decoration: none; color: #374151; font-weight: 500; padding: 0.5rem 0; }
            .nav-link:hover { color: #00b74a; }
            .auth-buttons { display: flex; align-items: center; gap: 1rem; }
            .btn { padding: 0.5rem 1rem; text-decoration: none; border-radius: 4px; font-weight: 500; }
            .login-btn { color: #374151; }
            .demo-btn { color: #374151; }
            .signup-btn { background: #1f2937; color: white; }
            .content { padding: 4rem 2rem; text-align: center; }
            .hero-title { font-size: 3rem; font-weight: bold; margin-bottom: 1rem; }
            .hero-subtitle { font-size: 1.2rem; color: #6b7280; margin-bottom: 2rem; }
            .highlight { color: #00b74a; }
        </style>
    </head>
    <body>
        <nav class="navbar">
            <div class="nav-container">
                <a href="{{ brand.url }}" class="logo">{{ brand.name }}</a>
                
                <div class="nav-links">
                    {% for key, item in navigation.items %}
                    <div class="nav-item">
                        <a href="{{ item.url }}" class="nav-link">{{ item.title }}</a>
                    </div>
                    {% endfor %}
                </div>
                
                <div class="auth-buttons">
                    {% for key, btn in auth_buttons.items %}
                    <a href="{{ btn.url }}" class="btn {{ btn.class }}">{{ btn.title }}</a>
                    {% endfor %}
                </div>
            </div>
        </nav>
        
        <div class="content">
            <h1 class="hero-title"><span class="highlight">Upskill</span> the next generation developer</h1>
            <p class="hero-subtitle">We help thousands of companies hire and upskill the next generation of developers, and millions of developers to become one.</p>
        </div>
    </body>
    </html>
    """
    
    template = Template(template_str)
    context = Context(NAVBAR_CONFIG)
    return HttpResponse(template.render(context))

def navbar_config_api(request):
    """API endpoint to get navbar configuration"""
    return JsonResponse(NAVBAR_CONFIG)

def products_view(request):
    """Products page"""
    return HttpResponse("<h1>Products Page</h1><p>This is where products content would go.</p>")

def solutions_view(request):
    """Solutions page"""
    return HttpResponse("<h1>Solutions Page</h1><p>This is where solutions content would go.</p>")

def resources_view(request):
    """Resources page"""
    return HttpResponse("<h1>Resources Page</h1><p>This is where resources content would go.</p>")

def pricing_view(request):
    """Pricing page"""
    return HttpResponse("<h1>Pricing Page</h1><p>This is where pricing content would go.</p>")

def developers_view(request):
    """For Developers page"""
    return HttpResponse("<h1>For Developers Page</h1><p>This is where developer content would go.</p>")

def login_view(request):
    """Login page"""
    return HttpResponse("<h1>Login Page</h1><p>This is where login form would go.</p>")

def demo_view(request):
    """Request Demo page"""
    return HttpResponse("<h1>Request Demo Page</h1><p>This is where demo request form would go.</p>")

def signup_view(request):
    """Signup page"""
    return HttpResponse("<h1>Signup Page</h1><p>This is where signup form would go.</p>")

# Product sub-pages
def screen_view(request):
    return HttpResponse("<h1>Screen Product</h1><p>Technical screening platform</p>")

def interview_view(request):
    return HttpResponse("<h1>Interview Product</h1><p>Live coding interviews</p>")

def engage_view(request):
    return HttpResponse("<h1>Engage Product</h1><p>Developer engagement platform</p>")

def skillup_view(request):
    return HttpResponse("<h1>SkillUp Product</h1><p>Skill development platform</p>")

# Feature sub-pages
def certified_assessments_view(request):
    return HttpResponse("<h1>Certified Assessments</h1><p>Professional skill assessments</p>")

def plagiarism_detection_view(request):
    return HttpResponse("<h1>Plagiarism Detection</h1><p>Code plagiarism detection system</p>")

def real_world_questions_view(request):
    return HttpResponse("<h1>Real-World Questions</h1><p>Practical coding challenges</p>")

def integrations_view(request):
    return HttpResponse("<h1>Integrations</h1><p>Third-party integrations</p>")

# Solution sub-pages
def what_we_do_view(request):
    return HttpResponse("<h1>What We Do</h1><p>Our mission and services</p>")

def skills_strategy_view(request):
    return HttpResponse("<h1>Skills Strategy</h1><p>Strategic skill development</p>")

def tech_brand_view(request):
    return HttpResponse("<h1>Tech Brand</h1><p>Showcase your technology brand</p>")

def hiring_process_view(request):
    return HttpResponse("<h1>Hiring Process</h1><p>Optimize your hiring workflow</p>")

def internal_talent_view(request):
    return HttpResponse("<h1>Internal Talent</h1><p>Mobilize existing talent</p>")

def ai_data_services_view(request):
    return HttpResponse("<h1>AI Data Services</h1><p>AI-powered data solutions</p>")

# URL patterns
urlpatterns = [
    # Main pages
    path('', home_view, name='home'),
    path('api/navbar-config/', navbar_config_api, name='navbar_config'),
    path('products/', products_view, name='products'),
    path('solutions/', solutions_view, name='solutions'),
    path('resources/', resources_view, name='resources'),
    path('pricing/', pricing_view, name='pricing'),
    path('developers/', developers_view, name='developers'),
    
    # Auth pages
    path('login/', login_view, name='login'),
    path('demo/', demo_view, name='demo'),
    path('signup/', signup_view, name='signup'),
    
    # Product sub-pages
    path('products/screen/', screen_view, name='screen'),
    path('products/interview/', interview_view, name='interview'),
    path('products/engage/', engage_view, name='engage'),
    path('products/skillup/', skillup_view, name='skillup'),
    
    # Feature sub-pages
    path('features/certified-assessments/', certified_assessments_view, name='certified_assessments'),
    path('features/plagiarism-detection/', plagiarism_detection_view, name='plagiarism_detection'),
    path('features/real-world-questions/', real_world_questions_view, name='real_world_questions'),
    path('features/integrations/', integrations_view, name='integrations'),
    
    # Solution sub-pages
    path('solutions/what-we-do/', what_we_do_view, name='what_we_do'),
    path('solutions/skills-strategy/', skills_strategy_view, name='skills_strategy'),
    path('solutions/tech-brand/', tech_brand_view, name='tech_brand'),
    path('solutions/hiring-process/', hiring_process_view, name='hiring_process'),
    path('solutions/internal-talent/', internal_talent_view, name='internal_talent'),
    path('solutions/ai-data-services/', ai_data_services_view, name='ai_data_services'),
]

# Django application entry point
if __name__ == '__main__':
    import django
    from django.core.management import execute_from_command_line
    import sys
    
    django.setup()
    execute_from_command_line(sys.argv)