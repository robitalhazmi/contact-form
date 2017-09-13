<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact_data;

class ContactController extends Controller
{
    public function __contruct()
    {

    }

    public function getContact()
    {
      return view('contact');
    }

    public function postContact(Request $request)
    {
      $name = $request->name;
      $email = $request->email;
      $title = $request->title;
      $content = $request->content;

      $contact = new Contact_data();

      $contact->name = $name;
      $contact->email = $email;
      $contact->title = $title;
      $contact->content = $content;

      $contact->save();
      return response()->json([
        'success'=> true,
        'message'=>'Pesan telah terkirim'
      ]);
    }
}
