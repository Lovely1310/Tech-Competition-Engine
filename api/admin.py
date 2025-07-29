from django.contrib import admin
from .models import *

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'username', 'email', 'country', 'profile_completion']
    list_filter = ['country', 'profile_completion']
    search_fields = ['username', 'email', 'user__first_name', 'user__last_name']

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ['user_profile', 'uploaded_at']
    list_filter = ['uploaded_at']

@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ['name', 'badge_type', 'level']
    list_filter = ['badge_type', 'level']

@admin.register(UserBadge)
class UserBadgeAdmin(admin.ModelAdmin):
    list_display = ['user_profile', 'badge', 'earned_date']
    list_filter = ['badge__badge_type', 'badge__level', 'earned_date']

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'user_profile', 'issuing_organization', 'issue_date']
    list_filter = ['issuing_organization', 'issue_date']

@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ['job_title', 'company', 'user_profile', 'start_date', 'end_date']
    list_filter = ['company', 'start_date', 'is_current']

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'field_of_study', 'institution', 'user_profile']
    list_filter = ['degree', 'institution']

@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ['link_type', 'user_profile', 'url']
    list_filter = ['link_type']

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'level', 'user_profile', 'years_of_experience']
    list_filter = ['level', 'years_of_experience']

@admin.register(EEOSettings)
class EEOSettingsAdmin(admin.ModelAdmin):
    list_display = ['user_profile', 'gender', 'ethnicity']
    list_filter = ['gender', 'ethnicity', 'veteran_status', 'disability_status']
