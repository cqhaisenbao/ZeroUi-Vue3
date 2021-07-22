<template>
    <div class="zeroGridCol" :style='{width:widthRef}'>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';

export default defineComponent({
    name: "GridCol",
    props: {
        span: {
            type: Number,
            required: true
        }
    },
    setup({span}) {
        const widthRef = computed(() => {
            return Number(span / 24 * 100).toFixed(2) + '%';
        });
        return {widthRef};
    }
});
</script>

<style lang="scss">

</style>
