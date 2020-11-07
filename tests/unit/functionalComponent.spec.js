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
            this.value = this.$funcComp(input_value);
        },
    },
};
const component_options = {
    localVue,
    attachTo: document.createElement("div"),
};

describe("The plugin", () => {
    it("Should have a functional component", () => {
        const wrapper = shallowMount(local_component, component_options);
        const { vm } = wrapper;
        vm.$addFuncComp({
            dom: "div",
            id: "the-component",
            text: "This is a component."
        });
        assert.strictEqual(wrapper.find("div#the-component"), true);
        wrapper.destroy();
    })
})