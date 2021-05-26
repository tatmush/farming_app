from django.db import models

class Region(models.Model):
    region_name = models.CharField(max_length=10)
    annual_rainfall = models.CharField('Annual Rainfall (mm)', max_length=20)
    farming_system = models.CharField(max_length=200)
    len_of_growing_period = models.CharField('Length of growing period', max_length=15)
    altitute = models.CharField('Altitude (m)', max_length=15)
    erosion_hazard = models.CharField(max_length=15)
    dominant_soil = models.CharField(max_length=100)
    ph_top_soil = models.CharField(max_length=10)
    water_holding_capacity = models.CharField(max_length=20)

    def __str__(self):
        return self.region_name

class District(models.Model):
    district_name = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    longitude = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    region_name = models.ForeignKey(Region, related_name='districts', on_delete=models.CASCADE)

    def __str__(self):
        return self.district_name

class Crop(models.Model):
    region_name = models.ForeignKey(Region, on_delete=models.CASCADE)
    district_name = models.ForeignKey(District, on_delete=models.CASCADE)
    crop_name = models.CharField(max_length=30)
    seed_type_irrigation = models.CharField(max_length=100)
    seed_type_dry_land = models.CharField(max_length=100)
    pestcides = models.CharField(max_length=50)
    fertilizer = models.CharField(max_length=50)
    labour = models.CharField(max_length=50)
    price_per_hectare = models.CharField(max_length=20)

    def __str__(self):
        return self.crop_name + ' ' + self.district_name.district_name