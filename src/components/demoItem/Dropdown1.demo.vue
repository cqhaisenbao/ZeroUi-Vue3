<demo>
常规用法
</demo>
<template>
    <Dropdown>
        <template #button>
            <button class="o-dropdown-button">Dropdown</button>
        </template>
        <template #default>
            <DropdownItem>西游记</DropdownItem>
            <DropdownItem>三国演义</DropdownItem>
            <DropdownItem>红楼梦</DropdownItem>
            <DropdownItem>水浒传</DropdownItem>
        </template>
    </Dropdown>
    <span style="margin-right: 20px"></span>
    <Dropdown trigger=click>
        <template #button>
            <button class="o-dropdown-button">Dropdown</button>
        </template>
        <template #default>
            <DropdownItem>西游记</DropdownItem>
            <DropdownItem>三国演义</DropdownItem>
            <DropdownItem>红楼梦</DropdownItem>
            <DropdownItem>水浒传</DropdownItem>
        </template>
    </Dropdown>
</template>

<script lang="ts">
import Dropdown from "../../lib/Dropdown.vue";
import DropdownItem from "../../lib/DropdownItem.vue";

export default {
    name: 'Dropdown1Demo',
    components: {Dropdown, DropdownItem},
    setup() {
    }
};
</script>
