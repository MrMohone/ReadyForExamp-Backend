from django.db import models


class ExamType(models.Model):
    EXAM_CATEGORY_CHOICES = [
        ('Ministry', 'Ministry'),
        ('Matric', 'Matric'),
        ('Entrance', 'Entrance'),
    ]
    exam_name =  models.CharField(max_length=20,choices=EXAM_CATEGORY_CHOICES, default='Ministry')

    def __str__(self):
        return self.exam_name

class MatricResource(models.Model):
    RESOURCE_TYPE_CHOICES = [
        ('PDF', 'PDF'),
        ('Video', 'Video'),
    ]

    subject = models.CharField(max_length=200,null=False, blank=False)
    title = models.CharField(max_length=200)
    resource_type = models.CharField(max_length=10, choices=RESOURCE_TYPE_CHOICES, default='PDF')
    file = models.FileField(upload_to='resources/matric/')
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} ({self.title})"


class MinistryResource(models.Model):
    RESOURCE_TYPE_CHOICES = [
        ('PDF', 'PDF'),
        ('Video', 'Video'),
    ]

    subject = models.CharField(max_length=200, null=False, blank=False)
    title = models.CharField(max_length=200)
    resource_type = models.CharField(max_length=10, choices=RESOURCE_TYPE_CHOICES, default='PDF')
    file = models.FileField(upload_to='resources/ministry/')
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject} ({self.title})"
