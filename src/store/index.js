import { createStore } from 'vuex'

export const store = createStore({

    state: () => ({

        modal: {
            isShow: false,
            type: '', //modal, confirm
            title: '',
            message: '',
            focus: '',
            gotoLink: '',
            confirm: false,
            callback: () => { }
        }
    }),
    mutations: {
        MODAL_OPEN(state, action) {
            state.modal.isShow = action.isShow;
            state.modal.type = action.type !== undefined ? action.type : '';
            state.modal.title = action.title !== undefined ? action.title : '';
            state.modal.message = action.message !== undefined ? action.message : '';
            state.modal.focus = action.focus !== undefined ? action.focus : '';
            state.modal.gotoLink = action.gotoLink !== undefined ? action.gotoLink : '';
            state.modal.confirm = action.confirm !== undefined ? action.confirm : () => { };

            state.modal.callback = action.callback !== undefined ? action.callback : 'asdf';





        },
        MODAL_COLSE(state, confirm) {
            state.modal.isShow = false;
            state.modal.type = '';
            state.modal.title = '';
            state.modal.message = '';
            state.modal.focus = '';
            state.modal.gotoLink = '';

            state.modal.confirm = confirm !== undefined ? confirm : false;


        }
    },
    actions: {
        modalOpen(context, modal) {
            context.commit("MODAL_OPEN", modal)
            console.log('context', context.state.modal.confirm);
            return context.state.confirm

        },
        modalClose(context, confirm) {
            context.commit("MODAL_COLSE", confirm)
        }
    },
})
