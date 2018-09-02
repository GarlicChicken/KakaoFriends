<template>
    <div id="main">
        <ul id="Products">
            <li class="Product inline" v-for="product, index in products" :key="product.id">
                <img class="thumbnail linkTo" :src="product.url" :alt="product.name" @click="showProductInfo(product, index)">
                <div class="caption">
                    <p class="description linkTo" @click="showProductInfo(product, index)">{{product.content}}</p>
                    <p class="NameAndPrice">{{product.name}} ${{product.price}}</p>
                    <span v-if="product.choice===false" class="addMylist linkTo" @click="MylistUpdate(product, index)">My list</span>
                    <span v-else class="delMylist linkTo" @click="MylistUpdate(product, index)">My list</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['products'],
    methods:{
        MylistUpdate(product, index){
            if (product['choice']===false){
                this.$emit('MylistUpdate','add',product, index);
            }else{
                this.$emit('MylistUpdate','del',product, index);
            }
        },
        showProductInfo(product, index){
            this.$emit('showProductInfo', product, index)
        }
    }
}
</script>

<style>
    #main{
        margin-top: 90px;
        text-align: center;
        }
    /* products */
    #Products{
        list-style: none;
        max-width: 1140px;
        padding :0px;
        margin: auto;
    }
    .Product{
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
    .delMylist {
        color: white;
        background-color: hotpink;
        border: hotpink;
    }
    @media (max-width: 860px) {
        #main{
            margin-top: 60px;
        }
    }
</style>
