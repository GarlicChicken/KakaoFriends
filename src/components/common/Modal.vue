<!-- dafault code source https://vuejs.org/v2/examples/modal.html -->
<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <button class="closeModal linkTo" @click="$emit('close')">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-container">
                    <button id="mobileCloseModal"class="closeModal linkTo" @click="$emit('close')">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-header">
                        <slot name="header" >
                            default header
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            default bodty
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            footer
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
/* 레이아웃은 기본값 그대로 사용하고 반응형으로 미디어쿼리를 만들고 CSS 일부분 수정 */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    position: relative;
    max-width: 620px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    font-family: Helvetica, Arial, sans-serif;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none; 
}
.modal-container::-webkit-scrollbar { 
    display: none; 
}
#mobileCloseModal{
    display: none;
}
.modal-header{
    text-align: center;
    padding: 0px 0px ;
}
.modal-body {
    border-top: 1px rgb(187, 187, 187) solid;
    margin: 20px 30px;
    padding: 20px 0px;
}
.closeModal{
    display: inline-block;
    position: absolute;
    right: 30px;
    top: 20px;
    width : 40px;
    height: 40px;
    border-radius: 50px;
    border: none;
    opacity: 0.7;
    background-color: rgb(0, 0, 0);
    font-size: 1.3em;
    color: white;
}
@media (max-width: 860px) {
    .modal-container{
        width: 100%;
    }
    #mobileCloseModal{
        position: fixed;
        right: 15px;
        top: 10px;
        display: inline-block;
    }
    .closeModal{
        display: none;
    }
}
</style>
