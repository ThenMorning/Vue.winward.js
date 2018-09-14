Winward.prototype.complieData = function(options) {
    this.renderData(query(options.el),complieTemplate(options));
}
// 查找实例挂载节点
function query(el) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
            console.warn('Cannot find element: ' + el);
            return document.createElement('div')
        }
        return selected
    } else {
        return el
    }
}

// 匹配插值表达式，返回dom
function complieTemplate(options) {
    var viewModelStr = options.template.match(/{{2}(\S{1,})}{2}/)[1]; //  {{a.b.c}}
    viewModel = viewModelStr.split('.'); // [a,b,c]
    var model =  findModel(options.data, viewModel)
    return options.template.replace(/{{2}(\S{1,})}{2}/,model)
}


// 遍历viewModel（插值表达式），找到data中 差值表达式的值
function findModel(data, viewModel) {
    var value = JSON.parse(JSON.stringify(data));
    for (var i = 0; i < viewModel.length; i++) {
        // 遍历data 匹配差值表达式的每一层属性
        value.hasOwnProperty(viewModel[i]) ? value = value[viewModel[i]] 
                                           : (function(){console.error('Cannot find property: ' + viewModel[i]);value = null;})()
    }
    return value;
}
