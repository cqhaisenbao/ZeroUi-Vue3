<template>
    <div></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Tab from "./Tab.vue";

export default defineComponent({
    name: "Tabs",
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach(tag => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子标签必须是Tab');
            }
        });
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
