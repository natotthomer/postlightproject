from django.conf.urls import url

from employee import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
