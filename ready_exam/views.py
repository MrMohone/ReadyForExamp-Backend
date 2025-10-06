from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import ExamType, ResourceType, College, GradeSixResource,GradeSixTotalSubjects, GradeEightResource, GradeElevenResource
from .serializers import ExamTypeSerializer, ResourceTypeSerializer, CollegeSerializer, GradeSixResourceSerializer,GradeSixTotalSubjectsSerializer, GradeEightResourceSerializer, GradeElevenResourceSerializer
from rest_framework.response import Response
from rest_framework.decorators import action


class GradeSixResourceViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = GradeSixResource.objects.all()
    serializer_class = GradeSixResourceSerializer

    def list(self, request):
        queryset = GradeSixResource.objects.all()
        if not queryset.exists():
            return Response({"detail": "No resources available."}, status=404)
        serializer = GradeSixResourceSerializer(queryset, many=True)
        return Response(serializer.data, status=200)
        
    @action(detail=False, methods=['get'], url_path='allsubjects')
    def subjects(self, request):
        allsubject = GradeSixTotalSubjects.objects.all()
        if not allsubject.exists():
            return Response({"detail": "No subjects available."}, status=404)
        serializer = GradeSixTotalSubjectsSerializer(allsubject, many=True)
        return Response(serializer.data, status=200)
    
    @action(detail=False, methods=['get'], url_path='by-subject/(?P<subject>[^/.]+)')
    def by_subject(self, request, subject=None):
        resources = GradeSixResource.objects.filter(subject=subject)
        if not resources.exists():
            return Response({"detail": "No resources found for the specified subject."}, status=404)
        serializer = self.get_serializer(resources, many=True)
        return Response(serializer.data, status=200)
        

    


