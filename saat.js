// Kullanıcıdan isim al
let userName = prompt("Adınız nedir?");
document.getElementById("myName").innerText = userName;

// Zamanı ve günü göstermek için fonksiyon
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();

    // Günler dizisi
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    // Tek basamaklı sayıların başına sıfır eklemek
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Zaman ve günü myClock ID'li elemana yerleştir
    let time = `${hours}:${minutes}:${seconds} - ${days[day]}`;
    document.getElementById("myClock").innerText = time;

    // Her saniye tekrar çalışması için setTimeout kullan
    setTimeout(showTime, 1000);
}

// sayfa yüklendiğinde showTime fonksiyonunu başlat
showTime();
