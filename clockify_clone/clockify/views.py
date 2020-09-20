from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import  clockifyItem
# Create your views here.

def clockifyView(request):
    project_Item = clockifyItem.objects.all()
    return render( request , 'home.html' , {'all_projects' : project_Item})


def addproject(request):
         new_project = clockifyItem(content = request.POST['content']) 
         new_project.save()
         return HttpResponseRedirect('/clockify/')

def deleteproject(request , project_id):
         delete_project = clockifyItem.objects.get(id = project_id)
         new_project.save()
         return HttpResponseRedirect('/clockify/')         