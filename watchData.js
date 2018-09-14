Winward.prototype.watchData = function(data) {
    // 遍历对象的所有属性，进行监听
    Object.keys(data).forEach (key => {
      this.watchProperty (data, key, data[key]);
    });
}

Winward.prototype.watchProperty =function(data, key, value) {
    var self = this;
  // 劫持 get 和 set
  Object.defineProperty (data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log ('intercept get:' + key);
      return value;
    },
    set: function (newVal) {
      console.log ('intercept set:' + key);
      if (newVal == value) {
        return;
      }
      //已经监听了，如果直接赋值，会再次触发监听事件，陷入死循环
      //data[key] = newVal;
      value = newVal;
      // value 变成了 新的  newval,newVal也可能是个对象，如果修改newVal的属性，也要监听到
      if (newVal instanceof Object) this.watchData (newVal);
      // 数据更新了 要重新渲染页面,这里做虚拟dom的比较
      self.complieData(self.$options)
    },
  });
  // 递归
  if (value instanceof Object) this.watchData (value);
}
