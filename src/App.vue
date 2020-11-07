<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <button v-on:click="foo">Foo</button>
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
        
    },
    methods: {
        foo() {
            this.$addFuncComp({
                dom: "div",
                id: "the-component",
                text: "This is a component.",
                class: "i-am-the-component which-is-good",
            });
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
