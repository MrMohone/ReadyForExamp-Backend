from rest_framework import serializers
from .models import ExamType, Subject, Resource, SpecificExamType
class ExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamType
        fields = ['id', 'exam_name']

class SpecificExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecificExamType
        fields = ['id', 'exam_name', 'exam_description']


class SubjectSerializer(serializers.ModelSerializer):
    # Display exam_type as dropdown in browsable API
    exam_type = serializers.PrimaryKeyRelatedField(
        queryset=ExamType.objects.all()
    )
    exam_type_name = serializers.StringRelatedField(source='exam_type', read_only=True)  # optional, shows name

    class Meta:
        model = Subject
        fields = ['id', 'subject_name', 'category', 'exam_type', 'exam_type_name']


class ResourceSerializer(serializers.ModelSerializer):
    # Display subject_name as dropdown in browsable API
    subject_name = serializers.PrimaryKeyRelatedField(
        queryset=Subject.objects.all()
    )
    subject_title_display = serializers.StringRelatedField(source='subject_name', read_only=True)  # optional

    class Meta:
        model = Resource
        fields = ['id', 'subject_name', 'subject_title', 'resource_type', 'file', 'description', 'uploaded_at', 'subject_title_display']
