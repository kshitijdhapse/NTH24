# Generated by Django 4.0.5 on 2022-07-22 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_user_last_level_updated_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='last_level_updated_time',
            field=models.DateTimeField(auto_now=True),
        ),
    ]