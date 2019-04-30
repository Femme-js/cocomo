from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('simulator/', include('simulator.urls')),
    path('', views.homepage),
]

urlpatterns += staticfiles_urlpatterns()
