from django.contrib import admin
from .models import ExamType, MatricResource, MinistryResource,MinistryAllResource

admin.site.register(ExamType)
admin.site.register(MatricResource)
admin.site.register(MinistryResource)
admin.site.register(MinistryAllResource)


