var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Denal05_MacademyCustomizeM2Checkout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Denal05_MacademyCustomizeM2Checkout/js/view/shipping-payment-mixin': true
            },
            'Denal05_MacademyCustomizeM2Checkout/js/view/doctorsDetails': {
                'Denal05_MacademyCustomizeM2Checkout/js/view/shipping-payment-mixin': true
            }
        }
    }
}
