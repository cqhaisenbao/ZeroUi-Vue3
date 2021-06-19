<template>
    <button class="zero-button" :class="`theme-${theme}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Button",
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
    setup() {
        return {};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

$h: 32px;
$radius: 4px;
.zero-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $o-main-color;
    border: 1px solid $o-border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    & + & {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $o-type-primary;
        border-color: $o-type-primary;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }
}
</style>
