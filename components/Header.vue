<template>
    <header class="sticky top-0 bg-blue-900 bg-opacity-90 shadow-md z-50">
        <nav class="container mx-auto flex justify-between items-center py-4 px-6">
            <!-- Logo / Title -->
            <h1 class="text-2xl font-bold">AllinOne AI Services</h1>

            <!-- Desktop Menu -->
            <div class="hidden sm:flex space-x-6">
                <nuxt-link to="/" class="hover:text-purple-300">Home</nuxt-link>
                <nuxt-link to="/services" class="hover:text-purple-300">Services</nuxt-link>
                <nuxt-link to="/use-cases" class="hover:text-purple-300">Use Cases</nuxt-link>
                <nuxt-link to="/about" class="hover:text-purple-300">About Us</nuxt-link>
                <nuxt-link to="/contact" class="hover:text-purple-300">Contact</nuxt-link>
            </div>

            <!-- Mobile Menu Button (Hamburger) -->
            <div class="sm:hidden flex items-center">
                <button @click="toggleMenu" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Get Demo Button (Visible only on large screens) -->
            <button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded hidden sm:block">
                Get a Demo
            </button>
        </nav>

        <!-- Mobile Menu (Conditionally Rendered) -->
        <div v-if="menuOpen" class="sm:hidden bg-blue-900 bg-opacity-90 p-4 space-y-4">
            <nuxt-link to="/" class="hover:text-purple-300 block" @click="closeMenu">Home</nuxt-link>
            <nuxt-link to="/services" class="hover:text-purple-300 block" @click="closeMenu">Services</nuxt-link>
            <nuxt-link to="/use-cases" class="hover:text-purple-300 block" @click="closeMenu">Use Cases</nuxt-link>
            <nuxt-link to="/about" class="hover:text-purple-300 block" @click="closeMenu">About Us</nuxt-link>
            <nuxt-link to="/contact" class="hover:text-purple-300 block" @click="closeMenu">Contact</nuxt-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false); // State to track whether the menu is open or not

// Toggle the mobile menu visibility
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Close the mobile menu when a link is clicked
const closeMenu = () => {
    menuOpen.value = false;
};
</script>

<style scoped>
/* Ensure that the mobile menu is only displayed when the screen size is small */
@media (max-width: 640px) {
    .sm\:hidden {
        display: block !important;
    }
}

/* Style adjustments for mobile view */
.sm\:hidden {
    display: none;
}
</style>
