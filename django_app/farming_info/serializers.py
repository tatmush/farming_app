from .models import District, Region, Crop
from rest_framework import serializers

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'

class DistrictSerializer(serializers.ModelSerializer):
    region_name = RegionSerializer(read_only=True)
    class Meta:
        model = District
        fields = ('id', 'district_name', 'province', 'longitude', 'latitude', 'region_name')

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'

