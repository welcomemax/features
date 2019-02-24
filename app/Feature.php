<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table = 'features';

    protected $fillable = [
        'title',
        'text',
        'product_id',
        'type_id',
        'release_id'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    public function type() {
        return $this->belongsTo('App\Type');
    }

    public function product() {
        return $this->belongsTo('App\Product');
    }

    public function release() {
        return $this->belongsTo('App\Release');
    }
}
