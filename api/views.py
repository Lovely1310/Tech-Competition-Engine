from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def my_profile(self):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer = self.get_serializer(profile)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def update_profile(self):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer = self.get_serializer(profile, data=self.request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            profile.calculate_completion()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ResumeViewSet(viewsets.ModelViewSet):
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Resume.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)
        profile.calculate_completion()

class WorkExperienceViewSet(viewsets.ModelViewSet):
    serializer_class = WorkExperienceSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return WorkExperience.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)
        profile.calculate_completion()

class EducationViewSet(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Education.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)
        profile.calculate_completion()

class LinkViewSet(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Link.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)
        profile.calculate_completion()

class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Skill.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)
        profile.calculate_completion()

class CertificationViewSet(viewsets.ModelViewSet):
    serializer_class = CertificationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Certification.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)

class BadgeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserBadgeViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserBadgeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return UserBadge.objects.filter(user_profile__user=self.request.user)

class EEOSettingsViewSet(viewsets.ModelViewSet):
    serializer_class = EEOSettingsSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return EEOSettings.objects.filter(user_profile__user=self.request.user)
    
    def perform_create(self, serializer):
        profile, created = UserProfile.objects.get_or_create(user=self.request.user)
        serializer.save(user_profile=profile)


