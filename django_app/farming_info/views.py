from rest_framework import generics
from .serializers import DistrictSerializer, CropSerializer
from .models import District, Region, Crop

class DistrictList(generics.ListAPIView):
    serializer_class = DistrictSerializer

    def get_queryset(self):

        queryset = District.objects.all()
        district_name = self.request.query_params.get('district_name', None)
        if district_name is not None:
            queryset = queryset.filter(district_name=district_name)
        
        return queryset


class CropList(generics.ListAPIView):
    serializer_class = CropSerializer

    def get_queryset(self):

        queryset = Crop.objects.all()
        region_name = self.request.query_params.get('region_name', None)
        crop_name = self.request.query_params.get('crop_name', None)
        district_name = self.request.query_params.get('district_name', None)
        # print(crop_name + ' ' + district_name)
        if crop_name is not None and region_name is not None:
            queryset = queryset.filter(crop_name=crop_name, region_name=region_name)
        elif crop_name is not None and district_name is not None:
            print(crop_name)
            print(district_name)
            res = District.objects.filter(district_name=district_name)
            print(res)
            if len(res) == 0:
                return queryset
            region_name = res[0].region_name
            print(region_name)
            queryset = queryset.filter(crop_name=crop_name, district_name=res[0])
            print(queryset)

        return queryset