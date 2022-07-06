from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import status

from .models import Beer, Food, Event, Merchandise
from .serializers import *

def list_beer(request):
    beer = Beer.objects.all().values()
    beer_list = list(beer)
    return JsonResponse(beer_list, safe=False)

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


