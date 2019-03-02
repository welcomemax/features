<?php

use App\Release;
use App\Feature;
use App\Product;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ReleasesTableSeeder extends Seeder
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
                'product' => 'instagram-feed',
                'version' => '3.7.0',
                'created_at' => Carbon::createMidnightDate(null, 2, 25),
                'features' => [1]
            ]
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'version' => $data['version'],
                'created_at' => $data['created_at'],
                'updated_at' => $data['created_at']
            ];

            if (!empty($data['product'])) {
                $product = Product::where('alias', $data['product'])->first();
                !empty($product) && $item_data['product_id'] = $product->id;
            }

            $item = Release::updateOrCreate($item_data);

            if (!empty($data['features'])) {
                foreach ($data['features'] as $feature_id) {
                    $feature = Feature::where('id', $feature_id)->first();

                    if (!empty($feature)) {
                        $feature->release_id = $item->id;
                        $feature->save();
                    }
                }
            }
        }
    }
}
