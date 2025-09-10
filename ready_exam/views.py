from rest_framework import viewsets
from .models import ExamType, Subject, Resource, SpecificExamType
from .serializers import ExamTypeSerializer,SpecificExamTypeSerializer, SubjectSerializer, ResourceSerializer

class ExamTypeViewSet(viewsets.ModelViewSet):
    queryset = ExamType.objects.all()
    serializer_class = ExamTypeSerializer

class SpecificExamTypeViewSet(viewsets.ModelViewSet):
    queryset = SpecificExamType.objects.all()
    serializer_class = SpecificExamTypeSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
