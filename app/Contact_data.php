<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact_data extends Model
{
  protected $fillable = [
    'id', 'name', 'email', 'title', 'content'
  ];
  public $timestamps = false;
  protected $dates = [
        'created_at',
    ];
}
