<template>
    <h1>Radio示例</h1>
    <Demo :component="Radio1Demo"/>
    <Demo :component="Radio2Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Radio1Demo,Radio2Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Radio1Demo,Radio2Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
