<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('userlist', 'UserController@UserList')->name('userlist');
Route::POST('addUser', 'UserController@addUser')->name('addUser');
Route::POST('editUser', 'UserController@editUser')->name('editUser');
Route::POST('deleteUser', 'UserController@deleteUser')->name('deleteUser');

Route::get('joblist', 'UserController@JobList')->name('joblist');
Route::POST('addJob', 'UserController@addJob')->name('addJob');
Route::POST('editJob', 'UserController@editJob')->name('editJob');
Route::POST('deleteJob', 'UserController@deleteJob')->name('deleteJob');

Route::POST('login', 'LoginController@index')->name('login.index');