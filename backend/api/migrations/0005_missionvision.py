# Generated by Django 5.1.5 on 2025-02-06 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_features'),
    ]

    operations = [
        migrations.CreateModel(
            name='MissionVision',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mission', models.TextField(blank=True, null=True)),
                ('vission', models.TextField(blank=True, null=True)),
                ('values', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
