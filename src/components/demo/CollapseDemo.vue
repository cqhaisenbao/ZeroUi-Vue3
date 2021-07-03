<template>
    <h1>Collapse示例</h1>
    <Demo :component="Collapse1Demo"/>
    <Demo :component="Collapse2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Collapse1Demo, Collapse2Demo} from '../demoItem';

export default defineComponent({
    name: "CollapseDemo",
    components: {Demo},
    setup() {
        return {Collapse1Demo, Collapse2Demo};
    }
});
</script>

<style lang="scss">
</style>
