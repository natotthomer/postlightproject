import os

from datetime import datetime

from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField()
    department = models.CharField(max_length=64)
    title = models.CharField(max_length=64)
    dob = models.DateTimeField()
    phone = models.CharField(max_length=16, blank=True, null=True)
    cell = models.CharField(max_length=16, blank=True, null=True)

    def to_client(self):
        dob = datetime.strftime(self.dob, "%m-%d-%Y")

        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'full_name': self.full_name(),
            'email': self.email,
            'department': self.department,
            'title': self.title,
            'dob': dob,
            'phone': self.phone,
            'cell': self.cell,
            'image': self.image.to_client() if self.image else None,
            'address': self.address.to_client()
        }

    def to_client_simple(self):
        return {
            'id': self.id,
            'full_name': self.full_name(),
            'email': self.email,
            'department': self.department,
            'image': self.image.thumbnail
        }

    def full_name(self):
        return self.first_name.capitalize() + ' ' + self.last_name.capitalize()

class Image(models.Model):
    thumbnail = models.CharField(max_length=128)
    medium = models.CharField(max_length=128)
    large = models.CharField(max_length=128)

    employee = models.OneToOneField(
        Employee,
        on_delete=models.CASCADE,
        related_name='image',
        blank=True,
        null=True
    )

    def to_client(self):
        return {
            'thumbnail': self.thumbnail,
            'medium': self.medium,
            'large': self.large
        }


class Address(models.Model):
    street = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    state = models.CharField(max_length=128, blank=True, null=True)
    postal_code = models.CharField(max_length=16, blank=True, null=True)
    employee = models.OneToOneField(
        Employee,
        on_delete=models.CASCADE,
        related_name='address',
        blank=True,
        null=True
    )

    def to_client(self):
        print(self)
        return {
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code
        }
