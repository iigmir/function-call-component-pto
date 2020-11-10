export default (options) => ({
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
        this.way_to_destroy();
    },
    methods: {
        once()
        {
            const destroy = () =>
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
            this.$parent.$once("hook:destroyed", destroy);
            this.$once("hidden", destroy);
            this.show();
        },
        way_to_destroy()
        {
            window.setTimeout(
                () => { this.$destroy(); },
                options.time || 3000
            );
        },
    },
    destroyed()
    {
        if (this.$el && this.$el.parentNode)
        {
          this.$el.parentNode.removeChild(this.$el);
        }
    },
});
