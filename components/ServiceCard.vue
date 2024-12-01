<template>
    <div class="bg-blue-800 p-6 rounded-lg text-center">
        <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
        <p>{{ description }}</p>
        <button class="mt-4 text-purple-400 hover:text-purple-300">Learn More</button>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
});
</script>
