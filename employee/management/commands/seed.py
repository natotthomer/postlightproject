from django.core.management.base import BaseCommand, CommandError
from employee.models import Employee

class Command(BaseCommand):
    help = 'seed the database with random users'

    def handle(self, *args, **options):
        print('hello')

        print('...')

        print('done')
