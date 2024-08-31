// https://developer.adobe.com/commerce/php/tutorials/frontend/custom-checkout/add-form/
define([
    'uiComponent',
    'ko',
    'Magento_Checkout/js/model/step-navigator',
    'mage/translate',
    'underscore',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer',
    'jquery',
    'Magento_Checkout/js/model/customer-email-validator',
    'Magento_Ui/js/form/form'
], function (
    Component,
    ko,
    stepNavigator,
    $t,
    _,
    quote,
    customer,
    $,
    customerEmailValidator,
    form
) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Denal05_MacademyCustomizeM2Checkout/doctorsDetails',
            ////isVisible: ko.observable(false),
        },
        isVisible: ko.observable(true),
        quoteIsVirtual: quote.isVirtual(),
        initialize: function () {
            this._super();

            stepNavigator.registerStep(
                // step code: this will be used as step content id in the component template
                'doctorsDetails',
                // step alias
                null,
                // step title
                $t('Doctor\'s Details'),
                // observable property with logic to display or hide the step
                this.isVisible,

                _.bind(this.navigate, this),

                /**
                 * sort order value
                 * 'sort order value' < 10: step displays before shipping step;
                 * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                 * 'sort order value' > 20 : step displays after payment step
                 */
                ////this.sortOrder
                21
            );

            return this;
        },

        /**
         * The navigate() method is responsible for navigation between checkout steps
         * during checkout. You can add custom logic, for example some conditions
         * for switching to your custom step
         * When the user navigates to the custom step via url anchor or back button we_must show step manually here
         */
        navigate: function () {
            this.isVisible(true);
        },

        navigateToNextStep: function () {
            // trigger form validation
            this.source.set('params.invalid', false);
            this.source.trigger('doctorsDetailsCheckoutForm.data.validate');

            // verify that form data is valid
            if (!this.source.get('params.invalid')) {
                // data is retrieved from data provider by value of the customScope property
                var formData = this.source.get('doctorsDetailsCheckoutForm');
                // do something with form data
                stepNavigator.next();
                console.dir(formData);
            }
        }
    });
});
