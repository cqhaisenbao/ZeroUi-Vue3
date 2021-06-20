<template>
    <div>
        <div>Dialog示例</div>
        <h1>示例1</h1>
        <Button @click="dialogVisible=!dialogVisible">toggle</Button>
        <Dialog title="我是标题" v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="okCallback" :cancel="cancelCallback"></Dialog>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

export default defineComponent({
    name: "DialogDemo",
    components: {Dialog, Button},
    setup() {
        const dialogVisible = ref(false);
        const okCallback = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 3000);
            });
        };
        const cancelCallback = () => {};
        return {dialogVisible, okCallback, cancelCallback};
    }
});
</script>

<style lang="scss" scoped>

</style>
