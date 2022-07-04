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
                            default="Beer Container",
                            max_length=100
                            )                     
    price = models.DecimalField(
                            # Price of beer, not to exceed 6 digits i.e., 1000.00
                            max_digits=6,
                            decimal_places=2      
                            )
    brewer = models.CharField(
                            # Example: Pilsner
                            default="Beer Type",
                            max_length=100
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
                            max_digits=4,
                            decimal_places=2    
                            )



    def __str__(self):
        return self.name