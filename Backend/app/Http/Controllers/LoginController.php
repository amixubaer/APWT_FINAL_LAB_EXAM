<?php

namespace App\Http\Controllers;
use App\Admin; 
use App\Employee; 
use App\Job; 

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(Request $req)
    {

        $admin = Admin::where('username', $req->username)
                    ->where('password', $req->password)
                    ->first();

        $employee = Employee::where('username', $req->username)
                            ->where('password', $req->password)
                            ->first();


        if(count((array)$admin) > 0){

            return "admin";
            
        }

        else if(count((array)$employee) > 0){

            return "employee";  

        }
    }
}