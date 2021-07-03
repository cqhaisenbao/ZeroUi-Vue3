<template>
    <div class="o-collapse-item" :class="{isActive}">
        <div class="o-collapse-item-header" :class="{disabled}" @click="handleHeaderClick">
            <slot name="header"></slot>
            <Icon name="icon-menuright"/>
        </div>
        <div v-show="isActive" class="o-collapse-item-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from 'vue';
import Icon from "./Icon.vue";
import {emitter} from './Collapse.vue';

export default defineComponent({
    name: "CollapseItem",
    components: {Icon},
    props: {
        name: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        }
    },
    setup(props, context) {
        const isActive = computed(() => {
            return inject('collapse').activeName.findIndex(item => item === props.name) >= 0;
        });
        const handleHeaderClick = () => {
            if (props.disabled) {
                return;
            }
            emitter.emit('itemClick', props.name);
        };
        return {isActive, handleHeaderClick};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-collapse-item {

    .o-collapse-item-header {
        display: flex;
        align-items: center;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        color: #303133;
        cursor: pointer;
        border-bottom: 1px solid #ebeef5;
        font-size: 13px;
        font-weight: 600;
        transition: border-bottom-color .3s;
        outline: none;

        &.disabled {
            cursor: not-allowed;
            color: rgba(0, 0, 0, .25);

            svg {
                fill: rgba(0, 0, 0, .25);
            }
        }

        svg {
            margin: 0 8px 0 auto;
            transition: transform .3s;
            font-weight: 300;
        }
    }

    .o-collapse-item-body {
        overflow: hidden;
        box-sizing: border-box;
        border-bottom: 1px solid #ebeef5;
        padding-bottom: 25px;
        font-size: 13px;
        color: #303133;
        line-height: 2;
    }

    &.isActive {

        .o-collapse-item-header {
            border-bottom-color: transparent;

            svg {
                transform: rotate(90deg);
            }
        }
    }
}
</style>
