<template>
    <h1>Sticky示例</h1>
    <Demo :component="Sticky1Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Sticky1Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Sticky1Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
