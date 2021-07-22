<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Grid",
    props: {

    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
