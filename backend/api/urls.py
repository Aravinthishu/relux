from django.urls import path, include
from .views import *

urlpatterns = [
    path('clientlogo', ClientLogoView.as_view(), name='ClientLogo'),
    path('testimonial', TestimonialView.as_view(), name='Testimonial'),
]