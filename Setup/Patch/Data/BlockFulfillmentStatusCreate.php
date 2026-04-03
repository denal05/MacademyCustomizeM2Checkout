<?php declare(strict_types=1);

namespace Denal05\MacademyCustomizeM2Checkout\Setup\Patch\Data;

use MarkShust\SimpleData\Setup\Patch\SimpleDataPatch;

class BlockFulfillmentStatusCreate extends SimpleDataPatch
{
    public function apply(): self
    {
        $this->block->save([
            'identifier' => 'fulfillment_status',
            'title' => 'Fulfillment Status',
            'content' => <<<CONTENT
<div class="foo-bar">
    <b>Fulfillment Status:</b> Orders are shipped-out within forty-eight hours.
</div>
CONTENT,
        ]);

        return $this;
    }
}
