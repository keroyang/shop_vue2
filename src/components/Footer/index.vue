<template>
  <div>
    <!-- start footer-->
    <footer class="site_footer">
      <div class="container">
        <b-row >
          <b-col sm="6" lg="3" >
            <h3>关于我们</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s</p>
          </b-col>
          <b-col sm="6" lg="3">
            <h3>帮助中心 & 联系我们</h3>
            <div class="footer_menu">
              <div>
                <div> <a class="footer_link" href="help.html">帮助中心</a></div>
                <div><a class="footer_link" href="about.html">关于商城</a></div>
                <div> <a class="footer_link" href="help.html#headingOne">购买流程</a></div>
                <div> <a class="footer_link" href="help.html#headingTow">如何购买</a></div>
                <div> <a class="footer_link" href="help.html#headingThree">隐私协议</a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col sm="6" lg="3">
            <h3>轻松购物</h3>
            <div class="footer_menu">
              <div>
                <div> <a class="footer_link" href="#">免费配送</a></div>
                <div> <a class="footer_link" href="#">试用100天</a></div>
                <div> <a class="footer_link" href="#">7天无理由免费</a></div>
                <div> <a class="footer_link" href="#">联系我们 </a></div>
              </div>
            </div>
          </b-col>
          <b-col sm="6" lg="3">
            <h3>支付方式</h3>
            <div class="payment_methods margin_bottom">
              <i class="fab fa-cc-visa"></i>
              <i class="fab fa-cc-paypal"></i>
              <i class="fab fa-cc-mastercard"></i>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- copy rights-->
      <div class="bottom_footer">
        <div class="container">
          <div class="row justify-content-between"><small>© 2025. All Rights Reserved.
            <a target="_self" href="#" title="商城网站" class="text-white">商城网站</a></small>
            <!-- social links-->
            <div class="social_footer">
              <div>
                <a class="social-link" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
              <div> <a class="social-link" href="#"><i class="fab fa-instagram"></i></a></div>
              <div><a class="social-link" href="#"><i class="fab fa-twitter"></i></a></div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="loader"><span class="letter">Loading . . .</span></div>-->
    </footer>

  </div>
</template>
<script>
export default {
  name: "index",
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">
.site_footer{
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 4rem 0px 0px;
  background: rgb(19, 19, 19);


  .container{
    h3{
      position:relative;
      padding-bottom: 1rem;
      font-size:1.05rem;
      margin:0px 0px 1rem;
    }
    h3::before{
      content:'';
      position:absolute;
      left:0px;
      bottom:0px;
      height:2px;
      width:9%;
      background:#E3A51E;
    }
    p{
      margin:1rem 0px;
    }

    .payment_methods{
      font-size:40px;
      color:rgba(255, 255, 255, 0.6);

      .fab{
        margin-right: 1rem;
      }
    }
    .margin_bottom{
      margin-bottom: 2rem;
    }

    .footer_menu{
      .footer_link{
        color:rgba(255, 255, 255, 0.6);
        margin-bottom: 10px;
      }
    }
  }

  .bottom_footer{
    margin-top:3.5rem;
    color:#FFFFFF;
    padding:0.8rem 0px;
    background: #000000;


    .social_footer{
      display: flex;
      flex-direction: row;

      .social-link{
        font-size: 18px;
        color:#ffffff;
        margin-right: 1rem;
        display: inline-block;
      }
    }
  }


}
</style>
