const service = new storage();

new Vue({
    el: '#app',
    data: {
        produtos: service.listItem()
    }
});
