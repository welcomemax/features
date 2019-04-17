<?php

namespace App\Http\Controllers\Api;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
    public function index($id = null)
    {
        $productsQuery = Product::withCount(['features', 'releases', 'customs'])->orderBy('name', 'asc');
        $id && $productsQuery = $productsQuery->where('id', $id);

        return [
            'status' => 1,
            'data' => $productsQuery->get()
        ];
    }
}
