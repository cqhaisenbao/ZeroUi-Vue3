<template>
    <h1>Tooltip示例</h1>
    <Demo :component="Tooltip1Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Tooltip1Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Tooltip1Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
