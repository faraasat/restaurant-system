<?php

use Illuminate\Support\Facades\Route;

// Auth Related
Route::Post("/signup", "App\Http\Controllers\API\UserController@signup");
Route::Post("/login", "App\Http\Controllers\API\UserController@login");
Route::Post("/logout", "App\Http\Controllers\API\UserController@logout");

// Product creation related
Route::Post("/product", "App\Http\Controllers\API\ProductsController@create");
Route::Put("/product/{id}", "App\Http\Controllers\API\ProductsController@updateProduct");
Route::Get("/product/{id}", "App\Http\Controllers\API\ProductsController@retrieve");
Route::Get("/product", "App\Http\Controllers\API\ProductsController@retrieveAll");
Route::Get("/product/category/{category}", "App\Http\Controllers\API\ProductsController@category");
Route::Delete("/product/{id}", "App\Http\Controllers\API\ProductsController@delete");

// Checkout Related
Route::Post("/checkout", "App\Http\Controllers\API\CheckoutController@checkout");
Route::Get("/checkout/{id}", "App\Http\Controllers\API\CheckoutController@retrieve");
