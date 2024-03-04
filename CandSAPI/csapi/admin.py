from django.contrib import admin

from .models import State, Country

admin.site.register(Country)
admin.site.register(State)

