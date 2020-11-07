export default
{
    // options
    install(Vue)
    {
        Vue.prototype.$functionalComponent = function(options)
        {
            return options;
        }
    }
};