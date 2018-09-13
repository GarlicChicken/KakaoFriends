<template>
    <div id="main">
        <!-- 상품 정보 출력 -->
        <ul id="products">
            <!-- listCount만큼 목록을 출력하고 스크롤했을 때 listCount를 10만큼 늘림 -->
            <li class="product inline" v-for="product, index in products" :key="product.id" v-if="index < listCount">
                <img class="thumbnail linkTo" :src="product.url" :alt="product.name" @click="showProductInfo(product, index)">
                <div class="caption">
                    <p class="description linkTo" @click="showProductInfo(product, index)">{{product.content}}</p>
                    <p class="NameAndPrice">{{product.name}} ${{product.price}}</p>
                    <button v-if="product.choice===false" class="addMylist linkTo" @click="MylistUpdate(product, index)">My list</button>
                    <button v-else class="delMylist linkTo" @click="MylistUpdate(product, index)">My list</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['products','listCountMax'],
    data() {
        return {
            listCount:10
        }
    },
    created () {
        //페이지가 생성될 때window에 scroll event 부착
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        //페이지를 떠나서 DOM이 사라질 때 event 삭제
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        //Mylist 버튼 활성화에 따라 Mylist에 추가하거나 삭제
        MylistUpdate(product, index){
            if (product['choice']===false){
                this.$emit('MylistUpdate','add',product, index);
            }else{
                this.$emit('MylistUpdate','del',product, index);
            }
        },
        showProductInfo(product, index){
            this.$emit('showProductInfo', product, index)
        },
        //스크롤 위치를 %로 가져와 99%에 위치했을 때 리스트를 추가로 불러오는 함수
        handleScroll(){
            let scrollPosition = (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
            if(scrollPosition > 99 && this.listCount < this.products.length){
                this.listCount = this.listCount + 10;
            }
        }
    }
}
</script>

<style>
    #main{margin-top: 90px;}
    /* products */
    #products{
        list-style: none;
        max-width: 1140px;
        padding :0px;
        margin: auto;
    }
    .product{
        vertical-align: top;
        list-style: none;
        margin:20px;
        animation-duration: 1s;
        animation-name: slidein;
    }
    @keyframes slidein {
    /* Product animation */
        from {
            margin-bottom: 10%;
            opacity: 0.1;
        }to {
            margin-bottom: 20px;
            opacity: 1;
        }
    }
    .thumbnail{
        width: 340px;
        height: 340px;
        border-radius: 7px;
    }
    .caption{
        width: 340px;
        line-height:150%;
        font-size: 0.85rem;
        text-align: left;
    }
    .NameAndPrice{
        color: hotpink;
    }
    .addMylist, .delMylist {
        padding: 5px 12px 5px 12px;
        border-radius: 3px;
        border: 1px solid;
    }
    .addMylist{
        background-color: white;
    }
    .delMylist {
        background-color: hotpink;
        border-style: hotpink;
        color: white;
    }
    @media (max-width: 860px) {
        #main{
            text-align: center;
            margin-top: 60px;
        }
    }
</style>
