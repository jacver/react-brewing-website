from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import status

from .models import Beer, Food, Event, Merchandise
from .serializers import *



## Beer ##
class BeerList(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer

def list_beer(request):
    beer = Beer.objects.all().values()
    beer_list = list(beer)
    return JsonResponse(beer_list, safe=False)


## Food ##
class FoodList(generics.ListCreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

def food_list(request):
    food = Food.objects.all().values()
    food_list = list(food)
    return JsonResponse(food_list, safe=False)

## Event ##
class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

def event_list(request):
    event = Event.objects.all().values()
    event_list = list(event)
    return JsonResponse(event_list, safe=False)


## Merchandise ## 
class MerchandiseList(generics.ListCreateAPIView):
    queryset = Merchandise.objects.all()
    serializer_class = MerchandiseSerializer

def merchandise_list(request):
    merchandise = Merchandise.objects.all().values()
    merchandise_list = list(merchandise)
    return JsonResponse(merchandise_list, safe=False)


