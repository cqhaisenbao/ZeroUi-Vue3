<template>
    <div>
        <div>Tabs示例</div>
        <h1>示例1</h1>
        <Tabs v-model:selected="currentTab">
            <Tab title="导航1" name="first">内容1</Tab>
            <Tab title="导航2" name="second">内容2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default defineComponent({
    name: "TabsDemo",
    components: {Tabs, Tab},
    setup() {
        const currentTab=ref('first')
        return {currentTab};
    }
});
</script>

<style lang="scss" scoped>

</style>
