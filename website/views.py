from django.shortcuts import render


def home(request):
    return render(request, "website/home.html")

# Create your views here.
