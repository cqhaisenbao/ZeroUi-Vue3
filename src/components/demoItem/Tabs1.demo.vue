<demo>
常规用法
</demo>
<template>
    <Tabs v-model:selected="currentTab">
        <Tab title="导航1" name="first">内容1</Tab>
        <Tab title="导航2" name="second">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import {ref} from 'vue';

export default {
    components: {Tabs, Tab},
    setup() {
        const currentTab = ref('first');
        return {currentTab};
    }
};
</script>
