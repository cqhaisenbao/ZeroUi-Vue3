<template>
    <div ref="gutterRef" class="zero-grid-wrapper" :class="{gutter:gutter}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, ref, watchEffect} from 'vue';

export default defineComponent({
    name: "Grid",
    props: {
        gutter: {
            type: Number,
            default: 0
        }
    },
    setup({gutter}) {
        const gutterRef = ref();
        onMounted(() => {
            watchEffect(() => {
                if (gutter) {
                    Array.from(gutterRef.value.children).forEach((item: any) => {
                        if (item.nextSibling.className === 'zeroGridCol' || (!item.nextSibling.className && !item.previousElementSibling)) {
                            item.style.paddingRight = gutter + 'px';
                        }
                    });
                }
            });
        });
        // provide('gutter', gutter);
        return {gutterRef};
    }
});
</script>

<style lang="scss">
.zero-grid-wrapper {
    display: flex;
}
</style>
