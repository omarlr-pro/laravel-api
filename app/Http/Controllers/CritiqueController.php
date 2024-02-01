<?php

namespace App\Http\Controllers;

use App\Models\Critique;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CritiqueController extends Controller
{
    /**
     * Display a listing of the critiques.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $critiques = Critique::all();

        return response()->json($critiques);
    }

    /**
     * Display the specified critique.
     *
     * @param  int  $book_id
     * @return \Illuminate\Http\Response
     */
    public function show($book_id)
    {
        $critiques = Critique::where('book_id', $book_id)->get();

        if ($critiques->isEmpty()) {
            return response()->json(['error' => 'No critiques found for the specified book ID'], 404);
        }

        return response()->json($critiques);
    }

    /**
     * Store a newly created critique in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'user' => 'required',
            'book_id' => 'required|exists:books,id',
            'content' => 'required',
            'rating' => 'required|numeric|min:1|max:5',
        ]);

        // If validation fails, return an error response
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Create a new Critique
        $critique = Critique::create([
            'user' => $request->input('user'),
            'book_id' => $request->input('book_id'),
            'content' => $request->input('content'),
            'rating' => $request->input('rating'),
        ]);

        // Return the created Critique as a JSON response
        return response()->json($critique, 201);
    }
}
