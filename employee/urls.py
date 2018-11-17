from django.conf.urls import re_path

from employee import views

urlpatterns = [
    re_path(r'^$', views.index, name='employee_index'),
    re_path(r'^(?P<id>[^/]+)', views.read, name='employee_read')
]
