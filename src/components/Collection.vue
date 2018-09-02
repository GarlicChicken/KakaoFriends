<template>
    <div id="collection">
        <div id="checkoutSub">
            <span id="mylistTitle">My list</span>
            <div id="listSub" class="inline"><span class="grey">Delivery</span><br/>Total</div>
            <div id="listPrice" class="inline"><span class="grey">$ 00.00</span><br/>$ {{totalprice.toFixed(2)}}</div>
            <button id="checkoutButton" class="linkTo">CHECK OUT</button>
        </div>
        <div id="noItem" class="inline" v-show="Mylist.length===0">
            <div id='noItemImage' style='background-image:url(https://us.kakaofriends.com/img/img_emoticon.ae3b0ae7.png)'></div>
            There is no item added
        </div>
        <!-- Collection Body -->
        <ul id="collectionList">
            <li class="list" v-for="product, index in Mylist">
                <input :id="'listCheck'+index" type="checkbox" v-model="checked[index]">
                <label :for="'listCheck'+index"></label>
                <img class="mylistImage linkTo" :src="product.url"  @click="showProductInfo(product)">
                <div class="listContent inline">
                    <span class="mylistProductName linkTo"  @click="showProductInfo(product)">{{product.name}}</span><br/>
                    <span class="grey">${{product.price}} X {{productCount[index]}}</span>
                </div>
                <div class="mylistControl">
                    <select class="productCount" v-model="productCount[index]">
                        <option v-for="n in 10" v-bind:value="n">{{n}}</option>
                    </select>
                    <div class="totalPrice inline">${{product.price * productCount[index]}}</div>
                    <span class="linkTo grey" id="removeProduct" @click="delMylist(product)"><i class="fas fa-times"></i></span>
                </div>
                <!--Mobile Controller call button-->
                <span class="mobileContorl linkTo" @click="MobileControl(product)"><i class="fas fa-ellipsis-v grey"></i></span>
                <!-- Mobile Controller -->
                <MobileController v-show="showMobileController" @close="showMobileController = false">
                    <div slot="top">
                        <!-- top button(plus, minus and count) -->
                        <div id="mobileControlTop">
                            <div class="mobileBtn linkTo" @click="MobileControl(mobileProduct, 'minus')"><i class="fas fa-minus"></i></div>
                            <div class="mobileBtn">
                                <span v-if="mobileProductCount===0">{{productCount[mylistIndex]}}</span>
                                <span v-else>{{mobileProductCount}}</span>
                            </div>
                            <div class="mobileBtn linkTo" @click="MobileControl(mobileProduct, 'plus')"><i class="fas fa-plus"></i></div>
                            <hr id="mobileLine"/>
                            <div class="mobileOkBtn linkTo" @click="MobileControl(mobileProduct, 'ok')">OK</div>
                        </div>
                    </div>
                    <div slot="bottom">
                        <!-- bottom button(delete) -->
                        <div id="mobileControlBottom" class="linkTo"  @click="delMylist(mobileProduct, 'mobile')">
                            Delete
                        </div>
                    </div>
                </MobileController>
                <hr v-if="index+1 < Mylist.length"/>
            </li>
        </ul>
    </div>
</template>

<script>
import MobileController from './common/MobileController.vue' // Mobile에서 Mylist를 제어하는 Contoroller
export default {
    props:['Mylist','products'],
    data(){
        return{
            totalprice: 0,
            checked: [],
            productCount: [],
            // Mobile contoroller
            showMobileController: false,
            mobileProduct: [],
            mobileProductCount: 0,
            mylistIndex: null
        }
    },
    components:{
        'MobileController': MobileController
    },
    // Mylist를 띄울 때 1개씩 checked
    created(){
        for(var key in this.Mylist){
            this.checked[key] = true;
            this.productCount[key] = 1;
            this.totalprice = this.totalprice + this.Mylist[key].price;
        }
    },
    // 변화를 실시간으로 감지하고 실행하는 인스턴스 사이클
    updated(){
        // mobile controller에서 나갈 때 count값을 0으로 초기화
        if(this.showMobileController === false){
            this.mobileProductCount = 0;
        }
        // check한 상품이 totalprice에 반영
        let checked = 0;
        for(var key in this.Mylist){
            if (this.checked[key] === true){
                checked = checked + this.Mylist[key].price * this.productCount[key];
            }
        }
        this.totalprice = checked;
    },
    methods:{
        //삭제할 경우 App으로 보내서 Mylist에서 삭제 처리
        delMylist(product, res){
            var index = this.findIndex(product.id, 'products');
            var key = this.findIndex(product.id, 'mylist');
            this.productCount.splice(key, 1);
            this.$emit('MylistUpdate', 'del', product, index);
            this.totalprice = this.totalprice - product.price;
            if(res ==='mobile'){
                this.showMobileController = false;
            }
        },
        //Mylist에서도 품목 정보를 볼 수 있도록 App에 Modal(Product 정보)를 요청하는 함수
        showProductInfo(product){
            var index = this.findIndex(product.id, 'products');
            this.$emit('showProductInfo', product, index);
        },
        //모바일 화면에서 product 수량 변경, 삭제 등이 가능한 창을 띄우고 명령을 수행하는 함수
        MobileControl(product, res){
            var key = this.findIndex(product.id, 'Mylist');
            if (this.showMobileController === false){
                this.showMobileController = true;
                this.mobileProduct = product;
                this.mylistIndex = key;
            }else{
                if(this.mobileProductCount === 0){
                    this.mobileProductCount = this.productCount[key];
                }
                if(res === 'plus'){
                    this.mobileProductCount = this.mobileProductCount + 1;
                }else if(res === 'minus'){ 
                    this.mobileProductCount = this.mobileProductCount - 1;
                }else{
                    this.productCount[key] = this.mobileProductCount;
                    this.mobileProductCount = 0;
                    this.showMobileController = false;
                }
            }
        },
        // products 또는 Mylist에서 인덱스(key)를 찾아 return 해주는 함수
        findIndex(id, res){
            if(res === 'products'){
                for (var key in this.products){
                    if(this.products[key].id === id){
                        return key;
                    }
                }
            }else{
                for (var key in this.Mylist){
                    if(this.Mylist[key].id === id){
                        return key;
                    }
                }
            }
        }
    }
}
</script>

