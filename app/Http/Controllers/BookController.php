<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        // Fetch all books
        $books = Book::all();

        return response()->json($books);
    }

    public function store(Request $request)
{
    try {
        // Validate request data
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|string',
            'description' => 'required|string',
        ]);

        // Create a new book
        $book = Book::create($request->all());

        return response()->json($book, 201);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

}
