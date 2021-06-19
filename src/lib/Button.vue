<template>
    <button class="zero-button" :class="`theme-${theme}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Button",
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
