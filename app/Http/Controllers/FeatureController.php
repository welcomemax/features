<?php

namespace App\Http\Controllers;

use App\Feature;
use Illuminate\Http\Request;

// @TODO FeatureController extends ApiController extends Controller
class FeatureController extends Controller
{
    public function index($id = null)
    {
        $itemsQuery = $id ? Feature::where('id', $id) : Feature::orderBy('id', 'asc');
        $items = $itemsQuery->with(['type', 'product'])->get();

        return [
            'status' => 1,
            'data' => $items
        ];
    }

    public function save(Request $request, $id = null)
    {
        $data = $request->input();
        $data->id = $id;

        Feature::updateOrCreate($data);

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
