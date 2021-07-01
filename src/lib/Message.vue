<template>
    <teleport to="body">
        <div v-if="messageVisible" class="o-messageWrapper" :class="'o-messageWrapper-'+type">
            <Icon name="icon-info"/>
            <span class="o-message">{{ message }}</span>
            <span v-if="canClose" class="close" @click="close">╳</span>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Icon from "./Icon.vue";

export default defineComponent({
    name: "Message",
    components: {Icon},
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info'
        },
        canClose: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const messageVisible = ref(true);
        const close = () => {messageVisible.value = false;};
        return {messageVisible,close};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-messageWrapper {
    z-index: 9999;
    min-width: 380px;
    border-color: #EBEEF5;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    background-color: #edf2fc;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    svg {
        fill: #999999;
        font-size: 18px;
        margin-right: 10px;
    }

    .o-message {
        flex-grow: 1;
        font-size: 14px;
        line-height: 1.5;
        color: #909399;
    }

    .close {
        color: #909399;
        cursor: pointer;

        &:hover {
            color: #666666;
        }
    }
}
</style>
