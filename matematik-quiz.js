// 9. Sınıf Matematik Soruları Veritabanı - Genişletilmiş
const matematikSorulari = [
    {
        soru: "a² - b² ifadesinin çarpanlara ayrılmış hali nedir?",
        secenekler: ["(a+b)(a-b)", "(a-b)²", "a(a-b²)", "(a+b)²"],
        dogruCevap: "(a+b)(a-b)"
    },
    {
        soru: "log₂16 değeri kaçtır?",
        secenekler: ["2", "4", "8", "16"],
        dogruCevap: "4"
    },
    {
        soru: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        secenekler: ["90°", "180°", "270°", "360°"],
        dogruCevap: "180°"
    },
    {
        soru: "Bir doğal sayının 3 ile bölünebilmesi için gerekli koşul nedir?",
        secenekler: ["Rakamları toplamı 3'ün katı olmalıdır", "Son rakamı 3 olmalıdır", "Rakamları çarpımı 3'ün katı olmalıdır", "Çift sayı olmalıdır"],
        dogruCevap: "Rakamları toplamı 3'ün katı olmalıdır"
    },
    {
        soru: "f(x) = 2x + 3 ve g(x) = x² - 1 fonksiyonları için (f∘g)(2) değeri nedir?",
        secenekler: ["5", "7", "9", "11"],
        dogruCevap: "7"
    },
    {
        soru: "sinπ/6 değeri nedir?",
        secenekler: ["1/2", "√2/2", "√3/2", "1"],
        dogruCevap: "1/2"
    },
    {
        soru: "Bir dik üçgende hipotenüs 5 birim ve bir dik kenar 3 birim ise, diğer dik kenar kaç birimdir?",
        secenekler: ["2", "4", "6", "8"],
        dogruCevap: "4"
    },
    {
        soru: "2x² - 7x + 3 = 0 denkleminin kökler toplamı nedir?",
        secenekler: ["7/2", "3/2", "7", "3"],
        dogruCevap: "7/2"
    },
    {
        soru: "Bir paralelkenarın komşu iki açısının ölçüleri toplamı kaç derecedir?",
        secenekler: ["90°", "180°", "270°", "360°"],
        dogruCevap: "180°"
    },
    {
        soru: "log₃(27) değeri nedir?",
        secenekler: ["1", "2", "3", "9"],
        dogruCevap: "3"
    },
    {
        soru: "x² + 6x + 9 ifadesinin çarpanlara ayrılmış hali nedir?",
        secenekler: ["(x+3)²", "(x-3)²", "x(x+9)", "(x+3)(x+3)"],
        dogruCevap: "(x+3)²"
    },
    {
        soru: "Karmaşık sayılarda i² değeri nedir?",
        secenekler: ["1", "-1", "i", "2i"],
        dogruCevap: "-1"
    },
    {
        soru: "Birim çemberde cos(π) değeri nedir?",
        secenekler: ["0", "1", "-1", "Tanımsız"],
        dogruCevap: "-1"
    },
    {
        soru: "3^(log₃5) ifadesinin değeri nedir?",
        secenekler: ["3", "5", "15", "125"],
        dogruCevap: "5"
    },
    {
        soru: "Bir küpün toplam ayrıt sayısı kaçtır?",
        secenekler: ["6", "8", "12", "24"],
        dogruCevap: "12"
    },
    {
        soru: "Bir çemberin çevresi π·d formülü ile hesaplanır. Buradaki d neyi temsil eder?",
        secenekler: ["Yarıçap", "Çap", "Alan", "Merkez açı"],
        dogruCevap: "Çap"
    },
    {
        soru: "cos²α + sin²α ifadesinin değeri nedir?",
        secenekler: ["0", "1", "2", "Açıya bağlıdır"],
        dogruCevap: "1"
    },
    {
        soru: "Orijinden geçen ve eğimi 2 olan doğrunun denklemi nedir?",
        secenekler: ["y = 2x", "y = 2x + 1", "y = x/2", "y = -2x"],
        dogruCevap: "y = 2x"
    },
    {
        soru: "Bir düzgün beşgenin iç açıları toplamı kaç derecedir?",
        secenekler: ["360°", "450°", "500°", "540°"],
        dogruCevap: "540°"
    },
    {
        soru: "log₁₀(100) değeri kaçtır?",
        secenekler: ["1", "2", "10", "100"],
        dogruCevap: "2"
    },
    {
        soru: "x² - 9 ifadesinin çarpanlara ayrılmış hali nedir?",
        secenekler: ["(x+3)(x-3)", "(x-3)²", "x(x-9)", "(x+9)(x-1)"],
        dogruCevap: "(x+3)(x-3)"
    },
    {
        soru: "Koordinat düzleminde (3,4) noktasının orijine olan uzaklığı kaçtır?",
        secenekler: ["5", "7", "√25", "√7"],
        dogruCevap: "5"
    },
    {
        soru: "Aritmetik dizide ardışık üç terim 5, 9 ve 13 ise, dizinin ortak farkı kaçtır?",
        secenekler: ["2", "4", "5", "8"],
        dogruCevap: "4"
    },
    {
        soru: "Bir kenarı 6 cm olan küpün hacmi kaç cm³'tür?",
        secenekler: ["36", "216", "144", "108"],
        dogruCevap: "216"
    },
    {
        soru: "tanα = 1 ise α açısı kaç derecedir?",
        secenekler: ["30°", "45°", "60°", "90°"],
        dogruCevap: "45°"
    },
    {
        soru: "Bir geometrik dizide ilk terim 3 ve ortak çarpan 2 ise, dizinin 5. terimi kaçtır?",
        secenekler: ["24", "48", "32", "16"],
        dogruCevap: "48"
    },
    {
        soru: "Standart normal dağılımda, ortalama değer nedir?",
        secenekler: ["0", "1", "0.5", "2"],
        dogruCevap: "0"
    },
    {
        soru: "Karenin köşegenlerinin kesişim açısı kaç derecedir?",
        secenekler: ["45°", "60°", "90°", "120°"],
        dogruCevap: "90°"
    },
    {
        soru: "f(x) = x² + 4x + 4 fonksiyonunun minimum değeri kaçtır?",
        secenekler: ["0", "1", "2", "4"],
        dogruCevap: "0"
    },
    {
        soru: "(3x + 2)(2x - 5) çarpımının açılımı nedir?",
        secenekler: ["6x² - 11x - 10", "6x² - 11x + 10", "6x² + 11x - 10", "6x² + 11x + 10"],
        dogruCevap: "6x² - 11x - 10"
    }
];

