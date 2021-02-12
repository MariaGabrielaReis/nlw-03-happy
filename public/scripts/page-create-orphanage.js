//create map (with an determined local)
const map = L.map("mapid").setView([-23.1778752, -45.8522349], 16);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [190, 2],
});

//create and add marker
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field
function addPhotoField() {
  /* //pega o container todo
    const container = document.querySelector('#images')
    //pega o campo
    const fieldsContainer = document.querySelectorAll('#images .new-upload')
    //duplica o último campo
    const newFieldContainer = fieldsContainer[fieldsContainer.legth - 1].cloneNode(true)
    //limpa o campo se não tiver vazio
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }

    input.value = ""

    //adiciona no container
    container.appendChild(newFieldContainer)
}*/
  const container = document.querySelector("#images");

  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  input.value = "";

  container.appendChild(newFieldContainer);
}

//delete photo field
function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value=""
        //limpa o valor do campo
        return
    }

    //deleta o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
    //retira a classe .active
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))
   
    //coloca a classe .active no botão clicado
   const button = event.currentTarget
   button.classList.add('active')
       
   //atualiza o input hidden com o valor selecionado
   const input = document.querySelector('[name="open_on_weekends"]')
   
   //verifica se é sim ou não
   input.value = button.dataset.value
   
}