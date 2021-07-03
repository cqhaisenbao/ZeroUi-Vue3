<template>
    <button :disabled="disabled" class="zero-button" :class="classes">
        <span v-if="loading" class="zero-loadingIndicator"></span>
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
        },
        level: {
            type: String as PropType<ButtonLevel>,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {theme, size, level, loading} = props;
        const classes = computed(() => {
            return {
                [`zero-theme-${theme}`]: theme,
                [`zero-size-${size}`]: size,
                [`zero-level-${level}`]: level,
                [`zero-loading-${loading}`]: loading
            };
        });
        return {classes};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

$h: 36px;
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
    transition: background 250ms;
    font-size: 14px;

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

        &:hover,
        &:focus {
            color: lighten($o-type-primary, 10%);
        }
    }

    &.zero-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.zero-size-big {
        font-size: 16px;
        height: 40px;
        padding: 0 16px;
    }

    &.zero-size-small {
        font-size: 12px;
        height: 26px;
        padding: 0 10px;
    }

    &.zero-theme-button {
        &.zero-level-main {
            background: $o-type-primary;
            color: white;
            border-color: $o-type-primary;

            &:hover,
            &:focus {
                background: darken($o-type-primary, 10%);
                border-color: darken($o-type-primary, 10%);
            }
        }

        &.zero-level-danger {
            background: $o-type-error;
            border-color: $o-type-error;
            color: white;

            &:hover,
            &:focus {
                background: darken($o-type-error, 10%);
                border-color: darken($o-type-error, 10%);
            }
        }

        &[disabled] {
            cursor: not-allowed;
            color: $o-tips-color;

            &:hover {
                border-color: $o-tips-color;
            }
        }
    }

    &.zero-theme-link {
        &.zero-level-danger {
            color: $o-type-error;

            &:hover,
            &:focus {
                color: darken($o-type-error, 10%);
            }
        }

        &[disabled] {
            cursor: not-allowed;
            color: $o-tips-color;
        }
    }

    &.zero-theme-text {
        &.zero-level-main {
            color: $o-type-primary;

            &:hover,
            &:focus {
                color: darken($o-type-primary, 10%);
            }
        }

        &[disabled] {
            cursor: not-allowed;
            color: $o-tips-color;
        }

        &.zero-level-danger {
            color: $o-type-error;

            &:hover,
            &:focus {
                color: darken($o-type-error, 10%);
            }
        }
    }

    &.zero-loading-true {
        color: $o-tips-color;
        cursor: default;
    }

    .zero-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $o-type-primary $o-type-primary $o-type-primary transparent;
        border-style: solid;
        border-width: 2px;
        animation: zero-spin 1s infinite linear;
    }

    @keyframes zero-spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
}
</style>
