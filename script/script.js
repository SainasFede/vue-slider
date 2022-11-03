/*

**Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Immagini proposte (non obbligatorie):
Svezia http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg
Perù https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg
Chile https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c
Argentina https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg
Colombia https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro

*/

/* 
1) inserire i dati in un array di oggetti
2) ciclare e stampare immagine e descrizione oggetti nel box-img
3) stampare immagine nel carousel
*/


/*
const boxImg = document.querySelector('.box-img');
const carousel = document.querySelector('.carousel');
const description = document.querySelector('.description');

const back = document.querySelector('.back');
const next = document.querySelector('.next');

const numImg = 5;
let counterImg = 0;

let boxImgHtml = '';
let carouselHtml = '';
let titleHtml = '';
let infoImgHtml = '';

// SI POTEVA SVILUPPARE STILANDO DIRETTAMENTE TUTTA LA STRUTTURA HTML IN JS
for(let img of gallery){
  boxImgHtml = `<img src="${img.photo}" class="item" alt="${img.photo}">`;
  titleHtml = `<h1 class="title">${img.titolo}</h1>`
  infoImgHtml = `<p class="info-img">${img.descrizione}</p>`

  carouselHtml = `<img src="${img.photo}" class="item-carousel" alt="${img.photo}">`

  boxImg.innerHTML += boxImgHtml;
  carousel.innerHTML += carouselHtml;
  description.innerHTML += titleHtml;
  description.innerHTML += infoImgHtml;
  
};

const listImg = document.getElementsByClassName('item');
const listImgCar = document.getElementsByClassName('item-carousel');
const listTitle = document.getElementsByClassName('title');
const listInfoImg = document.getElementsByClassName('info-img');

listImg[counterImg].classList.add('active');
listImgCar[counterImg].classList.add('active');
listTitle[counterImg].classList.add('active');
listInfoImg[counterImg].classList.add('active');

back.addEventListener('click', function(){
  nextBack(true);
})
next.addEventListener('click', function(){
  nextBack(false);
})

let autoplay = setInterval (nextBack, 1800);


function nextBack (isNext){
  listImg[counterImg].classList.remove('active');
  listImgCar[counterImg].classList.remove('active');
  listTitle[counterImg].classList.remove('active');
  listInfoImg[counterImg].classList.remove('active');

  if(isNext){
    counterImg--;
    if(counterImg < 0) counterImg = numImg -1;
  }else{
    counterImg++
    if(counterImg === numImg) counterImg = 0;
  }
  listImg[counterImg].classList.add('active');
  listImgCar[counterImg].classList.add('active');
  listTitle[counterImg].classList.add('active');
  listInfoImg[counterImg].classList.add('active');
};

carousel.addEventListener('mouseover', function(){
  clearInterval(autoplay);
});

carousel.addEventListener('mouseout', resume);
function resume(){
  autoplay = setInterval(nextBack, 1800);
}; */

const { createApp } = Vue;

const app = createApp({
  data(){
    return{
       gallery: [
        {
          titolo: 'Svezia',
          descrizione: 'Sembra proprio che fra i souvenir più ambiti dalla Svezia ci siano anche i cartelli stradali: migliaia di segnali di pericolo per l’attraversamento di alci vengono rubati ogni anno dalle strade svedesi.',
          photo: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
        },
      
        {
          titolo: 'Perù',
          descrizione: 'Puoi guidare dune buggy per ore fino alla cima delle dune e poi legare una tavola ai piedi e scivolare fino alla città sottostante! Questo puoi viverlo se visiterai la duna bianca del Cerro Blanco, situata nel deserto di Sechura, nel sud del Perù. Torreggia sulla pittoresca città-oasi nel deserto Huacachina ed è alta 3860 piedi dalla base alla vetta!',
          photo: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
        },
      
        {
          titolo: 'Chile',
          descrizione: 'Il vulcano Ojos del Salado è considerato il più alto del mondo sul livello del mare con i suoi 6891 metri di altezza, si trova al confine tra Cile e Argentina, il vulcano fa parte della Cordigliera delle Ande ed è il più alto promontorio montuoso dopo il Monte Aconcagua.',
          photo: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
        },
      
        {
          titolo: 'Argentina',
          descrizione: 'Buenos Aires, la capitale, vanta il privilegio di possedere la strada più larga al mondo, la Avenida 9 de Julio, in omaggio al giorno dell’Indipendenza conseguita il 9 luglio 1816.',
          photo: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
        },
      
        {
          titolo: 'Colombia',
          descrizione: 'In Colombia si trova una delle più grandi meraviglie naturali a livello mondiale: Caño Cristales, noto come il fiume dei cinque colori per la presenza di una pianta che dimora nel suo letto conferendogli il colore giallo, verde, azzurro, rosso e nero.',
          photo: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
        }
      ],
      activeImage: 0
    };
  },
  methods:{
    changeImg(index){
      this.activeImage = index;
    },

    nextBack(isNext){
      if(isNext) this.activeImage++;
      else this.activeImage--;
      if(this.activeImage === this.gallery.length){
        this.activeImage = 0;
      }else if(this.activeImage < 0){
        this.activeImage = this.gallery.length -1
      }
    },

    autoplay(){
      this.autoChange = setInterval(() =>{
        this.nextBack(true);
      }, 3000);
    },

    stopAutoChange(){
      clearInterval(this.autoChange)
    }
  },

  created(){
    this.autoplay();
  }

}).mount('#app')