from rest_framework import serializers
from .models import *

class Sitesettings_serializers(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'