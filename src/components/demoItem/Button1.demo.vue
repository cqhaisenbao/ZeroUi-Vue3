<demo>
常规用法
</demo>
<template>
    <div class="demo1Wrapper">
        <Button>默认按钮</Button>
        <Button level="main">主要按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="warning">警告按钮</Button>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
    components: {Button}
};
</script>

<style lang="scss" scoped>
.demo1Wrapper {
    margin-bottom: -12px;
    button {
        margin-bottom: 12px;
        margin-left: 0;
        margin-right: 6px;
    }
}
</style>
