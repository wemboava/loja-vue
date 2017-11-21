const service = new storage();



new Vue({
    el: '#app',
    data: {
        produtos: service.listItem()
    },
    methods: {
        showModal() {
            this.$refs.close.style.display = "flex";
        }
    }
});
