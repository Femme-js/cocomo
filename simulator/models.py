from django.db import models
from decimal import Decimal


class Driver(models.Model):
    type = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    vlow = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))
    low = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))
    nom = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))
    high = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))
    vhigh = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))
    ehigh = models.DecimalField(max_digits=20, decimal_places=5, default=Decimal('0.00000'))

    def __str__(self):
        return self.title
