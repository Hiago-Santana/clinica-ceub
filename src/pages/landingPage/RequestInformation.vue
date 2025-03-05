<template>
    <div class="flex w-full bg-white justify-center items-center">
        <div class="max-w-7xl">
            <h2 class="w-full text-center text-first font-lexend font-bold text-5xl my-10">
                Entre em contato para mais informações
            </h2>
            <form
                class="flex rounded-lg justify-center p-4 border-1 border-gray-200 shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                <div class="grid grid-rows-4 w-full gap-4">
                    <input type="text" placeholder="Nome"
                        class="w-full max-w-4xl border-1 border-gray-200 rounded-md focus:border-gray-200 focus:ring-0 shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    <input type="text" placeholder="Email"
                        class="w-full max-w-4xl border-1 border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Cidade"
                        class="w-full max-w-4xl border-1 border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                        <input type="text" placeholder="Estado"
                        class="w-full max-w-4xl border-1 border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    </div>
                </div>


            </form>
        </div>
    </div>
</template>