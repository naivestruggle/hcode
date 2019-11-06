<template>
  <div class="header-box">
    <div class="header-logo-menu-search-box">
      <!--  logo区域 -->
      <div class="header-logo-box">

      </div>

      <!--  头部选项卡内容 -->
      <div class="header-menu-box">
        <ul>
          <router-link v-for="item in menuList" to="#" tag="li" :class="isActiveIndex === item.index ? 'active':''" @click.native="setActive(item.index)" :key="item.index">{{ item.name }}</router-link>
        </ul>
      </div>

      <div class="header-search-box">
        <input type="text" class="header-search-input" placeholder="Recipient's username" aria-describedby="basic-addon2">
        <input type="button" class="header-search-button" value="Search">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isActiveIndex : 1, //当前高亮的导航条
        menuList: [  //导航条信息
          {index:1, name:'首页'},
          {index:2, name:'技术文章'},
          {index:3, name:'CSDN'},
          {index:4, name:'APP'},
          {index:5, name:'学习资料'},
          {index:6, name:'技术文章'},
          {index:7, name:'技术文章'},
        ]
      }
    },
    methods : {
      setActive(liIndex){
        console.log('123')
        this.isActiveIndex = liIndex
      }
    }
  }
</script>

<style scoped>
  .header-box{
    width: 100%;
    height: 50px;
    background-color: #000;
    border-radius: 4px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px #888888;
    z-index: 9999;
  }
  .header-logo-menu-search-box{
    width: 80%;
    height: 98%;
    margin-left: 10%;
  }
  .header-logo-box{
    height: 50px;
    width: 10%;
    background-color: #fff;
    float: left;
  }
  .header-menu-box{
    width: 60%;
    float: left;
  }
  .header-menu-box ul{
    width: 100%;
    height: 48px;
    padding: 0;
  }
  .header-menu-box ul li{
    width: 14.2%;   /*如果改变了目录  就要修改这里  7 * 14.2 = 100*/
    height: 50px;
    list-style: none;
    line-height: 48px;
    text-align: center;
    color: #fff;
    float: left;
    cursor: pointer;
  }
  .header-menu-box ul li:hover{background-color:#fff;color:#000;font-size:16px;border-radius: 2px;box-shadow: 0px 0px 5px inset #888888;}

  .header-search-box{width:30%;height:48px;line-height: 48px;float: left;display:flex;flex-direction: row;}
  .header-menu-box .active{background-color:#fff;color:#000;font-size:16px;border-radius: 2px;box-shadow: 0px 0px 5px inset #888888;}
  .header-search-input {margin-top:10px;width: 80%;height:30px;border-top-left-radius: 12px;border-bottom-left-radius: 12px;padding: 0px 5px 0px 14px;outline: none;border: none;box-shadow: 0px 0px 5px inset #888888;}
  .header-search-button{margin-top:10px;width: 18%;height: 30px;line-height: 27px;border:1px;outline: none;border-top-right-radius: 12px;border-bottom-right-radius: 12px;}
  .header-search-button:hover{background-color: #aaa;}

</style>
