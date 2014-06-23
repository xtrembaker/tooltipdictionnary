require.config({
    baseUrl: 'app',
    // Initialize the application with the main application file, which is relative
    // to baseUrl
    deps : ['main'],
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: '../vendor/jquery/1.11.1/jquery.min',
        tooltip : '../vendor/jquery-ui/1.11/tooltip.min'
    }
});