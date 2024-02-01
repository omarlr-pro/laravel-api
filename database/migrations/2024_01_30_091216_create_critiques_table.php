<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('critiques', function (Blueprint $table) {
            $table->id();
            $table->text('user')->default("none");
            $table->foreignId('book_id')->nullable()->constrained(); // Make book_id nullable
            $table->text('content');
            $table->integer('rating');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('critiques');
    }
};
