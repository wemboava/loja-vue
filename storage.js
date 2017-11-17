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
        console.log(vet);

        return vet;
    }

    addItem() {
        
        let name = 'bermuda'
        , amount = '3'
        , link = 'http://yahoo.com/asdojoiadjsaskda-sas-asd-asdas'
        , price = 54.5
        , bool = false
        , cont = localStorage.length + 1
        , product = { name, amount, link, price, bool };

        localStorage.setItem(name, JSON.stringify(product));
        
        console.log(product);

        const service = new storage();
        service.listItem;
       
        document.location.reload()
    }

    removeItem(key) {   
        localStorage.removeItem(key);
    }
}