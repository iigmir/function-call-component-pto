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
                render(h)
                {
                    const dom = options.dom || "div";
                    return h( dom, {
                        id: options.id || "",
                        class: options.class ? options.class.split(" ") : "",
                    }, options.text || "" );
                },
                mounted()
                {
                },
                methods: {
                    once()
                    {
                        const handleDestroy = () =>
                        {
                            this.$nextTick(() =>
                            {
                                const request_af =
                                    window.requestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    (cb => setTimeout(cb, 16));
                                request_af(() => {
                                    this.$destroy()
                                })
                            })
                        };
                        this.$parent.$once("hook:destroyed", handleDestroy);
                        this.$once("hidden", handleDestroy);
                        this.show();
                    }
                },
                destroyed()
                {
                    if (this.$el && this.$el.parentNode)
                    {
                      this.$el.parentNode.removeChild(this.$el);
                    }
                },
            });
            const div = document.createElement("div");
            document.body.appendChild(div);
            new Profile().$mount(div);
            return true;
        }
    }
};