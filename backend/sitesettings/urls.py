from django.urls import path, include
from .views import *

urlpatterns = [
    path('brand', BrandView.as_view(), name='BrandView'),
]
