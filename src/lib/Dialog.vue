<template>
    <Teleport to="body">
        <div v-if="visible">
            <div class="zero-dialog-overlay" @click="onClickOverlay"></div>
            <div class="zero-dialog-wrapper">
                <div class="zero-dialog">
                    <header>
                        <slot name="title">
                            <p>{{ title }}</p>
                        </slot>
                        <span class="zero-dialog-close" @click="close"></span>
                    </header>
                    <main>
                        <slot></slot>
                    </main>
                    <footer>
                        <slot name="footer">
                            <Button @click="ok" :loading="isLoading" level="main">ok</Button>
                            <Button @click="cancel">cancel</Button>
                        </slot>
                    </footer>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Button from "./Button.vue";

export default defineComponent({
    name: "Dialog",
    components: {Button},
    props: {
        title: {
            type: String,
            default: '请传入标题'
        },
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: Function,
        cancel: Function
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false);
        };
        const isLoading = ref(false);
        const onClickOverlay = () => {
            if (props.closeOnClickOverlay) {
                close();
            }
        };
        const ok = () => {
            if (props.ok) {
                isLoading.value = true;
                props.ok().then((res) => {
                    if (res) {
                        close();
                        isLoading.value = false;
                    }
                });
            } else {
                close();
            }
        };
        const cancel = () => {
            context.emit('cancel');
            close();
        };
        return {close, onClickOverlay, ok, cancel, isLoading};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

$radius: 4px;

.zero-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 30em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $o-border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    > main {
        padding: 12px 16px;
    }

    > footer {
        border-top: 1px solid $o-border-color;
        padding: 12px 16px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
