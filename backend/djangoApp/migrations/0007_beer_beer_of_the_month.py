# Generated by Django 4.0.6 on 2022-07-09 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoApp', '0006_food_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='beer_of_the_month',
            field=models.BooleanField(default=False),
        ),
    ]
