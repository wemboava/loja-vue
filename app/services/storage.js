class storage {

    listItem () {
        let vet = [];
        
        for (let i = 0; i < localStorage.length ; i++) { 
            
            let jsonText = localStorage.getItem(localStorage.key(i)) ;
            
            vet.push(JSON.parse(jsonText));
        }

        return vet;
    }

    addItem (product) {
        if (product.name) {
            localStorage.setItem(product.name, JSON.stringify(product));

            this.listItem();

            document.location.reload()
        }
    }

    removeItem (key) {   
        localStorage.removeItem(key);
        document.location.reload()
    }
}