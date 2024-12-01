<template>
    <div class="container mx-auto py-20">
        <h1 class="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <div class="max-w-lg mx-auto">
            <form>
                <div class="mb-6">
                    <label for="name" class="block text-xl font-medium">Name</label>
                    <input type="text" id="name" name="name" class="w-full p-3 border rounded mt-2" required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-xl font-medium">Email</label>
                    <input type="email" id="email" name="email" class="w-full p-3 border rounded mt-2" required />
                </div>
                <div class="mb-6">
                    <label for="message" class="block text-xl font-medium">Message</label>
                    <textarea id="message" name="message" class="w-full p-3 border rounded mt-2" rows="6"
                        required></textarea>
                </div>
                <button type="submit" class="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600">
                    Send Message
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'main'
})
</script>

<style scoped>
/* Optional custom styles */
</style>
