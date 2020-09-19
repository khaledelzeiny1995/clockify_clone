from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def clockifyView(request):
    return render( request , 'home.html')