// Quiz durumunu tutan değişkenler
let mevcutSoru = null;
let skor = 0;
let soruSayisi = 0; // Toplam cevaplanmış soru sayısını tutar

// Quiz arayüzünü oluşturan HTML
function quizArayuzuOlustur() {
    return `
        <div id="quiz-container" style="
            width: 600px;
            margin: 0 auto;
            position: relative;
            font-family: 'Comic Sans MS', cursive, sans-serif;
        ">
            <!-- Okul ve Pi resmi arka planını içeren bölüm -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                pointer-events: none;
                opacity: 0.15;
            ">
                <div style="position: absolute; left: 40px; bottom: 10px;">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <rect width="100" height="100" x="10" y="10" fill="#8B4513" />
                        <rect width="50" height="20" x="35" y="20" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
                        <text x="40" y="35" font-family="Arial" font-size="16" font-weight="bold">OKUL</text>
                        <rect width="30" height="40" x="45" y="70" fill="#8B4513" />
                    </svg>
                </div>
                <div style="position: absolute; right: 40px; bottom: 10px;">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <ellipse cx="50" cy="50" rx="40" ry="30" fill="#CCCCCC" />
                        <text x="30" y="65" font-family="Arial" font-size="40" font-weight="bold">π</text>
                    </svg>
                </div>
            </div>

            <!-- Ana içerik bölümü -->
            <div style="
                background-color: rgba(173, 216, 230, 0.9);
                border-radius: 20px;
                padding: 20px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                border: 4px solid #66BB6A;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 60px;
                    background-color: #66BB6A;
                    z-index: 0;
                "></div>

                <div style="position: relative; z-index: 1;">
                    <h2 style="
                        text-align: center; 
                        color: #333; 
                        margin-bottom: 20px;
                        font-family: 'Comic Sans MS', cursive, sans-serif;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                    ">9. Sınıf Matematik Testi</h2>

                    <div id="soru-container" style="
                        background-color: rgba(255, 255, 255, 0.9);
                        border-radius: 15px;
                        padding: 15px;
                        margin-bottom: 20px;
                        border: 3px solid #FF7043;
                    ">
                        <h3 id="soru-text" style="
                            color: #333;
                            font-weight: bold;
                            margin-bottom: 15px;
                        "></h3>
                        <div id="secenekler" style="margin-top: 15px;"></div>
                    </div>

                    <div id="geri-bildirim" style="
                        margin: 15px 0;
                        padding: 15px;
                        border-radius: 10px;
                        text-align: center;
                        font-weight: bold;
                        display: none;
                        font-size: 18px;
                    "></div>

                    <div style="
                        display: flex;
                        justify-content: space-between;
                        margin: 20px 0;
                        background-color: rgba(255, 255, 255, 0.7);
                        padding: 10px;
                        border-radius: 10px;
                        border: 2px dashed #FF7043;
                    ">
                        <div id="skor-container" style="
                            color: #333;
                            font-weight: bold;
                            font-size: 18px;
                        ">Skor: <span id="skor" style="color: #E91E63;">0</span></div>
                        <div id="ilerleme-container" style="
                            color: #333;
                            font-weight: bold;
                            font-size: 18px;
                        ">Soru: <span id="mevcut-soru" style="color: #E91E63;">1</span></div>
                    </div>

                    <div style="
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                    ">
                        <button id="bitir-button" style="
                            padding: 10px 20px;
                            background-color: #FF5252;
                            color: white;
                            border: none;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 16px;
                            font-family: 'Comic Sans MS', cursive, sans-serif;
                            box-shadow: 0 4px 0 #B71C1C;
                            transition: all 0.2s;
                        ">Testi Bitir</button>

                        <button id="sonraki-button" style="
                            padding: 10px 20px;
                            background-color: #42A5F5;
                            color: white;
                            border: none;
                            border-radius: 10px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 16px;
                            font-family: 'Comic Sans MS', cursive, sans-serif;
                            box-shadow: 0 4px 0 #1565C0;
                            transition: all 0.2s;
                            display: none;
                        ">Sonraki Soru</button>
                    </div>

                    <div id="sonuc-container" style="
                        margin-top: 20px;
                        text-align: center;
                        display: none;
                        background-color: rgba(255, 255, 255, 0.9);
                        padding: 20px;
                        border-radius: 15px;
                        border: 3px solid #42A5F5;
                    "></div>
                </div>
            </div>
        </div>
    `;
}

