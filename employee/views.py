from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from employee.models import Employee, Address
from employee.forms import EmployeeForm, AddressForm

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

def create(request):
    if request.method == 'POST':
        employee_form = EmployeeForm(request.POST)

        if employee_form.is_valid():
            employee = employee_form.save()
            address_form = AddressForm(request.POST)

            if address_form.is_valid():
                address = address_form.save()

                return JsonResponse({ 'data': employee.to_client(), 'message': 'Employee created' })
            return JsonResponse({ 'error': address_form.errors }, status=400)
        return JsonResponse({ 'error': employee_form.errors }, status=400)
    return JsonResponse({ 'error': 'Must be POST request' }, status=400)


def delete(request, id):
    if request.method == 'POST':
        try:
            employee = Employee.objects.get(id=id)
            employee.delete()
        except Employee.DoesNotExist:
            return JsonResponse({ 'error': 'Employee does not exist' }, status=400)
        return JsonResponse({ 'message': 'Employee deleted' })
    return JsonResponse({ 'error': 'Must be POST request' }, status=400)

def update(request, id, **kwargs):
    if request.method == 'POST':
        employee = Employee.objects.get(id=id)
        employee_form = EmployeeForm(request.POST, instance=employee)

        if employee_form.is_valid():
            employee = employee_form.save()
            address = Address.objects.get(employee=employee)
            address_form = AddressForm(request.POST, instance=address)

            if address_form.is_valid():
                address = address_form.save()
                return JsonResponse({ 'data': employee.to_client(), 'message': 'Employee information updated' })
            return JsonResponse({ 'error': address_form.errors }, status=400)
        return JsonResponse({ 'error': employee_form.errors }, status=400)
    return JsonResponse({ 'error': 'Must be POST request' }, status=400)
