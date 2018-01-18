export default {
	/*路由切换页面每次都是回到最顶部，在creat声明周期中调用*/
	scrollToTop: function(){
		window.scrollTo(0,0);
	},
	/*对豆瓣公共api获取图片地址进行处理，防止出现404*/
	getImage: function(url){
      if(url !== undefined){
          return url.replace(/^http\w{0,1}:\/\//ig,'https://images.weserv.nl/?url=');
      }
    },
    /*原生请求jsonp,传递一个对象url,callback函数*/
    getJsonp: function(obj){
    	var url = obj.url +"&callback="+obj.success;
       	// 创建script标签，设置其属性
       	var script = document.createElement('script');
       	script.setAttribute('src', url);
      	// 把script标签加入head，此时调用开始
       document.getElementsByTagName('head')[0].appendChild(script); 
    }
}