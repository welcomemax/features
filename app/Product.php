<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'alias',
        'name',
        'caption',
        'public_id'
    ];
    
    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
    ];

    public function features() {
        return $this->hasMany('App\Feature');
    }

    public function releases() {
        return $this->hasMany('App\Release');
    }
    
    public function customs() {
        return $this->hasMany('App\Custom');
    }
}
