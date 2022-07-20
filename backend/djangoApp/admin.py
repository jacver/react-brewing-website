from django.contrib import admin
from .models import Beer, Food, Event, Merchandise, TourBooking

# Register your models here.

admin.site.register(Beer)
admin.site.register(Food)
admin.site.register(Event)
admin.site.register(Merchandise)
admin.site.register(TourBooking)
