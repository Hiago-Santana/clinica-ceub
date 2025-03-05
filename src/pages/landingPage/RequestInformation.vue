<template>
    <div class="flex w-full bg-white justify-center items-center pb-10 px-6">
        <div class="max-w-7xl">
            <h2 class="w-full text-center text-first font-lexend font-bold text-5xl my-10">
                Entre em contato para mais informações
            </h2>
            <form
                class="rounded-lg justify-center px-4 pt-4 border-1 border-gray-200 shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                <div class="grid grid-auto-rows w-full gap-4">
                    <input type="text" placeholder="Nome"
                        class="w-full  border border-gray-200 rounded-md focus:border-gray-200 focus:ring-0 shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    <input type="text" placeholder="Email"
                        class="w-full border border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Cidade"
                        class=" w-full border border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                        <input type="text" placeholder="Estado"
                        class="w-full border border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">
                    </div>
                    <textarea type="text" rows="5" placeholder="Solicitação" class="w-full border-1 border-gray-200 rounded-md shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]"></textarea>
                </div>
                <div class="flex w-full justify-center items-center">
                    <button type="submit" class="rounded-2xl border border-gray-200 m-6 text-first w-25 shadow-[0_4px_4px_2px_rgba(0,0,0,0.3)]">Enviar</button>
                </div>                
            </form>
        </div>
    </div>
</template>