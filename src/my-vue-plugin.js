// This is your plugin object. It can be exported to be used anywhere.
const MyPlugin =
{
    // options
    install(Vue)
    {
        Vue.mixin({
            mounted()
            {
                console.log("Mounted");
            }
        });
    }
};

export default MyPlugin;