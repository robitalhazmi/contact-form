<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact_data;

class AdminCOntroller extends Controller
{
  function __construct()
  {
    $this->middleware('auth');
  }

  public function getAdmin()
  {
    $contacts = Contact_data::get();

    return view('admin', compact('contacts'));
  }
}
