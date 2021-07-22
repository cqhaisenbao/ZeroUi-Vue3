<template>
    <h1>Grid示例</h1>
    <Demo :component="Grid1Demo"/>
    <Demo :component="Grid2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Grid1Demo,Grid2Demo} from '../demoItem';

export default defineComponent({
    name: "CardDemo",
    components: {Demo},
    setup() {
        return {Grid1Demo,Grid2Demo};
    }
});
</script>

<style lang="scss">
</style>
