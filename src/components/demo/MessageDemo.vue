<template>
    <h1>Message示例</h1>
    <Demo :component="Message1Demo"/>
    <Demo :component="Message2Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import {Message1Demo,Message2Demo} from '../demoItem';

export default defineComponent({
    name: "MessageDemo",
    components: {Demo},
    setup() {
        return {Message1Demo,Message2Demo};
    }
});
</script>

<style lang="scss">
</style>
