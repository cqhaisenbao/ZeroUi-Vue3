<template>
    <h1>Loading示例</h1>
    <Demo :component="Loading1Demo"/>
    <Demo :component="Loading2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Loading1Demo,Loading2Demo} from '../demoItem';

export default defineComponent({
    name: "LoadingDemo",
    components: {Demo},
    setup() {
        return {Loading1Demo,Loading2Demo};
    }
});
</script>

<style lang="scss">
</style>
