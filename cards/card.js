let newDeck = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
let promise = axios.get(newDeck)


document.getElementById("btn").onclick = function(){
    
    promise
    .then(c1 =>{console.log(c1.data.deck_id);
        let card = `https://deckofcardsapi.com/api/deck/${c1.data.deck_id}/draw/?count=1`
        return axios.get(card)
    })

    .then(c1 =>{console.log(c1.data.cards[0].image)
       img = document.getElementById("img")
       img.setAttribute("src", c1.data.cards[0].image)
    })

    .catch(err => {console.log(err)})

    }