<script>
export default {
    props: {
        options: {
            type: Object,
            required: true
        },
    },
    render(h)
    {
        const dom = this.options.dom || "div";
        return h( dom, {
            id: this.options.id || "",
            class: this.options.class ? this.options.class.split(" ") : "",
        }, this.options.text || "" );
    },
    mounted()
    {
        this.way_to_destroy();
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
        },
        way_to_destroy()
        {
            window.setTimeout(
                () => { this.$destroy(); },
                this.options.time || 3000
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
};
</script>