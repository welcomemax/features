<?php

namespace App\Http\Controllers\Api;

use App\Feature;
use Illuminate\Http\Request;

class FeatureController extends ApiController
{
    public function index($id = null)
    {
        return $this->get('App\Feature', $id);
    }

    public function save(Request $request, $id)
    {
        $data = $request->input();

        $product_data = json_decode($data['product'], true);
        $type_data = json_decode($data['type'], true);

        $feature_data = [
            'id' => $data['id'],
            'title' => $data['title'],
            'data' => $data['data'],
            'product_id' => $product_data['id'],
            'type_id' => $type_data['id'],
            'private' => $data['private']
        ];

        Feature::updateOrCreate(['id' => $id], $feature_data);

        return [
            'status' => 1,
            'message' => "Success updating item #" . $id
        ];
    }

    public function destroy($id)
    {
        if ($id) {
            Feature::find($id)->delete();

            return [
                'status' => 1,
                'message' => "Item record successfully deleted #" . $id
            ];
        }
    }
}
