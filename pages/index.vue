<template>
  <div class="bg-gradient-to-b from-blue-900 to-purple-800 text-white min-h-screen">
    <MainLayout>
      <section class="text-center py-20">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Revolutionizing Industries with Cutting-Edge AI Solutions
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Explore our AI services tailored for your business needs.
        </p>
        <div class="flex justify-center gap-6">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
            Explore Services
          </button>
          <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded">
            Request a Demo
          </button>
        </div>
      </section>

      <section id="services" class="container mx-auto py-20">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-comments text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Natural Language Processing</h3>
            <p class="text-sm mb-2">Turn text into actionable insights with our advanced NLP solutions.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-chart-line text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Predictive Analytics</h3>
            <p class="text-sm mb-2">Forecast trends and make data-driven decisions with our AI-powered analytics.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-camera text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Image Recognition</h3>
            <p class="text-sm mb-2">Unlock the potential of visual data with cutting-edge AI tools.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-microphone-alt text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Speech Recognition</h3>
            <p class="text-sm mb-2">Enhance user experiences with accurate speech-to-text technologies.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-robot text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">AI Chatbots</h3>
            <p class="text-sm mb-2">Automate customer service with intelligent AI-powered chatbots.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-cogs text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Machine Learning Models</h3>
            <p class="text-sm mb-2">Build and deploy custom machine learning models for your business.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-heartbeat text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">AI for Healthcare</h3>
            <p class="text-sm mb-2">Leverage AI to improve patient care and optimize healthcare processes.</p>
            <button class="text-purple-400 hover:text-purple-300 text-xs">Learn More</button>
          </div>
          <div class="bg-blue-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <i class="fas fa-dollar-sign text-3xl text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">AI for Finance</h3>
            <p class="text-sm mb-2">Make data-driven financial decisions with AI-powered solutions.</p>
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
definePageMeta({
  layout: 'main'
})
</script>