// Rastgele soru seçme fonksiyonu
function rastgeleSoruSec() {
    const rastgeleIndex = Math.floor(Math.random() * matematikSorulari.length);
    return matematikSorulari[rastgeleIndex];
}

// Mevcut soruyu gösterme fonksiyonu
function soruGoster() {
    // Rastgele bir soru seç
    mevcutSoru = rastgeleSoruSec();
    soruSayisi++;
    
    document.getElementById('soru-text').textContent = `${soruSayisi}. ${mevcutSoru.soru}`;
    
    const seceneklerHTML = mevcutSoru.secenekler.map((secenek, index) => `
        <div style="margin: 10px 0;">
            <label style="
                display: block; 
                padding: 12px; 
                background-color: #BBDEFB;
                border: 2px solid #90CAF9; 
                border-radius: 10px; 
                cursor: pointer;
                transition: all 0.3s;
                font-size: 16px;
                position: relative;
                overflow: hidden;
            " class="secenek-label">
                <input type="radio" name="cevap" value="${secenek}" style="
                    margin-right: 10px;
                    transform: scale(1.2);
                ">
                ${secenek}
                <span style="
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #42A5F5;
                    transform: scaleX(0);
                    transition: transform 0.3s;
                    transform-origin: left;
                " class="underline"></span>
            </label>
        </div>
    `).join('');
    
    document.getElementById('secenekler').innerHTML = seceneklerHTML;
    document.getElementById('mevcut-soru').textContent = soruSayisi;
    document.getElementById('geri-bildirim').style.display = 'none';
    document.getElementById('sonraki-button').style.display = 'none';

    // Seçenek seçildiğinde cevabı kontrol et
    const secenekler = document.querySelectorAll('input[name="cevap"]');
    secenekler.forEach(secenek => {
        secenek.addEventListener('change', cevabiKontrolEt);
    });
    
    // Seçenek etkileri için hover stilleri
    const secenekLabels = document.querySelectorAll('.secenek-label');
    secenekLabels.forEach(label => {
        label.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#90CAF9';
            this.querySelector('.underline').style.transform = 'scaleX(1)';
        });
        
        label.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#BBDEFB';
            this.querySelector('.underline').style.transform = 'scaleX(0)';
        });
    });
    
    // Buton basış efektleri
    const sonrakiBtn = document.getElementById('sonraki-button');
    const bitirBtn = document.getElementById('bitir-button');
    
    sonrakiBtn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(4px)';
        this.style.boxShadow = '0 0 0 #1565C0';
    });
    
    sonrakiBtn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 0 #1565C0';
    });
    
    bitirBtn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(4px)';
        this.style.boxShadow = '0 0 0 #B71C1C';
    });
    
    bitirBtn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 0 #B71C1C';
    });
}

