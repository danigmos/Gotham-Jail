const detenuti  = []

const detenutiList = document.getElementById('carcerati');
const detenutiContainer = document.getElementById('carceratiContainer');
const downloadBtn = document.getElementById('carceratiBtn');


const url = 'https://denebvoice.com/api_gotham/gothamCity.json';

class Detenuto {
    
    static async getDati() {

        const richiesta = await fetch(url);
        const dati = await richiesta.json();
    	
        dati.map( el => {
            const cardDetenuti = document.importNode(detenutiList, true);

            cardDetenuti.querySelector('h2').textContent = el;


            detenuti.push(el);
        })
        console.log(detenuti[0]);
    }

    static start(){
        Detenuto.getDati();
    }

}

class App {

    static init(){
  
        downloadBtn.addEventListener('click', Detenuto.start);
    }

}

App.init();


// render(){ console.log(this.card.name) 
//     const singleCard = document.createElement('li'); 
// singleCard.id='listaPersonaggi' singleCard.className ='card'; 
// singleCard.innerHTML =`<div> <h2>${this.card.name}</h2> <p>${this.card.species}</p> <button>rimuovi card</button> </div> `; 
// const removeCardButton = singleCard.querySelector('button'); 
// removeCardButton.addEventListener('click',this.removeItem.bind(this)) 
// return singleCard }