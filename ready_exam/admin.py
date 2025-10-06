from django.contrib import admin
from .models import ExamType, ResourceType, College, GradeSixResource, GradeSixTotalSubjects, GradeEightResource, GradeElevenResource

admin.site.register(ExamType)
admin.site.register(ResourceType)
admin.site.register(College)
admin.site.register(GradeSixResource)
admin.site.register(GradeSixTotalSubjects)

admin.site.register(GradeEightResource)
admin.site.register(GradeElevenResource)


