# Generated by Django 3.1 on 2020-08-18 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('class_code', models.CharField(max_length=8, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Major',
            fields=[
                ('major_code', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('full_title', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('school_code', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('school_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('service_type', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
    ]
