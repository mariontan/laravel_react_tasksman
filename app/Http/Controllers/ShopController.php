<?php

namespace App\Http\Controllers;

use App\ShoppingList;
use App\Project;
use Illuminate\Http\Request;
use DB;

class ShopController extends Controller
{
    public function index(){
    	$shopList = ShoppingList::where('is_bought',false)
    				->orderBy('created_at','desc')
    				->get();

    	return $shopList->toJson();
    }
	
	public function store(Request $request){
		$validatedData = $request->validate([
			'itemname' => 'required',
			'description' => 'required',
			'quantity' => ['required','min:1']
		]);

		$shopList = ShoppingList::create([
			'itemname' => $validatedData['itemname'],
			'description' => $validatedData['description'],
			'quantity' => $validatedData['quantity'],
			'is_bought'=> 0
		]);

		return response()->json('Item stored');
	}    

	public function show($id){
		$item =  ShoppingList::find($id);
		return $item->toJson();
	}

	public function update(Request $request,$id){
		
		// DB::table('shopping_lists')
  //           ->where('id', $id)
  //           ->update(['itemname' => request('itemname'),
  //   				  'description' => request('description'),
  //   				  'quantity' => request('quantity'),
  //   				  'is_bought' => 0	
  //   				]);
		// $validatedData = $request->validate([
		// 	'itemname' => 'required',
		// 	'description' => 'required',
		// 	'quantity' => ['required','min:1']
		// ]);

		$item = ShoppingList::find($id);
		$item -> itemname = request('itemname');
		$item -> description = request('description');
		$item -> quantity = request('quantity');
		$item -> is_bought = 0;
		$item -> save();

		return response()->json($item);
	}

	public function destroy($id){
		//$item=Project::delete($id);
		 DB::delete('delete from shopping_lists where id = ?',[$id]);
		// $this->authorize('delete', $project);
  //       $project->delete();

		return response()->json('deleted');
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