<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $table = 'types';

    protected $fillable = [
        'alias',
        'name'
    ];

    public $timestamps = false;

    public function features() {
        return $this->hasMany('App\Feature');
    }
}
