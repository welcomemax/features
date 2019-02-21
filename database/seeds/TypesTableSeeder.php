<?php

use App\Type;
use Illuminate\Database\Seeder;

class TypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types_data = [
            [
                'alias' => 'feature',
                'name' => 'Feature'
            ],
            [
                'alias' => 'issue',
                'name' => 'Issue'
            ],
            [
                'alias' => 'change',
                'name' => 'Change'
            ]
        ];

        foreach ($types_data as $index => $type) {
            Type::updateOrCreate($type);
        }
    }
}
