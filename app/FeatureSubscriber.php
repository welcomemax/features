<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeatureSubscriber extends Model
{
    protected $table = 'feature_subscriber';

    protected $fillable = [
        'feature_id',
        'subscriber_id'
    ];

    public $timestamps = false;
}
