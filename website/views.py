from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, "website/home.html")


def about(request):
    return render(request, "website/about.html")

def expertise(request):
    return render(request, "website/expertise.html")

def patient_info(request):
    return render(request, "website/patient_info.html")

def contact(request):
    return render(request, "website/contact.html")

def endometriosis(request):
    return render(request, "website/endometriosis.html")

def laparoscopic_hysterectomy(request):
    return render(request, "website/laparoscopic_hysterectomy.html")

def fibroids(request):
    return render(request, "website/fibroids.html")

def urinary_incontinence(request):
    return render(request, "website/urinary_incontinence.html")

def high_risk_pregnancy(request):
    return render(request, "website/high_risk_pregnancy.html")

def ovarian_cysts(request):
    return render(request, "website/ovarian_cysts.html")

def advanced_laparoscopic_surgery(request):
    return render(request, "website/advanced_laparoscopic_surgery.html")

def gynecologic_oncology(request):
    return render(request, "website/gynecologic_oncology.html")

def urogynecology(request):
    return render(request, "website/urogynecology.html")

def robots_txt(request):
    content = """User-agent: *
Allow: /
Disallow: /admin/

Sitemap: {scheme}://{host}/sitemap.xml
""".format(
        scheme=request.scheme,
        host=request.get_host()
    )

    return HttpResponse(content, content_type="text/plain")

def hpv(request):
    return render(request, "website/hpv.html")

def uterine_prolapse(request):
    return render(request, "website/uterine_prolapse.html")

def cervical_cancer(request):
    return render(request, "website/cervical_cancer.html")

def ovarian_cancer(request):
    return render(request, "website/ovarian_cancer.html")

def placenta_percreta(request):
    return render(request, "website/placenta_percreta.html")

def leep_conization(request):
    return render(request, "website/leep_conization.html")

def endometrium_cancer(request):
    return render(request, "website/endometrium_cancer.html")