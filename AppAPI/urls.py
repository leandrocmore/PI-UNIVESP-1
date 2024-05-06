
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DesenhoViewSet, desenhos_list
router = DefaultRouter()
router.register(r'desenhos', DesenhoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/', desenhos_list, name='desenhos_list'),
]
