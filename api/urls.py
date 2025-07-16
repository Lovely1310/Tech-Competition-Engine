from django.urls import path
from . import views

urlpatterns = [
    path('company/login/', views.company_login, name='company_login'),
    path('company/post-problem/', views.post_problem, name='post_problem'),
    path('company/problems/', views.get_problems, name='get_problems'),
    path('company/problems/<int:pk>/update/', views.update_problem, name='update_problem'),
    path('company/problems/<int:pk>/delete/', views.delete_problem, name='delete_problem'),
    path('register/',views.register_user,name='register'), #########
]
