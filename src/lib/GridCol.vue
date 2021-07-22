<template>
    <div ref="colRef" class="zeroGridCol" :style='{width:widthRef}'>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, Ref, ref} from 'vue';

export default defineComponent({
    name: "GridCol",
    props: {
        span: {
            type: Number,
            required: true
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup({span, offset}) {
        const colRef = ref();
        const widthRef = computed(() => {
            return Number(span / 24 * 100).toFixed(2) + '%';
        });
        // const gutter = inject<Ref<number>>("gutter");

        onMounted(() => {
            if (offset) {
                const width = colRef.value.offsetWidth;
                // @ts-ignore
                colRef.value.style.transform = `translateX(${Number(offset / span * width)}px)`;
            }
        });

        return {widthRef, colRef};
    }
});
</script>

<style lang="scss">
.zeroGridCol {
    box-sizing: border-box;
}
</style>
