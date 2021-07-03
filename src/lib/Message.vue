<template>
    <teleport to="body">
        <div v-if="messageVisible" :style="{top:top+'%'}" class="o-messageWrapper" :class="'o-messageWrapper-'+type">
            <Icon :name="'icon-'+type"/>
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
        close: {
            type: Function
        },
        top: {
            type: Number
        },
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
            default: true
        }
    },
    setup() {
        const messageVisible = ref(true);
        return {messageVisible, open};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

@keyframes enter {
    from {top: 0}
}

.o-messageWrapper {
    animation: enter .3s;
    z-index: 9999;
    min-width: 380px;
    border-color: #EBEEF5;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: #edf2fc;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    &.o-messageWrapper-error {
        border-color: $o-type-error-disabled;
        border-style: solid;
        border-width: 1px;
        background: $o-type-error-light;

        .o-message {
            color: $o-type-error;
        }

        svg {
            fill: $o-type-error;
        }

        .close {
            color: $o-type-error;
        }
    }

    &.o-messageWrapper-success {
        border-color: $o-type-success-disabled;
        border-style: solid;
        border-width: 1px;
        background: $o-type-success-light;

        .o-message {
            color: $o-type-success;
        }

        svg {
            fill: $o-type-success;
        }

        .close {
            color: $o-type-success;
        }
    }

    &.o-messageWrapper-warning {
        border-color: $o-type-warning-disabled;
        border-style: solid;
        border-width: 1px;
        background: $o-type-warning-light;

        .o-message {
            color: $o-type-warning;
        }

        svg {
            fill: $o-type-warning;
        }

        .close {
            color: $o-type-warning;
        }
    }

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
        color: #C0C4CC;
        cursor: pointer;

        &:hover {
            color: #666666;
        }
    }
}
</style>
