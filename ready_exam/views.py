from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, Exam Ready App is working 🚀")
