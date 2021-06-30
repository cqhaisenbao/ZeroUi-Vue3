<demo>
支持 size
</demo>
<template>
    <div>
        <div class="demo2Wrapper">
            <Button size="big">大按钮</Button>
            <Button>普通按钮</Button>
            <Button size="small">小按钮</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";

export default {
    components: {Button}
};
</script>

<style lang="scss" scoped>
.demo2Wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
</style>
