<template>
    <div class="o-collapse-item" :class="{isActive:isActive}">
        <div class="o-collapse-item-header" @click="handleHeaderClick">
            <slot name="heading"></slot>
            <Icon :class="{isActive:isActive}" name="icon-menuright"/>
        </div>
        <div v-show="isActive" class="o-collapse-item-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import Icon from "./Icon.vue";

export default defineComponent({
    name: "CollapseItem",
    components: {Icon},
    props: {
        selected: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    inject: ['collapse'],
    setup(props, context) {
        const isActive = ref(false);
        const click = () => {
            context.emit('itemClick', context);
        };
        const setActive = () => isActive.value = true;
        const handleHeaderClick=()=>{
            console.log('handleHeaderClick');
            this.dispatch('ElCollapse', 'item-click', this);
        }
        return {isActive, click,setActive,handleHeaderClick};
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
        font-weight: 500;
        transition: border-bottom-color .3s;
        outline: none;

        &.isActive {
            border-bottom-color: transparent;
        }

        svg {
            margin: 0 8px 0 auto;
            transition: transform .3s;
            font-weight: 300;

            &.isActive {
                transform: rotate(90deg);
            }
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
}
</style>
