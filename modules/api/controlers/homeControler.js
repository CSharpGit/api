function homeControler(){
    this.index = function(){
        this.render({},'index');
    }

    this.getOption = function () {
        var that = this;
        var charts = this.model('Charts');
        var data = {};
        charts.getOption(data, function (res) {
            that.renderJson(JSON.parse(res[0].chart_option));
        });
    }
}
module.exports = homeControler;