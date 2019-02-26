<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Release extends Model
{
    protected $table = 'releases';

    protected $fillable = [
        'version',
        'product_id'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
    ];

    public function product() {
        return $this->belongsTo('App\Product');
    }

    public function features() {
        return $this->hasMany('App\Feature');
    }
}
