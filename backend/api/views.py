from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.


class ClientLogoView(APIView):
    def get(self, request):
        settings = ClientLogo.objects.all()
        serializer = ClientLogo_serializers(settings, many=True)
        return Response(serializer.data)
    
class TestimonialView(APIView):
    def get(self, request):
        settings = Testimonial.objects.all()
        serializer = Testimonial_serializers(settings, many=True)
        return Response(serializer.data)
    
class FeaturesView(APIView):
    def get(self, request):
        features = Features.objects.all()
        serializer = Features_serializers(features, many=True)
        return Response(serializer.data)
    
class MissionVisionView(APIView):
    def get(self, request):
        mission_vision = MissionVision.objects.first()
        serializer = MissionVision_serializers(mission_vision)
        return Response(serializer.data)
        