<template>
    <div class="zero-tabs">
        <div class="zero-tabs-nav" ref="container">
            <div :class="{selected : t.name === selected}" @click="select(t.name)"
                 class="zero-tabs-nav-item" v-for="(t,index) in titlesAngNames" :key="t.name"
                 :ref="el=>{if(el) navItems[index]=el}"
            >{{ t.title }}
            </div>
            <div class="zero-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="zero-tabs-content">
            <component class="zero-tabs-content-item" :is="current" :key="selected"/>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUpdated, ref, watch} from 'vue';
import Tab from "./Tab.vue";

export default defineComponent({
    name: "Tabs",
    props: {
        selected: String
    },
    setup(props, context) {
        const defaults = context.slots.default();
        const indicator = ref<HTMLDivElement>(null);
        const navItems = ref<HTMLDivElement[]>([]);
        const container = ref<HTMLDivElement[]>([]);
        const x = () => {
            const divs = navItems.value;
            const result = divs.find(div => div.classList.contains('selected'));
            const {width} = result.getBoundingClientRect();
            indicator.value.style.width = width + 'px';
            const {left: left1} = container.value.getBoundingClientRect();
            const {left: left2} = result.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + 'px';
        };
        onMounted(x);
        onUpdated(x);
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
            return defaults.find(tag => tag.props.name === props.selected);
        });
        const select = (name: string) => {
            context.emit('update:selected', name);
        };
        return {defaults, titlesAngNames, current, select, navItems, indicator, container};
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $o-type-primary;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all .25s;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
