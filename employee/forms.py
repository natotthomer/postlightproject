from django import forms
from employee.models import Image, Employee

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
