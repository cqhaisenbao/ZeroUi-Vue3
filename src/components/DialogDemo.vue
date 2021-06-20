<template>
    <div>
        <div>Dialog示例</div>
        <h1>示例1</h1>
        <Button @click="dialogVisible=!dialogVisible">toggle</Button>
        <Dialog title="我是标题" v-model:visible="dialogVisible" :closeOnClickOverlay="false" :ok="okCallback" :cancel="cancelCallback">
            <template #content>
                <p>第一行字</p>
                <p>第二行字</p>
            </template>
        </Dialog>
        <h1>示例2</h1>
        <Button @click="showDialog">方法调用打开dialog</Button>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog";

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
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '你好'
            });
        };
        return {dialogVisible, okCallback, cancelCallback, showDialog};
    }
});
</script>

<style lang="scss" scoped>

</style>
