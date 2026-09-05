from django.urls import path
from . import views

app_name = "website"

urlpatterns = [
    path("robots.txt", views.robots_txt, name="robots_txt"),
    path("", views.home, name="home"),
    path("hakkimda/", views.about, name="about"),
    path("uzmanlik-alanlari/", views.expertise, name="expertise"),
    path("hasta-bilgilendirme/", views.patient_info, name="patient_info"),
    path("iletisim/", views.contact, name="contact"),
    path("endometriozis/", views.endometriosis, name="endometriosis"),
    path(
        "laparoskopik-histerektomi/",
        views.laparoscopic_hysterectomy,
        name="laparoscopic_hysterectomy"
    ),
    path("miyomlar/", views.fibroids, name="fibroids"),
        path(
        "idrar-kacirma/",
        views.urinary_incontinence,
        name="urinary_incontinence"
    ),

    path(
        "riskli-gebelik/",
        views.high_risk_pregnancy,
        name="high_risk_pregnancy"
    ),

    path(
        "yumurtalik-kistleri/",
        views.ovarian_cysts,
        name="ovarian_cysts"
    ),

    path(
        "ileri-laparoskopik-cerrahi/",
        views.advanced_laparoscopic_surgery,
        name="advanced_laparoscopic_surgery"
    ),

    path(
        "jinekolojik-onkoloji/",
        views.gynecologic_oncology,
        name="gynecologic_oncology"
    ),

    path(
        "urojinekoloji/",
        views.urogynecology,
        name="urogynecology"
    ),
]