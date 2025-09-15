from rest_framework import viewsets
from .models import ExamType, MatricResource, MinistryResource,MinistryAllResource
from .serializers import ExamTypeSerializer, MatricResourceSerializer, MinistryResourceSerializer, MinistryAllResourceSerializer

class ExamTypeViewSet(viewsets.ModelViewSet):
    queryset = ExamType.objects.all()
    serializer_class = ExamTypeSerializer

class MinistryResourceViewSet(viewsets.ModelViewSet):
    queryset = MinistryResource.objects.all()
    serializer_class = MinistryResourceSerializer

class MinistryAllResourceViewSet(viewsets.ModelViewSet):
    queryset = MinistryAllResource.objects.all()
    serializer_class = MinistryAllResourceSerializer


class MatricResourceViewSet(viewsets.ModelViewSet):
    queryset = MatricResource.objects.all()
    serializer_class = MatricResourceSerializer







