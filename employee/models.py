from django.db import models

from utils.file_utils import get_image_file_path

class Employee(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField()
    department = models.CharField(max_length=64)
    title = models.CharField(max_length=64)
    dob = models.DateTimeField()
    phone = models.CharField(max_length=16)
    cell = models.CharField(max_length=16)

class Image(models.Model):
    thumbnail = models.ImageField(
        upload_to=get_image_file_path,
        height_field='thumbnail_height',
        width_field='thumbnail_width'
    )
    medium = models.ImageField(
        upload_to=get_image_file_path,
        height_field='medium_height',
        width_field='medium_width'
    )
    large = models.ImageField(
        upload_to=get_image_file_path,
        height_field='large_height',
        width_field='large_width'
    )
    employee = models.OneToOneField(
        Employee,
        on_delete=models.CASCADE,
        related_name='image',
        blank=True,
        null=True
    )


class Address(models.Model):
    street = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    state = models.CharField(max_length=128, blank=True, null=True)
    country = models.CharField(max_length=128, blank=True, null=True)
    employee = models.OneToOneField(
        Employee,
        on_delete=models.CASCADE,
        related_name='address',
        blank=True,
        null=True
    )
