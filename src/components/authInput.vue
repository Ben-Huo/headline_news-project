<template>
  <div>
    <input class="input" :class="{error:!isOk}" :type="type" :placeholder="placeholder" @input="dataChange" @blur="showTips">
  </div>
</template>

<script>
export default {
    props:[
        'type',
        'placeholder',
        'rule',
        'err_message'
    ],
    data(){
        return{
            isOk:true
        }
    },
    methods:{
        dataChange(){
            console.log('数据有变化');
            if(!$event.target.value){
                this.isOk=true;
            }else{
                var regex = new RegExp(this.rule);
                this.isOk = regex.test($event.target.value);
            }
            if(!this.isOk){
                console.log(this.err_message);
            }
            this.$emit('input',$event.target.value);
        },
        showTips(){
            if(!this.isOk){
                this.$toast.fail(this.err_message)
            }
        }
    }
};
</script>

<style scoped lang="less">
.input{
    margin-bottom: 5.556vw;
    width: 100%;
    height: 38.002px;
    padding: 5.556vw;
    box-sizing: border-box;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #666;
    outline: none;
}
.error{
    border-color: red;
}
</style>