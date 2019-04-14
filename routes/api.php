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
        Route::get('/{id?}', 'Api\FeatureController@index');
        Route::post('/{id?}/', 'Api\FeatureController@save');
    }
);

Route::group(
    ['prefix' => '/releases'],
    function () {
        Route::get('/{id?}', 'Api\ReleaseController@index');
        Route::post('/{id?}/', 'Api\ReleaseController@save');
    }
);

Route::group(
    ['prefix' => '/customs'],
    function () {
        Route::get('/{id?}', 'Api\CustomController@index');
        Route::post('/{id?}/', 'Api\CustomController@save');
    }
);

Route::group(['prefix' => '/types'], function () {
    Route::get('/{id?}', 'Api\TypeController@index');
});

Route::group(['prefix' => '/apps'], function () {
    Route::get('/{id?}', 'Api\ProductController@index');
});

Route::group(
    ['prefix' => '/subscribers'], 
    function () {
        Route::get('/{id?}', 'Api\SubscriberController@index');
        Route::post('/', 'Api\SubscriberController@subscribe');
        Route::delete('/', 'Api\SubscriberController@unsubscribe');
    }
);