<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'id', 'cname', 'title', 'location', 'salary' 
    ];
}
