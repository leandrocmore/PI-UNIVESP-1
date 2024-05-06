# models.py
from django.db import models

class Desenho(models.Model):
    nome = models.CharField(max_length=100)
    imagem  = models.TextField()

    def __str__(self):
        return self.nome
