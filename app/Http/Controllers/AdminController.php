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
    $contacts = Contact_data::latest()->get();
    return view('admin', compact('contacts'));
  }

  public function getMessage(Request $request)
  {
    // Contact_data::where('id', $request->id)->update([
    //   'reade' => 1
    // ]);
    $contacts = Contact_data::where('id', $request->id)->first();
    return response()->json($contacts);
  }

}
