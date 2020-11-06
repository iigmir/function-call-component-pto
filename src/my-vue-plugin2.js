export default {
    // options
    install(Vue) {
        Vue.prototype.$myAddedProperty = "Example Property";
        Vue.prototype.$myAddedMethod = function(options)
        {
            Vue.prototype.$myAddedOptions = options;
            return this.$myAddedProperty
        }

    }
};