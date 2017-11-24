const service = new storage();

new Vue({
    el: '#app',

    data() {
        return { 
            listProduct: service.listItem(),
            product: {},
            nameItem : "",
            modal: {
                form: false,
                remove: false 
            },
            filter: "",
            headerProduct: ['Name', 'Amount', 'Price', 'Url', 'Purchased', 'Edit', 'Trash']
        }
    },
    
    methods: {
        additem () {
            this.product = {}
            this.toggleModal('form');
        },
        editItem (product) {
            this.product = product;
            this.toggleModal('form');
        },
        removeItem (nameItem) {
            this.nameItem = nameItem;
            this.toggleModal('remove');
        },
        toggleModal (modal) {
            this.modal[modal] = !this.modal[modal];
        }
    },

    computed: {
        filteredsProducts () {
            return this.listProduct.filter(product => product.name.includes(this.filter))
        }
    }
});
