<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
  public function __contruct()
  {

  }

  public function getLogin()
  {
    return view('login');
  }

  public function postLogin(Request $request)
  {
    $username = $request->input('username');
    $password = $request->input('password');
    $remember = $request->input('checkbox');

    if (Auth::attempt(['username' => $username, 'password' => $password], $remember)) {
      return response()->json(['success'=> true]);
    }
    else {
      return response()->json(['error'=>true, 'message' => 'Nama Pengguna atau Kata Sandi yang anda masukkan salah']);
    }
  }

  public function logout(){
    Auth::logout();
    return redirect('login');
  }
}
