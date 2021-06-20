<template>
    <div>
        <div v-for="(title,index) in titles" :key="index">{{ title }}</div>
        <component v-for="(c,index) in defaults" :key="index" :is="c"/>
    </div>
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
        const titles = defaults.map(tag => tag.props.title);
        return {defaults, titles};
    }
});
</script>

<style lang="scss" scoped>

</style>
