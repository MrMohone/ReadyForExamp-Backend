from django.db import models

class ExamType(models.Model):
    EXAM_CHOICES = [
        ('Ministry', 'Ministry Exam'),
        ('Matric', 'Matric Exam'),
        ('Entrance', 'Entrance Exam'),
    ]
    exam_type = models.CharField(max_length=50, choices=EXAM_CHOICES, unique=True, default='Ministry')

    def __str__(self):
        return self.exam_type
    
class College(models.Model):
    COLLEGE_CHOICES = [
        ('Natural Science', 'Natural Science'),
        ('Social Science', 'Social Science'),
    ]
    college_type = models.CharField(max_length=50, choices=COLLEGE_CHOICES, unique=True, default='Natural Science')

    def __str__(self):
        
        return self.college_type

class ResourceType(models.Model):
    RESOURCE_CHOICES = [
        ('PDF', 'PDF Document'),
        ('Video', 'Video Resource'),
    ]
    resource_type = models.CharField(max_length=50, choices=RESOURCE_CHOICES, unique=True, default='PDF')

    def __str__(self):
        return self.resource_type
    
class GradeSixTotalSubjects(models.Model):
    SUBJECT_CHOICES = [
        ('Mathematics', 'Mathematics'),
        ('English', 'English'),
        ('Physics' , 'Physics'),
        ('Chemistry', 'Chemistry'),
        ('Biology', 'Biology'),
        ('History', 'History'),
        ('Geography', 'Geography'),
        ('Civics', 'Civics'),
    ]
    
    allsubject = models.CharField(choices=SUBJECT_CHOICES, default='Mathematics', null=False, blank=False, unique=True)
    description = models.TextField(max_length=255, blank=False, null=False, default='No description provided.')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.allsubject
    

class GradeSixResource(models.Model):
    SUBJECT_CHOICES = [
        ('Mathematics', 'Mathematics'),
        ('English', 'English'),
        ('Physics' , 'Physics'),
        ('Chemistry', 'Chemistry'),
        ('Biology', 'Biology'),
        ('History', 'History'),
        ('Geography', 'Geography'),
        ('Civics', 'Civics'),
    ]
    teacher = models.CharField(max_length=100, blank=False, null=False)
    subject = models.CharField(choices=SUBJECT_CHOICES, default='Mathematics', null=False, blank=False)
    title = models.CharField(max_length=255, null=False, blank=False)
    resource = models.ForeignKey(ResourceType, on_delete=models.CASCADE)
    file = models.FileField(max_length=255,upload_to='resources/')
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.subject} - {self.title}"

class GradeEightResource(models.Model):
    subject = models.CharField(max_length=100, null=False, blank=False)
    title = models.CharField(max_length=255, null=False, blank=False)
    resource = models.ForeignKey(ResourceType, on_delete=models.CASCADE)
    file = models.FileField(max_length=255, upload_to='resources/')
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.subject} - {self.title}"

class GradeElevenResource(models.Model):
    subject = models.CharField(max_length=100, null=False, blank=False)
    title = models.CharField(max_length=255, null=False, blank=False)
    resource = models.ForeignKey(ResourceType, on_delete=models.CASCADE)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    file = models.FileField(max_length=255, upload_to='resources/')
    description = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.subject} - {self.title}"