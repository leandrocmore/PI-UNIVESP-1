# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Desenho
from .serializer import DesenhoSerializer
from django.http import JsonResponse

def desenhos_list(request):
    desenhos = Desenho.objects.all()
    serializer = DesenhoSerializer(desenhos, many=True)
    return JsonResponse(serializer.data, safe=False)


class DesenhoViewSet(viewsets.ModelViewSet):
    queryset = Desenho.objects.all()
    serializer_class = DesenhoSerializer
    

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
