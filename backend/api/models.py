from django.db import models

# Create your models here.


class ClientLogo(models.Model):
    logo = models.ImageField(upload_to='logos', blank=True, null=True)
    
    def __str__(self):
        return self.logo.url
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100 , blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    position = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='testimonials', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name