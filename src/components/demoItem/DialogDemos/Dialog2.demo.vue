<demo>
函数式调用 Dialog
</demo>
<template>
    <div>
        <Button @click="showDialog">打开对话框</Button>
    </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
import {h, defineComponent} from 'vue';
import {openDialog} from '../../../lib/openDialog';

export default defineComponent({
    components: {Button},
    setup() {
        const showDialog = () => {
            openDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok: () => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(true);
                        }, 3000);
                    });
                },
                cancel() {
                    console.log('cancel');
                }
            });
        };
        return {showDialog};
    }
});
</script>
