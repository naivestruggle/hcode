<template>
  <div class="index-box">

    <!-- 返回顶部按钮  -->
    <div class="return-top">
      <a href="javascript:window.scrollTo(0,0);"><img :src="returnTopImg" alt=""></a>
    </div>

    <!-- 左边部分  -->
    <div class="index-box-left">
      <!-- 轮播图  -->
      <div class="block my-box-shadow slide-show-box my-box-radius">
        <el-carousel :height="slideShowBoxHeight+'px'" @change="slideShowChange">
          <el-carousel-item v-for="item in slideShowImgList" :key="item.id">
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
        <!-- 轮播图描述  -->
        <span class="demonstration my-box-shadow-bold my-box-bottom-radius">
          <a class="none-a" :href="sideShowDemonstrationHref">
            {{ sideShowDemonstration }}
          </a>
        </span>
      </div>


      <!--  新闻区 -->
      <div class="news-items-box">
        <div class="news-item my-box-shadow my-box-radius" :style="'height:'+newsItemHeight+'px'"  v-for="(item) in newsItemsData" :key="item.id" >
          <a :href="item.href">
            <img class="my-box-top-radius" :src="item.img" alt="">
          </a>
          <div class="news-item-title my-box-bottom-radius" :title="item.title">
            <a class="none-a" :href="item.href">
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>



      <!--  软件推荐下载 -->
      <div class="software-recommend-download-box my-box-radius my-box-shadow-inset">

      </div>



      <!--  最近更新资源模块 -->
      <div class="recent-closer-resource-box">
        <div :class="index % 2 ===0 ? 'panel panel-default my-box-shadow':'panel panel-default my-box-shadow odd'" v-for="(bean, index) in recentCloserResourceData" :key="bean.type">
          <div class="panel-heading">
            <h3 class="panel-title">{{ bean.name }}</h3>
            <router-link class="recent-closer-resource-more-link" to="http://www.baidu.com" tag="a" title="点击查看更多">更多 ></router-link>
          </div>
          <div class="panel-body">
            <div class="content-item" v-for="item in bean.list" :key="item.id">
              <div class="content-item-title" :title="item.title">
                <router-link to="#" tag="a">
                  {{ item.title }}
                </router-link>
              </div>
              <div class="content-item-time">
                <div>
                  {{ item.dateStr }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- 综合文章  -->
      <div class="index-content-article-box">
        <!--  模板1 -->
        <div class="article-template-1 my-box-radius my-box-shadow">
          <div class="left-img my-box-radius">
            <img class="my-box-radius" src="http://www.indream96.com:10001/2.jpg" alt="">
          </div>
          <div class="right-box">
            <div class="heading">
              <router-link to="#" tag="a" class="none-a">
                每个强者都会有背后的辛酸挫折1
              </router-link>
            </div>
            <div class="describe">
              Windows 10将会让搜索和使用信息更加简单，包括本地、网络和互联网搜索功能,直观的用户体验将更 加高级,还会整合自动化应用程序提交和交叉程序数据透明性。
              Windows 10 操作系统改进了基于角色的计算方案和用户账户管理,在数据保护和坚固协作的固有冲突之
              Windows 10将会让搜索和使用信息更加简单，包括本地、网络和互联网搜索功能,直观的用户体验将更 加高级,还会整合自动化应用程序提交和交叉程序数据透明性。
              Windows 10 操作系统改进了基于角色的计算方案和用户账户管理,在数据保护和坚固协作的固有冲突之
            </div>
            <div class="options">
              <div class="time">
                发布时间：2019-01-15
              </div>
              <div class="name">
                <router-link to="#" tag="a" class="none-a">
                  大 BUG
                </router-link>
              </div>
              <div class="classify">
                【<router-link to="#" tag="a" class="none-a">
                Python
              </router-link>】
              </div>
              <div class="select-more">
                <router-link to="#" tag="a">
                  查看全文
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--  模板1 -->
        <div class="article-template-1 my-box-radius my-box-shadow">
          <div class="left-img my-box-radius">
            <img class="my-box-radius" src="http://www.indream96.com:10001/2.jpg" alt="">
          </div>
          <div class="right-box">
            <div class="heading">
              <router-link to="#" tag="a" class="none-a">
                每个强者都会有背后的辛酸挫折1
              </router-link>
            </div>
            <div class="describe">
              Windows 10将会让搜索和使用信息更加简单，包括本地、网络和互联网搜索功能,直观的用户体验将更 加高级,还会整合自动化应用程序提交和交叉程序数据透明性。
              Windows 10 操作系统改进了基于角色的计算方案和用户账户管理,在数据保护和坚固协作的固有冲突之
              Windows 10将会让搜索和使用信息更加简单，包括本地、网络和互联网搜索功能,直观的用户体验将更 加高级,还会整合自动化应用程序提交和交叉程序数据透明性。
              Windows 10 操作系统改进了基于角色的计算方案和用户账户管理,在数据保护和坚固协作的固有冲突之
            </div>
            <div class="options">
              <div class="time">
                发布时间：2019-01-15
              </div>
              <div class="name">
                <router-link to="#" tag="a" class="none-a">
                  大 BUG
                </router-link>
              </div>
              <div class="classify">
                【<router-link to="#" tag="a" class="none-a">
                  Python
                </router-link>】
              </div>
              <div class="select-more">
                <router-link to="#" tag="a">
                  查看全文
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--  模板2 -->
        <div class="article-template-2 my-box-radius my-box-shadow-inset">
          <div class="heading">
            最近程序员频繁被抓，如何避免面向监狱编程？
          </div>
          <div class="describe">
            最近，有关程序员因为参与某些项目开发导致被起诉，甚至被判刑的事件发生的比较多：某程序员因为接了个外包，
            最近，有关程序员因为参与某些项目开发导致被起诉，甚至被判刑的事件发生的比较多：某程序员因为接了个外包，
          </div>
          <div class="options">
            <div class="author">
              <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                <img :src="mineInfo.head" alt="">
              </router-link>
              <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                大 BUG
              </router-link>
            </div>
            <div class="info-operate">
              <a href="#" class="none-a-no-hover" >
                <span class="glyphicon glyphicon-thumbs-up icon-hover" aria-hidden="true"></span>
                <span class="number">281</span>
              </a>
              <router-link to="#" class="none-a-no-hover" tag="a" style="border-left:1px solid #aaaaaa;padding:0 5px 0 5px;">
                <span class="glyphicon glyphicon-eye-open icon-hover" aria-hidden="true"></span>
                <span class="number">42342</span>
              </router-link>
              <router-link to="#" class="none-a-no-hover" tag="a" style="border-left:1px solid #aaaaaa;padding:0 5px 0 5px;">
                <span class="glyphicon glyphicon-comment icon-hover" aria-hidden="true"></span>
                <span class="number">81</span>
              </router-link>
            </div>
          </div>
        </div>

        <!--  模板2 -->
        <div class="article-template-2 my-box-radius my-box-shadow-inset">
          <div class="heading">
            最近程序员频繁被抓，如何避免面向监狱编程？
          </div>
          <div class="describe">
            最近，有关程序员因为参与某些项目开发导致被起诉，甚至被判刑的事件发生的比较多：某程序员因为接了个外包，
            最近，有关程序员因为参与某些项目开发导致被起诉，甚至被判刑的事件发生的比较多：某程序员因为接了个外包，
          </div>
          <div class="options">
            <div class="author">
              <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                <img :src="mineInfo.head" alt="">
              </router-link>
              <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                大 BUG
              </router-link>
            </div>
            <div class="info-operate">
              <a href="#" class="none-a-no-hover" >
                <span class="glyphicon glyphicon-thumbs-up icon-hover" aria-hidden="true"></span>
                <span class="number">281</span>
              </a>
              <router-link to="#" class="none-a-no-hover" tag="a" style="border-left:1px solid #aaaaaa;padding:0 5px 0 5px;">
                <span class="glyphicon glyphicon-eye-open icon-hover" aria-hidden="true"></span>
                <span class="number">42342</span>
              </router-link>
              <router-link to="#" class="none-a-no-hover" tag="a" style="border-left:1px solid #aaaaaa;padding:0 5px 0 5px;">
                <span class="glyphicon glyphicon-comment icon-hover" aria-hidden="true"></span>
                <span class="number">81</span>
              </router-link>
            </div>
          </div>
        </div>

        <!--  模板3 -->
        <div class="article-template-3 my-box-radius my-box-shadow-inset">
          <div class="left-like">
            <div class="number my-box-shadow my-box-radius">
              1
            </div>
            <div class="like my-box-shadow my-box-radius">
              <a href="#" class="none-a-no-hover">
                <i class="el-icon-thumb">点赞</i>
              </a>
            </div>
            <div class="msg">
              <span style="color:red;">请先</span><a href="#">登录</a>
            </div>
          </div>
          <div class="right-info">
            <div class="headline">
              Python基础入门总结
            </div>
            <div class="author-describe">
              <div class="author">
                <img :src="mineInfo.head" alt="">
              </div>
              <div class="describe">
                Python基础入门教学 基础中的基础 列表、元组(tuple)、字典、字符串 变量和引用 函数 python视频教程下载 基础中的基础 解释型语言和编译型语言差距；
                Python概述 解释器执行原理 which python3可以查看python3的位置(linux下)； 交互式环境中使用exitPython基础入门教学 基础中的基础 列表、元组(tuple)、字典、字符串 变量和引用 函数 python视频教程下载
                基础中的基础 解释型语言和编译型语言差距； Python概述 解释器执行原理 which python3可以查看python3的位置(linux下)； 交互式环境中使用exit
              </div>
            </div>
            <div class="options">
              <div class="name">
                <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                  pypypypy
                </router-link>
              </div>
              <div class="time">
                发布于 2019-11-04 19:50
              </div>
              <div class="comment">
                <router-link to="#" tag="a" class="none-a-no-hover">
                  <i class="el-icon-chat-line-square">评论(0)</i>
                </router-link>
              </div>
              <div class="read">
                <router-link to="#" tag="a" class="none-a-no-hover">
                  <i class="el-icon-reading">阅读(29)</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--  模板3 -->
        <div class="article-template-3 my-box-radius my-box-shadow-inset">
          <div class="left-like">
            <div class="number my-box-shadow my-box-radius">
              1
            </div>
            <div class="like my-box-shadow my-box-radius">
              <a href="#" class="none-a-no-hover">
                <i class="el-icon-thumb">点赞</i>
              </a>
            </div>
            <div class="msg">
              <span style="color:red;">请先</span><a href="#">登录</a>
            </div>
          </div>
          <div class="right-info">
            <div class="headline">
              Python基础入门总结
            </div>
            <div class="author-describe">
              <div class="author">
                <img :src="mineInfo.head" alt="">
              </div>
              <div class="describe">
                Python基础入门教学 基础中的基础 列表、元组(tuple)、字典、字符串 变量和引用 函数 python视频教程下载 基础中的基础 解释型语言和编译型语言差距；
                Python概述 解释器执行原理 which python3可以查看python3的位置(linux下)； 交互式环境中使用exitPython基础入门教学 基础中的基础 列表、元组(tuple)、字典、字符串 变量和引用 函数 python视频教程下载
                基础中的基础 解释型语言和编译型语言差距； Python概述 解释器执行原理 which python3可以查看python3的位置(linux下)； 交互式环境中使用exit
              </div>
            </div>
            <div class="options">
              <div class="name">
                <router-link to="#" tag="a" class="none-a-no-hover icon-hover">
                  pypypypy
                </router-link>
              </div>
              <div class="time">
                发布于 2019-11-04 19:50
              </div>
              <div class="comment">
                <router-link to="#" tag="a" class="none-a-no-hover">
                  <i class="el-icon-chat-line-square">评论(0)</i>
                </router-link>
              </div>
              <div class="read">
                <router-link to="#" tag="a" class="none-a-no-hover">
                  <i class="el-icon-reading">阅读(29)</i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!--  模板4 -->
        <div class="article-template-4 my-box-radius my-box-shadow-inset">
          <div class="heading">
            Python如何使用List？
          </div>
          <div class="video">
            <video ref='video1'
                   @pause="onPause"
                   @play="onPlay"
                   > <!--  poster="http://www.indream96.com:10001/5.jpg" -->
              <source src="http://www.indream96.com:10001/1.mp4" type="video/mp4">
              <source src="http://www.indream96.com:10001/1.ogg" type="video/ogg">
              您的浏览器不支持 video 标签。
            </video>
            <div class="video-controller"> <!--v-if="controllerIsShowing"-->
              <div class="left">
                <div class="play-stop-btn">
                  <span :class="playList[0].isPlaying?'glyphicon glyphicon-pause':'glyphicon glyphicon-play'" aria-hidden="true" @click="startPlayOrPause"></span>
                </div>
                <div class="block progress-bar">
                  <el-slider  v-model="value2"
                             :min="0"
                             :max="3885"
                             @change="progressBarChange"
                             :format-tooltip="progressBarChangeTextFormat"></el-slider>
                </div>
                <div class="time">
                  {{ playList[0].nowPlayTimeStr }} / {{ playList[0].allPlayTimeStr }}
                </div>
              </div>
              <div class="right">
                <div class="full-screen-btn">
                  <img :src="playList[0].isFullScreen?'http://www.indream96.com:10001/12.png':'http://www.indream96.com:10001/11.png'" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="options">
            <div class="img-name-like-comment">
              <div class="img">
                <img :src="mineInfo.head" alt="">
              </div>
              <div class="name">
                大 BUG
              </div>
              <a href="#" class="like none-a-no-hover">
                <img src="http://www.indream96.com:10001/9.png" alt=""> 74
              </a>
              <router-link to="#" tag="a" class="comment none-a-no-hover">
                <img src="http://www.indream96.com:10001/10.png" alt=""> 13
              </router-link>
            </div>
            <div class="classify">
              <router-link to="#" tag="a" class="class-li none-a-no-hover">
                Python
              </router-link>
              <router-link to="#" tag="a" class="class-li none-a-no-hover">
                Java
              </router-link>
            </div>
          </div>
        </div>

        <!--  加载更多 -->
        <div class="load-others-box">
          正在加载 <i class="el-icon-loading"></i>
<!--          加&nbsp;&nbsp;载&nbsp;&nbsp;更&nbsp;&nbsp;多-->
        </div>
      </div>

    </div>

    <!--  右边部分 -->
    <div class="index-box-right">
      <!--  个人信息版 -->
      <div class="mine-info-box my-box-shadow my-box-radius">
        <!--  最上面的背景图 -->
        <div class="mine-info-heading-img-box my-box-top-radius">
          <img class="my-box-top-radius" :src="mineInfo.heading" alt="">
        </div>
        <!--  头像 -->
        <div class="mine-info-head-img-box">
          <img :src="mineInfo.head" alt="">
        </div>
        <!--  姓名 -->
        <div class="mine-info-name-box">
          {{ mineInfo.name }}
        </div>
        <!--  分割线 -->
        <el-divider><i class="el-icon-male" style="color:blue;font-size:20px;font-weight: bold;"></i></el-divider>
        <!-- 信息  -->
        <div class="mine-info-items-box">
          <div class="mine-info-item">QQ ：{{ mineInfo.qq }}</div>
          <div class="mine-info-item">职业 ：{{ mineInfo.occupation }}</div>
          <div class="mine-info-item">现居 ：{{ mineInfo.address }}</div>
          <div class="mine-info-item">Email ：{{ mineInfo.email }}</div>
          <div class="mine-info-item">Tel ：{{ mineInfo.tel }}</div>
        </div>
        <!-- 数据统计  -->
        <div class="mine-info-statistics-box my-box-bottom-radius">
          <div class="mine-info-statistic" v-for="item in mineInfoStatistics" :key="item.id">
            <div class="mine-info-statistic-num">{{ item.num }}</div>
            <div class="mine-info-statistic-name">{{ item.name }}</div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>
<script>
export default {
  data(){
    return {
      //返回顶部图片
      returnTopImg : 'http://www.indream96.com:10001/8.png',

      //轮播图中图片的数据   图片 的 w/h  =  3/1
      slideShowImgList : [
        {id:1, img:'http://www.indream96.com:10001/1.jpg'},
        {id:2, img:'http://www.indream96.com:10001/2.jpg'},
        {id:3, img:'http://www.indream96.com:10001/3.jpg'},
        {id:4, img:'http://www.indream96.com:10001/4.jpg'},
      ],

      //轮播图下面的描述的数据
      sideShowTextList : [
        {id:1,href:'http://#1',title:'每个强者都会有背后的辛酸挫折1'},
        {id:2,href:'http://#2',title:'每个强者都会有背后的辛酸挫折2'},
        {id:3,href:'http://#3',title:'每个强者都会有背后的辛酸挫折3'},
        {id:4,href:'http://#4',title:'每个强者都会有背后的辛酸挫折4'},
      ],


      sideShowDemonstration : '',  //当前的描述
      sideShowDemonstrationHref : '',  //当前的描述的超链接
      slideShowBoxHeight:350,   //轮播图的高度  三分之一宽度
      newsItemHeight: 10,   //新闻区域的高度

      //信息面板信息数据
      mineInfo : {
        name:'大 BUG',
        qq:'2550438656(微信同号)',
        occupation:'程序员',
        address: '湖南-衡阳',
        email : '16020440322@xs.hnit.edu.cn',
        tel:'15570906290',
        heading:'http://www.indream96.com:10001/6.jpg',
        head:'http://www.indream96.com:10001/5.jpg'
      },

      //信息面板的数据统计
      mineInfoStatistics:[
        {id:1, name:'博文', num: 3961},
        {id:2, name:'PV量', num: 3961},
        {id:3, name:'UV量', num: 3961},
        {id:4, name:'评论', num: 3961},
      ],

      //新闻区域的三个新闻信息
      newsItemsData : [
        {id:1, title:'news1news1news1news1news1news1news1news1news1news1news1news1news1news1', href:'http://news1', img:'http://www.indream96.com:10001/1.jpg'},
        {id:2, title:'news2', href:'http://news2', img:'http://www.indream96.com:10001/2.jpg'},
        {id:3, title:'news3', href:'http://news3', img:'http://www.indream96.com:10001/3.jpg'},
      ],

      //最新资源推荐区域数据
      recentCloserResourceData : [
        {
          type: 1,
          name: '最新文章',
          list: [
            {id:1, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:2, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:3, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:4, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:5, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:6, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:7, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:8, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
          ]
        },
        {
          type: 2,
          name: '编程分享',
          list: [
            {id:1, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:2, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:3, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:4, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:5, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:6, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:7, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:8, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
          ]
        },
        {
          type: 3,
          name: '推荐下载',
          list: [
            {id:1, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:2, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:3, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:4, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:5, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:6, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:7, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:8, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
          ]
        },
        {
          type: 4,
          name: '推荐',
          list: [
            {id:1, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:2, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:3, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:4, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:5, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:6, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:7, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
            {id:8, title:'每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折每个强者都会有背后的辛酸挫折',dateStr:'2019-01-14'},
          ]
        },
      ],

      //临时的播放列表
      playList : [
        {id:1, url:'http://www.indream96.com:10001/1.mp4',isPlaying:false, isFullScreen:false, nowPlayTimeStr:'00:00', allPlayTimeStr:'64:45',},
      ],

      value2 : 50,


    }
  },
  mounted(){
    //页面加载后  将轮播图当前的高度设置为宽度的三分之一
    this.slideShowBoxHeight = document.getElementsByClassName('el-carousel__container')[0].offsetWidth / 3
    //页面加载后  将新闻区的图片高度设置为宽度的0.623
    this.newsItemHeight = document.getElementsByClassName('news-item')[0].offsetWidth * 0.623
    $('.software-recommend-download-box').css('margin-top',(this.newsItemHeight-130)+'px')   //因为页面加载后可能会改变高度，所以这里要重新计算一下margin-top的值
    //页面加载后  将轮播图的描述设置为第一个
    this.setSideShowDemonstration(0)
  },
  methods : {
    slideShowChange(nowIndex, oldIndex){  //轮播图切换的回调函数
      this.setSideShowDemonstration(nowIndex)
    },
    setSideShowDemonstration(index){  //设置轮播图下面的描述
      var bean = this.sideShowTextList[index]
      this.sideShowDemonstration = bean.title
      this.sideShowDemonstrationHref = bean.href
    },
    progressBarChange(nowVal){    //当进度条被选择
      // console.log(nowVal)
    },
    progressBarChangeTextFormat(val){   //进度条显示文本的格式化
      var minute = parseInt(val / 60)
      if(minute < 10){
        minute = '0'+ minute
      }
      var second = val % 60
      if(second < 10){
        second = '0'+ second
      }
      return minute + ':' + second
    },
    startPlayOrPause () { //控制音频的播放与暂停
      return this.playList[0].isPlaying ? this.pause() : this.play()
    },
    play(){
      this.$refs.video1.play()

    },
    pause(){
      this.$refs.video1.pause()
    },
    // 当音频播放
    onPlay () {
      this.playList[0].isPlaying = true
    },
    // 当音频暂停
    onPause () {
      this.playList[0].isPlaying = false
    }

  },
}
</script>
<style scoped>
  /**{margin:0;padding:0;}*/
  .index-box{
    margin-top:70px;
    width: 80%;
    height: auto;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
  }

  .my-box-shadow{box-shadow: 0px 0px 5px #aaa;}
  .my-box-shadow-inset{box-shadow: 0px 0px 5px inset #555;}
  .my-box-shadow-panel{box-shadow: 0px 0px 10px #aaa;}
  .my-box-shadow-bold{box-shadow: 0px 5px 10px #aaa;}
  .my-box-radius{border-radius: 4px;}
  .my-box-top-radius{border-top-left-radius: 4px;border-top-right-radius: 4px;}
  .my-box-bottom-radius{border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;}
  .panel{border:0px;}
  .panel-default > .panel-heading{
    background-color:#ccc;
    border-color:#888;
  }
  .none-a{text-decoration:none;color:#fff;}
  .none-a:hover{color:#0066ff;}

  /*返回顶部按钮*/
  .return-top{width:50px;height: 50px;position: fixed;right:50px;bottom: 50px;z-index: 9998;cursor: pointer;border-radius: 25px;}
  .return-top:hover{box-shadow: 0px 0px 25px inset #000;}
  .return-top img{width: 50px;height: 50px;}

  /*左边部分*/
  .index-box-left{width:73%;margin-right: 2%;}
  /*轮播图区域*/ .slide-show-box .demonstration{width:100%;height:40px;line-height:40px;background-color:#000;text-align:center;display:inline-block;}
                .slide-show-box img{width:100%;}
                .my-box-shadow-bold a{text-decoration:none;color:#fff;}
  /* 新闻区域*/.news-items-box{width: 100%;height:150px;display: flex;flex-direction: row;margin-top:20px;}
              .news-item{width: 32%;height: 100%;overflow: hidden;margin-right:2.5%;}
              .news-items-box .news-item:nth-child(3){margin: 0px;}
              .news-item img{width: 100%;height: 85%;transition: all 0.6s;}
              .news-item img:hover{transform: scale(1.4);}
              .news-item-title{background-color:#000;position: relative;bottom: 0px;height:15%;line-height: inherit;}
              .news-item-title a{color:#fff;text-decoration:none;margin: 0 5px 0 5px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  /* 软件推荐下载区域*/.software-recommend-download-box{width:100%;height:200px;background-color:#fff;margin-top:20px;}

  /* 最近更新资源区域*/.recent-closer-resource-box{margin-top:20px;border:0;}
               .recent-closer-resource-box .odd{margin-left: 2%;}
               .recent-closer-resource-box .top{margin-top: 20px;}
               .recent-closer-resource-box .panel{width:49%;float:left;}
               .recent-closer-resource-box .panel-heading{display: flex;flex-direction: row;justify-content: space-between;}
               .recent-closer-resource-box .content-item-title{width: 70%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
               .recent-closer-resource-box .content-item{display:flex;flex-direction: row;border-bottom:1px dashed #ccc;padding:5px 0 5px 0;}
               .recent-closer-resource-box .content-item-time{width:30%;}
               .recent-closer-resource-box .content-item-time div{float: right;width: auto;}

  /* 综合文章显示区域*/.index-content-article-box{margin-top: 20px;clear:both;}
               .article-template-1{margin-top:20px;padding:10px;background-color:#000;display: flex;flex-direction: row;clear:both;}
               .article-template-1 .left-img{width: 180px;height:110px;}
               .article-template-1 .left-img img{width: 180px;height:110px;}
               .article-template-1 .right-box{margin-left:10px;display: flex;flex-direction: column;color:#fff;}
               .article-template-1 .right-box .heading{font-size:18px;font-weight: bold;}
               .article-template-1 .right-box .describe{margin:7px 0 7px 0;width:100%;height:54px;line-height:18px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;line-clamp: 3;-webkit-box-orient: vertical;color:#ddd;}
               .article-template-1 .right-box .options{display: flex;flex-direction: row;}
               .article-template-1 .right-box .options .name{margin-left: 20px;}
               .article-template-1 .right-box .options .time{color:#ddd;}
               .article-template-1 .right-box .options .classify{margin-left: 20px;}
               .article-template-1 .right-box .options .select-more{margin-left: 20px;}
               .article-template-2{margin-top:20px;background-color: #fff;padding:20px;}
               .article-template-2 .heading{font-size:20px;font-weight: bold;}
               .article-template-2 .describe{margin:10px 0 10px 0;width:100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
               .article-template-2 .options{display:flex;flex-direction: row;justify-content:space-between;}
               .article-template-2 .options .author img{width:30px;height:30px;border-radius: 15px;}
               .article-template-2 .options .info-operate{line-height: 30px;}
               .article-template-2 .options .info-operate .number{color:#3399ea;}
               .icon-hover:hover{color:#3399ea;}
               .none-a-no-hover{text-decoration:none;color:#555;}
               .article-template-3{margin-top:20px;background-color:#fff;padding:20px;display:flex;flex-direction: row;}
               .article-template-3 .left-like{width:60px;display:flex;flex-direction: column;}
               .article-template-3 .left-like .number{width:60px;height:30px;background-color:#F63;line-height: 30px;text-align: center;}
               .article-template-3 .left-like .like{margin-top:5px;width:60px;height: 20px;background-color: #9cf;line-height: 20px;text-align: center;}
               .article-template-3 .left-like .msg{margin-top:5px;}
               .article-template-3 .right-info{margin-left:20px;display:flex;flex-direction: column;}
               .article-template-3 .right-info .headline{font-size:20px;font-weight: bold;}
               .article-template-3 .right-info .author-describe{display:flex;flex-direction: row;}
               .article-template-3 .right-info .author-describe .describe{margin:10px 0px 10px 10px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
               .article-template-3 .right-info .author-describe .author img{width:50px;height:50px;}
               .article-template-3 .right-info .options{display:flex;flex-direction: row;}
               .article-template-3 .right-info .options .name{width: 50px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;line-clamp: 1;-webkit-box-orient: vertical;}
               .article-template-3 .right-info .options .time{margin-left: 10px;}
               .article-template-3 .right-info .options .comment{margin-left:20px;}
               .article-template-3 .right-info .options .read{margin-left:10px;}
               .article-template-4{padding:20px;background-color:#fff;margin-top:20px;}
               .article-template-4 .heading{font-size:20px;font-weight: bold;}
               .article-template-4 .video{width:100%;margin:20px 0 20px 0;border-radius: 5px;position: relative;}
               .article-template-4 .video video{width:100%;border-radius: 5px;}
               .article-template-4 .video .video-controller{opacity:0.5;padding:0 20px 0 20px;line-height:38px;display:flex;flex-direction:row;justify-content:space-between; position:absolute;bottom:5px;width: 100%;height:38px;background-color: #000;border-bottom-left-radius: 5px;border-bottom-right-radius:5px;}
               .article-template-4 .video .video-controller .left{color:#fff;display:flex;flex-direction:row;}
               .article-template-4 .video .video-controller .left .play-stop-btn{cursor: pointer;font-size: 20px;}
               .article-template-4 .video .video-controller .left .progress-bar{margin-left:20px;width: 500px;background-color: #000;}
               .article-template-4 .video .video-controller .left .time{margin-left: 20px;}
               .article-template-4 .video .video-controller .right{color:#fff;display:flex;flex-direction:row;}
               .article-template-4 .video .video-controller .right .full-screen-btn img{width: 20px;cursor: pointer;}
               .article-template-4 .options{display:flex;flex-direction: row;justify-content: space-between;line-height: 30px;}
               .article-template-4 .options .img-name-like-comment{display: flex;flex-direction: row;}
               .article-template-4 .options .img-name-like-comment .img{width:30px;height:30px;}
               .article-template-4 .options .img-name-like-comment .img img{width:30px;height:30px;border-radius: 15px;border-radius: 15px;box-shadow: 0px 0px 10px #000;}
               .article-template-4 .options .img-name-like-comment .name{margin-left:10px;}
               .article-template-4 .options .img-name-like-comment .like img{margin:-7px 0 0 20px;width: 15px;}
               .article-template-4 .options .img-name-like-comment .comment img{margin:-3px 0 0 10px;width: 15px;}
               .article-template-4 .options .classify{display: flex;flex-direction: row;}
               .article-template-4 .options .classify .class-li{padding:0 5px 0 5px;box-shadow: 0px 0px 5px inset dodgerblue;border-radius:3px;margin:0 5px 0 5px;}
               .article-template-4 .options .classify .class-li:hover{box-shadow: 0px 0px 10px inset dodgerblue;}

  /*加载更多*/.load-others-box{box-shadow: 0px 0px 10px blue;margin-top:60px;width: 100%;height:30px;border-radius: 15px;background-color: #fff;line-height: 30px;text-align: center;cursor: pointer;}
          .load-others-box:hover{box-shadow: 0px 0px 10px inset blue;}



  /* 右边部分 */
  .index-box-right{width:25%;}
  /* 个人信息面板 */.mine-info-box{background-color: #fff;}
  .mine-info-heading-img-box img{width: 100%;height:140px;}
  .mine-info-head-img-box{width:75px;height: 75px;margin: 0 auto;border-radius: 37px;box-shadow: 0px 0px 10px #333;margin-top: -30px;}
  .mine-info-head-img-box img{width: 100%;border-radius: 37px;}
  .mine-info-name-box{width: 100%;text-align: center;font-size:17px;font-weight: bold;margin:10px 0px -10px 0px;}
  .mine-info-items-box{width: 100%;padding:0 10px 0 10px;margin-top: -10px;}
  .mine-info-item{padding:5px 0 5px 0;}
  .mine-info-statistics-box{margin-top:30px;display: flex;flex-direction: row;width: 100%;background-color:#222;}
  .mine-info-statistic{color:#fff;width:25%;text-align: center;padding: 5px;}
  .mine-info-statistic-name{font-size:12px;}
  .mine-info-statistic-num{font-size:17px;}

</style>

