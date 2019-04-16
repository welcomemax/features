<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table = 'features';

    protected $fillable = [
        'title',
        'data',
        'product_id',
        'type_id',
        'release_id'
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

    public function release() {
        return $this->belongsTo('App\Release');
    }

    public function subscribers() {
        return $this->belongsToMany('App\Subscriber');
    }

    public static $requireRelations = ['type', 'product', 'subscribers'];
    public static $requireCountRelations = ['subscribers'];

    public static $defaultOrder = ['subscribers_count', 'desc'];

    public static $hasTags = true;
    public function getTags($model) {
        return [
            $model->product,
            $model->type
        ];
    }
}
