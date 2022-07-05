from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import status

from .models import Beer, Food, Event, Merchandise
from .serializers import *

class BeerList(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer

class FoodList(generics.ListCreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class MerchandiseList(generics.ListCreateAPIView):
    queryset = Merchandise.objects.all()
    serializer_class = MerchandiseSerializer


