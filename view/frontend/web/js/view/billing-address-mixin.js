define([], function() {
    'use strict';

    return function(subject) {
        return subject.extend({
            defaults: {
                detailsTemplate: 'Denal05_MacademyCustomizeM2Checkout/billing-address/details'
            }
        });
    };
});
