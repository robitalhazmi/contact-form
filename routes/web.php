<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//getPage
Route::get('/', 'ContactController@getContact')->name('contact');
Route::get('login', 'LoginController@getLogin')->name('login');
Route::get('logout', 'LoginController@logout')->name('logout');
Route::get('admin', 'AdminController@getAdmin')->name('admin');
//postData
Route::post('contact', 'ContactController@postContact')->name('contact.post');
Route::post('login', 'LoginController@postLogin')->name('login.post');
