export default
{
    // options
    install(Vue)
    {
        Vue.prototype.$addFuncComp = function(options = {
            dom: "div",
            id: "the-component",
            text: "This is a component.",
            class: "i-am-the-component which-is-good",
        })
        {
            const Profile = Vue.extend({
                render(h) {
                    const dom = options.dom || "div";
                    return h( dom, {
                        id: options.id || "",
                        class: options.class.split(" ") || "",
                    }, options.text || "" );
                },
            });
            return Profile;
        }
    }
};