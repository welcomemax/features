<?php

namespace App\Http\Controllers\Api;

use App\Type;
use Illuminate\Http\Request;

class TypeController extends ApiController
{
    public function index($id = null)
    {
        $typesQuery = Type::withCount('features')->orderBy('features_count');
        $id && $typesQuery = $typesQuery->where('id', $id);

        return [
            'status' => 1,
            'data' => $typesQuery->get()
        ];
    }
}
