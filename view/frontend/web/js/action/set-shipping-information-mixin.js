define([
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote'
], function(
    wrapper,
    quote
) {
    'use strict';

    return function(setShippingInformationAction) {
        return wrapper.wrap(setShippingInformationAction, function(originalAction) {
            let shippingAddress = quote.shippingAddress();
            const attributeCode = 'address_classification';

            shippingAddress.customAttributes = shippingAddress.customAttributes || {};
            shippingAddress.extension_attributes = shippingAddress.extension_attributes || {};

            const attribute = shippingAddress.customAttributes.find(el =>
                el.attribute_code === attributeCode
            );

            if (attribute) {
                /*
                    The following line, which attempts to add a key:value pair of
                        address_classification: 0
                    to the extension_attributes object within shippingAddress
                    results in an HTTP 400 Bad Request error,
                    and gives the following error message on the frontend at
                    /checkout/#shipping upon clicking the 'Next' button:
                        'AddressClassification' is not supported. Correct the field name and try again.
                    Therefore, the key:value pair of
                        address_classification: 0
                    has been added to the window.checkoutConfig object instead.
                 */
                // shippingAddress.extension_attributes[attributeCode] = attribute.value;
                window.checkoutConfig[attributeCode] = attribute.value;
            }

            return originalAction();
        });
    };
});
