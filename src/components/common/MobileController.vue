<!-- dafault code source https://vuejs.org/v2/examples/modal.html -->
<template>
    <transition name="Mobile">
        <div class="Mobile-mask">
            <div class="Mobile-wrapper">
                <div class="Mask" @click="$emit('close')"></div>
                <div class="Mobile-top-container">
                    <div class="Mobile-top">
                        <slot name="top">
                            default
                        </slot>
                    </div>
                </div>
                <div class="Mobile-bottom-container">
                    <div class="Mobile-bottom">
                        <slot name="bottom">
                            default
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.Mobile-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.137);
    display: table;
}
.Mobile-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.Mobile-wrapper {
    width:100%;
    opacity: 1;
    display: table-cell;
    vertical-align: bottom;
}
.Mask{
    opacity: 0;
    width:100%;
    height:100%;
    background-color: white;
}
.Mobile-top-container, .Mobile-bottom-container {
    margin: auto;
    position: relative;
    width: 96%;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 7px;
}
</style>
