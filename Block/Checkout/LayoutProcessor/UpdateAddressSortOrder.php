<?php declare(strict_types=1);

namespace Denal05\MacademyCustomizeM2Checkout\Block\Checkout\LayoutProcessor;

use Magento\Checkout\Block\Checkout\LayoutProcessorInterface;

class UpdateAddressSortOrder implements LayoutProcessorInterface
{
    public function process($jsLayout): array
    {
        foreach ($jsLayout['components']['checkout']['children']
                 ['steps']['children']
                 ['billing-step']['children']
                 ['payment']['children']
                 ['payments-list']['children'] as &$paymentMethod) {
            $formFields = &$paymentMethod['children']['form-fields']['children'];
            if ($formFields === null) {
                continue;
            }
            $formFields['postcode']['sortOrder'] = '72';
            $formFields['city']['sortOrder'] = '74';
            $formFields['region_id']['sortOrder'] = '76';
        }

        return $jsLayout;
    }
}
