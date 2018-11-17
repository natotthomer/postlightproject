from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from employee.models import Employee

def index(request):
    results = [employee.to_client() for employee in Employee.objects.all().select_related('image').select_related('address')]

    return JsonResponse({'data': results})
