<template>
  <div>
      <headerMiddle title="我的收藏"/>
      <post :item="postItem" v-for="(postItem,index) in collectionList" :key="index"/>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import post from '../components/post'
export default {
    components:{
        headerMiddle,
        post
    },
    data(){
        return{
            collectionList:[]
        }
    },
    mounted(){
        this.loadPage();
    },
    methods:{
        loadPage(){
            this.$axios({
                url:'/user_star',
                method:'get'
            }).then(res=>{
                console.log(res.data);
                this.collectionList = res.data.data;

                this.collectionList.forEach(element => {
                        element.comment_length = element.comments.length;
                });
            })
        }
    }
}
</script>

<style>

</style>