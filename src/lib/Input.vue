<template>
    <div class="o-input" :class="{'is-disabled':disabled,'el-input--suffix':clearable || type==='password' || suffixIcon,'el-input--prefix':prefixIcon}">
        <input v-bind="$attrs" v-model="childInputValue" :type="childInputType" class="o-input-inner" @input="inputChange" :disabled="disabled" :placeholder="placeholder">
        <span v-if="clearable && childInputValue" class="o-input-icon-wrapper">
            <Icon @click="clearInputValue" name="icon-error"/>
       </span>
        <span v-if="type==='password' && childInputValue" class="o-input-icon-wrapper">
            <Icon @click="changeInputType" name="icon-preview"/>
       </span>
        <span v-if="maxlength" class="o-input-count-wrapper">{{ countNum }}/{{ maxlength }}</span>
        <span v-if="prefixIcon" class="o-input-icon-prefix">
            <Icon :name="prefixIcon"/>
        </span>
        <span v-if="suffixIcon" class="o-input-icon-suffix">
            <Icon :name="suffixIcon"/>
        </span>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watchEffect} from 'vue';
import Icon from "./Icon.vue";

export default defineComponent({
    name: "Input",
    inheritAttrs: false,
    components: {Icon},
    props: {
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        inputValue: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: String
        },
        prefixIcon: {
            type: String
        },
        suffixIcon: {
            type: String
        }
    },
    setup(props, context) {
        const inputChange = () => {
            context.emit('update:inputValue', childInputValue.value);
        };
        const clearInputValue = () => {
            childInputValue.value = '';
            context.emit('update:inputValue', '');
        };
        const changeInputType = () => {
            childInputType.value = childInputType.value === 'text' ? 'password' : 'text';
        };
        const countNum = computed(() => {
            return childInputValue.value.length || '0';
        });
        const childInputValue = ref();
        watchEffect(() => {
            childInputValue.value = props.inputValue;
        });
        const childInputType = ref(props.type);
        watchEffect(() => {
            if (countNum.value > props.maxlength) {
                childInputValue.value = childInputValue.value.slice(0, props.maxlength * 1);
            }
        });
        return {inputChange, childInputValue, clearInputValue, childInputType, changeInputType, countNum};
    }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

%o-input-icon {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 20px;
    fill: #999999;
}

.o-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;

    .o-input-inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        width: 100%;

        &::placeholder {
            color: #c0c4cc;
        }

        &:hover {
            border: 1px solid #bdbec1;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            transition-property: border-color;
            transition-duration: 0.2s;
            transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
            transition-delay: 0s;
            cursor: pointer;
        }

        &:focus {
            outline: none;
            border-color: $o-type-primary;
        }
    }

    .o-input-icon-wrapper {
        position: absolute;
        height: 40px;
        right: 10px;
        top: 0;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            fill: #d2d0d0;
            font-size: 15px;

            &:hover {
                fill: #82848a;
            }
        }
    }

    .o-input-icon-prefix {
        @extend %o-input-icon;
        left: 0;
        margin-left: 10px;
        margin-right: 5px;
    }

    .o-input-icon-suffix {
        @extend %o-input-icon;
        right: 0;
        margin-left: 5px;
        margin-right: 10px;
    }

    .o-input-count-wrapper {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        right: 5px;
        height: 40px;
        color: #909399;
        font-size: 12px;
    }

    &.is-disabled {
        .o-input-inner {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }

    &.el-input--suffix {
        .o-input-inner {
            padding-right: 30px;
        }
    }

    &.el-input--prefix {
        .o-input-inner {
            padding-left: 40px;
        }
    }
}
</style>
