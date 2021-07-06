<demo>
不同方向
</demo>
<template>
    <Tooltip content="Top 提示文字" direction="top">
        <Button>上边</Button>
    </Tooltip>
    <Tooltip content="Right 提示文字" direction="right">
        <Button>右边</Button>
    </Tooltip>
    <Tooltip content="Bottom 提示文字" direction="bottom">
        <Button>下边</Button>
    </Tooltip>
    <Tooltip content="Left 提示文字" direction="left">
        <Button>左边</Button>
    </Tooltip>
</template>

<script lang="ts">
import Tooltip from "../../lib/Tooltip.vue";
import Button from "../../lib/Button.vue";

export default {
    name: 'Popover1Demo',
    components: {Button, Tooltip},
    setup() {

    }
};
</script>
