<template>
    <h1>Upload示例</h1>
    <Demo :component="Upload1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Upload1Demo} from '../demoItem';

export default defineComponent({
    name: "CardDemo",
    components: {Demo},
    setup() {
        return {Upload1Demo};
    }
});
</script>

<style lang="scss">
</style>
