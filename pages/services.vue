<template>
    <div class="container mx-auto py-20">
        <h1 class="text-4xl font-bold text-center mb-6">Our Services</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-blue-800 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-4">Natural Language Processing</h3>
                <p>Unlock the power of language with our NLP tools that help businesses process and analyze text data.
                </p>
            </div>
            <div class="bg-blue-800 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p>Leverage data to make predictions and informed business decisions with our AI-driven analytics
                    solutions.</p>
            </div>
            <div class="bg-blue-800 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-4">Image Recognition</h3>
                <p>Empower your business with image recognition technology for automation and data extraction from
                    images.</p>
            </div>
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
