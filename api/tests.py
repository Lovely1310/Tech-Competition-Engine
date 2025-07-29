from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status
from .models import *

class UserProfileModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
        self.profile = UserProfile.objects.create(
            user=self.user,
            username='testuser',
            email='test@example.com'
        )
    
    def test_profile_creation(self):
        self.assertEqual(self.profile.user.username, 'testuser')
        self.assertEqual(self.profile.profile_completion, 0)
    
    def test_completion_calculation(self):
        # Add work experience
        WorkExperience.objects.create(
            user_profile=self.profile,
            job_title='Software Engineer',
            company='Test Company',
            start_date='2023-01-01'
        )
        
        # Add skill
        Skill.objects.create(
            user_profile=self.profile,
            name='Python',
            level='advanced'
        )
        
        completion = self.profile.calculate_completion()
        self.assertGreater(completion, 0)

class APITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
        self.profile = UserProfile.objects.create(
            user=self.user,
            username='testuser',
            email='test@example.com'
        )
    
    def test_profile_api(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get('/api/profile/my_profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_work_experience_crud(self):
        self.client.force_authenticate(user=self.user)
        
        # Create
        data = {
            'job_title': 'Software Engineer',
            'company': 'Test Company',
            'start_date': '2023-01-01',
            'description': 'Test description'
        }
        response = self.client.post('/api/work-experience/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        # Read
        response = self.client.get('/api/work-experience/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)