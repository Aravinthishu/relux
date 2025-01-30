from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.


class BrandView(APIView):
    def get(self, request):
        settings = Brand.objects.first()
        serializer = Sitesettings_serializers(settings)
        return Response(serializer.data)