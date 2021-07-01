<template>
    <h1>Loading示例</h1>
    <Demo :component="Loading1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Loading1Demo} from '../demoItem';

export default defineComponent({
    name: "LoadingDemo",
    components: {Demo},
    setup() {
        return {Loading1Demo};
    }
});
</script>

<style lang="scss">
</style>
