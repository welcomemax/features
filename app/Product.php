<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'alias',
        'name',
        'public_id'
    ];

    protected $hidden = [
        'id'
    ];

    public $timestamps = false;

    public function features() {
        return $this->hasMany('App\Feature');
    }
}
