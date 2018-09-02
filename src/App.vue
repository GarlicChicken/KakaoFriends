<template>
  <div id="app">
    <!-- Header와 Mylist, totalpirce 공유 -->
    <Header :Mylist="Mylist" :totalprice="totalprice"></Header>
    <!-- Loading Animation -->
    <div v-show="!isLoading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
    <!-- router-view 영역(Main, Collection)에서는 MylistUpdate,
    showProdcutInfo로데이터를 주고 받고 products, Mylist를 공유 -->
    <router-view @MylistUpdate="MylistUpdate" @showProductInfo="showProductInfo" :products="products" :Mylist="Mylist"/>
        <!-- product info -->
        <modal v-show="showModal" @close="showModal = false">
            <div slot="header">
                <img class="infoMainImage" :src="infoImageURL[0]">
                <div class="infoHeaderContent">
                    <h2>{{productInfo['name']}}</h2>
                    <p>$ {{productInfo['price']}}</p>
                    <p class="infoDescription">{{productInfo['content']}}</p>
                    <button v-if="productInfo['choice']===false" class="infoAddmylist linkTo" @click="MylistUpdate('add', productInfo, productsIndex)">My list</button>
                    <button v-else class="infoDelmylist linkTo" @click="MylistUpdate('del', productInfo, productsIndex)">My list</button>
                    <button class="infoBuybutton linkTo" @click="buyProduct(productInfo, productsIndex)">Buy</button>
                </div>
            </div>
            <div slot="body" class="infoContent">
                <span class="infoDetailSub">DETAILS</span>
                <img class="infoDetailImage" v-show="image!=infoImageURL[0]" v-for="image in infoImageURL" :src="image">
            </div>
            <div slot="footer">
            </div>
        </modal>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Modal from './components/common/Modal.vue'// Modal(Popup) for Product information
import db from '@/firebase/init'
export default {
    data() {
        return {
            Mylist: [],
            listKey: [],
            products: [],
            isLoading: false,
            totalprice: 0,
            // Modal
            showModal: false,
            productInfo: [],
            infoImageURL: [],
            productsIndex: null
        }
    },
    components:{
        'Header': Header,
        'Footer': Footer,
        'Modal': Modal
    },
    //firebase에서 db를 가져와 상품 정보를 배열(products)에 담음
    created(){ 
        let ref = db.collection("products").orderBy("id", "asc")
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                let doc = change.doc
                this.products.push({
                    id: doc.data().id,
                    name: doc.data().name,
                    content : doc.data().content,
                    price: doc.data().price,
                    url: doc.data().url+'1.jpg',
                    choice: false
                })
            })
            this.isLoading=true;
        })
    },
    methods:{
        //상품 정보 창에서 Buy 버튼을 누르면 Mylist에 추가한 뒤 Mylist로 이동
        buyProduct(product, index){
            this.showModal = false;
            if(product['choice'] === true){
                this.$router.push('/KakaoFriends/Collection');
            }else{
                this.MylistUpdate('add', product, index);
                this.$router.push('/KakaoFriends/Collection');
            }
        },
        //Mylist 추가, 삭제를 담당하는 함수
        MylistUpdate(res, product, index){ 
            if (res === "add"){
                this.products[index]['choice'] = true;
                this.totalprice =  this.totalprice + product.price;
                this.Mylist.push(product);
            }else{
                this.products[index]['choice'] = false;
                this.totalprice = this.totalprice - product.price;
                for (var key in this.Mylist){
                if (this.Mylist[key].id === product.id){
                    this.Mylist.splice(key, 1);
                    break;
                }
                }
            }
        },
        // Modal창으로 상품 정보를 띄우는 함수
        showProductInfo(product, index){
            this.showModal = true;
            this.productInfo = product;
            this.productsIndex = index;
            // DEATIL 이미지를 가져옴
            this.infoImageURL[0] = this.productInfo['url'].replace('MODEL','MAIN');
            for (var i=1; i < 5; i++){
                this.infoImageURL[i] = this.infoImageURL[0].replace('MAIN_C_00001','DETAIL_0000'+i);
            }
        }
    }
}
</script>

<style>
    body{
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        margin: 0px
    }
    a, a:active,a:visited{
        text-decoration: none;
        color:#666
    }
    a:hover{
        color:#111;
    }
    /* 전역으로 사용하는 CSS */
    .linkTo{ cursor: pointer; }
    .inline{ display: inline-block; }
    .grey{ color:#aaa; }

    /* 상품 정보(Modal)에서 사용하는 CSS */
    .infoMainImage{
        width: 620px;
        height: 620px;
    }
    .infoHeaderContent{
        padding: 20px 30px;
    }
    .infoDescription{
        padding-bottom: 20px;
    }
    .infoDetailSub{
        font-weight: bold;
    }
    .infoDetailImage{
        margin: 15px 0px;
        width:100%;
        height:100%;
    }
    .infoAddmylist,
    .infoDelmylist,
    .infoBuybutton{
        font-weight: bold;
        background-color: white;
        padding: 12px 0px;
        width:49%;
        border: 1px solid;
        border-radius: 3px;
    }
    .infoDelmylist{
        color:white;
        background-color: hotpink;
        border: 1px hotpink solid;
    }
    @media (max-width: 860px) {
        .infoMainImage, .infoDetailImage{
            width:100%;
            height:100%;
        }
    }
    /* loading animation CSS source 'http://tobiasahlin.com/spinkit/' */
    .spinner {
        margin: auto;
        margin-top: 20%;
        margin-bottom: 20%;
        width: 70px;
        text-align: center;
    }
    .spinner > div {
        width: 20px;
        height: 20px;
        background-color: rgb(201, 201, 201);
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }
    .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
        .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
    }
    @keyframes sk-bouncedelay {
        0%, 80%, 100% { 
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% { 
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
</style>
