<demo>
常规用法
</demo>
<template>
    <div>
        <Collapse v-model:activeName="activeName" :accordion="true">
            <CollapseItem name="1">
                <template #header>标题1</template>
                <template #body>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</template>
            </CollapseItem>
            <CollapseItem name="2">
                <template #header>标题2</template>
                <template #body>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </template>
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
        const activeName = ref(['1']);
        return {activeName};
    }
};
</script>

<style lang="scss">

</style>
