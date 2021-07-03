<template>
    <h1>Spread示例</h1>
    <Demo :component="Spread1Demo"/>
    <Demo :component="Spread2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Spread1Demo,Spread2Demo} from '../demoItem';

export default defineComponent({
    name: "SpreadDemo",
    components: {Demo},
    setup() {
        return {Spread1Demo,Spread2Demo};
    }
});
</script>

<style lang="scss">
</style>
