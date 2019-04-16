<?php

use App\Custom;
use App\Product;
use App\Type;
use Illuminate\Database\Seeder;

class CustomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items_data = [
            // [
            //     'title' => 'Widget Font',
            //     'caption' => 'Customize widget font family',
            //     'data' => '.eapps-[[app]]{'.PHP_EOL.'    font-family: [[font-family]];'.PHP_EOL.'}',
            //     'type' => 'css',
            //     'tags' => ['custom', 'hot'],
            //     'products' => 'any'
            // ],
            // [
            //     'title' => 'Widget Title color',
            //     'caption' => 'Customize widget title color',
            //     'data' => '.eapps-[[app]] .eui-widget-title{'.PHP_EOL.'    color: [[color]];'.PHP_EOL.'}',
            //     'type' => 'css',
            //     'tags' => ['custom', 'hot'],
            //     'products' => ['testimonials-slider', 'faq', 'twitter-feed']
            // ],
            // [
            //     'title' => 'Widget Title font family',
            //     'caption' => 'Customize widget title font family',
            //     'data' => '.eapps-[[app]] .eui-widget-title{'.PHP_EOL.'    font-family: [[font-family]];'.PHP_EOL.'}',
            //     'type' => 'css',
            //     'tags' => ['custom', 'hot'],
            //     'products' => ['testimonials-slider', 'faq', 'twitter-feed']
            // ],
            // [
            //     'title' => 'Widget edges',
            //     'caption' => 'Make the edges of your widget sharp',
            //     'data' => '.eapps-[[app]]-inner{'.PHP_EOL.'    border-radius: 0px !important;'.PHP_EOL.'}',
            //     'type' => 'css',
            //     'tags' => ['custom'],
            //     'products' => ['facebook-feed', 'twitter-feed']
            // ],
            [
                'title' => 'Instagram Feed Widget Title',
                'caption' => 'Customize Instagram Feed widget title color',
                'data' => '.eapps-[[app]] .eapps-[[app]]-title{'.PHP_EOL.'    color: [[color]];'.PHP_EOL.'}',
                'type' => 'css',
                'product' => 'instagram-feed',
                'tags' => ['custom', 'hot'],
                'products' => ['instagram-feed']
            ],
            [
                'title' => 'Instagram Feed Widget Title',
                'caption' => 'Customize Instagram Feed widget title font family',
                'data' => '.eapps-[[app]] .eapps-[[app]]-title{'.PHP_EOL.'    font-family: [[font-family]];'.PHP_EOL.'}',
                'type' => 'css',
                'product' => 'instagram-feed',
                'tags' => ['custom', 'hot'],
                'products' => ['instagram-feed']
            ],
            [
                'title' => 'Youtube Gallery menu navigation padding fix',
                'caption' => '',
                'data' => 'li.yottie-widget-nav-list-item a{'.PHP_EOL.'    padding: 18px 16px 26px !important;'.PHP_EOL.'}',
                'type' => 'css',
                'product' => 'youtube-gallery',
                'tags' => ['fix'],
                'products' => ['youtube-gallery']
            ],
            [
                'title' => 'Instagram Widget profile picture fix',
                'caption' => '',
                'data' => '.instalink-header-pic{'.PHP_EOL.'    width: 34px !important;'.PHP_EOL.'}',
                'type' => 'css',
                'product' => 'instagram-widget',
                'tags' => ['fix'],
                'products' => ['instagram-widget']
            ],
            [
                'title' => 'Instagram Feed disable hover effects',
                'caption' => '',
                'data' => '.eapps-instagram-feed-posts-item:hover.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-overlay{'.PHP_EOL.'    visibility: hidden !important;'.PHP_EOL.'}'.PHP_EOL.'.eapps-instagram-feed-posts-item:hover.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-image {'.PHP_EOL.'    transform: scale(1) translate(-50%, -50%) !important;'.PHP_EOL.'    transform-origin: 0 0 !important;'.PHP_EOL.'    filter: grayscale(0) !important;'.PHP_EOL.'}',
                'type' => 'css',
                'product' => 'instagram-feed',
                'tags' => ['custom'],
                'products' => ['instagram-feed']
            ]
        ];

        foreach ($items_data as $data) {
            $item_data = [
                'title' => $data['title'],
                'data' => $data['data']
            ];

            // $type = Type::where('alias', $data['type'])->first();
            // !empty($type) && $item_data['type_id'] = $type->id;

            $product = Product::where('alias', $data['product'])->first();
            !empty($product) && $item_data['product_id'] = $product->id;
    
            $item = Custom::updateOrCreate($item_data);

            // if (!empty($data['tags'])) {
            //     foreach ($data['tags'] as $tag_alias) {
            //         $tag = Tag::where('alias', $tag_alias)->first();

            //         if (!empty($tag)) {
            //             CustomTag::updateOrCreate([
            //                 'item_id' => $item->id,
            //                 'tag_id' => $tag->id
            //             ]);
            //         }
            //     }
            // }

            // if (!empty($data['products'])) {
            //     if ($data['products'] === 'any') {
            //         $products = Product::get();

            //         foreach ($products as $product) {
            //             CustomProduct::updateOrCreate([
            //                 'item_id' => $item->id,
            //                 'product_id' => $product->id
            //             ]);
            //         }
            //     } else {
            //         foreach ($data['products'] as $product_alias) {
            //             $product = Product::where('alias', $product_alias)->first();

            //             if (!empty($product)) {
            //                 CustomProduct::updateOrCreate([
            //                     'item_id' => $item->id,
            //                     'product_id' => $product->id
            //                 ]);
            //             }
            //         }
            //     }
            // }

            // preg_match_all('#\[\[(.*?)\]\]#m', $data['data'], $matches);

            // if (!empty($matches) && $matches[1]) {
            //     foreach ($matches[1] as $match) {
            //         $param = Param::where('alias', $match)->first();

            //         if (!empty($param)) {
            //             CustomParam::updateOrCreate([
            //                 'item_id' => $item->id,
            //                 'param_id' => $param->id
            //             ]);
            //         }
            //     }
            // }
        }
    }
}
