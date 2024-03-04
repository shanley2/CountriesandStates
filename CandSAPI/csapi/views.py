from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt

from .serializers import CountrySerializer, StateSerializer
from .models import Country, State


class Countries(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = (AllowAny,)

class States(generics.ListCreateAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer
    permission_classes = (AllowAny,)

class StatesFromCountry(generics.ListCreateAPIView):
    serializer_class = StateSerializer

    def get_queryset(self):
        c_code = self.kwargs['countryCode']
        return State.objects.filter(country__code=c_code)

class CountryInfo(generics.ListCreateAPIView):
    serializer_class = CountrySerializer

    def get_queryset(self):
        return Country.objects.filter(id=self.kwargs['id'])

class StateInfo(generics.ListCreateAPIView):
    serializer_class = StateSerializer

    def get_queryset(self):
        return State.objects.filter(id=self.kwargs['id'])
    
# @csrf_exempt
# def country_list(request):
#     if request.method == "GET":
#         countries = Country.objects.all()
#         serializer = CountrySerializer(countries, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         #data['id'] = len(Country.objects.all()) + 1
#         serializer = CountrySerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


# @csrf_exempt
# def state_list(request):
#     if request.method == "GET":
#         states = State.objects.all()
#         serializer = StateSerializer(states, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == "POST":
#         data = JSONParser().parse(request)
#         #data['id'] = len(State.objects.all()) + 1
#         serializer = StateSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


# def states_from_country(request, countryCode):
#     if request.method == "GET":
#         #country = get_object_or_404(Country, code=countryCode)
#         #states = State.objects.filter(country_id=country.id)

#         #Database Join query -> following foreign key that points to country
#         # accessing code field from the foriegn key (Using double underscore)
#         states = State.objects.filter(country__code=countryCode)
#         serializer = StateSerializer(states, many=True)
#         return JsonResponse(serializer.data, safe=False)

# def country(request, id):
#     if request.method  == "GET":
#         country = get_object_or_404(Country, id=id)
#         serializer = CountrySerializer(country)
#         return JsonResponse(serializer.data)

# def state(request, id):
#     if request.method  == "GET":
#         state = get_object_or_404(State, id=id)
#         serializer = StateSerializer(state)
#         return JsonResponse(serializer.data)


