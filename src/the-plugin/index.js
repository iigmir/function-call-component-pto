import ThePlugin from "./the.vue";

export default (options) => ({
    render(h)
    {
        return h( ThePlugin, { props:{ options } });
    },
    components: { ThePlugin },
    mounted()
    {
        this.way_to_destroy();
    },
    methods: {
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
