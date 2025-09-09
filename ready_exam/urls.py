# from django.urls import path
# from . import views

# urlpatterns = [
#     path("", views.index, name="index"),  # just a test view
# ]

# 
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExamTypeViewSet, SubjectViewSet, ResourceViewSet

router = DefaultRouter()
router.register(r'examtypes', ExamTypeViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
