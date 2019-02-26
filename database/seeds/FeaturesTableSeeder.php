<?php

use App\Feature;
use App\Product;
use App\Type;
use Illuminate\Database\Seeder;

class FeaturesTableSeeder extends Seeder
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
                'title' => 'Feature 1',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 2',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 3',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 4',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 5',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 6',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Feature 7',
                'text' => 'Feature description',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Issue 1',
                'text' => 'Feature description',
                'type' => 'issue',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Issue 2',
                'text' => 'Feature description',
                'type' => 'issue',
                'product' => 'instagram-feed'
            ]
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'title' => $data['title'],
                'text' => $data['text']
            ];

            if (!empty($data['type'])) {
                $type = Type::where('alias', $data['type'])->first();
                !empty($type) && $item_data['type_id'] = $type->id;
            }

            if (!empty($data['product'])) {
                $product = Product::where('alias', $data['product'])->first();
                !empty($product) && $item_data['product_id'] = $product->id;
            }

            $item = Feature::updateOrCreate($item_data);
        }
    }
}
