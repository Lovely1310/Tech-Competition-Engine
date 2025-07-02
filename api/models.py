from django.db import models
from django.contrib.auth.models import User

class Problem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    company = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

