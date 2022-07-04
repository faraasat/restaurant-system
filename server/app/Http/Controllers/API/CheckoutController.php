<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Checkouts;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    private function returnResponse($msg, $result, $statusCode)
    {
        return response(['message' => $msg, "result" => $result, "error" => null], $statusCode);
    }

    private function returnError($msg, $error, $statusCode)
    {
        return response(['message' => $msg, "result" => null, "error" => $error], $statusCode);
    }

    private function auth($email, $token)
    {
        $data = User::where("email", $email)->get();
        if (count($data) < 1) {
            return self::returnError("User not Found", "Not Found", 404);
        }
        if ($data[0]->api_token != $token) {
            return self::returnError("You are not authorized to perform this action", "Unauthorized", 401);
        }
    }

    public function checkout(Request $request)
    {
        try {
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $user = User::where("email", $request->email)->get();
            $orderId =  Str::random(12);
            foreach ($request->products as $product) {
                $checkout = new Checkouts();
                $checkout->userId = $user[0]->id;
                $checkout->orderId = $orderId;
                $checkout->productId = $product["productId"];
                $checkout->productName = $product["productName"];
                $checkout->productPrice = $product["productPrice"];
                $checkout->count = $product["count"];
                $checkout->total = $product["total"];
                $checkout->address = $product["address"];
                $checkout->phone = $product["phone"];
                $checkout->transactionId = $product["transactionId"];
                $checkout->save();
            }
            return self::returnResponse('product Added', null, 201);
        } catch (\Throwable $th) {
            return self::returnError($th, "Bad Gateway", 502);
        }
    }

    public function retrieve(Request $request, $id)
    {
        try {
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $user = User::where("email", $request->email)->get();
            if ($user[0]->id != $id) {
                return self::returnError("Not Enough Priviliges", "Forbidden", 403);
            }
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $data = Checkouts::where("userId", $id)->get();
            if (count($data) < 1) {
                return self::returnResponse('Checkouts', [], 200);
            }
            return self::returnResponse('Checkouts', $data, 200);
        } catch (\Throwable $th) {
            return self::returnError($th, "Bad Gateway", 502);
        }
    }
}
