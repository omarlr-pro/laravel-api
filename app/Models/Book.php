<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['name', 'image', 'description'];

    public function critiques()
    {
        return $this->hasMany(Critique::class);
    }
}

