let config = {
    deps: [
        'Denal05_MacademyCustomizeM2Checkout/js/mask-telephone-inputs'
    ],
    /*
       For extensibility, we always prefer the checkout_index_index.xml way instead of the requirejs-config.js way.
       When overriding JavaScript files with the map, we usually don’t define an extension, as it will assume .js
       by default. However, in this case, we are not overriding a JavaScript file but a Knockout HTML file. So, we will
       supply the full file name, such as sidebar.html.
    */
    //, map: {
    //     '*': {
    //         'Magento_Checkout/template/sidebar.html':
    //             'Denal05_MacademyCustomizeM2Checkout/template/sidebar.html'
    //     }
    // }
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                'Denal05_MacademyCustomizeM2Checkout/js/action/set-shipping-information-mixin': true
            }
        }
    }
};
