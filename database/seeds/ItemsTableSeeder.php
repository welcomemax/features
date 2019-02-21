<?php

use App\Item;
use App\ItemTag;
use App\ItemProduct;
use App\ItemType;
use App\ItemParam;
use App\Tag;
use App\Product;
use App\Type;
use App\Param;
use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items_data = [
            [
                'title' => 'Title',
                'text' => 'Feature test',
                'type' => 'feature',
                'products' => 'instagram-feed'
            ]
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'title' => $data['title'],
                'caption' => $data['caption'],
                'data' => $data['data']
            ];

            $type = Type::where('alias', $data['type'])->first();
            !empty($type) && $item_data['type_id'] = $type->id;

            $item = Item::updateOrCreate($item_data);

            if (!empty($type)) {
                ItemType::updateOrCreate([
                    'item_id' => $item->id,
                    'type_id' => $type->id
                ]);
            }

            if (!empty($data['product'])) {
                $product = Product::where('alias', $data['product'])->first();

                if (!empty($product)) {
                    ItemProduct::updateOrCreate([
                        'item_id' => $item->id,
                        'product_id' => $product->id
                    ]);
                }
            }

            preg_match_all('#\[\[(.*?)\]\]#m', $data['data'], $matches);

            if (!empty($matches) && $matches[1]) {
                foreach ($matches[1] as $match) {
                    $param = Param::where('alias', $match)->first();

                    if (!empty($param)) {
                        ItemParam::updateOrCreate([
                            'item_id' => $item->id,
                            'param_id' => $param->id
                        ]);
                    }
                }
            }
        }
    }
}
