import the_plugin from "./the-plugin/index";

export default
{
    install(Vue)
    {
        Vue.prototype.$addFuncComp = function(options = {
            dom: "div",
            id: "the-component",
            text: "This is a component.",
            class: "i-am-the-component which-is-good",
            time: 5000
        })
        {
            const Profile = Vue.extend( the_plugin(options) );
            const div = document.createElement("div");
            document.body.appendChild(div);
            new Profile().$mount(div);
            return true;
        }
    }
};