// Kullanıcının cevabını kontrol etme fonksiyonu
function cevabiKontrolEt(event) {
    const secilmisCevap = event.target.value;
    const dogruCevap = mevcutSoru.dogruCevap;
    const geriBildirimDiv = document.getElementById('geri-bildirim');
    
    if (secilmisCevap === dogruCevap) {
        geriBildirimDiv.innerHTML = "🎉 Tebrikler, doğru cevap! 🎉";
        geriBildirimDiv.style.backgroundColor = "#C8E6C9";
        geriBildirimDiv.style.color = "#2E7D32";
        geriBildirimDiv.style.border = "2px solid #4CAF50";
        skor++;
        document.getElementById('skor').textContent = skor;
    } else {
        geriBildirimDiv.innerHTML = `❌ Üzgünüm, yanlış cevap.<br>Doğru cevap: ${dogruCevap}`;
        geriBildirimDiv.style.backgroundColor = "#FFCDD2";
        geriBildirimDiv.style.color = "#C62828";
        geriBildirimDiv.style.border = "2px solid #EF5350";
    }
    
    geriBildirimDiv.style.display = 'block';
    document.getElementById('sonraki-button').style.display = 'block';
    
    // Seçilen seçeneği vurgula (doğru veya yanlış olduğunu göster)
    const secenekler = document.querySelectorAll('input[name="cevap"]');
    secenekler.forEach(secenek => {
        secenek.disabled = true;
        
        const label = secenek.parentElement;
        
        if (secenek.value === dogruCevap) {
            label.style.backgroundColor = "#C8E6C9";
            label.style.borderColor = "#4CAF50";
            label.style.color = "#2E7D32";
            label.style.fontWeight = "bold";
        } else if (secenek.checked && secenek.value !== dogruCevap) {
            label.style.backgroundColor = "#FFCDD2";
            label.style.borderColor = "#EF5350";
            label.style.color = "#C62828";
            label.style.fontWeight = "bold";
        }
    });
}

