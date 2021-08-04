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

Route::group(['middleware'=>['cors']] , function(){
    Route::get('addUser', 'UserController@addUser')->name('addUser');
});

Route::get('userlist', 'UserController@UserList')->name('userlist');
Route::get('joblist', 'UserController@JobList')->name('joblist');

//Route::get('/login', 'LoginController@index')->name('login.index');

//Route::get('deleteuser', 'App\Http\Controllers\Userlist@deleteUser');