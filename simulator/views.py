from django.shortcuts import render
from .models import Driver


def cocomo_simulator(request):
    drivers = Driver.objects.all()
    return render(request, 'simulator/simulator.html', {'drivers': drivers})


def result(request):
    if request.method == 'POST':
        a = request.POST['']
