<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminCOntroller extends Controller
{
  function __construct()
  {
    $this->middleware('auth');
  }

  public function getAdmin()
  {
    return view('admin');
  }
}
