from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.8

    def items(self):
        return [
            "website:home",
            "website:about",
            "website:expertise",
            "website:patient_info",
            "website:contact",

            "website:endometriosis",
            "website:hpv",
            "website:hpv_vaccine",
            "website:intrauterine_device",
            "website:colposcopy",
            "website:hysteroscopy",
            "website:vaginal_agenesis",
            "website:laparoscopic_neovagina",
            "website:fibroids",
            "website:laparoscopic_myomectomy",

            "website:laparoscopic_hysterectomy",
            "website:advanced_laparoscopic_surgery",

            "website:ovarian_cysts",

            "website:gynecologic_oncology",
            "website:cervical_cancer",
            "website:cin",
            "website:ovarian_cancer",
            "website:vulvar_cancer",

            "website:urogynecology",
            "website:urinary_incontinence",
            "website:uterine_prolapse",
            "website:laparoscopic_sacrocolpopexy",

            "website:placenta_percreta",
            "website:placenta_preserving_surgery",

            "website:high_risk_pregnancy",
        ]

    def location(self, item):
        return reverse(item)

    def priority(self, item):
        if item == "website:home":
            return 1.0
        return 0.8
