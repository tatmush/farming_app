# Generated by Django 3.1.5 on 2021-02-04 07:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('farming_info', '0003_district'),
    ]

    operations = [
        migrations.AlterField(
            model_name='district',
            name='region_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='districts', to='farming_info.region'),
        ),
    ]
