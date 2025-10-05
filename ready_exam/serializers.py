from rest_framework import serializers
from .models import ExamType, ResourceType, College, GradeSixResource,GradeSixTotalSubjects, GradeEightResource, GradeElevenResource


class ExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamType
        fields = ['exam_type']

class ResourceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceType
        fields = ['resource_type']

class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ['college_type']


class GradeSixResourceSerializer(serializers.ModelSerializer):
    resource = ResourceTypeSerializer(read_only=True)

    class Meta:
        model = GradeSixResource
        fields = ['id', 'subject', 'title', 'resource', 'file', 'description', 'uploaded_at', 'modified_at']


class GradeSixTotalSubjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradeSixTotalSubjects
        fields = ['id', 'allsubject', 'description', 'uploaded_at', 'modified_at']

class GradeEightResourceSerializer(serializers.ModelSerializer):
    resource = ResourceTypeSerializer(read_only=True)

    class Meta:
        model = GradeEightResource
        fields = ['id', 'subject', 'title', 'resource', 'file', 'description', 'uploaded_at', 'modified_at']

class GradeElevenResourceSerializer(serializers.ModelSerializer):
    resource = ResourceTypeSerializer(read_only=True)
    college = CollegeSerializer(read_only=True)

    class Meta:
        model = GradeElevenResource
        fields = ['id', 'subject', 'title', 'resource', 'college', 'file', 'description', 'uploaded_at', 'modified_at']