import assert from "assert";
import { createLocalVue,shallowMount } from "@vue/test-utils";
import MyPlugin from "../../src/component-plugin.js"

const localVue = createLocalVue();
localVue.use(MyPlugin);

const local_component = {
    name: "Foo",
    data: () => ({
        value: 123,
    }),
    render(h) {
        return h( "span", "Hello World!" );
    },
    methods: {
        set_plugin(input_value) {
            this.value = this.$functionalComponent(input_value);
        },
    },
};
const component_options = {
    localVue,
    attachTo: document.createElement("div"),
};

describe("The plugin", () => {
    it("Mount a empty component", () => {
        const wrapper = shallowMount(local_component, component_options);
        const { vm } = wrapper;
        assert.strictEqual(vm.value, 123);
        wrapper.destroy();
    });
    it("Should work", () => {
        const wrapper = shallowMount(local_component, component_options);
        const { vm } = wrapper;
        vm.set_plugin(987);
        assert.strictEqual(vm.value, 987);
        wrapper.destroy();
    })
})