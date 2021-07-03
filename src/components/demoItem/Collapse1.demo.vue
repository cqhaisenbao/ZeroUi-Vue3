<demo>
常规用法
</demo>
<template>
    <div>
        <Collapse v-model:activeName="activeName">
            <CollapseItem name="1">
                <template #heading>标题1</template>
                <template #body>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</template>
            </CollapseItem>
            <CollapseItem name="2">
                <template #heading>标题2</template>
                <template #body>内容2....</template>
            </CollapseItem>
        </Collapse>
    </div>
</template>

<script lang="ts">
import Collapse from "../../lib/Collapse.vue";
import CollapseItem from "../../lib/CollapseItem.vue";
import {ref} from "vue";

export default {
    components: {Collapse, CollapseItem},
    setup() {
        const activeName = ref('1');
        return {activeName};
    }
};
</script>

<style lang="scss">

</style>
