<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    private function returnResponse($msg, $result, $statusCode)
    {
        return response(['message' => $msg, "result" => $result, "error" => null], $statusCode);
    }

    private function returnError($msg, $error, $statusCode)
    {
        return response(['message' => $msg, "result" => null, "error" => $error], $statusCode);
    }

    public function signup(Request $request)
    {
        try {
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->role = "client";
            $user->password = Hash::make($request->password);
            $user->save();
            return self::returnResponse('account created', ["email" => $request->email, "id" => $request->id, "name" => $request->name, "role" => $user->role], 301);
        } catch (\Throwable $th) {
            return self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function login(Request $request)
    {
        try {
            $random = Str::random(40);
            $data = User::where("email", $request->email)->get();
            if (count($data) < 1) {
                return self::returnError("User not Found", "Not Found", 404);
            }
            $val = Hash::check($request->password, $data[0]->password);
            if (!$val) {
                return self::returnError("Check Email Or Password", "UnAuthorized", 401);
            }
            User::where("email", $request->email)->update(['api_token' => $random]);
            return self::returnResponse('Login Successful', ["email" => $data[0]->email, "id" => $request->id, "name" => $data[0]->name, "role" => $data[0]->role, "token" => $random], 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function logout(Request $request)
    {
        try {
            $data = User::where("email", $request->email)->get();
            if (count($data) < 1) {
                return self::returnError("User not Found", "Not Found", 404);
            }
            User::where("email", $request->email)->update(['api_token' => null]);
            return self::returnResponse('Logout Successful', null, 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }
}
