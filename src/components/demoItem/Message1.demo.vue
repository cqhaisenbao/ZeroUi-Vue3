<demo>
组件调用方式11
</demo>
<template>
    <Message message="这是一条普通提示信息" :canClose="true"/>
    <Button @click="openLoading">打开Message</Button>
</template>

<script lang="ts">
import Message from "../../lib/Message.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";

export default {
    components: {Message, Button},
    setup() {
        const loading = ref(false);
        const openLoading = () => {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
            }, 1500);
        };
        return {loading, openLoading};
    }
};
</script>
