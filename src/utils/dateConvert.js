import dayjs from "dayjs";
import dayjs_plugin_utc from 'dayjs/plugin/utc'
import dayjs_plugin_timezone from 'dayjs/plugin/timezone'
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

export  function dateConvert(date, timezone){
    return dayjs.unix(date).tz(timezone).format('M/D/YYYY');
    
}