<style>
    #collection{
        text-align: center;
        margin-top: 90px;
    }
    #collectionList{
        list-style: none;
        text-align: left;
        display: inline-block;
    }
    #checkoutSub{
        padding: 10px 0px 15px 0px;
        border-bottom: #e4e4e4 1px;
        border-bottom-style: solid;
    }
    /* top content */
    #mylistTitle{
        font-size: 2.5em;
        margin: 0px 30px 0px 150px;
    }
    #listSub, #listPrice{
        line-height: 150%;
        text-align: left;
        margin: 0px 30px
    }
    #listPrice{
        width : 65px;
    }
    #checkoutButton{
        margin: 0px 50px;
        background-color: rgb(0, 0, 0);
        color:white;
        border-style: none;
        border-radius: 4px;
        vertical-align: bottom;
        font-size: 1em;
        height: 45px;
        width: 200px;
    }
    hr{
        margin: 15px 0px 15px 37px;
        width: 95.5%;
        opacity: 0.3;
    }
    /* list content */
    .list{
        margin-bottom: 8px;
    }
    .mylistImage{
        vertical-align: middle;
        width :140px;
        height: 140px;
    }
    .mylistControl{
        display: inline-block;
    }
    .productCount{
        width: 50px;
        height: 25px;
        margin: 0px 30px
    }
    .listContent{
        margin: 20px;
        width: 250px;
    }
    .totalPrice{
        width: 40px;
        margin: 0px 60px 0px 30px;
    }
    /* noItem */
    #noItem{
        margin: 50px;
        text-align: center;
    }
    #noItemImage{
        background-position:-200px -220px;
        background-size:400px;
        width:180px;
        height:170px;
    }
    /* Mobile Controller */
    .mobileContorl{
        display: none;
    }
    #mobileControlTop{
        font-size: 1.2em;
        line-height: 150%;
        text-align: center;
        padding-bottom: 0px;
    }
    #mobileControlBottom{
        font-size: 1.2em;
        padding: 20px 0px;
        width:100%;
        text-align: center;
    }
    .mobileBtn{
        padding: 15px 0px;
        display: inline-block;
        width:32%;
    }
    .mobileOkBtn{
        padding: 15px 0px;
        width:100%;
    }
    #mobileLine{
        width:100%;
        margin: 0;
        padding: 0;
    }
    @media (max-width: 860px) {
        #collection{
            margin-top: 60px;
        }
        #collectionList{
            display: block;
        }
        #collectionList{
            margin-top: 15px;
            padding: 0;
        }
        #mylistTitle{
            display: none;
        }
        #listSub, #listPrice{
            float: left;
            width:29%;
            margin: 5px 0px 0px 15px;
        }
        #checkoutButton{
            width: 31%;
            margin: 5px 0px 0px 0px;
        }
        .list{
            margin-left: 2%;
            width:93%;
        }
        .listContent{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 0px;
            width: 50%;
        }
        .mylistProductName{
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .mylistImage{
            width:75px;
            height:75px;
        }
        .mylistControl{
            display: none;
        }
        .mobileContorl{
            float: right;
            margin-top : 25px;
            display: inline-block;
        }
    }
    /* checkbox CSS source 'https://codepen.io/zFunx/pen/dWbevd' */
    input[type=checkbox] + label {
        display: inline-block;
        margin: 0.2em;
        cursor: pointer;
        padding: 0.2em;
    }
    input[type=checkbox] {
        display: none;
    }
    input[type=checkbox] + label:before {
        content: "\2713";
        border: 0.1em solid rgb(49, 49, 49);
        border-radius: 1em;
        display: inline-block;
        width: 1em;
        height: 1em;
        padding-left: 0.2em;
        padding-bottom: 0.3em;
        margin-right: 0.2em;
        vertical-align: bottom;
        color: transparent;
        transition: .2s;
    }
    input[type=checkbox] + label:active:before {
        transform: scale(0);
    }
    input[type=checkbox]:checked + label:before {
        background-color: rgb(49, 49, 49);
        border-color: rgb(49, 49, 49);
        color: #fff;
    }
    input[type=checkbox]:disabled + label:before {
        transform: scale(1);
        border-color: #aaa;
    }
    input[type=checkbox]:checked:disabled + label:before {
        transform: scale(1);
        background-color: #bfb;
        border-color: #bfb;
    }
 
</style>
