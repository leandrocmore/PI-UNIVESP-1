from django.shortcuts import render

def frontEnd (request):
    return render(request,"template/frontend.html")


def CanvasEnd (request):
    return render (request,"template/Canvas.html")
