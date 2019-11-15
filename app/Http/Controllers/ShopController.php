<?php

namespace App\Http\Controllers;

use App\ShoppingList;
use App\Project;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index(){
    	$shopList = ShoppingList::where('is_bought',false)
    				->orderBy('created_at','desc')
    				->get();

    	return $shopList->toJson();
    }
    

    
}


/*public function index()
    {
        $shopList = ShoppingList::get();
                            // ->orderBy('created_at', 'desc')
                            // ->withCount(['tasks' => function ($query) {
                            //     $query->where('is_completed', false);
                            // }])
                            // ->get();

        return $shopList->toJson();
    }*/