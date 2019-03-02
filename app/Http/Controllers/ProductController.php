<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

// @TODO ProductController extends ApiController extends Controller
class ProductController extends Controller
{
    public function index($id = null)
    {
        $productsQuery = Product::withCount(['features', 'releases'])->orderBy('features_count');
        $id && $productsQuery = $productsQuery->where('id', $id);

        return [
            'status' => 1,
            'data' => $productsQuery->get()
        ];
    }
}
