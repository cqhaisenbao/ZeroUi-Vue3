<template>
    <div class="o-collapse">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, provide} from 'vue';
import mitt from 'mitt';

export const emitter = mitt();

export default defineComponent({
    name: "Collapse",
    props: {
        activeName: {
            type: Array
        }
    },
    setup(props, context) {
        emitter.on('itemClick', newActiveName => {
            const index = props.activeName.findIndex(item => item === newActiveName);
            const propsActiveName = Array.from(props.activeName);
            if (index > -1) {
                propsActiveName.splice(index, 1);
                context.emit('update:activeName', propsActiveName);
            } else {
                context.emit('update:activeName', [...propsActiveName, newActiveName]);
            }
        });
        provide('collapse', props);
        return {};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-collapse {
    border-top: 1px solid #ebeef5;
}
</style>
