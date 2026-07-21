# Pawline Storefront

Moderner Next.js-Shop, der Produkte automatisch aus `pawline-shop.de/products.json` lädt und den vorhandenen sicheren Shopify-Checkout verwendet.

## Lokal starten

```bash
npm install
npm run dev
```

Dann `http://localhost:3000` öffnen.

## Online veröffentlichen

1. Projekt bei GitHub hochladen.
2. Bei Vercel einloggen und **Add New → Project** wählen.
3. GitHub-Projekt importieren und deployen.
4. In Vercel unter **Settings → Domains** die gewünschte Domain verbinden.
5. Für eine neue Domain wie `pawline.com` muss diese zuvor bei einem Domainanbieter registriert werden.

## Checkout

Der Warenkorb erzeugt einen Shopify-Cart-Permalink und leitet zu `https://pawline-shop.de/cart/...` weiter. Dadurch bleiben Zahlungen, Bestand, Bestellungen, Versand und Steuern im vorhandenen Shopify-System.

## Rechtstexte

Die Footer-Links zeigen aktuell auf die Rechtstexte des bestehenden Shopify-Shops. Prüfe vor Veröffentlichung, ob die Pfade in deinem Shop stimmen.

## Bilder

Produktbilder werden direkt aus Shopify geladen. Das Hero-Hintergrundbild ist aktuell ein externes Demo-Bild und sollte später durch ein eigenes Pawline-Motiv ersetzt werden.
