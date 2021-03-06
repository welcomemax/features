<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TypesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(FeaturesTableSeeder::class);
        $this->call(ReleasesTableSeeder::class);
        $this->call(CustomsTableSeeder::class);
        $this->call(SubscribersTableSeeder::class);
    }
}
