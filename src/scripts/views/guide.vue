<template>
  <div class="home">
     <header>
      <div class="logo">
        <h1><a href="#"></a></h1>
      </div>
      <div class="list">
        <ul>
          <li @click="show"><a href="#" :class="{active:hide}">挑选公寓</a><i :class="{rotate:hide}" class="iconfont" v-html="'&#xe6a2;'"></i></li>
          <li><a href="#">联合房东</a></li>
          <li><a href="#">超级房东</a></li>
          <li><a href="#">Paires会员</a></li>
        </ul>
      </div>
      <div class="vip">
        <a href="#">成为Paires会员</a>
      </div>
    </header>
    <div class="mask" v-if="hide"></div>
    <transition  name="slide-fade">
    <div class="mask-content" v-if="hide">
        <div class="mask-left">
          <ul>
            <li class="mask-left-li">
              <a href="#">北京</a>
              <ul>
                <li v-for="(m,i) in city.beijing" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">成都</a>
              <ul>
                <li v-for="(m,i) in city.chengdu" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">上海</a>
              <ul>
                <li v-for="(m,i) in city.shanghai" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">海南</a>
              <ul>
                <li v-for="(m,i) in city.hainan" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">大理</a>
              <ul>
                <li v-for="(m,i) in city.dali" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">广州</a>
              <ul>
                <li v-for="(m,i) in city.guangzhou" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">深圳</a>
              <ul>
                <li v-for="(m,i) in city.shenzhen" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">南京</a>
              <ul>
                <li v-for="(m,i) in city.nanjing" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
            <li class="mask-left-li">
              <a href="#">重庆</a>
              <ul>
                <li v-for="(m,i) in city.chongqing" :key="i"><a href="#">{{m}}</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mask-right">
          <p>品牌公寓</p>
          <ul>
            <li v-for="(m,i) in brand" :key="i">
              <a href="#"><img :src="m.img" alt=""></a>
              <p>{{m.name}}</p>
            </li>

          </ul>
        </div>
    </div>
    </transition>

    <section>

      <mt-swipe :auto="4000">
        <mt-swipe-item><img :src="pic0" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="pic1" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="pic2" alt=""></mt-swipe-item>
      </mt-swipe>


      
    </section>
    <div class="link">
      <router-link to="detail/123">房源信息</router-link>
    </div>
  </div>
  
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';

import pic0 from "../../assets/img/bg-0.jpg";
import pic1 from "../../assets/img/bg-1.jpg";
import pic2 from "../../assets/img/bg-2.jpg";
import img1 from "../../assets/img/youshec.png";
import img2 from "../../assets/img/5lmeet.png";
import img3 from "../../assets/img/qingshe.png";
import img4 from "../../assets/img/loft.png";
import img5 from "../../assets/img/mao.png";
import img6 from "../../assets/img/ihome.png";
export default {
  data(){
    return{
      pic0:pic0,
      pic1:pic1,
      pic2:pic2,
      hide:false,
      city:{
        beijing:["朝阳区","东城区","海淀区"],
        chengdu:["锦江区","武侯区","高新区","青羊区","金牛区","双流区"],
        shanghai:["徐汇区","浦东新区","静安区","黄蒲区","长宁区","虹口区"],
        hainan:["万宁市"],
        dali:["大理市"],
        guangzhou:["海珠区","番禺区","天河区"],
        shenzhen:["龙华新区","福田区","龙岗区","罗湖区"],
        nanjing:["秦淮区"],
        chongqing:["渝北区","渝中区"]
      },
      brand:[
        {name:"友舍",img:img1},
        {name:"共享际",img:img2},
        {name:"青舍",img:img3},
        {name:"LOFT42",img:img4},
        {name:"猫系屋企",img:img5},
        {name:"iHome",img:img6},
        
      ]
    }
  },
  methods:{
    show(){
      this.hide = !this.hide;

    }
  }
}
</script>
