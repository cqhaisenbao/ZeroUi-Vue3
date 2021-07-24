<template>
    <li class="o-dropdown-item">
        <slot></slot>
    </li>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: "DropdownItem",
    props: {},
    setup(props, context) {

    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.o-dropdown-item {
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: none;

    &:hover {
        cursor: pointer;
        color: #1e2125;
        background-color: #f8f9fa;
    }
}
</style>
