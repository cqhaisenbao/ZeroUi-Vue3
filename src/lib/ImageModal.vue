<template>
    <div class="o-imagemodal-wrapper">
        <slot v-if="false" ref="imgRef" @click="imgClick"></slot>
        <component class="myImg" :is="$slots.default" @click="imgClick" ref="imgRef"></component>
        <teleport to="body">
            <div ref="modalRef" class="modal">
                <span @click="closeModal" ref="closeRef" class="o-imageModal-close">&times;</span>
                <img ref="modalImgRef" class="modal-content" alt="" src="">
            </div>
        </teleport>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: "ImageModal",
    props: {
        //放大展示图片路径
        modalImgSrc: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const modalRef = ref();
        const imgRef = ref();
        const modalImgRef = ref();
        const closeRef = ref();

        const imgClick = (e: any) => {
            modalRef.value.style.display = "block";
            modalImgRef.value.src = props.modalImgSrc || e.target.src;
        };
        const closeModal = () => {
            modalRef.value.style.display = "none";
        };

        return {modalRef, imgRef, modalImgRef, imgClick, closeRef, closeModal};
    }
});
</script>

<style lang="scss">

.o-imagemodal-wrapper {
    .myImg {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        width: 100%;
        max-width: 300px;

        &:hover {
            opacity: 0.7;
        }
    }
}

.modal {
    display: none;
    position: fixed;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
}

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

.modal-content {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
}

@keyframes zoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
}

.o-imageModal-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    &:hover,&:focus{
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }
}

@media only screen and (max-width: 700px) {
    .modal-content {
        width: 100%;
    }
}
</style>
