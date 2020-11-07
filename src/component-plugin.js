export default
{
    // options
    install(Vue)
    {
        Vue.prototype.$functionalComponent = function(options)
        {
            return options;
        }
        Vue.prototype.$createFuncComp = function(options = {
            dom: "div",
            id: "the-component",
            text: "This is a component.",
            class: "i-am-the-component which-is-good",
        })
        {
            const dom = options.dom || "div";
            const id = options.id || "";
            const component_class = options.class || "";
            const com = document.createElement(dom);
            com.id = id;
            com.classList = component_class.split(" ");
            com.appendChild( document.createTextNode( options.text || "" ) );
        }
    }
};