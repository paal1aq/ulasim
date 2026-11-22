# 🚌 Çanakkale Ulaşım - Otobüs Saatleri & Canlı Sefer Takibi (PWA)

Çanakkale Belediyesi'nin resmi PDF sefer tarifelerini anlık takip eden, saat değişikliklerini denetleyen ve durakta bekleyen yolcular için geri sayım sunan mobil uyumlu web uygulaması.

## ✨ Öne Çıkan Özellikler

* **⭐ Akıllı Gün ve Hat Önceliği:**
  * Hafta içi açıldığında otomatik olarak **Ç-10 (Nusrat Yurdu - Terzioğlu Kampüs)** hattı seçilir.
  * Hafta sonu Ç-10 çalışmadığı için otomatik olarak **Ç-8 (Nusrat Yurdu - Hüseyin Elbi Yurdu)** veya **Ç-960 TOKİ** hatlarına geçer.
* **🔄 İki Yönlü Kalkış Durağı Seçici (Terminal Switcher):**
  * Ç-10 için: `Nusrat Yurdu'ndan Kalkış` ⇄ `Kampüs / Ardes'ten Kalkış`
  * Ç-8 için: `Nusrat Yurdu'ndan Kalkış` ⇄ `Hüseyin Elbi'den Kalkış`
  * Ç-960 TOKİ için: `Nusrat Yurdu'ndan Kalkış` ⇄ `Park 17'den Kalkış`
* **⏱️ Zaman Tüneli & Canlı Geri Sayım:**
  * ⏪ **Önceki Sefer:** Kaç dakika önce kalktığını gösterir.
  * 📍 **Sıradaki Sefer:** Kalan süreyi dakika dakika hesaplar. Otobüs kalkış dakikasına geldiğinde yeşil renkte **"ŞİMDİ KALKIYOR! 🚍"** rozeti yanıp söner.
  * ⏩ **Sonraki Sefer:** Bir sonraki seferin saatini ve kalan süreyi bildirir.
* **📄 Fail-Safe (Resmi PDF Görüntüleyici):**
  * Hiçbir zaman veri hatasıyla mağdur olmamanız için en güncel resmi belediye PDF'ini tek tıkla uygulama içinden görüntüler.
* **📡 Otomatik Değişiklik Dedektörü (Change Watchdog):**
  * Belediye sitesinde yeni bir PDF linki yayınlandığı an tespit eder.

## 🚀 Çalıştırma

Bilgisayarında veya aynı Wi-Fi ağındaki telefonunda açmak için:
- Tarayıcıda aç: `http://localhost:3000`
- Telefondan aç (aynı Wi-Fi): `http://10.53.234.125:3000`
- Ya da doğrudan klasördeki `index.html` dosyasını çift tıklayarak açabilirsin!
