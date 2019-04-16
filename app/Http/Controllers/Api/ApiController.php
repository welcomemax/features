<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

abstract class ApiController extends Controller
{
    public function __construct() {

    }

    public function get($model, $id = null) {
        $itemsQuery = $model
            ::with($model::$requireRelations)
            ->withCount($model::$requireCountRelations)
            ->orderBy(...$model::$defaultOrder);
        $id && $itemsQuery = $itemsQuery->where('id', $id);

        $items = $itemsQuery->get();

        if ($model::$hasTags) {
            foreach ($items as $item) {
                $item->tags = $item->getTags($item);
            }    
        }

        return [
            'status' => 1,
            'data' => $items
        ];
    }
}
