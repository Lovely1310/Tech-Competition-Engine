from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import UserProfile, WorkExperience, Education, Skill, Link

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Create UserProfile when User is created"""
    if created:
        UserProfile.objects.create(
            user=instance,
            username=instance.username,
            email=instance.email
        )

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    """Save UserProfile when User is saved"""
    if hasattr(instance, 'profile'):
        instance.profile.save()

# Update profile completion when related models change
@receiver(post_save, sender=WorkExperience)
@receiver(post_delete, sender=WorkExperience)
@receiver(post_save, sender=Education)
@receiver(post_delete, sender=Education)
@receiver(post_save, sender=Skill)
@receiver(post_delete, sender=Skill)
@receiver(post_save, sender=Link)
@receiver(post_delete, sender=Link)
def update_profile_completion(sender, instance, **kwargs):
    """Update profile completion when related objects change"""
    if hasattr(instance, 'user_profile'):
        instance.user_profile.calculate_completion()