from django.urls import path
from . import views

urlpatterns = [
    path('company/login/', views.company_login, name='company_login'),
    path('company/post-problem/', views.post_problem, name='post_problem'),
]
