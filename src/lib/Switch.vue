<template>
    <button :class="{checked:value}" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: "Switch",
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit("update:value", !props.value);
        };
        return {toggle};
    }
});
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

$h: 22px;
$h2: $h - 4px;
button {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h/2;
    position: relative;
    background: $o-light-color;

    &.checked {
        background: $o-type-primary;

        > span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: $o-bg-color;
    border-radius: $h2 / 2;
    transition: left .25s;
}
</style>
