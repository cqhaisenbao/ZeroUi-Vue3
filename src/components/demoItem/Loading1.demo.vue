<demo>
组件调用方式
</demo>
<template>
    <Loading :loading="loading" text="正在加载..."/>
    <Button @click="openLoading">打开Loading</Button>
</template>

<script lang="ts">
import Loading from "../../lib/Loading.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";

export default {
    components: {Loading, Button},
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
