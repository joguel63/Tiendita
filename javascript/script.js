let button = document.getElementById("show-bar");
const img = [
  "https://cdn.pixabay.com/photo/2020/12/23/11/50/lavender-5854761__340.jpg",
  "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png",
  "https://cdn.pixabay.com/photo/2021/02/22/08/41/crocus-6039312_960_720.jpg",
];
let image = 0;

let nav_image = document.getElementById("nav-image");

for (let i = 0; i < img.length; i++) {
  nav_image.innerHTML += `<li id="${i}" onclick="select_image(${i})"></li>`;
}

button.onclick = show_nav;

function show_nav() {
  if (
    document.getElementById("nav-bar").className.match(/(?:^|\s)hidden(?!\S)/)
  ) {
    document.getElementById("nav-bar").className = "nav-bar active";
  } else {
    document.getElementById("nav-bar").className = "nav-bar hidden";
  }
}
//todo lo que tiene que ver con las imagenes principales
const changeImage = (image = 0) => {
  const galleryPhoto = document.getElementById("gallery-module");
  galleryPhoto.style.backgroundImage = `url(${img[image]})`;
};
const set_active = (active) => {
  for (let i = 0; i < img.length; i++) {
    let lista = document.getElementById(i);
    i == active
      ? (lista.style.backgroundColor = "#cacaca")
      : (lista.style.backgroundColor = "");
  }
};
const select_image = (select) => {
  image = select;
  changeImage(image);
  set_active(image);
};
changeImage(image);
set_active(image);
const gallery = setInterval(() => {
  image >= img.length - 1 ? (image = 0) : image++;
  changeImage(image);
  set_active(image);
}, 3000);

//hasta aqui

/* const gallery = document.getElementById('gallery-module');
gallery.style.backgroundImage = `url(${img[0]})`;
console.log(`url(${img[0]})`) */
