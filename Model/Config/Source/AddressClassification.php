<?php declare(strict_types=1);

namespace Denal05\MacademyCustomizeM2Checkout\Model\Config\Source;

use Magento\Eav\Model\Entity\Attribute\Source\AbstractSource;
use Magento\Framework\Data\OptionSourceInterface;

class AddressClassification extends AbstractSource implements OptionSourceInterface
{
    public function getAllOptions(): array
    {
        return [
            [
                'value' => 0,
                'label' => 'Residential'
            ],
            [
                'value' => 1,
                'label' => 'Commercial'
            ]
        ];
    }
}
