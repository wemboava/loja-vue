const service = new storage();



new Vue({
    el: '#app',
    data: {
        produtos: service.listItem(),
        product: { 
            name : "", 
            amount : "", 
            price : "", 
            link : "", 
            purchased : "" 
        },
        showModal : false
    },
    
    methods: {
        showModal() {
            this.$refs.close.style.display = "flex";
        },
        EditObj(product) {
            this.product = product;
        },
        clearModal() {
            this.product.name = "",
            this.product.amount = "",
            this.product.price = "",
            this.product.link = "",
            this.product.purchased = ""
            } 
        }
});
