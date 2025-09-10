from django.contrib import admin
from .models import ExamType, Subject, Resource, SpecificExamType

admin.site.register(ExamType)
admin.site.register(Subject)
admin.site.register(Resource) 
admin.site.register(SpecificExamType)  

