angular.module('starter.filters', [])
.filter('supportstatus', function() {
  return function(input) {
    input = input || '';
    switch(input){
      case 1:return '已申请';
      case 2:return '已短信通知';
      case 3:return '已查看';
      case 4:return '已处理';
      case 5:return '拒绝处理';
      case 6:return '作废/过期';
      case 7:return '未处理';
      case 8:return '已处理';
      default:return '';
    }
  };
})
.filter('emergency', function() {
  return function(input) {
    input = input || '';
    switch(input){
      case 1:return '普通';
      case 2:return '加急';
      case 3:return '请马上处理';
      default:return '普通';
    }
  };
})
.filter('datetext', function() {
  return function(date) {
    if(date.length!=19) return date;
    var t=new Date();
    var yyyy=parseInt(date.substr(0,4));
    var mm=date.substr(5,2)-1;
    var dd=parseInt(date.substr(8,2));
    var hh=parseInt(date.substr(11,2));
    var mins=parseInt(date.substr(14,2));
    var sec=parseInt(date.substr(17,2));
    var t0=new Date(yyyy,mm,dd,hh,mins,sec);
    var diff=parseInt((t.getTime()-t0.getTime())/60000);
    var h=parseInt(diff/60);
    var d=parseInt(h/24);
    var mo=parseInt(d/30.5);
    if(d>365){
      return '1年前'
    }else if(d>29){
      return mo+'个月前';
    }else if((24+t.getHours())<h){
      return (d+1)+'天前';
    }else if(t.getDate()!=dd){
      return '昨天';
    }else if(1<=h){
      return h+'小时前';
    }else if(1<=diff){
      return diff+'分钟前';
    }else{
      return '刚刚';
    }
  };
})



// .filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });
var dateHowFar = function(date){
    var t=new Date();
    var yyyy=parseInt(date.substr(0,4));
    var mm=date.substr(5,2)-1;
    var dd=parseInt(date.substr(8,2));
    var hh=parseInt(date.substr(11,2));
    var mins=parseInt(date.substr(14,2));
    var sec=parseInt(date.substr(17,2));
    var t0=new Date(yyyy,mm,dd,hh,mins,sec);
    var diff=parseInt((t.getTime()-t0.getTime())/60000);
    var h=parseInt(diff/60);
    var d=parseInt(h/24);
    var mo=parseInt(d/30.5);
    if(d>365){
      return '1年前'
    }else if(d>29){
      return mo+'个月前';
    }else if((24+t.getHours())<h){
      return (d+1)+'天前';
    }else if(t.getDate()!=dd){
      return '昨天';
    }else if(1<=h){
      return h+'小时前';
    }else if(1<=diff){
      return diff+'分钟前';
    }else{
      return '刚刚';
    }
  }