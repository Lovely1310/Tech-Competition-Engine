from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15, blank=True, null=True)
    country = models.CharField(max_length=100, default='India')
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    profile_completion = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
    
    def calculate_completion(self):
        completion = 0
        if self.mobile_number:
            completion += 10
        if self.work_experiences.exists():
            completion += 20
        if self.educations.exists():
            completion += 20
        if self.links.exists():
            completion += 15
        if self.skills.exists():
            completion += 15
        if self.resume:
            completion += 20
        self.profile_completion = completion
        self.save()
        return completion


class Resume(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, related_name='resume')
    resume_file = models.FileField(
        upload_to='resumes/', 
        validators=[FileExtensionValidator(['pdf', 'doc', 'docx'])],
        blank=True, 
        null=True
    )
    resume_text = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Resume - {self.user_profile.user.username}"


class Badge(models.Model):
    BADGE_TYPES = [
        ('problem_solving', 'Problem Solving'),
        ('algorithms', 'Algorithms'),
        ('data_structures', 'Data Structures'),
        ('mathematics', 'Mathematics'),
        ('sql', 'SQL'),
        ('python', 'Python'),
        ('java', 'Java'),
        ('javascript', 'JavaScript'),
        ('cpp', 'C++'),
        ('gold', 'Gold'),
        ('silver', 'Silver'),
        ('bronze', 'Bronze'),
    ]
    
    name = models.CharField(max_length=100)
    badge_type = models.CharField(max_length=50, choices=BADGE_TYPES)
    description = models.TextField()
    icon = models.ImageField(upload_to='badges/', blank=True, null=True)
    level = models.CharField(max_length=20, choices=[
        ('bronze', 'Bronze'),
        ('silver', 'Silver'),
        ('gold', 'Gold'),
        ('platinum', 'Platinum')
    ])
    
    def __str__(self):
        return f"{self.name} - {self.level}"


class UserBadge(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='badges')
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    earned_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['user_profile', 'badge']
    
    def __str__(self):
        return f"{self.user_profile.user.username} - {self.badge.name}"


class Certification(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='certifications')
    name = models.CharField(max_length=200)
    issuing_organization = models.CharField(max_length=200)
    issue_date = models.DateField()
    expiry_date = models.DateField(blank=True, null=True)
    credential_id = models.CharField(max_length=100, blank=True)
    credential_url = models.URLField(blank=True)
    
    def __str__(self):
        return f"{self.name} - {self.user_profile.user.username}"


class WorkExperience(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='work_experiences')
    job_title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    skills_used = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.job_title} at {self.company}"


class Education(models.Model):
    DEGREE_TYPES = [
        ('high_school', 'High School'),
        ('bachelor', 'Bachelor\'s Degree'),
        ('master', 'Master\'s Degree'),
        ('phd', 'PhD'),
        ('diploma', 'Diploma'),
        ('certificate', 'Certificate'),
    ]
    
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='educations')
    degree = models.CharField(max_length=50, choices=DEGREE_TYPES)
    field_of_study = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    grade = models.CharField(max_length=20, blank=True)
    description = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.degree} in {self.field_of_study}"


class Link(models.Model):
    LINK_TYPES = [
        ('github', 'GitHub'),
        ('linkedin', 'LinkedIn'),
        ('portfolio', 'Portfolio'),
        ('blog', 'Blog'),
        ('twitter', 'Twitter'),
        ('stackoverflow', 'Stack Overflow'),
        ('other', 'Other'),
    ]
    
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='links')
    link_type = models.CharField(max_length=20, choices=LINK_TYPES)
    url = models.URLField()
    title = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return f"{self.link_type} - {self.user_profile.user.username}"


class Skill(models.Model):
    SKILL_LEVELS = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('expert', 'Expert'),
    ]
    
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=20, choices=SKILL_LEVELS)
    years_of_experience = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.name} - {self.level}"


class EEOSettings(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('non_binary', 'Non-binary'),
        ('prefer_not_to_say', 'Prefer not to say'),
    ]
    
    ETHNICITY_CHOICES = [
        ('asian', 'Asian'),
        ('black', 'Black or African American'),
        ('hispanic', 'Hispanic or Latino'),
        ('white', 'White'),
        ('native_american', 'Native American'),
        ('pacific_islander', 'Pacific Islander'),
        ('two_or_more', 'Two or more races'),
        ('prefer_not_to_say', 'Prefer not to say'),
    ]
    
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, related_name='eeo_settings')
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, blank=True)
    ethnicity = models.CharField(max_length=30, choices=ETHNICITY_CHOICES, blank=True)
    veteran_status = models.BooleanField(default=False)
    disability_status = models.BooleanField(default=False)
    
    def __str__(self):
        return f"EEO Settings - {self.user_profile.user.username}"
