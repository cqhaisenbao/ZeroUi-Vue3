<template>
    <span class="o-radio-wrapper">
        <label class="o-radio">
            <span class="o-radio-input">
                <span class="o-radio-inner" :class="{'is-checked':label===value}"></span>
                <input @click="select" type="radio" :value="label" class="o-radio-original">
            </span>
            <span class="o-radio-label" :class="{'is-checked':label===value}">
            <slot/>
        </span>
        </label>
    </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: "Radio",
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        const select = (e) => {
            if (e.target.value === props.value) {
                return;
            }
            context.emit('update:value', e.target.value);
        };
        return {select};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-radio-wrapper {
    .o-radio {
        color: #606266;
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        outline: none;
        font-size: 14px;
        margin-right: 30px;
        -moz-user-select: none;
        -webkit-user-select: none;

        .o-radio-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;

            .o-radio-inner {
                border: 1px solid $o-border-color;
                border-radius: 100%;
                width: 14px;
                height: 14px;
                background-color: #fff;
                position: relative;
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;

                &:after {
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    background-color: #fff;
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: transform .15s ease-in;
                }

                &.is-checked {
                    border-color: $o-type-primary;
                    background-color: rgb(64, 158, 255);

                    &:after {
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            }

            .o-radio-original {
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
            }
        }
    }

    .o-radio-label {
        font-size: 14px;
        padding-left: 10px;

        &.is-checked {
            color: $o-type-primary-dark;
        }
    }
}

</style>
