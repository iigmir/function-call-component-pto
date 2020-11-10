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
    padding: 1rem;
    margin: 0.5rem;
    position: absolute;
    top: 0;
    background-color: rgba(255, 123, 0, 0.5);
}
</style>