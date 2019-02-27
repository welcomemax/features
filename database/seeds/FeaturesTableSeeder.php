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
                'title' => 'Premoderation',
                'data' => 'Approve post on back-end of widget and only then its appeared on front-end',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Load More text',
                'data' => 'Add a setting to change Load More text on the button',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Masonry',
                'data' => 'Implement Masonry layout',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Most popular at first',
                'data' => 'Add the option of displaying the most popular posts first',
                'type' => 'feature',
                'product' => 'instagram-feed'
            ], 
            [
                'title' => 'Video in popup',
                'data' => 'Video in popup starts over on scroll',
                'type' => 'issue',
                'product' => 'instagram-feed'
            ],
            [
                'title' => 'FireFox Tracking Protection',
                'data' => 'FireFox Tracking Protection blocking FB SDK javascript, cause thinks that is it track the user',
                'type' => 'issue',
                'product' => 'facebook-feed'
            ],
            [
                'title' => 'Reviews tab',
                'data' => 'Add a reviews tab with facebook page reviews',
                'type' => 'feature',
                'product' => 'facebook-feed'
            ],
            [
                'title' => 'Video autoplay',
                'data' => 'In YouTube, if you add ?autoplay=1 following the video URL, the video will autoplay',
                'type' => 'feature',
                'product' => 'youtube-gallery'
            ],
            [
                'title' => 'Import locations',
                'data' => 'Import location by uploading a CSV',
                'type' => 'feature',
                'product' => 'google-maps'
            ],
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'title' => $data['title'],
                'data' => $data['data'],
                'private' => isset($data['private']) ? $data['private'] : false
            ];

            $type = Type::where('alias', $data['type'])->first();
            !empty($type) && $item_data['type_id'] = $type->id;
            
            $product = Product::where('alias', $data['product'])->first();
            !empty($product) && $item_data['product_id'] = $product->id;
    
            $item = Feature::updateOrCreate($item_data);
        }
    }
}
