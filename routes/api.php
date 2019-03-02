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

Route::group(
    ['prefix' => '/features'],
    function () {
        Route::get('/{id?}', 'FeatureController@index');
        Route::post('/{id?}/', 'FeatureController@save');
        Route::delete('/{id}/', 'FeatureController@destroy');
    }
);

Route::group(
    ['prefix' => '/releases'],
    function () {
        Route::get('/{id?}', 'ReleaseController@index');
        Route::post('/{id?}/', 'ReleaseController@save');
        Route::delete('/{id}/', 'ReleaseController@destroy');
    }
);

Route::group(['prefix' => '/types'], function () {
    Route::get('/{id?}', 'TypeController@index');
});

Route::group(['prefix' => '/apps'], function () {
    Route::get('/{id?}', 'ProductController@index');
});
