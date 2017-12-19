<template>
  <div class="detail">
    <h2>{{msg.name}}</h2>
    <dl v-for="(m,i) in msg.info" :key="i">
      <dt><img :src="touxiang" alt=""></dt>
      <dd>
        <h3>{{m.name}}</h3>
        <p>评价内容：{{m.content}}</p>
        <time>2017-11-22</time>
      </dd>
    </dl>
  </div>
</template>
<script>
import $ from '../../assets/js/jquery-1.11.2.min.js';
import touxiang from "../../assets/img/touxiang.png";
export default {
  
  data(){
    return{
      msg:[],
      touxiang:touxiang
    }
  },
  mounted(){
    var that = this;
    $.ajax({
      url:"http://39.106.19.127:7200/getApartment",
      type:"GET",
      data:{id:this.$route.params.id},
      success(data){
        console.log(data);
        that.msg = data;
        console.log(that.msg)
      }
    })
  }
}
</script>
