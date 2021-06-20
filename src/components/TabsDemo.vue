<template>
    <div>
        <div>Tabs示例</div>
        <h1>示例1</h1>
        <Tabs>
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航2">内容2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default defineComponent({
    name: "TabsDemo",
    components: {Tabs, Tab},
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>

</style>
