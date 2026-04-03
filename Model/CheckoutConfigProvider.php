<?php
declare(strict_types=1);

namespace Denal05\MacademyCustomizeM2Checkout\Model;

use Magento\Checkout\Model\ConfigProviderInterface;

class CheckoutConfigProvider implements ConfigProviderInterface
{

    public function getConfig(): array
    {
        return [
            'denal05key' => 'denal05value'
        ];
    }
}
