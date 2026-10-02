# mimipadel.nl live zetten (Hostnet → Firebase)

De echte website draait op **Firebase Hosting** (site `mimipadel`), niet op Hostnet-webhosting.
Hostnet gebruik je alleen voor het **domein** en **DNS**.

## 1. Echte app op Firebase (live URL)

- **Live app:** https://mimipadel.web.app  
- **Preview (optioneel):** https://mimipadel--mimi-review-rx87i44q.web.app  

Deploy van de React-app (map `dist`):

```bash
npm run build
firebase deploy --only hosting:mimipadel
```

*(Niet `firebase.coming-soon.json` — dat is alleen de oude “Binnenkort online”-pagina.)*

Na elke push naar `main` doet GitHub Actions hetzelfde voor live + preview.

---

## 2. Custom domain in Firebase

1. Open [Firebase Console → Hosting → site mimipadel](https://console.firebase.google.com/project/bemoservicedb/hosting/sites/mimipadel).
2. Klik **Custom domain** → **Add custom domain**.
3. Voer in: `mimipadel.nl` (eventueel daarna ook `www.mimipadel.nl`).
4. Firebase toont **DNS-records** (TXT voor verificatie, daarna **A**-records voor `@` en **CNAME** voor `www`).
5. Wacht tot status **Connected** / SSL **Active** is (kan 15 min – 24 uur duren).

Gebruik **altijd de records die Firebase in het scherm toont** (kunnen per project iets verschillen).

Typisch (voorbeeld — controleer in de console):

| Type  | Naam / host | Waarde |
|-------|-------------|--------|
| TXT   | `@` of leeg | Firebase-verificatie |
| A     | `@`         | Firebase IP(s) |
| CNAME | `www`       | vaak `mimipadel.web.app` of waarde uit console |

---

## 3. DNS bij Hostnet

1. In Hostnet: **mimipadel.nl** → **DNS wijzigen** (niet “website bouwen” / standaard parking).
2. Verwijder oude **A/CNAME** die naar Hostnet-parking of “coming soon” wijzen.
3. Zet de records uit Firebase (stap 2).
4. **Nameservers:** laat staan op Hostnet tenzij je bewust naar Firebase verhuist (meestal niet nodig).

Geen aparte Hostnet-webhosting nodig voor deze site — alleen DNS naar Firebase.

---

## 4. Controleren

- https://mimipadel.nl  
- https://www.mimipadel.nl  
- https://mimipadel.web.app (moet dezelfde app tonen)

SSL regelt Firebase automatisch zodra DNS klopt.

---

## 5. TIM / DNS-problemen (Italië)

Als `*.web.app` niet opent (`DNS_PROBE_STARTED`), zet op je PC/router DNS op **1.1.1.1** of **8.8.8.8**.
Custom domain `mimipadel.nl` gebruikt andere DNS en werkt vaak wél via Hostnet.
