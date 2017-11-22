function clickAdd(){
    const service = new storage();
    service.addItem();
}

class storage {

    listItem() {
        let vet=[];
        
        for (let i = 0; i < localStorage.length ; i++) { 
            
            let jsonText = localStorage.getItem(localStorage.key(i)) ;
            
            vet.push(JSON.parse(jsonText));
        }
        return vet;
    }
    addItem(product) {
        if(product.name != null || product.name != "") {
            localStorage.setItem(product.name, JSON.stringify(product));

            const service = new storage();
            service.listItem;

            document.location.reload()
        }
    }
    removeItem(key) {   
        localStorage.removeItem(key);
        document.location.reload()
    }
}