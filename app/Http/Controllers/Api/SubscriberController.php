<?php

namespace App\Http\Controllers\Api;

use App\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends ApiController
{
    public function index($id = null)
    {
        $itemsQuery = $id ? Subscriber::where('id', $id) : Subscriber::orderBy('id', 'asc');
        $items = $itemsQuery->get();

        return [
            'status' => 1,
            'data' => $items
        ];
    }

    public function subscribe($data)
    {

    }

    public function unsubscribe($data)
    {

    }
}
