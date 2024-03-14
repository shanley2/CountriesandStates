from rest_framework import serializers
from django.contrib.auth.models import User
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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = User(
            email = validated_data['email'],
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
