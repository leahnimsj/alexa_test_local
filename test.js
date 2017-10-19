(function(){
    const fetch = require('node-fetch');

    const baseurl = 'https://grocery-gallery.herokuapp.com/alexa/';
    const API_KEY = '2039rj0aeijf98je0rij0ej9r0';

    function postRecord(path, record, callback) {
        
            const options = {
                method: "POST",
                headers: {
                    'X-SECRET-API-KEY': API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            }
        
            fetch(baseurl + path, options)
            .then(res => res.json())
            .then(items => callback(items));
        }
    
        // let self = this;
        // const foodItem = this.event.request.intent.slots.food.value 
    
        const foodItem = {
            name: "pineapple"
        }
            
        postRecord('grocery', foodItem, function(items) {
            console.log('Okay, we added ' + items.name)
            })
            



})();
        
