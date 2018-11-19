from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from employee.models import Employee, Address

def index(request):
    search_value = request.GET.get('search')
    order_by = request.GET.get('order', '-id')

    if search_value is not '':
        paginator = Paginator(
            Employee.objects.filter(
                    Q(first_name__icontains=search_value) |
                    Q(last_name__icontains=search_value) |
                    Q(email__icontains=search_value) |
                    Q(department__icontains=search_value) |
                    Q(title__icontains=search_value))
                .select_related('image')
                .select_related('address')
                .order_by(order_by), 10)
                
    else:
        paginator = Paginator(
            Employee.objects.all()
                .select_related('image')
                .select_related('address')
                .order_by(order_by), 10)
                

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
        return JsonResponse({ 'error': 'Employee does not exist' }, status=400)
    return JsonResponse({ 'data': result })

def delete(request, id):
    try:
        employee = Employee.objects.get(id=id)
        employee.delete()
    except Employee.DoesNotExist:
        return JsonResponse({ 'error': 'Employee does not exist' }, status=400)
    return JsonResponse({ 'message': 'Employee deleted' })

def update(request, id):
    try:
        employee = Employee.objects.filter(id=id)
        address = Address.objects.filter(employee=employee.first())
        employee_data = {
            'first_name': request.POST.get('first_name'),
            'last_name': request.POST.get('last_name'),
            'email': request.POST.get('email'),
            'title': request.POST.get('title'),
            'cell': request.POST.get('cell'),
            'phone': request.POST.get('phone'),
            'department': request.POST.get('department')
        }

        address_data = {
            'street': request.POST.get('street'),
            'city': request.POST.get('city'),
            'state': request.POST.get('state'),
            'postal_code': request.POST.get('postal_code'),
        }
        
        employee.update(**employee_data)
        address.update(**address_data)

        result = employee.first().to_client()
    except Employee.DoesNotExist:
        return JsonResponse({ 'error': 'Employee does not exist' }, status=400) 
    return JsonResponse({ 'data': result, 'message': 'Employee information updated' })