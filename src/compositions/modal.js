import { reactive, computed } from 'vue'

export const useModal = () => {

    const state = reactive({
        // todos: [],
        // editingId: 0,
        // filter: null,
        // nextTodoId: 1,
        // isShow: false,

        // type: '', //modal, confirm
        isShow: false,
        title: '',
        message: '',
        focus: null,
        callback: () => { }
    })



    const isShow = computed(() => state.isShow)
    const title = computed(() => state.title)
    const message = computed(() => state.message)
    const focus = computed(() => state.focus)

    // const addTodo = ({ content }) => {
    //     state.todos.push({ id: state.nextTodoId, content, done: false })

    //     state.nextTodoId++
    // }


    // const toggleTodoStatus = (id) => {
    //     const filtered = state.todos.filter(todo => {
    //         return todo.id === id
    //     })

    //     filtered.forEach(todo => {
    //         todo.done = !todo.done
    //     })
    // }



    function alertClose(focusEle) {

        state.isShow = false;


        if (typeof focusEle == 'undefined' || focusEle == null || focusEle == '') {
            return;
        }

        document.querySelector(focusEle).focus();


    }
    function alertShow(text) {
        state.message = text;
        state.isShow = true;

        console.log(text);


    }

    return {
        isShow,
        alertShow,
        alertClose
    }
}
