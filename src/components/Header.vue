<template>
    <div id="Header">
        <div id="navBar">
            <router-link id="Home" to="/">HOME</router-link>
            <!-- Mylist, totaprice view & Mylist router -->
            <div class="linkTo inline" id="listIcon" @click="linkTo('/Collection')">
                <img id="mobileIcon" src="https://i.pinimg.com/236x/63/35/e6/6335e6f679f84cc671f61ec2fb653701--kakao-wallpaper.jpg">
                <img v-for="product in Mylist" :src="product.url" class="iconImage">
                <span v-if="totalprice.toFixed(2) > 0" class="inline" id="priceIcon"> 
                    Total <br/> ${{totalprice.toFixed(2)}}
                </span>
            </div>
            <router-link id="Account" to="#">ACCOUNT</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['Mylist','totalprice'],
    methods:{
        linkTo(uri){
            this.$router.push(uri);
        }
    }
}
</script>

<style>
    /* side button in navbar */
    #Home{float: left;}
    #Account{float: right;}
    /* Header */
    #Header{
        position: fixed;
        margin: auto;
        top:0;
        left:0;
        width:100%;
        background-color: rgb(255, 255, 255);
        opacity: 0.9;
    }
    #navBar{
        text-align: center;
        font-size: 0.9rem;
        padding: 30px 30px 18px 30px;
        border-bottom: #cacaca 1px;
        border-bottom-style: solid;
    }
    /* Mylist Icon */
    #listIcon{
        height: 32px;
    }
    #priceIcon{
        text-align: left;
    }
    .iconImage{
        margin-right: 5px;
        width:30px;
        height:30px;
        animation-duration: 0.3s;
        animation-name: listUp;
    }
    #mobileIcon{
        display: none;
    }
    @keyframes listUp {
        from {
            height:0px;
            opacity: 0.1;
        }to {
            height:30px;
            opacity: 1;
        }
    }
    @media (max-width: 860px) {
        .iconImage{
            display: none;
        }
        #mobileIcon{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            margin: 0px 10px;
        }
        #navBar{
            padding: 20px 15px 9px 15px;
        }
        #priceIcon{
            font-size: 0.9em;
        }
    }
</style>
