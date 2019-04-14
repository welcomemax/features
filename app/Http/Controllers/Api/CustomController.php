<?php

namespace App\Http\Controllers\Api;

use App\Custom;
use Illuminate\Http\Request;

class CustomController extends ApiController
{
    public function index($id = null)
    {
        $itemsQuery = $id ? Custom::where('id', $id) : Custom::orderBy('id', 'asc');
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

        Custom::updateOrCreate($data);

        return [
            'status' => 1,
            'message' => "Success updating item #" . $id
        ];
    }

    public function destroy($id)
    {
        if ($id) {
            Custom::find($id)->delete();

            return [
                'status' => 1,
                'message' => "Item record successfully deleted #" . $id
            ];
        }
    }
}
