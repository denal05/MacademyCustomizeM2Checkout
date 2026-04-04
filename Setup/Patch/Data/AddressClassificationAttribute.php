<?php declare(strict_types=1);

namespace Denal05\MacademyCustomizeM2Checkout\Setup\Patch\Data;

use Denal05\MacademyCustomizeM2Checkout\Model\Config\Source\AddressClassification;
use Magento\Customer\Api\AddressMetadataInterface;
use Magento\Customer\Model\ResourceModel\Attribute as CustomerResourceModelAttribute;
use Magento\Eav\Model\Config as MagentoEavModelConfig;
use Magento\Eav\Setup\EavSetup;
use Magento\Eav\Setup\EavSetupFactory;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;

class AddressClassificationAttribute implements DataPatchInterface
{
    const ATTRIBUTE_CODE = 'address_classification';
    const SORT_ORDER_POSITION = 150;

    private CustomerResourceModelAttribute $attribute;
    private MagentoEavModelConfig $config;
    private EavSetupFactory $eavSetupFactory;
    private ModuleDataSetupInterface $moduleDataSetup;

    public function __construct (
        CustomerResourceModelAttribute $attribute,
        MagentoEavModelConfig $config,
        EavSetupFactory $eavSetupFactory,
        ModuleDataSetupInterface $moduleDataSetup
    ) {
        $this->attribute = $attribute;
        $this->config = $config;
        $this->eavSetupFactory = $eavSetupFactory;
        $this->moduleDataSetup = $moduleDataSetup;
    }

    public static function getDependencies(): array
    {
        return [];
    }

    public function getAliases(): array
    {
        return [];
    }

    public function apply(): self
    {
        $eavSetup = $this->eavSetupFactory->create(['setup' => $this->moduleDataSetup]);
        $eavSetup->addAttribute(
            AddressMetadataInterface::ENTITY_TYPE_ADDRESS,
            self::ATTRIBUTE_CODE,
            [
                'type'          =>  'int',
                'label'         =>  'Address Classification',
                'input'         =>  'select',
                'source'        =>  AddressClassification::class,
                'required'      =>  true,
                'default'       =>  0,
                'system'        =>  false,
                'position'      =>  self::SORT_ORDER_POSITION,
                'sort_order'    =>  self::SORT_ORDER_POSITION,
            ]
        );
        $attribute = $this->config->getAttribute(
            AddressMetadataInterface::ENTITY_TYPE_ADDRESS,
            self::ATTRIBUTE_CODE
        );
        $attribute->setData('used_in_forms', [
            'adminhtml_customer_address',
            'customer_address_edit',
            'customer_register_address'
        ]);
        $this->attribute->save($attribute);

        return $this;
    }
}
