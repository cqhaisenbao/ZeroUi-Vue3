<template>
    <div class="o-collapse">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watchEffect} from 'vue';

export default defineComponent({
    name: "Collapse",
    props: {
        activeName: {
            type: String
        }
    },
    setup(props, context) {
        const defaults = context.slots.default();
        return {defaults};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-collapse {
    border-top: 1px solid #ebeef5;
}
</style>
