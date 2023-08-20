<script setup>
    import { onMounted, onUpdated, ref } from 'vue';
    import Masonry from 'masonry-layout';

    const columnNode = ref(null);

    let masonry = null;

    onMounted(() => {
        masonry = createMasonry();
    });

    onUpdated(() => {
        masonry?.destroy();

        masonry = createMasonry();
    });

    function createMasonry() {
        return new Masonry(columnNode.value, {
            // options
            itemSelector: '.masonry-item',
            transitionDuration: 0,
            gutter: 16,
        });
    }
</script>

<template>
    <div
        ref="columnNode"
        class="[&>*]:w-[calc(50%_-_8px)] [&>*]:mb-4 [&>*]:lg:w-[calc(33.3333%_-_(32px_/_3))]"
    >
        <slot />
    </div>
</template>
