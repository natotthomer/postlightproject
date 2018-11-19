from django import forms
from employee.models import Image, Employee, Address

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = (
            'first_name',
            'last_name',
            'email',
            'department',
            'title',
            'phone',
            'cell',
        )

class AddressForm(forms.ModelForm):
    class Meta:
        model = Address
        fields = (
            'street',
            'city',
            'state',
            'postal_code'
        )

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = (
            'thumbnail',
            'medium',
            'large',
            'employee'
        )

        employee = forms.ModelChoiceField(queryset=Employee.objects.all(), required=False)
