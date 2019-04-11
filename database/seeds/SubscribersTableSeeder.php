<?php

use App\Feature;
use App\FeatureSubscriber;
use Illuminate\Database\Seeder;

class SubscribersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $features = Feature::inRandomOrder()->get();

        foreach ($features as $feature) {
            factory(App\Subscriber::class, rand(0, 7))->create()->each(function ($subscriber) use ($feature) { 
                FeatureSubscriber::create([
                    'subscriber_id' => $subscriber->id,
                    'feature_id' => $feature->id
                ]);
            });
        }
    }
}
