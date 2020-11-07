<script>
export default {
    name: "ThePlugin",
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
            attrs: {
                id: this.options.id || "the-component",
            },
            class: this.options.class ? this.options.class.split(" ") : "",
        }, this.options.text || "" );
    },
};
</script>

<style scoped>
#the-component
{
    color: red;
}
</style>