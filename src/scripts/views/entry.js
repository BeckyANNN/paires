
import router  from "./router";

import Vue from "vue";

import MintUI from "mint-ui";
import 'mint-ui/lib/style.css'
Vue.use(MintUI);   



const app = new Vue({
    el:"#app",
    data:{
        transitionName:"slide-right"
    },
    router,
    watch:{
        "$route":function(to,from){
            var toLength = to.path.split("/").length;
            var fromLength = from.path.split("/").length;

            this.transitionName = toLength>fromLength?"slide-left":"slide-right";
        }
    }
})