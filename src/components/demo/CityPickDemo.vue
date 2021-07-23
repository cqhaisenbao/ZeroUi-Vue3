<template>
    <h1>CityPick示例</h1>
    <Demo :component="City1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {City1Demo} from '../demoItem';

export default defineComponent({
    name: "CityPickDemo",
    components: {Demo},
    setup() {
        return {City1Demo};
    }
});
</script>

<style lang="scss">
</style>
