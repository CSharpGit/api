function ChartsModel() {
    this.getOption = function (data, callback) {
        var struct = {
            where: [],
            groupBy: [],
            orderBy: [],
            limit: []
        };
        //获取路由参数
        var chartType = this.GET('type');

        //添加查询条件
        struct.where.push(" chart_type ='" + chartType + "'");

        //初始化构造查询对象
        var sqlStruct = this.SqlStruct(struct);

        //调用服务类进行查询
        var charts = this.service('Charts');
        charts.getOption(sqlStruct, function (res) {
            if (res.length) {
                callback(res);
            }
        });
    }
}
module.exports = ChartsModel;