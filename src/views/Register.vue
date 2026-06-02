<script setup></script>
<template>

    <div class="flex items-center justify-center bg green-100 min-h-screen">
<div class="bg-white p-8 rounded-lg shadow md w-full max-w-md">
<h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Register</h2>
<form class="flex flex-col gap-4">
    <input v-model="email" type="email" placeholder=" please your Enter user Email" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>

    <input v-model="Password" type="password" placeholder=" please your Enter password" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
    <input v-model="gender" type="email" placeholder=" please Enter user gender" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
    <input v-model="age" type="email" placeholder=" please Enter user age" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
    <input v-model="name" type="email" placeholder=" please Enter user name" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
    <input v-model="number" type="email" placeholder=" please Enter user number" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
     <input v-model="Password" type="password" placeholder=" please confrim your password" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one  focus:border-green-600"/>
  
<button type="submit"
    class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">sign in</button>

</form>
<p class="text-sm text-gray-600 mt-4 text-gray-600 text-center">
    Don't hover account? please create it here

    <RouterLink to="/register" class="text-green-700 font-semibold hover:underline">get started</RouterLink>
    
</p>
</div>
</div>
</template>