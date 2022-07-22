from cgi import print_exception
from datetime import date
from tokenize import ContStr
from unicodedata import name
from django.db import models

# Create your models here.

# This model is built for beers to be displayed as menu items
class Beer(models.Model):
    name = models.CharField(
                            default="Beer Name",   
                            max_length=100
                            )
    label_URL = models.TextField(
                            default="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                            )
    beer_type = models.CharField(
                            # Example: Pilsner
                            default="Beer Type",
                            max_length=100
                            )
    beer_container = models.CharField(
                            # Commonly draft, can, or bottle
                            default="Draft",
                            max_length=100
                            )                     
    price = models.DecimalField(
                            # Price of beer, not to exceed 6 digits i.e., 1000.00
                            max_digits=6,
                            decimal_places=2      
                            )
    brewer = models.CharField(
                            # Is it brewed in house or is it a guest tap?
                            default="Slick Daddy's Brewing",
                            max_length=200
                            )
    description = models.TextField(
                            # Beer description, provided by brewer
                            default="It's a beer - we promise you'll like it."
                            )
    abv = models.DecimalField(
                            # Alcohol by volume, not to exceed 4 digits i.e., 7.35
                            max_digits=3,
                            decimal_places=1    
                            )
    beer_of_the_month = models.BooleanField(
                            default=False
                            )

    def __str__(self):
        # reference the name of each beer
        return self.name


class Food(models.Model):
    name = models.CharField(
                            default="Food Name",   
                            max_length=100
                            )
    price = models.DecimalField(
                            # Price of food, not to exceed 6 digits i.e., 1000.00
                            max_digits=6,
                            decimal_places=2      
                            )
    image_URL = models.TextField(
                            default="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                            )
    description = models.TextField(
                            # Food item description
                            default="It's brewery food!"
                            )
    tags = models.CharField(
                            default="Seperated by comma - ex: gluten free, vegan, dairy free",   
                            max_length=200,
                            blank=True,
                            )
    def __str__(self):
        #reference name of food item
        return self.name

class Event(models.Model):
    title = models.CharField(
                            default="Event Name",   
                            max_length=200
                            )
    url = models.TextField(
                            # URL for event/food truck/vendor
                            default="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                            )
    start = models.DateTimeField(
                            # Event date/time
                            auto_now= False,
                            auto_now_add=False,
                            blank=True,
                            )
    end = models.DateTimeField(
                            # Event date/time
                            auto_now= False,
                            auto_now_add=False,
                            blank=True,
                            )

    description = models.TextField(
                            # Event Description
                            default="Join us for..."
                            )

    def __str__(self):
        return self.title

class Merchandise(models.Model):
    name = models.CharField(
                            default="Merch Item Name",   
                            max_length=100
                            )
    price = models.DecimalField(
                            # Price of merchandise item, not to exceed 6 digits i.e., 1000.00
                            max_digits=6,
                            decimal_places=2      
                            )
    description = models.TextField(
                            # merch item description
                            default="Merchandise description"
                            )
    image_URL = models.TextField(
                            default="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                            )
    on_sale = models.BooleanField(
                            # if false, not on sale
                            default=False
                            )
    in_stock = models.BooleanField(
                            # if true, item is stocked
                            default=True
                            )

    def __str__(self):
        return self.name


class TourBooking(models.Model):
    date = models.CharField(
                            default="mm/dd/yyyy",
                            max_length=10,
                            )
    email = models.EmailField(
                            max_length=254,
                            default="",
                            blank=True
                            )
    additional_info = models.CharField(
                            default="additional information",
                            blank=True,
                            max_length=254,
    )
    reserved = models.BooleanField(
                            default=False
    )

    def __str__(self):
        return self.date