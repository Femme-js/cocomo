from django.urls import path
from . import views

urlpatterns = [
    path('', views.cocomo_simulator),
    path('result/', views.result),
]
