
Vue.component('modal-add', {
    name: "ModalAddProduct",
    
    props: ['objProduct', 'method'],
    
    template: 
        `<div id="myModal" ref="close" class="modal close">
            <form class="form-table">
                <div class="group-input">
                    <input v-model="product.name" id="input-name" class="input-form" type="text" required>
                    <span class="test-bottom"></span>
                    <label class="input-name" for="input-name">Name</label>
                </div>
    
                <div class="group">
                    <div class="group-input">
                        <input v-model="product.amount" id="input-amount" class="input-form" type="number" required>
                        <span class="test-bottom"></span>
                        <label class="input-name" for="input-amount">Amount</label>
                    </div>
    
                    <div class="group-input">
                        <input v-model="product.price" id="input-price" class="input-form" type="number" required>
                        <span class="test-bottom"></span>
                        <label class="input-name" for="input-price">Price</label>
                    </div>
                </div>
    
                <div class="group-input">
                    <input v-model="product.link" id="input-link" class="input-form" type="url" required>
                    <span class="test-bottom"></span>
                    <label class="input-name" for="input-link">Url</label>
                </div>
                
                <div class="input-purchased">
                    <label class="" for="input-yes">Purchased</label>
                    <input v-model="product.purchased" id="input-yes" type="checkbox" required>
                </div>
                
                <div class="form-table__buttons">
                    <a class="button button--close" @click="$emit('close')">Close</a>
                    <a class="button button--add" @click="foo">Save</a>
                </div>
            </form>
        </div>`,

    data() {
        return {
            product: Object.assign({}, this.objProduct)
        }
    },

    methods: {
        foo () {
            this[this.method]()
        },
        
        save() {
            const service = new storage();
            service.addItem(this.product);
        },
        
        edit() {
            const service = new storage();
            service.editItem(this.product);
        }
    }
})
