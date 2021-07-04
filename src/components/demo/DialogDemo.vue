<template>
    <h1>Dialog示例</h1>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
    <Demo :component="Dialog3Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Dialog1Demo, Dialog2Demo,Dialog3Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Dialog1Demo, Dialog2Demo,Dialog3Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
