# Generated by Django 5.1.5 on 2025-02-06 11:07

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_missionvision'),
    ]

    operations = [
        migrations.AlterField(
            model_name='missionvision',
            name='values',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
