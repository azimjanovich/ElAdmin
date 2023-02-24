<script setup>


const details = reactive({
    username: null,
    password: null
})
const login = () => {
    if (details.username && details.password) {
        ElMessage.success("Login successful")
    } else {
        ElMessage.error("Fill in all fields")
    }
}
</script>

<template>
    <div class="h-screen font-sans bg bg-cover">
        <div class="container mx-auto h-full flex flex-1 justify-center items-center">
            <div class="w-full max-w-lg">
                <div class="leading-loose">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 class="text-2xl font-semibold">Tizimga kirish</h1>
                                </div>
                                <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="relative pb-4">
                                            <input id="email" type="text" v-model="details.username"
                                                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Username yoki elektron pochta" />
                                            <label for="email"
                                                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Username yoki elektron pochta
                                            </label>
                                        </div>
                                        <div class="relative">
                                            <input id="password" type="password" v-model="details.password"
                                                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Password" />
                                            <label for="password"
                                                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Parol</label>
                                        </div>
                                        <div class="relative">
                                            <button type="submit" @click="login"
                                                class="relative group overflow-hidden px-6 h-12 mt-6 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
                                                <span class="relative text-sm text-white">Kirish</span>
                                                <div class="flex items-center -space-x-3 translate-x-3">
                                                    <div
                                                        class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100">
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>