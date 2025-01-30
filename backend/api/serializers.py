from rest_framework import serializers
from .models import *


class ClientLogo_serializers(serializers.ModelSerializer):
    class Meta:
        model = ClientLogo
        fields = '__all__'
        
class Testimonial_serializers(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'