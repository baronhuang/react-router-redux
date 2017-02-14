/**
 * Created by Administrator on 2017/1/9.
 */

/**
 * 工具类
 * */

import axios from 'axios'
import {browserHistory} from 'react-router'

/*配置axios */
/*需要对post进行formdata转换*/
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // console.log(333, config.data)
    if(config.data && config.type != 'file'){
        var str = [];
        var data = config.data;
        for(var p in data)
            if (data.hasOwnProperty(p) && data[p] != undefined) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
            }
        config.data = str.join("&");
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/*默认过滤返回的数据*/
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.data.statusCode == 301){
        browserHistory.push('/signin');
    }
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default {

    /*时间格式转换*/
    dateFormat(strDateTime){
        let years, month, days, hours, minutes, seconds;
        if (strDateTime) {
            let newDate = new Date(strDateTime);

            years = newDate.getFullYear();

            month = (newDate.getMonth() + 1);
            if (Number(month) < 10) month = "0" + month;

            days = newDate.getDate();
            if (Number(days) < 10) days = "0" + days;

            hours = newDate.getHours();
            if (Number(hours) < 10) hours = "0" + hours;

            minutes = newDate.getMinutes();
            if (Number(minutes) < 10) minutes = "0" + minutes;

            seconds = newDate.getSeconds();
            if (Number(seconds) < 10) seconds = "0" + seconds;

            newDate = `${years}年${month}月${days}日 ${hours}:${minutes}`;

            return newDate;
        }
    },
    /*请求数据专用*/
    fetch(method, url, params, type) {

        var options = {
            method: method,
        }

        /*如果window未定义则为服务器环境*/
        try{
            window;
            options.url = `/api/${url}`;
        }catch (e){
            options.url = `http://localhost:3000/api/${url}`;
        }

        if(['post', 'put'].indexOf(method) != -1){
            options.data = params;
        }else{
            options.params = params;
        }

        options.type = type;
        return  axios(options);
    },
    /*延时，模拟请求时间间隔*/
    delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}