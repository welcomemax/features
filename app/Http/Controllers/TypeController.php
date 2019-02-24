<?php

namespace App\Http\Controllers;

use App\Type;
use Illuminate\Http\Request;

// @TODO TypeController extends ApiController extends Controller
class TypeController extends Controller
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

    public function used()
    {
        $typesQuery = Type::withCount('features')->havingRaw('features_count')->orderBy('features_count');

        return [
            'status' => 1,
            'data' => $typesQuery->get()
        ];
    }
}
