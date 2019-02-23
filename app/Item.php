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
        return $this->belongsToMany('App\Type');
    }

    public function product() {
        return $this->belongsToMany('App\Product');
    }
}
