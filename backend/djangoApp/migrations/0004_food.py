# Generated by Django 4.0.6 on 2022-07-04 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoApp', '0003_remove_beer_type_alter_beer_beer_container'),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Food Name', max_length=100)),
                ('image_URL', models.TextField(default='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png')),
                ('description', models.TextField(default="It's brewery food!")),
                ('tags', models.CharField(default='Seperated by comma - ex: gluten free, vegan, dairy free', max_length=200)),
            ],
        ),
    ]
