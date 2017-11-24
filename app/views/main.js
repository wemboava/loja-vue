const service = new storage();

new Vue({
    el: '#app',

    data() {
        return { 
            listProduct: service.listItem(),
            product: {},
            nameItem : "",
            modalAdd : false,
            modalRemove : false,
            filter: "",
            headerProduct: ['Name', 'Amount', 'Price', 'Url', 'Purchased', 'Edit', 'Trash']
        }
    },
    
    methods: {
        editObj (product) {
            this.product = product;
            this.showModalAdd();
        },
        removeItem (nameItem) {
            this.nameItem = nameItem;
            this.showModalRemove();
        },
        clearModal () {
            this.product = {}
        }, 
        showModalAdd () {
            this.modalAdd = true;
        },
        closeModalAdd () {
            this.modalAdd = false;
        },
        showModalRemove () {
            this.modalRemove = true;
        },
        closeModalRemove () {
            this.modalRemove = false;
        }
    },

    computed: {
        filteredsProducts () {
            return this.listProduct.filter(product => product.name.includes(this.filter))
        }
    }
});
