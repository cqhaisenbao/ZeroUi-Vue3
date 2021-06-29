<template>
    <h1>Button示例</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import {Button1Demo, Button2Demo, Button3Demo, Button4Demo} from '../demoItem';

export default {
    components: {Demo},
    setup() {
        return {Button1Demo, Button2Demo, Button3Demo, Button4Demo};
    }
};
</script>

<style lang="scss" scoped>
</style>
