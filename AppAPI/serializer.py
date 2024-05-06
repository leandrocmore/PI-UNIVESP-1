# serializers.py
from rest_framework import serializers
from .models import Desenho

class DesenhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desenho
        fields = ['id', 'nome', 'imagem']