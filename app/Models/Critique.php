<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Critique extends Model
{
    protected $fillable = ['book_id', 'content', 'user'];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
