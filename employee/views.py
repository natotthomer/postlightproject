from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from employee.models import Employee

def index(request):
    results = [employee.to_client_simple() for employee in Employee.objects.all().select_related('image').select_related('address')]

    return JsonResponse({ 'data': results })

def read(request, id):
    try:
        employee = Employee.objects.get(id=id)
        result = employee.to_client()
    except Employee.DoesNotExist:
        result = None
    return JsonResponse({ 'data': result })
