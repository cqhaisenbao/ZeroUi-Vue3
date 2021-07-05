<template>
    <h1>Dropdown示例</h1>
    <Demo :component="Dropdown1Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Dropdown1Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Dropdown1Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
