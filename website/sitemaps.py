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
            "website:laparoscopic_hysterectomy",
            "website:fibroids",
            "website:urinary_incontinence",
            "website:high_risk_pregnancy",
            "website:ovarian_cysts",
            "website:advanced_laparoscopic_surgery",
            "website:gynecologic_oncology",
            "website:urogynecology",
        ]

    def location(self, item):
        return reverse(item)

    def priority(self, item):
        if item == "website:home":
            return 1.0
        return 0.8