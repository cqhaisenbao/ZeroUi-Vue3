<template>
    <h1>Tabs示例</h1>
    <Demo :component="Tabs1Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Tabs1Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Tabs1Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
