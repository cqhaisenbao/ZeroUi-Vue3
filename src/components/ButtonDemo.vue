<template>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <Button>普通大小</Button>
        <Button size="big">大按钮</Button>
        <Button size="small">小按钮</Button>
    </div>
    <h1>示例3</h1>
    <div>
        <Button level="main">主要按钮</Button>
        <Button>主要按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Button from "../lib/Button.vue";

export default defineComponent({
    name: "ButtonDemo",
    components: {Button},
    setup() {
        const onClick = () => {
            console.log(123);
        };
        return {onClick};
    }
});
</script>

<style lang="scss" scoped>

</style>
