<template>
    <div>
        <h1>Switch 组件示例 </h1>
        <Demo :component="Switch1Demo"/>
        <Demo :component="Switch2Demo"/>
    </div>
</template>

<script lang="ts">
import {Switch1Demo, Switch2Demo} from '../demoItem';
import Demo from '../Demo.vue';

export default {
    components: {Demo},
    setup() {
        return {Switch2Demo, Switch1Demo,};
    }
};
</script>

<style lang="scss" scoped>
@import "../../style/theme";

.demo {
    border: 1px solid $o-border-color;
    margin: 16px 0 32px;

    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $o-border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $o-border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $o-border-color;

        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
