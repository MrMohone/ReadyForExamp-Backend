from django.db import models


class ExamType(models.Model):
    EXAM_CATEGORY_CHOICES = [
        ('Ministry', 'Ministry'),
        ('Matric', 'Matric'),
        ('Enterance', 'Entrance'),
    ]
    exam_name =  models.CharField(max_length=20,choices=EXAM_CATEGORY_CHOICES, default='Ministry')

    def __str__(self):
        return self.exam_name


class Subject(models.Model):
        CATEGORY_CHOICES = [
        ('Natural', 'Natural'),
        ('Social', 'Social'),
    ]
        exam_type = models.ForeignKey(ExamType,on_delete=models.CASCADE,
                                      related_name='subjects')
        subject_name =  models.CharField(max_length=50, null=False, blank=False)
        category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

        def __str__(self):
         return f"{self.subject_name} ({self.category})"

class Resource(models.Model):
    RESOURCE_TYPE_CHOICES = [
        ('PDF', 'PDF'),
        ('Video', 'Video'),
    ]

    subject_name = models.ForeignKey(Subject,on_delete=models.CASCADE,
        related_name='resources')
    subject_title = models.CharField(max_length=200)
    resource_type = models.CharField(max_length=10, choices=RESOURCE_TYPE_CHOICES, default='PDF')
    file = models.FileField(upload_to='resources/')  # stores PDF or Video files
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject_title} ({self.resource_type})"
