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
        $emp = new Employee;

        $emp->id = $req->id;
        $emp->ename = $req->ename;
        $emp->cname = $req->cname;
        $emp->contact = $req->contact;
        $emp->username = $req->username;
        $emp->password = $req->password;

        $emp->save();

        $emp =  Employee::all();
        return response()->json($req);
    }


    public function addJob(Request $req)
    {
        $job = new Job;

        $job->id = $req->id;
        $job->cname = $req->cname;
        $job->title = $req->title;
        $job->location = $req->location;
        $job->salary = $req->salary;

        $job->save();

        $job =  Job::all();
        return response()->json($req);
    }


    public function editUser(Request $req)
    {
        // $emp = Employee::where('id', $req->id)->first();

        $emp = Employee::find($req->id);
        $emp->ename = $req->ename;
        $emp->cname = $req->cname;
        $emp->contact = $req->contact;
        $emp->username = $req->username;
        $emp->password = $req->password;
        
        $emp->save();

        $emp =  Employee::all();
        return response()->json($req);
    }

    public function editJob(Request $req)
    {

        $job = Job::find($req->id);
        $job->cname = $req->cname;
        $job->title = $req->title;
        $job->location = $req->location;
        $job->salary = $req->salary;
        
        $job->save();

        $job =  Job::all();
        return response()->json($req);
    }



    public function deleteUser(Request $req)
    {
        $emp = Employee::find($req->id);
        
        $emp->delete();

        $emp =  Employee::all();
        return response()->json($req);
    }

    public function deleteJob(Request $req)
    {
        $job = Job::find($req->id);
        
        $job->delete();

        $job =  Job::all();
        return response()->json($req);
    }

    
}