Vue.component('modal-remove', {
    props: ['nameItem'],

    template:
        `<div class="modal">
            <div class="modal__remove">
                <p class="modal__remove__title">To remove {{nameItem}} from list?</p>
                <div class="modal__remove__buttons">
                    <a class="button button--close" @click="$emit('close')"><i class="fa fa-close" aria-hidden="true"></i></a>
                    <a class="button button--add" @click="removeItem"><i class="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>`,

    methods: {
        removeItem() {
            const service = new storage();
            service.removeItem(this.nameItem);
        }
    } 
})