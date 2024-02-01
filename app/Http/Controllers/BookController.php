<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'required|string',
        ]);

        $imagePath = $request->file('image')->store('uploads', 'public');

        $book = Book::create([
            'name' => $request->input('name'),
            'image' => $imagePath,
            'description' => $request->input('description'),
        ]);

        return response()->json(['message' => 'Book created successfully', 'book' => $book], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::findOrFail($id);
        $book->image = asset('storage/' . $book->image); 

        return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Book::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
            $book->image = $imagePath;
        }

        $book->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        $book->image = asset('storage/' . $book->image); 

        return response()->json(['message' => 'Book updated successfully', 'book' => $book]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
