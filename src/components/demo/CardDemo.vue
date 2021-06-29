<template>
    <h1>Card示例</h1>
    <Demo :component="Card1Demo"/>
    <Demo :component="Card2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Card1Demo, Card2Demo} from '../demoItem';

export default defineComponent({
    name: "CardDemo",
    components: {Demo},
    setup() {
        return {Card1Demo, Card2Demo};
    }
});
</script>

<style lang="scss">
</style>
