# from django.urls import path
# from . import views

# urlpatterns = [
#     path("", views.index, name="index"),  # just a test view
# ]

# 
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExamTypeViewSet, MinistryResourceViewSet, MatricResourceViewSet, MinistryAllResourceViewSet

router = DefaultRouter()
router.register(r'examtypes', ExamTypeViewSet)
router.register(r'ministryresources', MinistryResourceViewSet)
router.register(r'matricresources', MatricResourceViewSet)
router.register(r'ministryallresource', MinistryAllResourceViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
