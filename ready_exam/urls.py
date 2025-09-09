from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),  # just a test view
]
