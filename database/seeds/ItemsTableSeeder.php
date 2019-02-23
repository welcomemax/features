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
                'product' => 'instagram-feed'
            ]
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'title' => $data['title'],
                'text' => $data['text']
            ];

            $item = Item::updateOrCreate($item_data);

            if (!empty($data['type'])) {
                $type = Type::where('alias', $data['type'])->first();
                
                if (!empty($type)) {
                    ItemType::create([
                        'item_id' => $item->id,
                        'type_id' => $type->id
                    ]);
                }
            }

            if (!empty($data['product'])) {
                $product = Product::where('alias', $data['product'])->first();
               
                if (!empty($product)) {
                    ItemProduct::create([
                        'item_id' => $item->id,
                        'product_id' => $product->id
                    ]);
                }
            }
        }
    }
}
