<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Tab",
    props: {
        title: String,
        name: {
            type: String,
            required: true
        }
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
