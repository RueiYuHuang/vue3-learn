import { ref } from "vue"

const user = {
    install: (app, options) => {
        const name = ref('')
        const sayHello = () => {
            console.log(name)
            console.log('hello', name.value)
        }
        app.provide('user', {
            name,
            sayHello,
        })
    }
}
export default user