// Sonraki soruya geçme fonksiyonu
function sonrakiSoru() {
    soruGoster();
}

// Testi bitirme ve sonucu gösterme fonksiyonu
function testiBitir() {
    const quizContainer = document.getElementById('quiz-container');
    const sonucContainer = document.getElementById('sonuc-container');
    
    // Soru alanını gizle
    document.getElementById('soru-container').style.display = 'none';
    document.getElementById('geri-bildirim').style.display = 'none';
    document.getElementById('sonraki-button').style.display = 'none';
    document.getElementById('bitir-button').style.display = 'none';
    
    // Sonuç alanını göster
    sonucContainer.style.display = 'block';
    
    // Başarı durumuna göre mesaj oluştur
    let basariYuzdesi = Math.floor((skor / soruSayisi) * 100);
    let basariMesaji;
    let basariEmoji;
    let basariResim;
    
    if (basariYuzdesi >= 90) {
        basariMesaji = "Muhteşem! Süper bir performans gösterdin!";
        basariEmoji = "🏆";
        basariResim = `
            <div style="margin: 20px auto; text-align: center;">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#FFD700" />
                    <circle cx="50" cy="50" r="40" fill="#FFC400" />
                    <text x="30" y="65" font-family="Arial" font-size="50" font-weight="bold" fill="#FFF">A+</text>
                </svg>
            </div>
        `;
    } else if (basariYuzdesi >= 70) {
        basariMesaji = "Harika! Çok iyi iş çıkardın!";
        basariEmoji = "🌟";
        basariResim = `
            <div style="margin: 20px auto; text-align: center;">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#4CAF50" />
                    <circle cx="50" cy="50" r="40" fill="#66BB6A" />
                    <text x="35" y="65" font-family="Arial" font-size="50" font-weight="bold" fill="#FFF">B</text>
                </svg>
            </div>
        `;
    } else if (basariYuzdesi >= 50) {
        basariMesaji = "İyi! Biraz daha çalışarak daha da ilerleyebilirsin.";
        basariEmoji = "👍";
        basariResim = `
            <div style="margin: 20px auto; text-align: center;">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#FF9800" />
                    <circle cx="50" cy="50" r="40" fill="#FFA726" />
                    <text x="35" y="65" font-family="Arial" font-size="50" font-weight="bold" fill="#FFF">C</text>
                </svg>
            </div>
        `;
    } else {
        basariMesaji = "Daha fazla pratik yaparak kendini geliştirebilirsin. Pes etme!";
        basariEmoji = "📚";
        basariResim = `
            <div style="margin: 20px auto; text-align: center;">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#F44336" />
                    <circle cx="50" cy="50" r="40" fill="#EF5350" />
                    <text x="35" y="65" font-family="Arial" font-size="50" font-weight="bold" fill="#FFF">D</text>
                </svg>
            </div>
        `;
    }
    
    sonucContainer.innerHTML = `
        <h2 style="color: #333; font-family: 'Comic Sans MS', cursive, sans-serif;">${basariEmoji} Test Bitti! ${basariEmoji}</h2>
        
        ${basariResim}
        
        <div style="
            background-color: rgba(173, 216, 230, 0.5);
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            border: 2px dashed #42A5F5;
        ">
            <h3 style="color: #333; text-align: center;">Toplam Skorun: ${skor}/${soruSayisi}</h3>
            
            <div style="
                width: 200px;
                height: 30px;
                background-color: #E0E0E0;
                border-radius: 15px;
                overflow: hidden;
                margin: 15px auto;
                position: relative;
            ">
                <div style="
                    width: ${basariYuzdesi}%;
                    height: 100%;
                    background-color: #42A5F5;
                    border-radius: 15px;
                    position: absolute;
                    top: 0;
                    left: 0;
                "></div>
                <div style="
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    line-height: 30px;
                    color: ${basariYuzdesi > 50 ? 'white' : 'black'};
                    font-weight: bold;
                ">%${basariYuzdesi}</div>
            </div>
        </div>
        
        <p style="
            margin: 20px 0;
            font-size: 18px;
            text-align: center;
            font-family: 'Comic Sans MS', cursive, sans-serif;
        ">${basariMesaji}</p>
        
        <div style="
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        ">
            <button id="yeniden-basla" style="
                padding: 10px 20px;
                background-color: #42A5F5;
                color: white;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-weight: bold;
                font-size: 16px;
                font-family: 'Comic Sans MS', cursive, sans-serif;
                box-shadow: 0 4px 0 #1565C0;
                transition: all 0.2s;
            ">Yeniden Başla</button>
            
            <button id="ana-menu" style="
                padding: 10px 20px;
                background-color: #66BB6A;
                color: white;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-weight: bold;
                font-size: 16px;
                font-family: 'Comic Sans MS', cursive, sans-serif;
                box-shadow: 0 4px 0 #388E3C;
                transition: all 0.2s;
            ">Ana Menü</button>
        </div>
    `;
    
// Düğme efektleri
const yenidenBaslaBtn = document.getElementById('yeniden-basla');
const anaMenuBtn = document.getElementById('ana-menu');

yenidenBaslaBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(4px)';
    this.style.boxShadow = '0 0 0 #1565C0';
});

yenidenBaslaBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 0 #1565C0';
});

anaMenuBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(4px)';
    this.style.boxShadow = '0 0 0 #388E3C';
});

anaMenuBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 0 #388E3C';
});

// Yeniden başla butonuna tıklama olayı ekle
yenidenBaslaBtn.addEventListener('click', () => {
    quiziBaslat();
});

// Ana menü butonuna tıklama olayı ekle
anaMenuBtn.addEventListener('click', () => {
    document.body.removeChild(quizContainer.parentElement);
    document.querySelector('.menu').style.display = 'flex';
    document.querySelectorAll('.title').forEach(title => {
        title.style.display = 'block';
    });
});
}

// Quiz'i başlatma fonksiyonu
function quiziBaslat() {
mevcutSoru = null;
skor = 0;
soruSayisi = 0;
document.getElementById('skor').textContent = skor;

// Eğer sonuç ekranı gösteriliyorsa, soru ekranını göster
document.getElementById('sonuc-container').style.display = 'none';
document.getElementById('soru-container').style.display = 'block';
document.getElementById('bitir-button').style.display = 'block';

soruGoster();
}

// Ana oyun başlatma fonksiyonu (dışarıdan çağrılır)
function startMathQuiz() {
// Ana menüyü gizle
document.querySelector('.menu').style.display = 'none';
document.querySelectorAll('.title').forEach(title => {
    title.style.display = 'none';
});

// Quiz konteynerini oluştur
const quizWrapperDiv = document.createElement('div');
quizWrapperDiv.style.position = 'fixed';
quizWrapperDiv.style.top = '0';
quizWrapperDiv.style.left = '0';
quizWrapperDiv.style.width = '100%';
quizWrapperDiv.style.height = '100%';
quizWrapperDiv.style.display = 'flex';
quizWrapperDiv.style.justifyContent = 'center';
quizWrapperDiv.style.alignItems = 'center';
quizWrapperDiv.style.zIndex = '100';
quizWrapperDiv.style.background = 'linear-gradient(to bottom, #87CEEB 0%, #87CEEB 60%, #4CAF50 60%, #4CAF50 100%)';

quizWrapperDiv.innerHTML = quizArayuzuOlustur();
document.body.appendChild(quizWrapperDiv);

// Sonraki butonuna tıklama olayı ekle
document.getElementById('sonraki-button').addEventListener('click', sonrakiSoru);

// Bitir butonuna tıklama olayı ekle
document.getElementById('bitir-button').addEventListener('click', testiBitir);

// Quiz'i başlat
quiziBaslat();
}