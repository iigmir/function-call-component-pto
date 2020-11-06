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
            const the_value = this.$myAddedMethod({ foo: "bar" });
            console.log( the_value );
            console.log( this.$myAddedOptions );
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
