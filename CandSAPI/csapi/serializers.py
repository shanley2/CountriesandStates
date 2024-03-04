from rest_framework import serializers
from .models import Country, State

class CountrySerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False) #"""read_only = True"""
    code = serializers.CharField(required=True, max_length=2)
    name = serializers.CharField(required=True, max_length=60)

    def create(self, valid_data):
        return Country.objects.create(**valid_data)


class StateSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False) #"""read_only = True"""
    code = serializers.CharField(required=True, max_length=2)
    name = serializers.CharField(required=True, max_length=60)
    country_id = serializers.IntegerField()

    def create(self, valid_data):
        return State.objects.create(**valid_data)


