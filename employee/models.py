from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField()
    department = models.CharField(max_length=64)
    title = models.CharField(max_length=64)
    dob = models.DateField()
