from django.urls import path
from . import views

app_name = "website"

urlpatterns = [
    path("histeroskopi/", views.hysteroscopy, name="hysteroscopy"),
    path("robots.txt", views.robots_txt, name="robots_txt"),
    path("", views.home, name="home"),
    path("hakkimda/", views.about, name="about"),
    path("uzmanlik-alanlari/", views.expertise, name="expertise"),
    path("hasta-bilgilendirme/", views.patient_info, name="patient_info"),
    path("iletisim/", views.contact, name="contact"),
    path("endometriozis/", views.endometriosis, name="endometriosis"),
    path("hpv/", views.hpv, name="hpv"),
    path("kolposkopi/", views.colposcopy, name="colposcopy"),
    path("cin/", views.cin, name="cin"),
    path("vajinal-agenezi/", views.vaginal_agenesis, name="vaginal_agenesis"),
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

    path(
        "rahim-sarkmasi/",
        views.uterine_prolapse,
        name="uterine_prolapse"
    ),

    path(
        "rahim-agzi-kanseri/",
        views.cervical_cancer,
        name="cervical_cancer"
    ),

    path(
        "yumurtalik-kanseri/",
        views.ovarian_cancer,
        name="ovarian_cancer"
    ),

    path(
        "plasenta-previa-percreta/",
        views.placenta_percreta,
        name="placenta_percreta"
    ),

    path("leep-konizasyon/", views.leep_conization, name="leep_conization"),

    path(
        "rahim-endometrium-kanseri/",
        views.endometrium_cancer,
        name="endometrium_cancer",
    ),

    
]