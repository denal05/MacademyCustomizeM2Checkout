define([
    'domReady',
    'Magento_Ui/js/lib/view/utils/dom-observer',
    'jQuery',
    'Denal05_MacademyCustomizeM2Checkout/js/jquery.inputmask.min'
], function(
    domReady,
    domObserver,
    $
) {
    'use strict';

    domReady( function() {
        domObserver.get('input[name="telephone"]', function (el) {
            $(el).inputmask("(999) 999-9999");
        });
    });
});
