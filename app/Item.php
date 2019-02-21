<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'items';

    protected $fillable = [
        'title',
        'text'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    public function type() {
        return $this->belongsTo('App\Type');
    }

    public function products() {
        return $this->belongsTo('App\Product');
    }
}
