<?php

use App\Product;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products_data = [
            'instagram-feed' => [
                'name' => 'Instagram Feed',
                'caption' => 'Add Instagram images to your website to engage your visitors',
                'public_id' => 'a8d5792d-915e-4549-9b08-8ffcbc590b0c',
                'created_at' => Carbon::createMidnightDate(2017,1,1)
            ],
            'instagram-widget' => [
                'name' => 'Instagram Widget',
                'caption' => 'Embed Instagram profile to your website',
                'public_id' => '95358386-3e5d-4376-adb6-4956194a82c3',
                'created_at' => Carbon::createMidnightDate(2016,9,1)
            ],
            'instagram-testimonials' => [
                'name' => 'Instagram Testimonials',
                'caption' => 'Let real Instagram testimonials increase trust in your brand',
                'public_id' => '9499c4dd-b050-4078-8163-8d92275bda7b',
                'created_at' => Carbon::createMidnightDate(2018,4,1)
            ],
            'youtube-gallery' => [
                'name' => 'YouTube Gallery',
                'caption' => 'Display YouTube channels and videos on your website',
                'public_id' => '3cd3f119-4d97-41d0-ba10-59d5f4e8a7d3',
                'created_at' => Carbon::createMidnightDate(2017,1,1)
            ],
            'form-builder' => [
                'name' => 'Form Builder',
                'caption' => 'Receive more insights from your clients through various fill-in forms',
                'public_id' => 'fdebbd9c-9771-4dfc-a2ce-f0e78cdcf8ae',
                'created_at' => Carbon::createMidnightDate(2018,8,1)
            ],
            'contact-form' => [
                'name' => 'Contact Form',
                'caption' => 'Get more leads and feedback with easy-to-fill contact form',
                'public_id' => '93108abb-a44c-45a6-9f1d-f6f627478112',
                'created_at' => Carbon::createMidnightDate(2018,4,1)
            ],
            'pricing-table' => [
                'name' => 'Pricing Table',
                'caption' => 'Help customers make a purchase with a clear and graphic pricing',
                'public_id' => '1f971228-aa13-4dee-9018-08d7a8d75f6c',
                'created_at' => Carbon::createMidnightDate(2017,9,1)
            ],
            'social-share-buttons' => [
                'name' => 'Social Share Buttons',
                'caption' => 'Embed social share buttons to your website',
                'public_id' => '516db1ef-369a-4073-bf3f-2aa58d93e775',
                'created_at' => Carbon::createMidnightDate(2017,6,1)
            ],
            'social-icons' => [
                'name' => 'Social Media Icons',
                'caption' => 'Add social icons to your website',
                'public_id' => '842986db-2adb-4c93-a453-8f6436f6ab8d',
                'created_at' => Carbon::createMidnightDate(2017,5,1)
            ],
            'google-maps' => [
                'name' => 'Google Maps',
                'caption' => 'An intuitive tool for creating Google Maps on your website',
                'public_id' => '19454de8-614e-11e7-907b-a6006ad3dba0',
                'created_at' => Carbon::createMidnightDate(2017,7,6)
            ],
            'facebook-feed' => [
                'name' => 'Facebook Feed',
                'caption' => 'Make your Facebook content work on your website',
                'public_id' => '57f695e3-6132-4fa7-b876-70fa1ac8b1a2',
                'created_at' => Carbon::createMidnightDate(2018,8,18)
            ],
            'facebook-comments' => [
                'name' => 'Facebook Comments',
                'caption' => 'Let people comment on your website and share it',
                'public_id' => 'e1f7f1e2-286d-4bb8-affe-96818a09e3bc',
                'created_at' => Carbon::createMidnightDate(2018,9,1)
            ],
            'facebook-like-button' => [
                'name' => 'Facebook Like Button',
                'caption' => 'Let people like your website pages',
                'public_id' => '4a5bde95-f8e4-4c10-bff8-f60a6f3cae96',
                'created_at' => Carbon::createMidnightDate(2018,9,1)
            ],
            'facebook-share-button' => [
                'name' => 'Facebook Share Button',
                'caption' => 'Let people share your website pages',
                'public_id' => 'b6263b85-cc89-4163-bcf4-ef24cd620add',
                'created_at' => Carbon::createMidnightDate(2018,9,1)
            ],
            'faq' => [
                'name' => 'FAQ',
                'caption' => 'Anticipate your clients questions and eliminate their doubts',
                'public_id' => '0e12a13e-5195-4cd3-8743-8483d58b5bd4',
                'created_at' => Carbon::createMidnightDate(2018,5,14)
            ],
            'testimonials-slider' => [
                'name' => 'Testimonials Slider',
                'caption' => 'Boost brand trust with bright testimonials on your website',
                'public_id' => '9bb8a85e-7339-490c-8781-2f5e560b1de1',
                'created_at' => Carbon::createMidnightDate(2018,7,14)
            ],
            'twitter-feed' => [
                'name' => 'Twitter Feed',
                'caption' => 'Embed your Twitter feed or customer testimonials from Twitter',
                'public_id' => '7cfc7a96-649d-46c3-89fd-6ce38e95e7cc',
                'created_at' => Carbon::createMidnightDate(2018,10,14)
            ],
            'paypal-button' => [
                'name' => 'Paypal Button',
                'caption' => 'Add one of the most approved payment tools to your website',
                'public_id' => '94e54cec-5351-470a-a9d8-d5f0b260e8ff',
                'created_at' => Carbon::createMidnightDate(2018,12,20)
            ],
            'countdown-timer' => [
                'name' => 'Countdown Timer',
                'caption' => 'Increase sales with excitement-raising timers on your website',
                'public_id' => 'c9fc8298-47ea-45cb-9508-7e81c3b6fbf3',
                'created_at' => Carbon::createMidnightDate(2018,12,14)
            ],
            'pinterest-feed' => [
                'name' => 'Pinterest Feed',
                'caption' => 'Integrate Pinterest account, boards or pins on your site',
                'public_id' => '22d48137-44c1-4213-bc0e-c30d03aff6e4',
                'created_at' => Carbon::createMidnightDate(2019,1,14)
            ],
            'facebook-reviews' => [
                'name' => 'Facebook Reviews',
                'caption' => 'Display your Facebook reviews on the website and increase social trust',
                'public_id' => 'f0d3d14c-15ae-47c9-af67-de2e18a7175d',
                'created_at' => Carbon::createMidnightDate(2019,2,14)
            ],
            'facebook-chat' => [
                'name' => 'Facebook Chat',
                'caption' => 'Easy access to Facebook chat for more customer communication',
                'public_id' => '4575eee7-63d5-4f31-87e9-be6565119b5e',
                'created_at' => Carbon::createMidnightDate(2019,2,26)
            ],
            'whatsapp-chat' => [
                'name' => 'Whatsapp Chat',
                'caption' => 'Seamless chatting in a popular messenger on your website',
                'public_id' => '03c1f08e-0de3-4b3d-9af6-b9913905d785',
                'created_at' => Carbon::createMidnightDate(2019,2,27)
            ]
        ];

        foreach ($products_data as $alias => $product_data) {
            Product::updateOrCreate(
				[ 'alias' => $alias ],
				$product_data
			);
        }
    }
}
