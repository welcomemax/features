<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Custom extends Model
{
    protected $table = 'customs';

    protected $fillable = [
        'title',
        'data',
        'product_id',
        'type_id'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
    ];

    public function type() {
        return $this->belongsTo('App\Type');
    }

    public function product() {
        return $this->belongsTo('App\Product');
    }

    public static $requireRelations = ['product'];
    public static $requireCountRelations = [];

    public static $defaultOrder = ['id', 'asc'];

    public static $hasTags = true;
    public function getTags($model) {
        return [
            $model->product
        ];
    }
}
