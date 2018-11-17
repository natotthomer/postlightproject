from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from employee.models import Employee

def index(request):
    paginator = Paginator(Employee.objects.all().select_related('image').select_related('address'), 10)

    try:
        results = paginator.page(request.GET.get('page'))
    except PageNotAnInteger:
        results = paginator.page(1)
    except EmptyPage:
        return JsonResponse({ 'last': True, 'num_pages': paginator.num_pages })

    results = [employee.to_client_simple() for employee in results]

    return JsonResponse({ 'data': results, 'num_pages': paginator.num_pages })

def read(request, id):
    try:
        employee = Employee.objects.get(id=id)
        result = employee.to_client()
    except Employee.DoesNotExist:
        result = None
    return JsonResponse({ 'data': result })
