<template>
    <div class="zero-tabs">
        <div class="zero-tabs-nav">
            <div :class="{selected : t.name === selected}" @click="select(t.name)" class="zero-tabs-nav-item" v-for="t in titlesAngNames" :key="t.name">{{ t.title }}</div>
        </div>
        <div class="zero-tabs-content">
            <component class="zero-tabs-content-item" :is="current" :key="selected"/>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import Tab from "./Tab.vue";

export default defineComponent({
    name: "Tabs",
    props: {
        selected: String
    },
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach(tag => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子标签必须是Tab');
            }
        });
        const titlesAngNames = defaults.map(tag => {
            return {
                title: tag.props.title,
                name: tag.props.name
            };
        });
        const current = computed(() => {
            return defaults.filter(tag => tag.props.name === props.selected)[0];
        });
        const select = (name: string) => {
            context.emit('update:selected', name);
        };
        return {defaults, titlesAngNames, current, select};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

.zero-tabs {
    &-nav {
        display: flex;
        color: $o-main-color;
        border-bottom: 1px solid $o-border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $o-type-primary;
            }
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
