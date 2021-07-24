<template>
    <h1>ImageModal示例</h1>
    <Demo :component="Image1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Image1Demo} from '../demoItem';

export default defineComponent({
    name: "ImageDemo",
    components: {Demo},
    setup() {
        return {Image1Demo};
    }
});
</script>

<style lang="scss">
</style>
