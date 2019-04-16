<?php

namespace App\Http\Controllers\Api;

use App\Custom;
use Illuminate\Http\Request;

class CustomController extends ApiController
{
    public function index($id = null)
    {
        return $this->get('App\Custom', $id);
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
