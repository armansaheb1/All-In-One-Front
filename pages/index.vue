<template>
  <div class="bg-gradient-to-b from-blue-900 to-purple-800 text-white min-h-screen">
    <MainLayout>
      <div class="relative min-h-screen flex flex-col justify-center items-center text-white">
        <!-- Background Image with reduced brightness -->
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/cover-photo.webp'); filter: brightness(0.4);"></div>

        <!-- Main Content Area -->
        <div style="background: rgba(0, 0, 0, 0.4);" class="relative z-10 text-center px-6 py-20 max-w-4xl">
          <!-- Hero Section Title and Description -->
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
            Revolutionizing Industries with AI Solutions
          </h1>
          <p class="text-lg md:text-xl mb-8 drop-shadow-lg max-w-3xl mx-auto">
            Empower your business with AI-driven solutions for health, office needs, and more.
          </p>

          <!-- Action Buttons -->
          <div class="space-x-4">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg transition duration-300">
              Explore Services
            </button>
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl shadow-lg transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      <section id="services" class="container mx-auto py-20 px-6 md:px-16">
        <h2 class="text-3xl font-bold text-center mb-12">Our AI Solutions for Every Industry</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div v-for="item in data"
            class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i :class="`fas ${item.icon} text-3xl text-white-400`"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">{{ item['name'] }}</h4><br>
            <p class="text-sm mb-2" style="height: 140px;text-align: center;">{{ item['description'] }}</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>




        </div>
      </section>

      <section id="use-cases" class="container mx-auto py-20">
        <h2 class="text-3xl font-bold text-center mb-12">Use Cases</h2>
      </section>
    </MainLayout>
  </div>
</template>

<style scoped></style>


<script setup lang="ts">
import { useFetch } from '#app'

const { data, error, pending } = useFetch('https://AllinOne.wiki/api/v1/categories')

definePageMeta({
  layout: 'main'
})
</script>
