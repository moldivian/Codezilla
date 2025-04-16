document.addEventListener('DOMContentLoaded', function() {
    // Tüm filtre butonlarını seç
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const gameCards = document.querySelectorAll('.oyun-karti');

    // Her buton için click event listener ekle
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif butonun stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('aktif'));
            this.classList.add('aktif');

            const category = this.getAttribute('data-kategori');

            // Tüm oyun kartlarını döngüye al
            gameCards.forEach(card => {
                if (category === 'tum' || card.getAttribute('data-kategori') === category) {
                    card.style.display = 'block'; // Eşleşenleri göster
                } else {
                    card.style.display = 'none'; // Eşleşmeyenleri gizle
                }
            });
        });
    });
});
// script.js
document.querySelectorAll('.detay-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const kart = e.target.closest('.oyun-karti'); // Tıklanan oyun kartı
        
        // Modalı doldur
        document.getElementById('modal-resim').src = kart.querySelector('img').src;
        document.getElementById('modal-baslik').textContent = kart.querySelector('h3').textContent;
        document.getElementById('modal-yil').textContent = kart.querySelector('p:nth-of-type(1)').textContent;
        document.getElementById('modal-puan').textContent = kart.querySelector('p:nth-of-type(2)').textContent;
        
        // Modalı göster
        document.getElementById('oyun-modal').style.display = 'flex';
    });
});

// Kapat butonu
document.querySelector('.kapat').addEventListener('click', () => {
    document.getElementById('oyun-modal').style.display = 'none';
});
// script.js
document.querySelectorAll('.detay-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const kart = e.target.closest('.oyun-karti');
        
        // Temel bilgiler
        document.getElementById('modal-resim').src = kart.querySelector('img').src;
        document.getElementById('modal-baslik').textContent = kart.querySelector('h3').textContent;
        
        // Ekstra alanlar
        document.getElementById('modal-platform').innerHTML = 
            `<strong>Platform:</strong> ${kart.dataset.platform}`;
        document.getElementById('modal-oyuncu').innerHTML = 
            `<strong>Oyuncu Sayısı:</strong> ${kart.dataset.oyuncu}`;
        document.getElementById('modal-aciklama').innerHTML = 
            `<strong>Hikayesi:</strong> ${kart.dataset.aciklama}`;
        
        // Modalı göster
        document.getElementById('oyun-modal').style.display = 'flex';
    });
});