const ekleButonu = document.getElementById("liveToastBtn");
const girilenGorev = document.getElementById("task");
const gorevListesi = document.getElementById("list");
const silButonu = document.getElementsByClassName("delete_item");

ekleButonu.addEventListener("click", elemanEkle);
gorevListesi.addEventListener("click", elemanSil);
gorevListesi.addEventListener("click", görevTamam);

gorevler = getGorevler();

gorevler.forEach((element) => {
  render(element);
});



function görevTamam(e) {
    e.target.classList.toggle("checked")

}

function elemanSil(index){
    function deleteElement(e) {
        if (e.target.className === "close") {
            if (confirm("Are you Sure ?")) {
                e.target.parentElement.remove();  // tıklandığı yerdeki "x" parantElementi kaldır(parant element = li)
                let prm = e.target.parentElement.firstChild.nextElementSibling.textContent.trim();
                //tıkladıgımız yerin bir üst elementine git(li) first childina gel(span) bu span'ın nextelemnent ile içerisine gir ve textContentini al(metin) ve deletestorage fonksiyonunda çağırdık.
                deleteStorage(index);
            }
    
        }
    
}

function render(gorev) {
  // List Item Oluşturma
  var li = document.createElement("li");
  // Link Oluşturma
  var link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></li>";
  li.innerText = gorev;
  gorevListesi.appendChild(li);
  li.appendChild(link);
  gorev.value = "";
}

function elemanEkle() {
  if (girilenGorev.value == "") {
    $("#liveToast2").toast("show");
  } else {
    $("#liveToast1").toast("show");
    gorevler = getGorevler();
    gorevler.push(girilenGorev.value);
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
    render(girilenGorev.value);
    girilenGorev.value = "";
  }
}

function getGorevler() {
  var gorevler = localStorage.getItem("gorevler");
  if (!gorevler) {
    gorevler = [];
  } else {
    gorevler = JSON.parse(gorevler);
  }
  return gorevler;
}

