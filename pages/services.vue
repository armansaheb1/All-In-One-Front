<template>
    <section id="services" class="container mx-auto py-20 px-6 md:px-16">
        <h2 class="text-3xl font-bold text-center mb-12">Our AI Solutions for Every Industry</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="item in data"
                class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <div class="mb-4">
                    <i :class="`fas ${item['icon']} text-3xl text-white-400`"></i>
                </div>
                <h4 class="text-lg font-semibold mb-2">{{ item['name'] }}</h4><br>
                <p class="text-sm mb-2" style="height: 140px;text-align: center;">{{ item['description'] }}</p>
                <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
            </div>




        </div>
    </section>
</template>

<script setup lang="ts">
import { useFetch } from '#app'

const { data, error, pending } = useFetch('https://AllinOne.wiki/api/v1/categories')

definePageMeta({
    layout: 'main'
})
</script>

<style scoped>
/* Optional custom styles */
</style>
