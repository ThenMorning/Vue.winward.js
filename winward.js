var Winward = function (options){
    // 编译模板
    this.complieData(options)
    this.$options = options;
    // 监听数据变化
    this.watchData(this.$options.data)
}