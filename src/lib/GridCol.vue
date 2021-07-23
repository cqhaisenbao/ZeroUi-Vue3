<template>
    <div ref="colRef" class="zeroGridCol" :style='{width:widthRef}'>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, onUnmounted, Ref, ref, watchEffect} from 'vue';

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
        const widthRef = ref(Number(span / 24 * 100).toFixed(2) + '%');
        // const gutter = inject<Ref<number>>("gutter");

        const resizeMethod = () => {
            const p = colRef.value.parentElement.offsetWidth;


            if (offset) {
                const width = colRef.value.offsetWidth;
                // @ts-ignore
                colRef.value.style.transform = `translateX(${Number(offset / span * width)}px)`;
            }

            // if (700 < document.body.clientWidth && 740 > document.body.clientWidth) {
            //     colRef.value.parentElement.style.flexWrap = 'wrap';
            // }
            // if (document.body.clientWidth < 768) {
            //     widthRef.value = '50%';
            //     // console.log(colRef.value.style);
            //     // colRef.value.parentElement.style.flexDirection = 'column';
            //     // colRef.value.parentElement.style.flexWrap='wrap'
            //     // console.log(colRef.value.parentElement.style)
            // } else {
            //     widthRef.value = computed(() => {
            //         // return Number(span / 24 * 100).toFixed(2) + '%';
            //         return Number(span / 24 * p).toFixed(2) + 'px';
            //     }).value;
            // }
        };

        window.addEventListener('resize', resizeMethod, true);

        onMounted(() => {
            if (offset) {
                const width = colRef.value.offsetWidth;
                // @ts-ignore
                colRef.value.style.transform = `translateX(${Number(offset / span * width)}px)`;
            }
        });

        onUnmounted(() => {
            window.removeEventListener('resize', resizeMethod, true);
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
