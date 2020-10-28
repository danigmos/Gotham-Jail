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
            const cardDetenuti = document.importNode(detenutiList.content, true);
            let li = document.createElement('li');
        
            const ul = cardDetenuti.querySelector('ul');
            //console.log(ul);

            cardDetenuti.querySelector('h2').textContent = el.nomePersonaggio;
            cardDetenuti.querySelector('strong').textContent = el.razza;
            cardDetenuti.querySelector('h4').textContent = el.livelloDiPericolo;
            // li.textContent = el.caratteristicheFisiche.altezza;
            // ul.appendChild(li);
            // li.textContent = el.caratteristicheFisiche.coloreCapelli;
            let elem = '<ul><li> Altezza: '+el.caratteristicheFisiche.altezza+'</li>'
            elem += '<li> Colore Capelli: '+el.caratteristicheFisiche.coloreCapelli+'</li>'
            elem += '<li> Colore Occhi: '+el.caratteristicheFisiche.coloreOcchi+'</li>'
            elem += '<li> Peso: '+el.caratteristicheFisiche.peso+'</li> </u>';
            // const lis = document.createElement('li')
            // lis.textContent = el.caratteristicheFisiche.coloreCapelli;
            cardDetenuti.querySelector('ul').innerHTML = elem;
            // li.textContent = el.caratteristicheFisiche.coloreOcchi;
            // ul.appendChild(li);
            // li.textContent = el.caratteristicheFisiche.peso;
            // ul.appendChild(li);

            //cardDetenuti.appendChild(ul);
            //console.log(el.caratteristicheFisiche.length);
            return detenutiContainer.appendChild(cardDetenuti);

           


            //detenuti.push(el);
        })
       // console.log(detenuti[0]);
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