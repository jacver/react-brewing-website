# Generated by Django 4.0.6 on 2022-07-22 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoApp', '0005_tourbooking_additional_info_tourbooking_reserved_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beer',
            name='abv',
            field=models.DecimalField(decimal_places=1, max_digits=3),
        ),
    ]
