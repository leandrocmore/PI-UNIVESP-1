
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('V-1.00/',include('AppAPI.urls')),
    path('',include('FrontEnd.urls')),

]
