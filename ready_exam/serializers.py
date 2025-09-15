from rest_framework import serializers
from .models import ExamType, MatricResource, MinistryResource, MinistryAllResource

class ExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamType
        fields = ['id', 'exam_name']

class MinistryResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinistryResource
        fields = ['id','resource_type',]

class MatricResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatricResource
        fields = ['id', 'subject', 'title', 'resource_type', 'file', 'description', 'uploaded_at']

class MinistryAllResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinistryAllResource
        fields = ['id', 'subject', 'title', 'exam_name', 'resource_type', 'file','description', 'uploaded_at']
 

