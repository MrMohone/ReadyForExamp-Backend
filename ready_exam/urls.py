
from django.urls import path, include
from . import views
from .views import GradeSixResourceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('gradesixresource', GradeSixResourceViewSet)


urlpatterns = router.urls



