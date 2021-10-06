import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
    control: {
        name: null,
        action: null,
        trigger: null,
        target: null
    },
    registerEvents: {}
});

onChange('control', ({ name }) => {
    const { registerEvents: events } = state;
    const e = events[name];
    if (e && e?.callback instanceof Function) {
        e.callback();
    }
})

export {
    state, onChange
}
