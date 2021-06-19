<template>
    <button class="zero-button" :class="classes">
        <slot/>
    </button>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';

export default defineComponent({
    name: "Button",
    props: {
        theme: {
            type: String as PropType<ButtonTheme>,
            default: 'button'
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'normal'
        }
    },
    setup(props) {
        const {theme, size} = props;
        const classes = computed(() => {
            return {
                [`zero-theme-${theme}`]: theme,
                [`zero-size-${size}`]: size,
            };
        });
        return {classes};
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

    &.zero-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $o-type-primary;

        &:hover, &:focus {
            color: lighten($o-type-primary, 10%);
        }
    }

    &.zero-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover, &:focus {
            background: darken(white, 5%);;
        }
    }

    &.zero-size-big {
        font-size: 18px;
        height: 40px;
        padding: 0 16px;
    }

    &.zero-size-small {
        font-size: 12px;
        height: 22px;
        padding: 4px 8px;
    }
}
</style>
