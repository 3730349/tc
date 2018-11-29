	   //获取类
    var getByClass = function (className) {
      return document.getElementsByClassName(className);
    }
    //添加类
    var addClass = function (element , _className) {
      //获取此元素的所有类
      var className = element.className.split(' ');
      var classNameMap = {}

      for(var i=0;i<className.length;i++){
        //给对象属性赋值，值随意
        classNameMap[className[i]] = 1;
      }
      classNameMap[_className] = 1;

      className = [];
      for(i in classNameMap){
        //将值存入数组
        className.push(i);
      }
      //放入字符串中并用空格隔开
      element.className = className.join(' ');

    }
    //移除类
    var removeClass = function (element ,  _className) {

      var className = element.className.split(' ');
      var classNameMap = {}
      for(var i=0;i<className.length;i++){ 
        classNameMap[ className[i]] = 1;
      }
      //js删除对象属性
      delete classNameMap[_className];
      className = [];
      for(i in classNameMap){
        className.push(i);
      }
      element.className = className.join(' ');
    }



  var swiper = new Swiper('#swiper1', {
     //间隔
      // spaceBetween: 30,
      centeredSlides: true,
      //自动切换
/*      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },*/
      //分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	});
  var sp_btn=document.getElementsByClassName("sp_btn");
  var ul1=document.getElementsByClassName("ul1");
  var li=ul1[0].getElementsByTagName("li");


  for (let i = 0; i <  sp_btn.length; i++) {
     sp_btn[i].onclick = function () {
        for (var j = 0; j < ul1.length; j++) {
          ul1[j].style.display="none";
          var list = document.createElement("li");
          ul1[i].appendChild(list);
          list.innerHTML = li[0].innerHTML;
          removeClass(sp_btn[j],'btned');
        }
        addClass(sp_btn[i],'btned');
        ul1[i].style.display="block";
        window.onscroll = function () {
           var top = document.documentElement.scrollTop || document.body.scrollTop;
           // console.log(top)
           if (top>=370) {
            var list = document.createElement("li");
            ul1[i].appendChild(list);
            list.innerHTML = li[0].innerHTML;
            // console.log(li[0])
           }
        }
     }

  }
  for (let i = 0; i < getByClass("bottom_btn").length; i++) {
    getByClass("bottom_btn")[i].onclick = function () {
      for (var j = 0; j < getByClass("box1").length; j++) {
        getByClass("box1")[j].style.display="none";
        removeClass(getByClass("bottom_btn")[j],'btn_color');
      }
      getByClass("box1")[i].style.display="block";
      addClass(getByClass("bottom_btn")[i],'btn_color');
    }
  }
/*  window.onscroll = function () {
     var top = document.documentElement.scrollTop || document.body.scrollTop;
     // console.log(top)
     if (top>=370) {
      var list = document.createElement("li");
      ul1[0].appendChild(list);
      list.innerHTML = li[0].innerHTML;
     }
  }*/
 
