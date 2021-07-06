<template>
    <h1>Slides示例</h1>
    <Demo :component="Slides1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Slides1Demo} from '../demoItem';

export default defineComponent({
    name: "CardDemo",
    components: {Demo},
    setup() {
        return {Slides1Demo};
    }
});
</script>

<style lang="scss">
</style>
