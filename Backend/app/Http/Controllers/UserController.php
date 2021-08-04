<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee; 
use App\Job; 

class UserController extends Controller
{

    public function UserList(Request $request)
    {
        $allUser = Employee::all();

        if($allUser)
        {
            return response()->json($allUser);
        }
    }

    public function JobList(Request $request)
    {
        $allJob = Job::all();

        if($allJob)
        {
            return response()->json($allJob);
        }
    }

    public function addUser(Request $req)
    {
        $user = new Employee;

        // $user->id = $req->id;
        // $user->name = $req->name;
        // $user->dept = $req->dept;

        $user->id = 10;
        $user->name = "asf";
        $user->dept = "saf";

        $user->save();

        $users =  Employee::all();
        return response()->json($req);
    }


    public function addJob(Request $req)
    {
        $user = new Employee;

        // $user->id = $req->id;
        // $user->name = $req->name;
        // $user->dept = $req->dept;

        $user->id = 10;
        $user->name = "asf";
        $user->dept = "saf";

        $user->save();

        $users =  Employee::all();
        return response()->json($req);
    }
    
}
