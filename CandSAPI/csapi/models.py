from django.db import models

class Country(models.Model):
    id = models.IntegerField(primary_key=True)
    code = models.CharField(max_length=2)
    name = models.CharField(max_length=60)

    class Meta:
        verbose_name_plural: "Countries"

    def __str__(self): 
        return self.name

class State(models.Model):
    id = models.IntegerField(primary_key=True) #try to take out: see what happens!
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    code = models.CharField(max_length=2)
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

