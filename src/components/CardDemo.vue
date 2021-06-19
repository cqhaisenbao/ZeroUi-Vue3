<template>
    <div>
        <Card shadow="hover" :list-data="[1,2,3,4]">
            <template #title>
                <span>我是标题</span>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Card from "../lib/Card.vue";

export default defineComponent({
    name: "CardDemo",
    components: {Card},
    setup() {
        return {};
    }
});
</script>

<style lang="scss">
</style>
