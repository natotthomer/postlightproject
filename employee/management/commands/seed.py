import requests
import json

from django.core.management.base import BaseCommand, CommandError

from employee.models import Employee
from utils.employee_utils import generate_random_department_and_title


class Command(BaseCommand):
    help = 'seed the database with random users'

    def parse_and_create_employee(self, employee_data):
        name = employee_data.get('name')

        packaged_data = {
            'first_name': name.get('first'),
            'last_name': name.get('last'),
            'email': employee_data.get('email'),
            'dob': employee_data.get('dob'),
            **generate_random_department_and_title()
        }
        print(packaged_data)

    def handle(self, *args, **options):

        r = requests.get('https://randomuser.me/api/?results=100')

        data = r.json()

        for employee in data.get('results'):
            created_employee = self.parse_and_create_employee(employee)
            # print('employee id: ', created_employee.id)


        print('done')
