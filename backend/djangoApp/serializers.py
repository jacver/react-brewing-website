from rest_framework import serializers
from .models import Beer, Food, Event, Merchandise, TourBooking

# add serializers below

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        # define metadata needed for model below
        fields = ('id', 'name', 'label_URL', 'beer_type', 'beer_container', 'price', 'brewer', 'description', 'abv',)

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'price', 'image_URL', 'description', 'tags',)

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'url', 'start', 'end', 'description',)

class MerchandiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchandise
        fields = ('id', 'name', 'price', 'description', 'image_URL', 'on_sale', 'in_stock' )

class TourBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourBooking
        fields = ('id', 'date', 'email')