class storage {

    listItem () {            
        let jsonText = localStorage.getItem(localStorage.key(0));
    
        if(jsonText === null) {
            return []
        }
        return JSON.parse(jsonText);
    }

    addItem (product) {
        const products = this.listItem()
        if (product.name) {            
            products.push(product)

            localStorage.setItem('products', JSON.stringify(products));

            document.location.reload()
        }
    }

    removeItem (key) {   
        const products = this.listItem()

        localStorage.setItem('products', JSON.stringify(products.filter((i) => i.name !== key)));
        
        document.location.reload()
    }

    editItem (product) {
        const products = this.listItem()
        const list = []

        products.map((i) => {

            if(i.name === product.name) {
                i = product;
            }

            list.push(i)
            return i 
        })
        localStorage.setItem('products', JSON.stringify(list));
        document.location.reload();
    }
}
