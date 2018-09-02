<template>
    <div id="Footer">
        <div id="bottomMenu1">
            Follow Us
            <span id="AccountFAQ"> Account FAQ </span>
        </div>
        <div id="bottomMenu2">
            Privacy Policy  Conditions of Use
        </div>
        <div id="copyright">
            Copyright © Kakao IX Corp.
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>
<style>
    #Footer{
        position: relative;
        margin: 50px 30px;
        font-size: 0.8rem;
    }
    #bottomMenu1{
        padding: 20px 10px;
        border-top: 2px solid;
        border-bottom: 1px rgb(156, 156, 156) solid;
    }
    #bottomMenu2{
        padding: 20px 0px;
        width:100%;
        border-bottom: 2px solid;
    }
    #AccountFAQ{
        float: right;
    }
    #copyright{
        letter-spacing: -0.5px;
        margin-top: 10px;
    }
</style>
