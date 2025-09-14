from rest_framework import serializers
from .models import ExamType, MatricResource, MinistryResource

class ExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamType
        fields = ['id', 'exam_name']

class MinistryResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinistryResource
        fields = ['id', 'subject', 'title', 'resource_type', 'file', 'description', 'uploaded_at']

class MatricResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatricResource
        fields = ['id', 'subject', 'title', 'resource_type', 'file', 'description', 'uploaded_at']


