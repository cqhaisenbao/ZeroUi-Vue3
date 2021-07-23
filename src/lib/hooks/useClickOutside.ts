import {ref, onMounted, onUnmounted, Ref} from 'vue';

const useClickOutside = (elementRef: Ref<undefined | HTMLElement>, elementRef2: Ref<undefined | HTMLElement>) => {
    const isClickOutside = ref(false);
    const handler = (e: MouseEvent) => {
        if (elementRef.value && !elementRef2.value) {
            isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement);
        } else if (elementRef.value && elementRef2.value) {
            isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement) && !elementRef2.value.contains(e.target as HTMLElement);
        }
    };
    onMounted(() => {
        document.addEventListener('click', handler);
    });
    onUnmounted(() => {
        document.removeEventListener('click', handler);

    });
    return isClickOutside;
};

export default useClickOutside;
