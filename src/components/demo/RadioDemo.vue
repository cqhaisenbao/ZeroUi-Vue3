<template>
    <h1>Radio示例</h1>
    <Demo :component="Radio1Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Radio1Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Radio1Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
