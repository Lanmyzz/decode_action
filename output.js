//Sun Sep 22 2024 15:39:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("星播客抽奖"),
  axios = require("axios");
let request = require("request");
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let xbkhd = ($.isNode() ? process.env.xbkhd : $.getdata("xbkhd")) || "",
  xbkhdArr = [],
  data = "",
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n============ 微信小程序：柠檬玩机 ============");
      log("\n=================== 共找到 " + xbkhdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + xbkhdArr);
      for (let _0x33b1e7 = 0; _0x33b1e7 < xbkhdArr.length; _0x33b1e7++) {
        let _0x57e18d = _0x33b1e7 + 1;
        addNotifyStr("\n==== 开始【第 " + _0x57e18d + " 个账号】====\n", true);
        xbkhd = xbkhdArr[_0x33b1e7];
        xbktoken = xbkhd.split("&")[0];
        xbkphone = xbkhd.split("&")[1];
        await checknm();
        if (nmwj == "微信小程序：柠檬玩机") {
          log("==检测直播间抽奖==");
          await checkins(1);
          log("==检测直播间抽奖页面1==");
          await checkins(2);
          log("==预约抽奖==");
          await checkin(1);
          log("==预约抽奖页面1==");
          await checkin(2);
          log("==查询==");
          await getMyWinList();
        } else {
          if (nmwj !== "微信小程序：柠檬玩机") {
            log(nmwj);
            return;
          }
        }
      }
    }
  }
})().catch(_0x329c68 => log(_0x329c68)).finally(() => $.done());
async function checkin(_0x5a0af1) {
  return new Promise(_0x4b05b0 => {
    var _0x5c07d0 = {
      "method": "GET",
      "url": "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=01&pageType=1&page=" + _0x5a0af1 + "&khd=1",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5c07d0)));
    axios.request(_0x5c07d0).then(async function (_0x87d0f6) {
      try {
        data = _0x87d0f6.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x87d0f6.data)));
        if (data.code == 0) {
          list = data.data;
          for (i in list) {
            if (list[i].liveType == 1 && list[i].isReserve == 0) {
              log(list[i].nickname);
              liveId = list[i].liveId;
              period = list[i].period;
              await reserve(liveId, period);
              await $.wait(5000);
              await equityExchangeCaptcha();
              await lottery(liveId, period);
            }
          }
        }
      } catch (_0xa8e83e) {
        log("异常：" + JSON.stringify(_0x87d0f6.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x51e03c) {
      console.error(_0x51e03c);
    }).then(_0xb1c7ce => {
      _0x4b05b0();
    });
  });
}
async function checkins(_0x3f53c3) {
  return new Promise(_0x21bcb1 => {
    var _0x498c07 = {
      "method": "GET",
      "url": "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=01&pageType=1&page=" + _0x3f53c3 + "&khd=1",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x498c07)));
    axios.request(_0x498c07).then(async function (_0xe512eb) {
      try {
        data = _0xe512eb.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xe512eb.data)));
        if (data.code == 0) {
          list = data.data;
          for (i in list) {
            if (list[i].goodsCount > 0) {
              nickname = list[i].nickname;
              liveId = list[i].liveId;
              period = list[i].period;
              await getLiveGoodsList(liveId);
              await $.wait(5000);
            }
          }
        }
      } catch (_0x4e98b1) {
        log("异常：" + JSON.stringify(_0xe512eb.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x1b74d7) {
      console.error(_0x1b74d7);
    }).then(_0xcf0871 => {
      _0x21bcb1();
    });
  });
}
async function reserve(_0x29fe57, _0x54c9e0) {
  return new Promise(_0x4e6476 => {
    var _0x5b58ce = {
      "method": "POST",
      "url": "https://xbk.189.cn/xbkapi/api/room/index/reserve",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      },
      "data": {
        "liveId": _0x29fe57,
        "period": _0x54c9e0,
        "account": xbkphone,
        "khd": 1
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5b58ce)));
    axios.request(_0x5b58ce).then(async function (_0x2fb075) {
      try {
        data = _0x2fb075.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x2fb075.data));
        }
        if (data.code == 0) log("预约抽奖：" + data.msg);else log("预约抽奖：" + data.msg);
      } catch (_0x19fe6f) {}
    }).catch(function (_0x59af65) {
      console.error(_0x59af65);
    }).then(_0x8d16f6 => {
      _0x4e6476();
    });
  });
}
async function checknm() {
  return new Promise(_0x354901 => {
    var _0x192adb = {
      "method": "GET",
      "url": "http://129.150.41.146/xbk1.json",
      "headers": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x192adb)));
    axios.request(_0x192adb).then(async function (_0x5056bb) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5056bb.data)));
        nmwj = _0x5056bb.data.nmwj;
      } catch (_0x4767ab) {
        log("异常：" + data + "，原因：" + data);
      }
    }).catch(function (_0x55e567) {
      console.error(_0x55e567);
    }).then(_0x39a606 => {
      _0x354901();
    });
  });
}
async function equityExchangeCaptcha() {
  return new Promise(_0x20362d => {
    var _0x152efe = {
      "method": "GET",
      "url": "http://wj2.f3322.net:8856",
      "headers": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x152efe)));
    axios.request(_0x152efe).then(async function (_0x3e8fac) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3e8fac.data)));
        pic = _0x3e8fac.data;
        if (pic !== "") await Captcha();else log("验证码获取失败");
      } catch (_0x2ecff9) {
        log("异常：" + data + "，原因：" + data);
      }
    }).catch(function (_0x5e97f5) {
      console.error(_0x5e97f5);
    }).then(_0x206d9f => {
      _0x20362d();
    });
  });
}
async function Captcha() {
  return new Promise(_0x50f20f => {
    var _0x5f41eb = {
      "method": "POST",
      "url": "http://wj2.f3322.net:6688/identify_GeneralCAPTCHA",
      "headers": {
        "accept": "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "wj2.f3322.net:6688",
        "Origin": "http://wj2.f3322.net:6688",
        "Referer": "http://wj2.f3322.net:6688/docs"
      },
      "data": {
        "ImageBase64": pic
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5f41eb)));
    axios.request(_0x5f41eb).then(async function (_0x1a7e6e) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1a7e6e.data)));
        words = _0x1a7e6e.data.result;
        log("验证码：" + words);
      } catch (_0x119737) {
        log("异常：" + data + "，原因：" + data);
      }
    }).catch(function (_0x36d0c4) {
      console.error(_0x36d0c4);
    }).then(_0x375085 => {
      _0x50f20f();
    });
  });
}
async function lottery(_0x350d74, _0x2fc056) {
  return new Promise(_0x14f263 => {
    var _0x377144 = {
      "method": "POST",
      "url": "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      },
      "data": {
        "active_code": "20210430YmBxyGy78LRnLCVDf3",
        "captcha": words,
        "guid": "161cee0d-b70d-4246-b0f2-a7fd2ab35342",
        "liveId": _0x350d74,
        "period": _0x2fc056
      }
    };
    debug && log("\n【debug】=============== 这是  请求 url ===============");
    axios.request(_0x377144).then(async function (_0x3eed9c) {
      try {
        data = _0x3eed9c.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3eed9c.data)));
        data.code == 9999 && log("抽奖：" + data.data.prize_id);
        data.code == 9005 && log("抽奖：" + data.msg);
        data.code == 0 && log("抽奖：" + data.msg);
        data.code == -2002 && log("抽奖：" + data.msg);
      } catch (_0x1676b5) {
        log("异常：" + JSON.stringify(_0x3eed9c.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x3b816d) {
      console.error(_0x3b816d);
    }).then(_0x443734 => {
      _0x14f263();
    });
  });
}
async function getLiveGoodsList(_0x402c5c) {
  return new Promise(_0x7ab677 => {
    var _0xced853 = {
      "method": "GET",
      "url": "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList?liveId=" + _0x402c5c + "&list_type=ordinary&page=1",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xced853)));
    axios.request(_0xced853).then(async function (_0x32bf8e) {
      try {
        data = _0x32bf8e.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x32bf8e.data)));
        if (data.code == 0) {
          goodlist = data.data.list;
          for (i in goodlist) {
            if (goodlist[i].title == "幸运大转盘") {
              log(nickname);
              await equityExchangeCaptcha();
              active_code = goodlist[i].activeCode;
              log(active_code);
              await lotterys(liveId, period, active_code);
            }
            if (goodlist[i].title == "直播转盘") {
              log(nickname);
              await equityExchangeCaptcha();
              active_code = goodlist[i].activeCode;
              log(active_code);
              await lotterys(liveId, period, active_code);
            }
          }
        }
      } catch (_0x50c0b1) {
        log("异常：" + JSON.stringify(_0x32bf8e.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x4d28ab) {
      console.error(_0x4d28ab);
    }).then(_0x480a46 => {
      _0x7ab677();
    });
  });
}
async function lotterys(_0x36dbb2, _0x4db69a, _0x130d1c) {
  return new Promise(_0xec6905 => {
    var _0x2ac6db = {
      "method": "POST",
      "url": "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      },
      "data": {
        "active_code": _0x130d1c,
        "captcha": words,
        "guid": "161cee0d-b70d-4246-b0f2-a7fd2ab35342",
        "liveId": _0x36dbb2,
        "period": _0x4db69a
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x2ac6db)));
    axios.request(_0x2ac6db).then(async function (_0x2ca984) {
      try {
        data = _0x2ca984.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2ca984.data)));
        data.code == 9999 && log("抽奖：" + data.data.prize_id);
        data.code == 9005 && log("抽奖：" + data.msg);
        data.code == 0 && log("抽奖：" + data.msg);
        data.code == -2002 && log("抽奖：" + data.msg);
      } catch (_0x2e4b7b) {
        log("异常：" + JSON.stringify(_0x2ca984.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x20da7b) {
      console.error(_0x20da7b);
    }).then(_0x18a783 => {
      _0xec6905();
    });
  });
}
async function getMyWinList() {
  return new Promise(_0xc96ce5 => {
    var _0x344c88 = {
      "method": "GET",
      "url": "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=1&activeCode=",
      "headers": {
        "Host": "xbk.189.cn",
        "Connection": "keep-alive",
        "request-startTimes": "2023-03-07 15:29:58",
        "request-startTime": "1678174198406",
        "Authorization": xbktoken,
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "Referer": "https://xbk.189.cn/xbk/newHome?tab=1&l=ticketerror&version=9.3.3&errorticket=183ea7e425377de9f2a2f862557b32d45ff4211a48f70aa4ec4c3decc1d47ebfdbb54391b548e7cf0b817414b7a9f04634fad1e79f4a1e12cecc94b0037fe5c55556f282b7e25d1f967126db75d37b695062d31b46a56658ecaefec6b2fa30c6&loginType=1",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x344c88)));
    axios.request(_0x344c88).then(async function (_0x264ec6) {
      try {
        data = _0x264ec6.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x264ec6.data)));
        if (data.code == 0) log("查询：" + JSON.stringify(_0x264ec6.data));else log("查询：" + data.msg);
      } catch (_0x3bd9f2) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x2bad6f) {
      console.error(_0x2bad6f);
    }).then(_0x4c3ccf => {
      _0xc96ce5();
    });
  });
}
async function Envs() {
  if (xbkhd) {
    if (xbkhd.indexOf("@") != -1) {
      xbkhd.split("@").forEach(item => {
        xbkhdArr.push(item);
      });
    } else if (xbkhd.indexOf("\n") != -1) {
      xbkhd.split("\n").forEach(item => {
        xbkhdArr.push(item);
      });
    } else {
      xbkhdArr.push(xbkhd);
    }
  } else {
    log(`\n 【${$.name}】：未填写变量 xbkhd`);
    return;
  }
  return true;
}
function addNotifyStr(str, is_log = true) {
  if (is_log) {
    log(`${str}\n`);
  }
  msg += `${str}\n`;
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg(message);
    }
  } else {
    log(message);
  }
}
function randomString(m) {
  for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
  return t.slice(0, e);
}
function randomnum(e) {
  e = e || 32;
  var t = "1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}