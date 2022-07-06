from django.urls import path
from . import views

urlpatterns = [
    path("beer/", views.BeerList.as_view(), name="beer_list"),
    path("food/", views.FoodList.as_view(), name="food_list"),
    path("events/", views.EventList.as_view(), name="event_list"),
    path("merchandise/", views.MerchandiseList.as_view(), name="merchandise_list"),
]