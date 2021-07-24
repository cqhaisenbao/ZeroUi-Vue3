<template>
    <div class="o-dropdown">
        <div ref="buttonRef">
            <slot name="button"></slot>
        </div>
        <ul v-show="ulVisible" ref="ulRef" class="o-dropdown-ul">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, PropType, onUnmounted} from 'vue';

export default defineComponent({
    name: "Dropdown",
    props: {
        trigger: {
            type: String as PropType<'hover' | 'click'>,
            default: 'hover'
        }
    },
    setup(props) {
        const ulRef = ref();
        const buttonRef = ref();
        const ulVisible = ref(false);

        onMounted(() => {
            const height = buttonRef.value.offsetHeight;

            ulRef.value.style.transform = `translate(0,${height}px)`;

            if (props.trigger === 'click') {
                buttonRef.value.onclick = () => ulVisible.value = !ulVisible.value;
            } else {
                buttonRef.value.onmouseenter = () => ulVisible.value = true;
                buttonRef.value.onmouseleave = () => ulVisible.value = false;
                const changeUlVisible = (e: any) => ulVisible.value = e.relatedTarget.className === 'o-dropdown-button';
                ulRef.value.onmouseenter = changeUlVisible;
                ulRef.value.onmouseleave = changeUlVisible;
            }
        });

        onUnmounted(() => {
            buttonRef.value.onmouseenter = null;
            buttonRef.value.onmouseleave = null;
            if (ulRef.value) {
                ulRef.value.onmouseenter = null;
                ulRef.value.onmouseleave = null;
            }
        });

        return {ulRef, ulVisible, buttonRef};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-dropdown {
    display: inline-block;
    position: relative;

    .o-dropdown-button {
        white-space: nowrap;
        color: #fff;
        background-color: #6c757d;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

        &:hover {
            color: #fff;
            background-color: #5c636a;
            border-color: #565e64;
        }

        &::after {
            display: inline-block;
            margin-left: 10px;
            vertical-align: .125em;
            content: "";
            border-top: .3em solid;
            border-right: .3em solid transparent;
            border-bottom: 0;
            border-left: .3em solid transparent;
        }
    }

    .o-dropdown-ul {
        transform-origin: center top;
        z-index: 9999;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
}
</style>
