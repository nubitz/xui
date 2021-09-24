import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
    control: {
        name: null,
        action: null,
        trigger: null,
        target: null
    }
});

onChange('control', (name) => {
    console.log(name, state)
})

export {
    state, onChange
}
