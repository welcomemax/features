<?php

namespace App\Http\Controllers;

use App\Release;
use Illuminate\Http\Request;

// @TODO ReleaseController extends ApiController extends Controller
class ReleaseController extends Controller
{
    public function index($id = null)
    {
        $itemsQuery = $id ? Release::where('id', $id) : Release::orderBy('id', 'asc');
        $items = $itemsQuery->with(['features', 'product'])->get();

        return [
            'status' => 1,
            'data' => $items
        ];
    }

    public function save(Request $request, $id = null)
    {
        $data = $request->input();
        $data->id = $id;

        Release::updateOrCreate($data);

        return [
            'status' => 1,
            'message' => "Success updating item #" . $id
        ];
    }

    public function destroy($id)
    {
        if ($id) {
            Item::find($id)->delete();

            return [
                'status' => 1,
                'message' => "Item record successfully deleted #" . $id
            ];
        }
    }
}
