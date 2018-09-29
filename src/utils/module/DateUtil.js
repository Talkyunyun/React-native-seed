/**
 * 时间相关工具
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

exports.DateUtil = {

    /**
     * 消息事件显示
     * @param timestamp
     * @param timeShowPlace
     * @returns {string}
     */
    showMessageTime(timestamp, timeShowPlace) {
        // 消息发送时间
        timestamp = parseInt(timestamp);
        let msgTime = new Date(timestamp);
        let msgTimeYear = msgTime.getUTCFullYear();
        let msgTimeMonth = (msgTime.getUTCMonth() + 1);
        let msgTimeDate = msgTime.getUTCDate();
        let hms = '';
        hms += ' ' + msgTime.getHours() + ':';
        hms += ' ' + msgTime.getMinutes() >= 10 ? msgTime.getMinutes() : '0' + msgTime.getMinutes();

        // 获取本地时间
        let myDate = new Date();
        let myDateYear = myDate.getUTCFullYear();
        let myDateMonth = myDate.getUTCMonth() + 1;
        let myDateDate = myDate.getUTCDate();
        let dateMinus = msgTimeDate - myDateDate;

        // 消息发送时间和本地时间为同一天
        if (msgTimeYear === myDateYear && msgTimeMonth === myDateMonth && msgTimeDate === myDateDate) {
            return hms;
        } else if (msgTimeYear === myDateYear && msgTimeMonth === myDateMonth && dateMinus >= -6 && dateMinus <= -1) {
            // 消息发送时间在一周范围内
            for (let i = 0; i <= 6; i++) {
                if (myDate.getDay() === i) {
                    if (dateMinus === -6) {
                        return '周'
                            + (i === 0 ? '一' : (i === 1 ? '二' : (i === 2 ? '三' : (i === 3 ? '四' : (i === 4 ? '五' : (i === 5 ? '六' : (i === 6 ? '日' : ' ')))))))
                            + ' ' + (timeShowPlace === "messageList" ? '' : hms)
                    } else if (dateMinus === -5) {
                        return '周'
                            + (i === 0 ? '二' : (i === 1 ? '三' : (i === 2 ? '四' : (i === 3 ? '五' : (i === 4 ? '六' : (i === 5 ? '日' : (i === 6 ? '日' : ' ')))))))
                            + ' ' + (timeShowPlace === "messageList" ? '' : hms)
                    } else if (dateMinus === -4) {
                        return '周'
                            + (i === 0 ? '三' : (i === 1 ? '四' : (i === 2 ? '五' : (i === 3 ? '六' : (i === 4 ? '日' : (i === 5 ? '一' : (i === 6 ? '二' : ' ')))))))
                            + ' ' + (timeShowPlace === "messageList" ? '' : hms)
                    } else if (dateMinus === -3) {
                        return '周'
                            + (i === 0 ? '四' : (i === 1 ? '五' : (i === 2 ? '六' : (i === 3 ? '日' : (i === 4 ? '一' : (i === 5 ? '二' : (i === 6 ? '三' : ' ')))))))
                            + ' ' + (timeShowPlace === "messageList" ? '' : hms)
                    } else if (dateMinus === -2) {
                        return '周'
                            + (i === 0 ? '五' : (i === 1 ? '六' : (i === 2 ? '日' : (i === 3 ? '一' : (i === 4 ? '二' : (i === 5 ? '三' : (i === 6 ? '四' : ' ')))))))
                            + ' ' + (timeShowPlace === "messageList" ? '' : hms)
                    } else {
                        return '昨天'
                    }
                }
            }
        } else {// 消息发送时间在一周范围外
            return msgTimeYear + '/' + msgTimeMonth + '/' + msgTimeDate;
        }
    }
};