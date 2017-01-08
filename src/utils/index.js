/**
 * Created by Administrator on 2017/1/9.
 */

/**
 * 工具类
 * */
export default {
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

            newDate = years + "年" + month + "月" + days +
                " " + hours + ":" + minutes ;

            return newDate;
        }
    }
}