<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\User;
use Illuminate\Support\Str;

class ProductsController extends Controller
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
        if ("admin" != $data[0]->role) {
            return self::returnError("Not Enough Priviliges", "Forbidden", 403);
        }
    }

    public function create(Request $request)
    {
        try {
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $product = new Products();
            $pId =  Str::random(12);
            $product->productId = $pId;
            $product->name = $request->name;
            $product->desc = $request->desc;
            $product->price = $request->price;
            $product->shortDesc = $request->shortDesc;
            $product->category = $request->category;
            $product->weight = $request->weight;
            $product->imgUrl = $request->imgUrl;
            $product->save();
            return self::returnResponse('product Added', ["productId" => $pId, "name" => $request->name, "desc" => $request->desc, "price" => $request->price, "shortDesc" => $request->shortDesc, "category" => $request->category, "weight" => $request->weight, "imgUrl" => $request->imgUrl], 301);
        } catch (\Throwable $th) {
            return self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function updateProduct(Request $request, $id)
    {
        try {
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $data = Products::where("productId", $id)->get();
            if (count($data) < 1) {
                return self::returnError("Product not Found", "Not Found", 404);
            }
            Products::where("productId", $id)->update([
                "name" => $request->name,
                "desc" => $request->desc,
                "price" => $request->price,
                "shortDesc" => $request->shortDesc,
                "category" => $request->category,
                "weight" => $request->weight,
                "imgUrl" => $request->imgUrl,
            ]);
            return self::returnResponse('product Added', ["productId" => $id, "name" => $request->name, "desc" => $request->desc, "price" => $request->price, "shortDesc" => $request->shortDesc, "category" => $request->category, "weight" => $request->weight, "imgUrl" => $request->imgUrl], 301);
        } catch (\Throwable $th) {
            return self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function retrieve($id)
    {
        try {
            $data = Products::where("productId", $id)->get();
            if (count($data) < 1) {
                return self::returnError("Product not Found", "Not Found", 404);
            }
            return self::returnResponse('Retrieval Successful', $data[0], 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function retrieveAll()
    {
        try {
            $data = Products::all();
            return self::returnResponse('Retrieval Successful', $data, 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function category($category)
    {
        try {
            $data = Products::where("category", $category)->get();
            if (count($data) < 1) {
                return self::returnError("Product not Found", "Not Found", 404);
            }
            return self::returnResponse('Retrieval Successful', $data, 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }

    public function delete(Request $request, $id)
    {
        try {
            $res = self::auth($request->email, $request->token);
            if ($res) return $res;
            $f = Products::where("productId", $id)->get();
            if (count($f) < 1) {
                return self::returnError("Product not Found", "Not Found", 404);
            }
            Products::where("productId", $id)->delete();
            $data = Products::where("productId", $id)->get();
            if (!count($data) < 1) {
                return self::returnError("Delete Unsuccessful", "Bad Gateway", 502);
            }
            return self::returnResponse('Delete Successful', null, 200);
        } catch (\Throwable $th) {
            return  self::returnError($th->errorInfo[2], "Bad Gateway", 502);
        }
    }
}
