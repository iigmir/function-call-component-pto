import assert from "assert";
import { createLocalVue,shallowMount } from "@vue/test-utils";
import MyPlugin from "../../src/component-plugin.js"

const local_vue = createLocalVue();
local_vue.use(MyPlugin);
const local_component = {
    name: "Foo",
    data: () => ({
        a: 123,
    }),
    render(h) {
        return h( "span", "Hello World!" );
    },
};

describe("The plugin", () => {
    it("Mount a empty component", () => {
        const div = document.createElement("div");
        const wrapper = shallowMount(local_component, { attachTo: div, });
        assert.strictEqual(wrapper.vm.a, 123);
        wrapper.destroy();
    })
})