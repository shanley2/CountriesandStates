from django.urls import path
from .views import Countries, States, StatesFromCountry, StateInfo, CountryInfo
from . import views

urlpatterns = [
    path('countries/', Countries.as_view(), name="countries"),
    path('countries/<int:id>', CountryInfo.as_view(), name="country"),
    path('countries/<str:countryCode>/states', StatesFromCountry.as_view(), name="countrystates"),
    path('states/', States.as_view(), name="states"),
    path('states/<int:id>', StateInfo.as_view(), name="state"),
]