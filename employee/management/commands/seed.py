import requests
import json
from datetime import datetime

from django.core.management.base import BaseCommand, CommandError

from employee.models import Employee, Address, Image
from utils.employee_utils import generate_random_department_and_title


class Command(BaseCommand):
    help = 'seed the database with random users'

    def parse_and_create_employee(self, employee_data):
        name = employee_data.get('name')
        picture = employee_data.get('picture')
        address = employee_data.get('location')

        image_data = {
            'large': picture.get('large'),
            'medium': picture.get('medium'),
            'thumbnail': picture.get('thumbnail')
        }

        address_data = {
            'street': address.get('street'),
            'city': address.get('city'),
            'state': address.get('state', None)
        }

        employee_data = {
            'first_name': name.get('first'),
            'last_name': name.get('last'),
            'email': employee_data.get('email'),
            'dob': datetime.strptime(employee_data.get('dob').get('date'), "%Y-%m-%dT%H:%M:%SZ"),
            **generate_random_department_and_title(),
            'phone': employee_data.get('phone'),
            'cell': employee_data.get('cell')
        }

        employee = Employee.objects.create(**employee_data)
        address = Address.objects.create(**address_data, employee=employee)
        image = Image.objects.create(**image_data, employee=employee)

    def handle(self, *args, **options):

        r = requests.get('https://randomuser.me/api/?results=100&nat=us')
        data = r.json()

        for employee in data.get('results'):
            created_employee = self.parse_and_create_employee(employee)

        print('done')
