# yourapp/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'profile', views.UserProfileViewSet, basename='profile')
router.register(r'resume', views.ResumeViewSet, basename='resume')
router.register(r'work-experience', views.WorkExperienceViewSet, basename='work-experience')
router.register(r'education', views.EducationViewSet, basename='education')
router.register(r'links', views.LinkViewSet, basename='links')
router.register(r'skills', views.SkillViewSet, basename='skills')
router.register(r'certifications', views.CertificationViewSet, basename='certifications')
router.register(r'badges', views.BadgeViewSet, basename='badges')
router.register(r'user-badges', views.UserBadgeViewSet, basename='user-badges')
router.register(r'eeo-settings', views.EEOSettingsViewSet, basename='eeo-settings')

urlpatterns = router.urls  # ⬅️ this replaces path("api/", include(...))
