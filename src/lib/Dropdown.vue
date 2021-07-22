<template>
    <div class="o-dropdown">
        <div class="o-dropdown-link" @mouseenter="showDropdownItem" @mouseleave="hiddenDropdownItem">
            <slot></slot>
        </div>
        <slot name="dropdown" v-if="false"></slot>
        <ul v-if="dropdownItemVisible" class="o-dropdown-wrapper">
            <li v-for="item in dropdowns" :key="item" class="dropdown-item">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: "Dropdown",
    props: {},
    setup(props, context) {
        const dropdowns = context.slots.dropdown().map(item => item.children);
        const dropdownItemVisible = ref(false);
        const showDropdownItem = () => dropdownItemVisible.value = true;
        const hiddenDropdownItem = () => dropdownItemVisible.value = false;
        return {dropdowns, dropdownItemVisible, showDropdownItem, hiddenDropdownItem};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-dropdown-link {
    cursor: pointer;
    color: #409eff;

    svg {
        margin-left: 5px;
        fill: #409eff;
    }
}

.o-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;

    ul {
        position: absolute;
        transform-origin: center top 0;
        z-index: 2029;
        top: 20px;
        left: 0;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

        .dropdown-item {
            list-style: none;
            line-height: 36px;
            padding: 0 20px;
            margin: 0;
            font-size: 14px;
            color: #606266;
            cursor: pointer;
            outline: none;
            white-space: nowrap;

            &:hover {
                background-color: #ecf5ff;
                color: #66b1ff;
            }
        }

        &::after {
            content: "";
            position: absolute;
            border-color: #555 transparent transparent transparent;
            border-style: solid;
            border-width: 6px;
            top: 0;
            left: 50%;
            transform: translate(-50%, -100%) rotate(180deg);
        }
    }
}
</style>
