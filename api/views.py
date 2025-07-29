from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
<<<<<<< HEAD
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *
=======
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .serializers import ProblemSerializer,RegisterSerializer
from .models import Problem
from rest_framework.views import APIView
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa

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


<<<<<<< HEAD
=======
# Delete a Problem
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_problem(request, pk):
    try:
        problem = Problem.objects.get(pk=pk, company=request.user)
    except Problem.DoesNotExist:
        return Response({'error': 'Problem not found'}, status=status.HTTP_404_NOT_FOUND)

    problem.delete()
    return Response({'message': 'Problem deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

############################
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#######################
from django.contrib.auth import logout

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully"})
>>>>>>> 97fc10cf43b43364d9911fffdbd4a246a43ee2aa
