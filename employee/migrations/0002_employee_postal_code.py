# Generated by Django 2.1.3 on 2018-11-17 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='postal_code',
            field=models.CharField(blank=True, max_length=16, null=True),
        ),
    ]