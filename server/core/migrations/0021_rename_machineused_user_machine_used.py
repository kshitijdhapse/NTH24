# Generated by Django 5.0 on 2024-03-14 19:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0020_user_machineused'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='machineused',
            new_name='machine_used',
        ),
    ]