from django.conf import settings
from django.conf.urls import include, re_path
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from postlightproject import views

urlpatterns = [
    re_path(r'^$', views.home, name='home'),
    re_path(r'^api/employees/', include('employee.urls')),
    re_path(r'^admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
