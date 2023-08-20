<script setup>
    const props = defineProps({
        title: { type: String, required: true },
        description: { type: String, required: true },
        author: { type: String, required: true },
    });
</script>

<template>
    <div class="bg-white p-2 rounded border-slate-700">
        <div class="text-[#007bff] mb-2 text-sm lg:text-base">{{ props.title }}</div>

        <div class="text-sm lg:text-base">{{ props.description }}</div>

        <div class="text-xs text-gray-400 mt-3 lg:text-sm">{{ props.author }}</div>
    </div>
</template>
