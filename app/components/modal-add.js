
Vue.component('modal-add', {
    name: "ModalAddProduct",
    
    props: ['objProduct'],
    
    template: 
        `<div id="myModal" ref="close" class="modal close">
            <form class="form-table">
                <div class="form-table__row">
                    <label for="input-name" class="form-table__row__label">Nome:</label>
                    <input class="form-table__row__input" v-model="product.name" type="text" id="input-name">
                </div>
                <div class="form-table__row">
                    <label for="input-amount" class="form-table__row__label">Quantidade:</label>
                    <input class="form-table__row__input" v-model="product.amount" type="number" id="input-amount">
                </div>
                <div class="form-table__row">
                    <label for="input-price" class="form-table__row__label">Valor:</label>
                    <input class="form-table__row__input" v-model="product.price" type="text" id="input-price">
                </div>
                <div class="form-table__row">
                    <label for="input-link" class="form-table__row__label">Url:</label>
                    <input class="form-table__row__input" v-model="product.link" type="url" id="input-link">
                </div>
                <div class="form-table__row">
                    <label for="input-yes" class="form-table__row__label">Purchased:</label>
                    <td class="form-table__row__input">
                        <input v-model="product.purchased" type="checkbox" id="input-yes">
                    </td>
                </div>
                <div class="form-table__buttons">
                    <a class="button button--close" @click="$emit('close')"><i class="fa fa-close" aria-hidden="true"></i></a>
                    <a class="button button--add" @click="save()"><i class="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </form>
        </div>`,

    data() {
        return {
            product: Object.assign({}, this.objProduct)
        }
    },

    methods: {
        save() {
            const service = new storage();
            service.addItem(this.product);
        }
    }
})