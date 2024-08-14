// Yeni öğe ekleme fonksiyonu
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
      showToast("error");
    } else {
      document.getElementById("list").appendChild(li);
      showToast("success");
    }
  
    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  
    li.onclick = function() {
      li.classList.toggle('checked');
    }
  }
  
  // Toast mesajlarını gösterme fonksiyonu
  function showToast(type) {
    var toastEl = type === "success" ? document.getElementById("liveToast") : document.getElementById("liveToast-error");
    $(toastEl).toast('show');
  }
  
  // Sayfa yüklendiğinde mevcut liste öğelerine olayları bağla
  document.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  });
  