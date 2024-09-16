// require("global-agent/bootstrap");
// global.GLOBAL_AGENT.HTTP_PROXY="http://IP:端口";  用代理池去掉注释，自己修改IP端口  不用代理池不用管
const http = require('http');  
function getIP() {  
    return new Promise((resolve, reject) => {  
        http.get('http://ip.3322.net', (res) => {  
            let data = '';  
  
            // 接收数据片段  
            res.on('data', (chunk) => {  
                data += chunk;  
            });  
  
            // 数据接收完毕  
            res.on('end', () => {  
                const ip = data.trim(); // 去除可能存在的空格或换行符  
                console.log("当前公网IP:", ip);  
                resolve(ip); // 将IP地址作为Promise的解析值  
            });  
  
        }).on("error", (err) => {  
            console.log("获取IP时发生错误:", err.message);  
            reject(err); // 将错误作为Promise的拒绝原因  
        });  
    });  
}  
const axios = require('axios');
// 设置一个定时器，在9分钟后强制关闭脚本
setTimeout(() => {
    console.log("\n9分钟已到，强制关闭脚本");
    process.exit(0); // 退出脚本
}, 9 * 60 * 1000); // 9分钟
// 设置一个间隔定时器，每分钟提示剩余时间
let remainingMinutes = 9;
const intervalId = setInterval(() => {
    remainingMinutes--;
    if (remainingMinutes > 0) {
        process.stdout.write(`\r还有${remainingMinutes}分钟关闭脚本`);
    } else {
        clearInterval(intervalId); // 清除间隔定时器
    }
}, 60 * 1000); // 每分钟

let hasWaitedForMidnight = false;
const _0x4c672b = _0x4a9430("中国联通阅读"),
  _0x2bba68 = require("got"),
  _0x2bbc1d = require("path"),
  {
    exec: _0x526718
  } = require("child_process"),
  _0x368aa5 = require("crypto-js"),
  {
    CookieJar: _0x4484a5
  } = require("tough-cookie"),
  _0x24434b = "chinaUnicom",
  _0x55899c = ["\n", "&", "@"],
  _0x52f10b = [_0x24434b + "Cookie"],
  _0x159493 = process.env[_0x24434b + "Sign"] === "false",
  _0xedc529 = process.env[_0x24434b + "Ltzf"] === "false",
  _0x148eb1 = 10000,
  _0x1cbe1e = 30;
const _0x2bad9c = 2.08,
  _0x4a2c68 = "chinaUnicom",
  _0x2eca5f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1971e5 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x4a2c68 + ".json",
  _0x239ea0 = 5,
  _0x469423 = "iphone_c@11.0503",
  _0x546817 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x469423 + "}",
  _0x281cdf = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x3d9810 = "10000002",
  _0xa01453 = "7k1HcDL8RKvc",
  _0x49426e = "woreadst^&*12345",
  _0x4872bf = "10000006",
  _0x457ac0 = "yQsp9gUqv7qX",
  _0x20c0ff = "QzUzOUM2QTQ2MTc4",
  _0x18c84f = "16-Bytes--String",
  _0x3e622c = "225",
  _0x46b3a9 = "225",
  _0x127422 = "party",
  _0x5b10f9 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x460d74 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x558192 = "7cb46449-3b11-4414-bb49-cbd15525fb88",
  _0x3bb78f = "9",
  _0x3db78e = "1",
  _0x2f3d25 = "wocareMBHServiceLife1",
  _0x12fe67 = "beea1c7edf7c4989b2d3621c4255132f",
  _0x5f2a5c = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x4e5ad9 = "0123456789",
  _0x4192c6 = "qwertyuiopasdfghjklzxcvbnm",
  _0x27f1a2 = process.env[_0x24434b + "Uuid"] || _0x4c672b.randomUuid(),
  _0x26ccd8 = [9, 10, 11, 12, 13],
  _0x123877 = 1000,
  _0x5d9e11 = 5000,
  _0x392042 = "1001000003",
  _0x2a3518 = "100002",
  _0x353847 = "";
let _0x333e1b = [],
  _0x1051da = [],
  _0x188394 = [],
  _0x55391c = null,
  _0x5724ea = [6640, 6641];
const _0x36a6fc = 7,
  _0x52ff20 = 5,
  _0x4cffb4 = 5,
  _0x3484cf = {
    ttlxj: "TTLXJ20210330",
    card_618: "NZJK618CJHD"
  };


const _0x10ec87 = {
  "抽奖": "01",
  "首次进入": "02",
  "卡片合成": "03",
  "瓜分奖励": "04"
};
function _0x71b805(_0x6a8fe2, _0x1dd78a, _0x1e36ab, _0x3359f8, _0x2c8970, _0x16f3cf) {
  return _0x368aa5[_0x6a8fe2].encrypt(_0x368aa5.enc.Utf8.parse(_0x3359f8), _0x368aa5.enc.Utf8.parse(_0x2c8970), {
    mode: _0x368aa5.mode[_0x1dd78a],
    padding: _0x368aa5.pad[_0x1e36ab],
    iv: _0x368aa5.enc.Utf8.parse(_0x16f3cf)
  }).ciphertext.toString(_0x368aa5.enc.Hex);
}
function _0x26715b(_0x186221, _0x49588d, _0x1d0a7d, _0x469ed4, _0x25017e, _0x48835f) {
  return _0x368aa5[_0x186221].decrypt({
    ciphertext: _0x368aa5.enc.Hex.parse(_0x469ed4)
  }, _0x368aa5.enc.Utf8.parse(_0x25017e), {
    mode: _0x368aa5.mode[_0x49588d],
    padding: _0x368aa5.pad[_0x1d0a7d],
    iv: _0x368aa5.enc.Utf8.parse(_0x48835f)
  }).toString(_0x368aa5.enc.Utf8);
}
let _0x191c8c = 0,
  _0x13c734 = 0;
function _0x169d23() {
  _0x13c734 = 1;
  process.on("SIGTERM", () => {
    _0x13c734 = 2;
    process.exit(0);
  });
  const _0x1067e7 = _0x2bbc1d.basename(process.argv[1]),
    _0x485af0 = ["bash", "timeout", "grep"];
  let _0x58df8a = ["ps afx"];
  _0x58df8a.push("grep " + _0x1067e7);
  _0x58df8a = _0x58df8a.concat(_0x485af0.map(_0x12a62f => "grep -v \"" + _0x12a62f + " \""));
  _0x58df8a.push("wc -l");
  const _0x5ef64e = _0x58df8a.join("|"),
    _0x3b614a = () => {
      _0x526718(_0x5ef64e, (_0x3ebb06, _0x1bb818, _0x1b4324) => {
        if (_0x3ebb06 || _0x1b4324) {
          return;
        }
        _0x191c8c = parseInt(_0x1bb818.trim(), 10);
      });
      if (_0x13c734 == 1) {
        setTimeout(_0x3b614a, 2000);
      }
    };
  _0x3b614a();
}
class _0x1e60de {
  constructor() {
    this.index = _0x4c672b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x1dc10b = {
      limit: 0
    };
    const _0x3e8908 = {
      Connection: "keep-alive"
    };
    const _0x7705b4 = {
      retry: _0x1dc10b,
      timeout: _0x148eb1,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x3e8908
    };
    this.got = _0x2bba68.extend(_0x7705b4);
    if (_0x13c734 == 0) {
      _0x169d23();
    }
  }
  log(_0x269c59, _0x301c3b = {}) {
    var _0x18a4a7 = "",
      _0x732521 = _0x4c672b.userCount.toString().length;
    if (this.index) {
      _0x18a4a7 += "账号[" + _0x4c672b.padStr(this.index, _0x732521) + "]";
    }
    if (this.name) {
      _0x18a4a7 += "[" + this.name + "]";
    }
    _0x4c672b.log(_0x18a4a7 + _0x269c59, _0x301c3b);
  }
  set_cookie(_0x2599f0, _0x6eb0f3, _0x312d79, _0x193e1e, _0x5c93b8 = {}) {
    this.cookieJar.setCookieSync(_0x2599f0 + "=" + _0x6eb0f3 + "; Domain=" + _0x312d79 + ";", "" + _0x193e1e);
  }
  async request(_0x433feb) {
    const _0x290a0a = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x23df85 = ["TimeoutError"],
      _0x668150 = ["EPROTO"],
      _0x1a1818 = [];
    var _0x4a443f = null,
      _0x1a7b45 = 0,
      _0x3f4231 = _0x433feb.fn || _0x433feb.url;
    let _0x5e1d36 = _0x4c672b.get(_0x433feb, "valid_code", _0x1a1818);
    _0x433feb.method = _0x433feb?.["method"]?.["toUpperCase"]() || "GET";
    let _0x823091, _0x173cf5;
    while (_0x1a7b45 < _0x1cbe1e) {
      try {
        _0x1a7b45++;
        _0x823091 = "";
        _0x173cf5 = "";
        let _0x179710 = null,
          _0x58a24f = _0x433feb?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x148eb1,
          _0x143403 = false,
          _0x3d7559 = Math.max(this.index - 2, 0),
          _0x37401b = Math.min(Math.max(this.index - 2, 1), 4),
          _0x123345 = Math.min(Math.max(this.index - 4, 1), 5),
          _0x45246d = _0x3d7559 * _0x37401b * _0x123345 * _0x123345 * 600,
          _0x315014 = _0x3d7559 * _0x37401b * _0x123345 * _0x123345 * 4000,
          _0xcde5b2 = _0x45246d + Math.floor(Math.random() * _0x315014),
          _0x359a88 = _0x191c8c * (_0x191c8c - 1) * 3000,
          _0x3a57f5 = (_0x191c8c - 1) * (_0x191c8c - 1) * 5000,
          _0x307da0 = _0x359a88 + Math.floor(Math.random() * _0x3a57f5),
          _0x17e433 = Math.max(_0x4c672b.userCount - 2, 0),
          _0xeb7e25 = Math.max(_0x4c672b.userCount - 3, 0),
          _0x36d37b = _0x17e433 * 400,
          _0x55e6b9 = _0xeb7e25 * 1000,
          _0x2c7717 = _0x36d37b + Math.floor(Math.random() * _0x55e6b9),
          _0x2a8da8 = 5000;
        await _0x4c672b.wait(_0x2a8da8);
        await new Promise(async _0x57cb0a => {
          setTimeout(() => {
            _0x143403 = true;
            _0x57cb0a();
          }, _0x58a24f);
          await this.got(_0x433feb).then(_0x4366f3 => {
            _0x4a443f = _0x4366f3;
          }, _0x30aa0f => {
            _0x179710 = _0x30aa0f;
            _0x4a443f = _0x30aa0f.response;
            _0x823091 = _0x179710?.["code"] || "";
            _0x173cf5 = _0x179710?.["name"] || "";
          });
          _0x57cb0a();
        });
        if (_0x143403) {
          this.log("[" + _0x3f4231 + "]请求超时(" + _0x58a24f / 1000 + "秒)，重试第" + _0x1a7b45 + "次");
        } else {
          if (_0x668150.includes(_0x823091)) {
            this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]");
            if (_0x179710?.["message"]) {
              console.log(_0x179710.message);
            }
            break;
          } else {
            if (_0x23df85.includes(_0x173cf5)) {
              this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
            } else {
              if (_0x290a0a.includes(_0x823091)) {
                this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
              } else {
                let _0x26ca58 = _0x4a443f?.["statusCode"] || "",
                  _0xeb6c6a = _0x26ca58 / 100 | 0;
                if (_0x26ca58) {
                  _0xeb6c6a > 3 && !_0x5e1d36.includes(_0x26ca58) && (_0x26ca58 ? this.log("请求[" + _0x3f4231 + "]返回[" + _0x26ca58 + "]") : this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]"));
                  if (_0xeb6c6a <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]");
                }
              }
            }
          }
        }
      } catch (_0x3004fb) {
        _0x3004fb.name == "TimeoutError" ? this.log("[" + _0x3f4231 + "]请求超时，重试第" + _0x1a7b45 + "次") : this.log("[" + _0x3f4231 + "]请求错误(" + _0x3004fb.message + ")，重试第" + _0x1a7b45 + "次");
      }
    }
    if (_0x4a443f == null) {
      return Promise.resolve({
        statusCode: _0x823091 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      body: _0x1d560d
    } = _0x4a443f;
    if (_0x1d560d) {
      try {
        _0x1d560d = JSON.parse(_0x1d560d);
      } catch {}
    }
    const _0x44d302 = {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      result: _0x1d560d
    };
    return Promise.resolve(_0x44d302);
  }
}
let _0x24046c = _0x1e60de;
try {
  let _0x12396e = require("./LocalBasic");
  _0x24046c = _0x12396e;
} catch {}
let _0x23c014 = new _0x24046c(_0x4c672b);
class _0x333e45 extends _0x24046c {
  constructor(_0xd93737) {
    super(_0x4c672b);
    this.cookieJar = new _0x4484a5();
    const _0x320a64 = {
      "User-Agent": _0x546817
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x320a64
    });
    let _0x52e0a3 = _0xd93737.split("#");
    this.token_online = _0x52e0a3[0];
    this.unicomTokenId = _0x4c672b.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x4c672b.randomString(32, _0x4e5ad9 + _0x4192c6).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x693930, _0x1088e8, _0x52b165 = {}) {
    let _0x44b4f4 = _0x52b165?.["domain"] || "10010.com",
      _0x3b30c6 = _0x52b165?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x693930, _0x1088e8, _0x44b4f4, _0x3b30c6, _0x52b165);
  }
  get_bizchannelinfo() {
    const _0x2fbd5b = {
      bizChannelCode: _0x46b3a9,
      disriBiz: _0x127422,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x2ae285 = JSON.stringify(_0x2fbd5b);
    return _0x2ae285;
  }
  get_epay_authinfo() {
    const _0x31fa00 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x31fa00);
  }
  get_flmf_data(_0x30396c = "welfareCenter") {
    const _0x1e4b94 = {
      sid: this.flmf_sid,
      actcode: _0x30396c
    };
    return _0x1e4b94;
  }
  encode_woread(_0x1fb841, _0x2edf26 = _0x49426e) {
    let _0x5d406d = _0x71b805("AES", "CBC", "Pkcs7", JSON.stringify(_0x1fb841), _0x2edf26, _0x18c84f);
    return Buffer.from(_0x5d406d, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_woread_m_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      signtimestamp: Date.now(),
      source: _0x3bb78f,
      token: this.woread_token
    };
  }
  get_ltyp_sign_header(_0x535fbf) {
    let _0x4ebb05 = Date.now(),
      _0x334431 = Math.floor(89999 * Math.random()) + 100000,
      _0x26bfbe = _0x2a3518,
      _0x5ba8fb = _0x353847,
      _0x461c52 = _0x368aa5.MD5(_0x535fbf + _0x4ebb05 + _0x334431 + _0x26bfbe + _0x5ba8fb).toString();
    const _0x59dfc6 = {
      key: _0x535fbf,
      resTime: _0x4ebb05,
      reqSeq: _0x334431,
      channel: _0x26bfbe,
      version: _0x5ba8fb,
      sign: _0x461c52
    };
    return _0x59dfc6;
  }
  async onLine(_0x12cbf8 = {}) {
    let _0x4d2878 = false;
    try {
      let _0x248c36 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x4c672b.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x281cdf,
            version: _0x469423,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x1b682a,
          statusCode: _0x152ca4
        } = await this.request(_0x248c36),
        _0x5655f9 = _0x4c672b.get(_0x1b682a, "code", _0x152ca4);
      if (_0x5655f9 == 0) {
        _0x4d2878 = true;
        this.valid = true;
        this.mobile = _0x1b682a?.["desmobile"];
        this.name = _0x1b682a?.["desmobile"];
        this.ecs_token = _0x1b682a?.["ecs_token"];
        this.city = _0x1b682a?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x5655f9 + "]");
      }
    } catch (_0x158d45) {
      console.log(_0x158d45);
    } finally {
      return _0x4d2878;
    }
  }
  async openPlatLineNew(_0x214a77, _0x356709 = {}) {
    const _0x51e388 = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x6e6d39 = _0x51e388;
    try {
      const _0x4299db = {
        to_url: _0x214a77
      };
      const _0x312936 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x4299db
      };
      let {
        headers: _0x1ad54b,
        statusCode: _0x3bb878
      } = await this.request(_0x312936);
      if (_0x1ad54b?.["location"]) {
        let _0x4d5939 = new URL(_0x1ad54b.location),
          _0x5c9903 = _0x4d5939.searchParams.get("type") || "02",
          _0x10c474 = _0x4d5939.searchParams.get("ticket");
        !_0x10c474 && this.log("获取ticket失败");
        const _0x3aab7e = {
          loc: _0x1ad54b.location,
          ticket: _0x10c474,
          type: _0x5c9903
        };
        _0x6e6d39 = _0x3aab7e;
      } else {
        this.log("获取ticket失败[" + _0x3bb878 + "]");
      }
    } catch (_0x2f04bf) {
      console.log(_0x2f04bf);
    } finally {
      return _0x6e6d39;
    }
  }
  async gettaskip(_0x14bf80 = {}) {
    let _0x4d9a4f = _0x4c672b.randomString(32).toUpperCase();
    try {
      const _0x21c80b = {
        mobile: this.mobile,
        orderId: _0x4d9a4f
      };
      const _0x23a9e8 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x21c80b
      };
      await this.request(_0x23a9e8);
    } catch (_0x39c470) {
      console.log(_0x39c470);
    } finally {
      return _0x4d9a4f;
    }
  }
  async ttlxj_h(_0x47d16c = {}) {
    try {
      const _0x2f3dc6 = {
        bizFrom: _0x3e622c,
        activityId: _0x3484cf.ttlxj,
        uid: _0x5b10f9
      };
      let _0x469865 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: _0x2f3dc6
      };
      await this.request(_0x469865);
    } catch (_0x173381) {
      console.log(_0x173381);
    }
  }
  async appMonth_28_bind(_0x2ae53c, _0x28e539 = {}) {
    try {
      const _0x5e8346 = {
        shareCode: _0x2ae53c,
        cl: "WeChat"
      };
      const _0x5807b0 = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: _0x5e8346,
        valid_code: [401]
      };
      let {
        result: _0x147b99
      } = await this.request(_0x5807b0);
    } catch (_0x24f7a3) {
      console.log(_0x24f7a3);
    }
  }
  
  async flmf_scanTask() {
    for (let _0xa11d9d of _0x26ccd8) {
      await this.flmf_gogLance(_0xa11d9d);
    }
  }
  async flmf_gogLance(_0x3534eb, _0x4a0142 = {}) {
    try {
      let _0x1d2f2 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x3534eb,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x422380
        } = await this.request(_0x1d2f2);
      await _0x4c672b.wait_gap_interval(this.t_flmf_task, _0x123877);
      let _0x213f2c = _0x4c672b.get(_0x422380, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x213f2c == "0000") {
        this.log("完成任务[" + _0x3534eb + "]成功");
      } else {
        let _0x2aacea = _0x422380?.["resultMsg"] || "";
        this.log("完成任务[" + _0x3534eb + "]失败[" + _0x213f2c + "]: " + _0x2aacea);
      }
    } catch (_0x229114) {
      console.log(_0x229114);
    }
  }
  async woread_api(_0x34880c) {
    let _0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)),
      _0x3e48ad = _0x1db761?.["result"]?.["message"] || "";
    _0x3e48ad?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)));
    return _0x1db761;
  }
  switch_woread_token(_0x56b38b) {
    const _0x2c6986 = {
      accesstoken: _0x56b38b
    };
    const _0x14d38a = {
      headers: _0x2c6986
    };
    this.got = this.got.extend(_0x14d38a);
  }
  async woread_auth(_0x7b7459 = {}) {
  let _0x547982 = false;
  while (!_0x547982) { // 添加重试逻辑
    try {
      let _0x43ac40 = _0x4c672b.time("yyyyMMddhhmmss");
      const _0x371d90 = {
        timestamp: _0x43ac40
      };
      let _0x2b69e1 = this.encode_woread(_0x371d90),
          _0x281e8f = Date.now().toString(),
          _0x2c469e = _0x368aa5.MD5(_0x3d9810 + _0xa01453 + _0x281e8f).toString();
      const _0x40e0b0 = {
        sign: _0x2b69e1
      };
      const _0x51135a = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3d9810 + "/" + _0x281e8f + "/" + _0x2c469e,
        json: _0x40e0b0
      };
      let {
        result: _0x10c758
      } = await this.request(_0x51135a),
          _0x1540b2 = _0x4c672b.get(_0x10c758, "code", -1);
      if (_0x1540b2 == "0000") {
        _0x547982 = true;
        this.woread_accesstoken = _0x10c758?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_accesstoken);
      } else {
        let _0x2c8b85 = _0x10c758?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x1540b2 + "]: " + _0x2c8b85);
      }
    } catch (_0x3f8fdd) {
      console.log(_0x3f8fdd);
    }
    if (!_0x547982) {
      console.log("woread_auth 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x547982;
}

async woread_login(_0x26d717 = {}) {
  let _0x5c0c95 = false;
  while (!_0x5c0c95) { // 添加重试逻辑
    try {
      let _0x10a4cc = {
        phone: this.mobile,
        timestamp: _0x4c672b.time("yyyyMMddhhmmss")
      },
          _0x544576 = this.encode_woread(_0x10a4cc);
      const _0x148f49 = {
        sign: _0x544576
      };
      const _0x35c631 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x148f49
      };
      let {
        result: _0x28bf76
      } = await this.request(_0x35c631),
          _0x5e778d = _0x4c672b.get(_0x28bf76, "code", -1);
      if (_0x5e778d == "0000") {
        _0x5c0c95 = true;
        let {
          userid: _0x58fe9a,
          userindex: _0x42fa05,
          token: _0x346b8f,
          verifycode: _0xdef795
        } = _0x28bf76?.["data"];
        this.woread_token = _0x346b8f;
        this.woread_verifycode = _0xdef795;
        const _0x3bda74 = {
          woread_userid: _0x58fe9a,
          woread_userindex: _0x42fa05,
          woread_token: _0x346b8f,
          woread_verifycode: _0xdef795
        };
        Object.assign(this, _0x3bda74);
      } else {
        let _0x32f4f4 = _0x28bf76?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x5e778d + "]: " + _0x32f4f4);
      }
    } catch (_0x315b1a) {
      console.log(_0x315b1a);
    }
    if (!_0x5c0c95) {
      console.log("woread_login 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x5c0c95;
}
  async woread_m_auth(_0x50ab9e = {}) {
  let _0x1d0afe = false;
  while (!_0x1d0afe) { // 添加重试逻辑
    try {
      let _0x45205b = Date.now().toString(),
          _0x2cc763 = _0x368aa5.MD5(_0x4872bf + _0x457ac0 + _0x45205b).toString();
      const _0x131d89 = {
        fn: "woread_auth",
        method: "get",
        url: "https:///m.woread.com.cn/api/union/app/auth/" + _0x4872bf + "/" + _0x45205b + "/" + _0x2cc763
      };
      let {
        result: _0x531e72
      } = await this.request(_0x131d89),
          _0x1f1163 = _0x4c672b.get(_0x531e72, "code", -1);
      if (_0x1f1163 == "0000") {
        _0x1d0afe = true;
        this.woread_m_accesstoken = _0x531e72?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_m_accesstoken);
      } else {
        let _0x2ce2e6 = _0x531e72?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x1f1163 + "]: " + _0x2ce2e6);
      }
    } catch (_0x53fed2) {
      console.log(_0x53fed2);
    }
    if (!_0x1d0afe) {
      console.log("woread_m_auth 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x1d0afe;
}

async woread_m_login(_0x1f5f78 = {}) {
  let _0x1dc636 = false;
  while (!_0x1dc636) { // 添加重试逻辑
    try {
      let _0x55a5ea = {
        userid: this.woread_userid,
        token: this.woread_token,
        timestamp: Date.now()
      },
          _0x2debbf = {
        userData: Buffer.from(JSON.stringify(_0x55a5ea), "utf-8").toString("base64"),
        ...this.get_woread_m_param()
      };
      delete _0x2debbf.token;
      let _0x25c9d8 = this.encode_woread(_0x2debbf, _0x20c0ff);
      const _0x87c20b = {
        sign: _0x25c9d8
      };
      const _0x662e4e = {
        fn: "woread_login",
        method: "post",
        url: "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin",
        json: _0x87c20b
      };
      let {
        result: _0x253805
      } = await this.request(_0x662e4e),
          _0x2410c4 = _0x4c672b.get(_0x253805, "code", -1);
      if (_0x2410c4 == "0000") {
        _0x1dc636 = true;
      } else {
        let _0xab03b2 = _0x253805?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x2410c4 + "]: " + _0xab03b2);
      }
    } catch (_0x5b576c) {
      console.log(_0x5b576c);
    }
    if (!_0x1dc636) {
      console.log("woread_m_login 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x1dc636;
}
  
  async woread_addReadTime(_0x1f2346 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x1f2346,
        _0x3f4dd2 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x223104 = this.encode_woread(_0x3f4dd2);
      const _0x4e8958 = {
        sign: _0x223104
      };
      const _0x5e4f85 = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x4e8958
      };
      let {
          result: _0x1f9eec
        } = await this.request(_0x5e4f85),
        _0x4851e5 = _0x4c672b.get(_0x1f9eec, "code", -1);
      if (_0x4851e5 == "0000") {
        this.log("刷新读小说时间: " + _0x1f9eec?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x1f9eec?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x797aad = _0x1f9eec?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x4851e5 + "]: " + _0x797aad);
      }
    } catch (_0x5e3330) {
      console.log(_0x5e3330);
    }
  }
  async woread_m_addReadTime(_0x513b98 = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x513b98,
        _0x335ecd = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_m_param()
        },
        _0x1eb6f5 = this.encode_woread(_0x335ecd, _0x20c0ff);
      const _0x3f838f = {
        sign: _0x1eb6f5
      };
      const _0x1eab5b = {
        fn: "woread_m_addReadTime",
        method: "post",
        url: "https:///m.woread.com.cn/api/union/history/addReadTime",
        json: _0x3f838f
      };
      let {
          result: _0xc66009
        } = await this.request(_0x1eab5b),
        _0x22bdf8 = _0x4c672b.get(_0xc66009, "code", -1);
      if (_0x22bdf8 == "0000") {
        this.log("刷新读小说时间: " + _0xc66009?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0xc66009?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x179f91 = _0xc66009?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x22bdf8 + "]: " + _0x179f91);
      }
    } catch (_0x9c51e0) {
      console.log(_0x9c51e0);
    }
  }
  
  async moonbox_queryActiveInfo(_0x1aa999 = {}) {
    try {
      let _0x25bfae = this.get_woread_param(),
        _0x30779b = this.encode_woread(_0x25bfae);
      const _0x3df8df = {
        sign: _0x30779b
      };
      const _0x1fafe7 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0x3df8df
      };
      let {
          result: _0x3fef2a
        } = await this.woread_api(_0x1fafe7),
        _0x1f3aaf = _0x4c672b.get(_0x3fef2a, "code", -1);
      if (_0x1f3aaf == "0000") {
        let {
          activeId: _0x250122,
          activeName: _0x2bfd4e
        } = _0x3fef2a?.["data"];
        _0x55391c = _0x250122;
      } else {
        let _0xa936bf = _0x3fef2a?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x1f3aaf + "]: " + _0xa936bf);
      }
    } catch (_0x1b94a6) {
      console.log(_0x1b94a6);
    }
  }
  async moonbox_queryCurTaskStatus(_0x149c93 = {}) {
    try {
      let _0x5de828 = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x3b7ea4 = this.encode_woread(_0x5de828);
      const _0xfd95db = {
        sign: _0x3b7ea4
      };
      const _0x247389 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0xfd95db
      };
      let {
          result: _0x1d541c
        } = await this.woread_api(_0x247389),
        _0x1054fb = _0x4c672b.get(_0x1d541c, "code", -1);
      if (_0x1054fb == "0000") {
        for (let _0x252927 of _0x1d541c?.["data"] || []) {
          let {
            taskName: _0x313ae9,
            currentValue: _0x3fdd11,
            taskValue: _0x53dd8d
          } = _0x252927?.["taskDetail"];
          switch (_0x252927.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x313ae9] = true;
                this.log("阅光宝盒[" + _0x313ae9 + "]进度: " + parseInt(_0x3fdd11) + "/" + _0x53dd8d + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x252927);
              }
            case 1:
              {
                this.moonbox_task_record[_0x313ae9] = false;
                if (!this.moonbox_notified.includes(_0x313ae9)) {
                  this.moonbox_notified.push(_0x313ae9);
                  const _0x52e7f2 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x313ae9 + "]今日已完成", _0x52e7f2);
                }
                break;
              }
          }
        }
      } else {
        let _0x325aa9 = _0x1d541c?.["message"] || "";
        _0x325aa9?.["includes"]("未领取") && !_0x149c93.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x149c93.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x149c93)) : this.log("阅光宝盒查询任务状态失败[" + _0x1054fb + "]: " + _0x325aa9);
      }
    } catch (_0x4df7a0) {
      console.log(_0x4df7a0);
    }
    // 无论任务状态如何，继续运行查询任务列表
     await this.moonbox_queryActiveTaskList();
  }
  async moonbox_completeActiveTask(_0x4af677, _0x3aeda0 = {}) {
    try {
      let _0x4c63e8 = {
          taskId: _0x4af677.id,
          ...this.get_woread_param()
        },
        _0xa3034 = this.encode_woread(_0x4c63e8);
      const _0x378954 = {
        sign: _0xa3034
      };
      const _0x4513b4 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x378954
      };
      let {
          result: _0x40efdd
        } = await this.woread_api(_0x4513b4),
        _0x37bf24 = _0x4c672b.get(_0x40efdd, "code", -1);
      if (_0x37bf24 == "0000") {
        const _0x432c2b = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x40efdd?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x40efdd?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x432c2b);
      } else {
        let _0x355fe8 = _0x40efdd?.["message"] || "";
        this.log("阅光宝盒[" + _0x4af677?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x37bf24 + "]: " + _0x355fe8);
      }
    } catch (_0x5d1580) {
      console.log(_0x5d1580);
    }
  }
  async moonbox_queryActiveTaskList(_0x5b4f5d = {}) {
    try {

      let yueduliebiao = [
            {
                taskDetail: {
                    taskValue: "480",
                    materialGroup: {
                        groupName: "20元话费红包"
                    },
                    taskName: "阅读480分钟"
                },
                maxNum: 5,
                receiveNum: 2,
                secondTaskId: "120"
            },
            {
                taskDetail: {
                    taskValue: "240",
                    materialGroup: {
                        groupName: "0.3元话费红包"
                    },
                    taskName: "阅读240分钟"
                },
                maxNum: 1500,
                receiveNum: 750,
                secondTaskId: "118"
            },
            {
                taskDetail: {
                    taskValue: "120",
                    materialGroup: {
                        groupName: "0.2元话费红包"
                    },
                    taskName: "阅读120分钟"
                },
                maxNum: 3000,
                receiveNum: 1500,
                secondTaskId: "117"
            }
        ];

        let _0x1cff30 = yueduliebiao.sort(function (_0x1792cf, _0xe10a9b) {
            let _0x3ecb2c = parseInt(_0xe10a9b.taskDetail.taskValue),
                _0x243b54 = parseInt(_0x1792cf.taskDetail.taskValue);
            return _0x3ecb2c - _0x243b54;
        });

        let _0xe49ce3 = _0x1cff30.filter(_0x5ed25d => _0x5ed25d.maxNum - _0x5ed25d.receiveNum > 0 && _0x5ed25d.taskDetail.materialGroup.groupName.includes("红包"));
          this.log(`获取到 ${_0xe49ce3.length} 个可领取的阅光宝盒红包任务`);
        _0xe49ce3?.["length"] ? await this.moonbox_receiveActiveTask(_0xe49ce3) : this.log("没有可领取的阅光宝盒红包任务了");
      } 
     catch (_0x3346d3) {
      console.log(_0x3346d3);
    }
  }
  
  async moonbox_receiveActiveTask(_0x17d7d6, _0x642063 = {}) {
    try {
      if (!_0x17d7d6.length) {
        return;
      }
      let _0x471744 = _0x17d7d6.shift(),
        _0x3180c7 = _0x471744?.["taskDetail"]?.["taskName"] || "",
        _0x35c4b9 = {
          activeId: _0x55391c,
          taskId: _0x471744.secondTaskId,
          ...this.get_woread_param()
        },
        _0x9d13eb = this.encode_woread(_0x35c4b9);
      const _0x1abd0a = {
        sign: _0x9d13eb
      };
      const waitForMidnight = async () => {
    while (true) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        process.stdout.write(`\r当前时间: ${hours}:${minutes}:${seconds}，等待到0点0分0秒开启查询任务，还有${remainingMinutes}分钟关闭脚本`);
        if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            console.log("\n到达0点0分0秒，开始查询任务");
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 每秒检查一次
     }
    };

      // 等待到0点0分0秒
      if (!hasWaitedForMidnight) {
      await waitForMidnight();
      hasWaitedForMidnight = true;
        }
      const _0x3e1696 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x1abd0a
      };
      let {
          result: _0x4cc772
        } = await this.woread_api(_0x3e1696),
        _0x45290e = _0x4c672b.get(_0x4cc772, "code", -1);
      if (_0x45290e == "0000") {
        this.moonbox_task_record[_0x3180c7] = true;
        this.log("领取阅光宝盒任务[" + _0x3180c7 + "]成功");
      } else {
        let _0x4cc9d9 = _0x4cc772?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x3180c7 + "]失败[" + _0x45290e + "]: " + _0x4cc9d9);
        (_0x4cc9d9?.["includes"]("今天无法完成") || _0x4cc9d9?.["includes"]("领光了")) && _0x17d7d6.length > 0 && (await _0x4c672b.wait(100), await this.moonbox_receiveActiveTask(_0x17d7d6, _0x642063));
      }
    } catch (_0x2fbd0d) {
      console.log(_0x2fbd0d);
    }
  }
  
  async moonbox_m_queryActiveInfo(_0x2f8e7f = {}) {
    try {
      let _0x14f205 = this.get_woread_m_param(),
        _0x121f46 = this.encode_woread(_0x14f205, _0x20c0ff);
      const _0x45f3ae = {
        sign: _0x121f46
      };
      const _0x59055e = {
        fn: "moonbox_m_queryActiveInfo",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryActiveInfo",
        json: _0x45f3ae
      };
      let {
          result: _0x425b85
        } = await this.woread_api(_0x59055e),
        _0x40ba28 = _0x4c672b.get(_0x425b85, "code", -1);
      if (_0x40ba28 == "0000") {
        let {
          activeId: _0x3f90b8,
          activeName: _0x2a7af0
        } = _0x425b85?.["data"];
        _0x55391c = _0x3f90b8;
      } else {
        let _0x2087f5 = _0x425b85?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x40ba28 + "]: " + _0x2087f5);
      }
    } catch (_0xfd1d67) {
      console.log(_0xfd1d67);
    }
  }
  async moonbox_m_queryCurTaskStatus(_0xcef68f = {}) {
    try {
      let _0x5e3f1e = {
          activeIndex: _0x55391c,
          ...this.get_woread_m_param()
        },
        _0x7bc91f = this.encode_woread(_0x5e3f1e, _0x20c0ff);
      const _0x509ba5 = {
        sign: _0x7bc91f
      };
      const _0x439dbd = {
        fn: "moonbox_m_queryCurTaskStatus",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryCurTaskStatus",
        json: _0x509ba5
      };
      let {
          result: _0x51e7c5
        } = await this.woread_api(_0x439dbd),
        _0x3e8bcf = _0x4c672b.get(_0x51e7c5, "code", -1);
      if (_0x3e8bcf == "0000") {
        for (let _0xe83310 of _0x51e7c5?.["data"] || []) {
          let {
            taskName: _0x4d3802,
            currentValue: _0x58b1af,
            taskValue: _0x54fad8
          } = _0xe83310?.["taskDetail"];
          switch (_0xe83310.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x4d3802] = true;
                this.log("阅光宝盒[" + _0x4d3802 + "]进度: " + parseInt(_0x58b1af) + "/" + _0x54fad8 + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_m_completeActiveTask(_0xe83310);
              }
            case 1:
              {
                this.moonbox_task_record[_0x4d3802] = false;
                if (!this.moonbox_notified.includes(_0x4d3802)) {
                  this.moonbox_notified.push(_0x4d3802);
                  const _0x14eeaa = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x4d3802 + "]已完成", _0x14eeaa);
                }
                break;
              }
          }
        }
      } else {
        let _0x4b5302 = _0x51e7c5?.["message"] || "";
        _0x4b5302?.["includes"]("未领取") && !_0xcef68f.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0xcef68f.activate_retry = true, await this.moonbox_m_queryCurTaskStatus(_0xcef68f)) : this.log("阅光宝盒查询任务状态失败[" + _0x3e8bcf + "]: " + _0x4b5302);
      }
    } catch (_0x2b3c91) {
      console.log(_0x2b3c91);
    }
  }
  
  async moonbox_m_receiveActiveTask(_0x222667, _0x20f0f8 = {}) {
    try {
      if (!_0x222667.length) {
        return;
      }
      let _0x5013e3 = _0x222667.shift(),
        _0x5915e5 = _0x5013e3?.["taskDetail"]?.["taskName"] || "",
        _0x499f8f = {
          activeId: _0x55391c,
          taskId: _0x5013e3.secondTaskId,
          ...this.get_woread_m_param()
        },
        _0x5a8196 = this.encode_woread(_0x499f8f, _0x20c0ff);
      const _0x54248e = {
        sign: _0x5a8196
      };
      const _0x41777c = {
        fn: "moonbox_m_queryActiveTaskList",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/receiveActiveTask",
        json: _0x54248e
      };
      let {
          result: _0x5b661a
        } = await this.woread_api(_0x41777c),
        _0x12d65d = _0x4c672b.get(_0x5b661a, "code", -1);
      if (_0x12d65d == "0000") {
        this.moonbox_task_record[_0x5915e5] = true;
        this.log("领取阅光宝盒任务[" + _0x5915e5 + "]成功");
      } else {
        let _0x1347e6 = _0x5b661a?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x5915e5 + "]失败[" + _0x12d65d + "]: " + _0x1347e6);
        (_0x1347e6?.["includes"]("今天无法完成") || _0x1347e6?.["includes"]("领光了")) && _0x222667.length > 0 && (await _0x4c672b.wait(500), await this.moonbox_m_receiveActiveTask(_0x222667, _0x20f0f8));
      }
    } catch (_0x26b16f) {
      console.log(_0x26b16f);
    }
  }
  
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0xe84731 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x73ef67
      } = await this.openPlatLineNew(_0xe84731);
    if (!_0x73ef67) {
      return;
    }
    await this.game_login(_0x73ef67);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x4b2989 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0xfccd3c,
        type: _0x5be8ca,
        loc: _0x33b6a9
      } = await this.openPlatLineNew(_0x4b2989);
    if (!_0xfccd3c) {
      return;
    }
    await this.ttlxj_authorize(_0xfccd3c, _0x5be8ca, _0x33b6a9);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x3904ee = new Date().getDate();
    if (_0x3904ee >= 26 && _0x3904ee <= 28) {
      await this.epay_28_authCheck();
      if (_0x1051da.length) {
        let _0x3c73d8 = _0x4c672b.randomList(_0x1051da);
        await this.appMonth_28_bind(_0x3c73d8);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x3fc66f = new Date().getDate();
    _0x3fc66f == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x19e840 = new Date("2024-05-10 00:00:00"),
      _0x41d2ad = new Date("2024-06-09 00:00:00"),
      _0x2f7f5c = Date.now();
    if (_0x2f7f5c > _0x19e840.getTime() && _0x2f7f5c < _0x41d2ad.getTime()) {
      if (_0x188394.length) {
        let _0x53384d = _0x4c672b.randomList(_0x188394);
        await this.act_517_bind(_0x53384d);
      }
      await this.act_517_userAccount();
    }
  }
  async card_618_task() {
    let _0x2ad5cb = new Date("2024-05-31 00:00:00"),
      _0x4ce692 = new Date("2024-06-21 00:00:00"),
      _0x1a0657 = Date.now();
    _0x1a0657 > _0x2ad5cb.getTime() && _0x1a0657 < _0x4ce692.getTime() && (this.rptId = "", await this.card_618_authCheck());
  }
  async flmf_task() {
    if (this.city.filter(_0x5d152b => _0x5d152b.proCode == "091").length == 0) {
      return;
    }
    let _0x552e7c = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x55dcf1
      } = await this.openPlatLineNew(_0x552e7c);
    if (!_0x55dcf1) {
      return;
    }
    await this.flmf_login(_0x55dcf1);
  }
  async ltyp_task() {
    let _0x1cee90 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x318b1b
      } = await this.openPlatLineNew(_0x1cee90);
    if (!_0x318b1b) {
      return;
    }
    await this.ltyp_login(_0x318b1b);
  }
  async ltzf_task() {
    let _0x2db4d6 = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x2db4d6.searchParams.append("channelType", _0x2f3d25);
    _0x2db4d6.searchParams.append("homePage", "home");
    _0x2db4d6.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x4acf51 = _0x2db4d6.toString(),
      {
        ticket: _0x588ef9
      } = await this.openPlatLineNew(_0x4acf51);
    if (!_0x588ef9) {
      return;
    }
    if (!(await this.wocare_getToken(_0x588ef9))) {
      return;
    }
    for (let _0x305ba1 of _0x4376d8) {
      await this.wocare_getDrawTask(_0x305ba1);
      await this.wocare_loadInit(_0x305ba1);
    }
  }
  async woread_draw_task(_0x10af6a) {
    await this.woread_getSeeVideoAddNumber(_0x10af6a);
    await this.woread_addDrawTimes(_0x10af6a);
    await this.woread_getActivityNumber(_0x10af6a);
  }
  async woread_task() {
    for (let _0x524680 of _0x5724ea) {
      await this.woread_draw_task(_0x524680);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    this.switch_woread_token(this.woread_m_accesstoken);
    let _0x32573f = Object.values(this.moonbox_task_record).filter(_0x1667b7 => _0x1667b7 === true).length;
    while (this.need_read_rabbit || _0x32573f) {
      let _0x7e565 = 2;
      const _0x5ac339 = {
        readTime: _0x7e565
      };
      await this.woread_m_addReadTime(_0x5ac339);
      let _0x4cf515 = Date.now();
      if (_0x32573f) {
        await this.moonbox_m_queryCurTaskStatus();
      }
      _0x32573f = Object.values(this.moonbox_task_record).filter(_0x195813 => _0x195813 === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x24da6c = Date.now(),
        _0x5d5d61 = 125000 + _0x4cf515 - _0x24da6c;
      (this.need_read_rabbit || _0x32573f) && _0x5d5d61 > 0 && (this.log("等待2分钟..."), await _0x4c672b.wait(_0x5d5d61));
    }
    this.switch_woread_token(this.woread_accesstoken);
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    if (!(await this.woread_m_auth())) {
      return;
    }
    if (!(await this.woread_m_login())) {
      return;
    }
    this.switch_woread_token(this.woread_accesstoken);
    if (!_0x55391c) {
      const activeInfoSuccess = await this.moonbox_queryActiveInfo();
    if (!activeInfoSuccess) {
      // 即使查询活动信息失败，也继续执行查询当前任务状态
      await this.moonbox_queryCurTaskStatus();
      return;
    }
  }
  await this.moonbox_queryCurTaskStatus();
}
  async userTask() {
    _0x4c672b.log("\n------------------ 账号[" + this.index + "] ------------------");
    // if (!_0x159493) {
    //   await this.sign_task();
    // }
    // await this.ttlxj_task();
    // await this.ltyp_task();
    // await this.epay_28_task();
    // await this.draw_28_task();
    // await this.card_618_task();
    // if (!_0xedc529) {
    //   await this.ltzf_task();
    // }
    // await this.flmf_task();
    // await this.woread_task();
  }
  async userTestTask() {
    _0x4c672b.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x342cb7())) {
    return;
  }
  await _0xdfa6ec();
  _0x4c672b.read_env(_0x333e45);
//   _0x4c672b.log("\n------------------------------------");
//   _0x4c672b.log("首页签到设置为: " + (_0x159493 ? "不" : "") + "运行");
//   _0x4c672b.log("联通祝福设置为: " + (_0xedc529 ? "不" : "") + "运行");
//   _0x4c672b.log("------------------------------------\n");
  for (let _0x3a7d7a of _0x4c672b.userList) {
    await _0x3a7d7a.userLoginTask();
  }
  for (let _0x3df144 of _0x4c672b.userList.filter(_0xa33969 => _0xa33969.valid)) {
    await _0x3df144.userTask();
  }
  let _0x1b59a7 = _0x4c672b.userList.filter(_0x3fbb9d => _0x3fbb9d.valid && _0x3fbb9d.woread_verifycode && (_0x3fbb9d.need_read_rabbit || Object.values(_0x3fbb9d.moonbox_task_record).filter(_0x5c7f98 => _0x5c7f98 === true).length));
//   if (_0x1b59a7.length) {
//     let _0x46ed2b = [];
//     _0x4c672b.log("\n============ 开始刷阅读时长 ============");
//     for (let _0x5ef13c of _0x1b59a7) {
//       _0x46ed2b.push(_0x5ef13c.woread_reading_task());
//     }
//     await Promise.all(_0x46ed2b);
//   }
})().catch(_0x56ffeb => _0x4c672b.log(_0x56ffeb)).finally(() => _0x4c672b.exitNow());
async function _0x342cb7(_0x1f9ad3 = 0) {
  let _0x3e3c00 = true;
  try {
    const _0x1ac0e5 = {
      fn: "auth",
      method: "get",
      url: _0x2eca5f,
      timeout: 10000
    };
    let {
      statusCode: _0x196f7a,
      result: _0x3b4e95
    } = await _0x23c014.request(_0x1ac0e5);
    if (_0x196f7a != 200) {
      _0x1f9ad3++ < _0x239ea0 && (_0x3e3c00 = await _0x342cb7(_0x1f9ad3));
      return _0x3e3c00;
    }
    if (_0x3b4e95?.["code"] == 0) {
      _0x3b4e95 = JSON.parse(_0x3b4e95.data.file.data);
      if (_0x3b4e95?.["commonNotify"] && _0x3b4e95.commonNotify.length > 0) {
        const _0x3d781c = {
          notify: true
        };
        _0x4c672b.log(_0x3b4e95.commonNotify.join("\n") + "\n", _0x3d781c);
      }
      _0x3b4e95?.["commonMsg"] && _0x3b4e95.commonMsg.length > 0 && _0x4c672b.log(_0x3b4e95.commonMsg.join("\n") + "\n");
      if (_0x3b4e95[_0x4a2c68]) {
        let _0x589da0 = _0x3b4e95[_0x4a2c68];
        _0x589da0.status == 0 ? _0x2bad9c >= _0x589da0.version ? (_0x3e3c00 = true, _0x4c672b.log(_0x589da0.msg[_0x589da0.status]), _0x4c672b.log(_0x589da0.updateMsg), _0x4c672b.log("现在运行的脚本版本是：" + _0x2bad9c + "，最新脚本版本：" + _0x589da0.latestVersion)) : _0x4c672b.log(_0x589da0.versionMsg) : _0x4c672b.log(_0x589da0.msg[_0x589da0.status]);
      } else {
        _0x4c672b.log(_0x3b4e95.errorMsg);
      }
    } else {
      _0x1f9ad3++ < _0x239ea0 && (_0x3e3c00 = await _0x342cb7(_0x1f9ad3));
    }
  } catch (_0x4e2a96) {
    _0x4c672b.log(_0x4e2a96);
  } finally {
    return _0x3e3c00;
  }
}
async function _0xdfa6ec() {
  let _0x5ad89b = false;
  try {
    const _0x279978 = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x1971e5
    };
    let {
      statusCode: _0x10974a,
      result: _0x54f592
    } = await _0x23c014.request(_0x279978);
    if (_0x10974a != 200) {
      return Promise.resolve();
    }
    if (_0x54f592?.["code"] == 0) {
      _0x54f592 = JSON.parse(_0x54f592.data.file.data);
      _0x333e1b = _0x54f592?.["ltyp_lottery"] || _0x333e1b;
      _0x5724ea = _0x54f592?.["woread_draw_id"] || _0x5724ea;
      _0x1051da = _0x54f592?.["appMonth_28_share"] || _0x1051da;
      _0x188394 = _0x54f592?.["act_517_share"] || _0x188394;
    }
  } catch (_0x45222a) {
    _0x4c672b.log(_0x45222a);
  } finally {
    return _0x5ad89b;
  }
}
function _0x4a9430(_0x3dc8ae) {
  return new class {
    constructor(_0x20ff7f) {
      this.name = _0x20ff7f;
      this.startTime = Date.now();
      const _0x39680c = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x39680c);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x2ae7b7, _0x275447 = {}) {
      const _0x56f445 = {
        console: true
      };
      Object.assign(_0x56f445, _0x275447);
      if (_0x56f445.time) {
        let _0x3ef8cb = _0x56f445.fmt || "hh:mm:ss";
        _0x2ae7b7 = "[" + this.time(_0x3ef8cb) + "]" + _0x2ae7b7;
      }
      if (_0x56f445.notify) {
        this.notifyStr.push(_0x2ae7b7);
      }
      if (_0x56f445.console) {
        console.log(_0x2ae7b7);
      }
    }
    get(_0x2a0329, _0x4bceb4, _0x4a1980 = "") {
      let _0x5317bb = _0x4a1980;
      _0x2a0329?.["hasOwnProperty"](_0x4bceb4) && (_0x5317bb = _0x2a0329[_0x4bceb4]);
      return _0x5317bb;
    }
    pop(_0x1b7e25, _0xe7c4ac, _0x41427d = "") {
      let _0x189530 = _0x41427d;
      _0x1b7e25?.["hasOwnProperty"](_0xe7c4ac) && (_0x189530 = _0x1b7e25[_0xe7c4ac], delete _0x1b7e25[_0xe7c4ac]);
      return _0x189530;
    }
    copy(_0x35e17d) {
      return Object.assign({}, _0x35e17d);
    }
    read_env(_0x313c6f) {
      let _0x2818ab = _0x52f10b.map(_0x4a0e55 => process.env[_0x4a0e55]);
      for (let _0x2db17f of _0x2818ab.filter(_0x898472 => !!_0x898472)) {
        let _0xd94a01 = _0x55899c.filter(_0x477b8e => _0x2db17f.includes(_0x477b8e)),
          _0x40b5c7 = _0xd94a01.length > 0 ? _0xd94a01[0] : _0x55899c[0];
        for (let _0x1c8866 of _0x2db17f.split(_0x40b5c7).filter(_0x32ae75 => !!_0x32ae75)) {
          this.userList.push(new _0x313c6f(_0x1c8866));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x5d04ec = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x52f10b.map(_0x46a071 => "[" + _0x46a071 + "]").join("或"), _0x5d04ec);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5db126, _0x57b22b, _0x392357 = {}) {
      while (_0x57b22b.idx < _0x4c672b.userList.length) {
        let _0x258f29 = _0x4c672b.userList[_0x57b22b.idx++];
        if (!_0x258f29.valid) {
          continue;
        }
        await _0x258f29[_0x5db126](_0x392357);
      }
    }
    async threadTask(_0xa21bf9, _0x52bb63) {
      let _0x279723 = [];
      const _0x10e941 = {
        idx: 0
      };
      while (_0x52bb63--) {
        _0x279723.push(this.threads(_0xa21bf9, _0x10e941));
      }
      await Promise.all(_0x279723);
    }
    time(_0xc0075d, _0x39d0d0 = null) {
      let _0x47b00f = _0x39d0d0 ? new Date(_0x39d0d0) : new Date(),
        _0x3e8b62 = {
          "M+": _0x47b00f.getMonth() + 1,
          "d+": _0x47b00f.getDate(),
          "h+": _0x47b00f.getHours(),
          "m+": _0x47b00f.getMinutes(),
          "s+": _0x47b00f.getSeconds(),
          "q+": Math.floor((_0x47b00f.getMonth() + 3) / 3),
          S: this.padStr(_0x47b00f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, (_0x47b00f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x13db8b in _0x3e8b62) new RegExp("(" + _0x13db8b + ")").test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3e8b62[_0x13db8b] : ("00" + _0x3e8b62[_0x13db8b]).substr(("" + _0x3e8b62[_0x13db8b]).length)));
      return _0xc0075d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x19b840 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x19b840.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x246b7e, _0x485edb, _0x56d4e8 = {}) {
      let _0x4ec3df = _0x56d4e8.padding || "0",
        _0x5951a7 = _0x56d4e8.mode || "l",
        _0x2508bb = String(_0x246b7e),
        _0x2284d5 = _0x485edb > _0x2508bb.length ? _0x485edb - _0x2508bb.length : 0,
        _0x4f9fa3 = "";
      for (let _0x325347 = 0; _0x325347 < _0x2284d5; _0x325347++) {
        _0x4f9fa3 += _0x4ec3df;
      }
      _0x5951a7 == "r" ? _0x2508bb = _0x2508bb + _0x4f9fa3 : _0x2508bb = _0x4f9fa3 + _0x2508bb;
      return _0x2508bb;
    }
    json2str(_0x50c3fd, _0x5546cf, _0x126bf8 = false) {
      let _0x2a028b = [];
      for (let _0xf7404a of Object.keys(_0x50c3fd).sort()) {
        let _0xf3ba9 = _0x50c3fd[_0xf7404a];
        if (_0xf3ba9 && _0x126bf8) {
          _0xf3ba9 = encodeURIComponent(_0xf3ba9);
        }
        _0x2a028b.push(_0xf7404a + "=" + _0xf3ba9);
      }
      return _0x2a028b.join(_0x5546cf);
    }
    str2json(_0x5ac0e0, _0x2b412e = false) {
      let _0x55b019 = {};
      for (let _0x251032 of _0x5ac0e0.split("&")) {
        if (!_0x251032) {
          continue;
        }
        let _0x1a4334 = _0x251032.indexOf("=");
        if (_0x1a4334 == -1) {
          continue;
        }
        let _0x43dbca = _0x251032.substr(0, _0x1a4334),
          _0x5a058c = _0x251032.substr(_0x1a4334 + 1);
        if (_0x2b412e) {
          _0x5a058c = decodeURIComponent(_0x5a058c);
        }
        _0x55b019[_0x43dbca] = _0x5a058c;
      }
      return _0x55b019;
    }
    randomPattern(_0x2e6754, _0x2d62bd = "abcdef0123456789") {
      let _0x1ef277 = "";
      for (let _0x24e475 of _0x2e6754) {
        if (_0x24e475 == "x") {
          _0x1ef277 += _0x2d62bd.charAt(Math.floor(Math.random() * _0x2d62bd.length));
        } else {
          _0x24e475 == "X" ? _0x1ef277 += _0x2d62bd.charAt(Math.floor(Math.random() * _0x2d62bd.length)).toUpperCase() : _0x1ef277 += _0x24e475;
        }
      }
      return _0x1ef277;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-4xxx-4xxx-xxxxxxxxxxxx");
    }
    randomString(_0x1e4fee, _0x58454d = "abcdef0123456789") {
      let _0x437894 = "";
      for (let _0x5b91d3 = 0; _0x5b91d3 < _0x1e4fee; _0x5b91d3++) {
        _0x437894 += _0x58454d.charAt(Math.floor(Math.random() * _0x58454d.length));
      }
      return _0x437894;
    }
    randomList(_0x243ee5) {
      let _0x5d4508 = Math.floor(Math.random() * _0x243ee5.length);
      return _0x243ee5[_0x5d4508];
    }
    wait(_0x7fb1b7) {
      return new Promise(_0x13dc83 => setTimeout(_0x13dc83, _0x7fb1b7));
    }
    async exitNow() {
      await this.showmsg();
      let _0x3b76e8 = Date.now(),
        _0x4e1727 = (_0x3b76e8 - this.startTime) / 1000;
      this.log("");
      const _0x265b3c = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4e1727 + "秒", _0x265b3c);
      process.exit(0);
    }
    normalize_time(_0x138270, _0x5b6289 = {}) {
      let _0x40e1b4 = _0x5b6289.len || this.default_timestamp_len;
      _0x138270 = _0x138270.toString();
      let _0x2a2577 = _0x138270.length;
      while (_0x2a2577 < _0x40e1b4) {
        _0x138270 += "0";
      }
      _0x2a2577 > _0x40e1b4 && (_0x138270 = _0x138270.slice(0, 13));
      return parseInt(_0x138270);
    }
    async wait_until(_0x25aba7, _0x4c0658 = {}) {
      let _0x219c45 = _0x4c0658.logger || this,
        _0x501f43 = _0x4c0658.interval || default_wait_interval,
        _0x51a46f = _0x4c0658.limit || default_wait_limit,
        _0xbc5c1a = _0x4c0658.ahead || default_wait_ahead;
      if (typeof _0x25aba7 == "string" && _0x25aba7.includes(":")) {
        if (_0x25aba7.includes("-")) {
          _0x25aba7 = new Date(_0x25aba7).getTime();
        } else {
          let _0x59861b = this.time("yyyy-MM-dd ");
          _0x25aba7 = new Date(_0x59861b + _0x25aba7).getTime();
        }
      }
      let _0x1afff0 = this.normalize_time(_0x25aba7) - _0xbc5c1a,
        _0x5e4710 = this.time("hh:mm:ss.S", _0x1afff0),
        _0x1b5a4f = Date.now();
      _0x1b5a4f > _0x1afff0 && (_0x1afff0 += 86400000);
      let _0x10797a = _0x1afff0 - _0x1b5a4f;
      if (_0x10797a > _0x51a46f) {
        const _0x1b182a = {
          time: true
        };
        _0x219c45.log("离目标时间[" + _0x5e4710 + "]大于" + _0x51a46f / 1000 + "秒,不等待", _0x1b182a);
      } else {
        const _0x2644ea = {
          time: true
        };
        _0x219c45.log("离目标时间[" + _0x5e4710 + "]还有" + _0x10797a / 1000 + "秒,开始等待", _0x2644ea);
        while (_0x10797a > 0) {
          let _0x59135c = Math.min(_0x10797a, _0x501f43);
          await this.wait(_0x59135c);
          _0x1b5a4f = Date.now();
          _0x10797a = _0x1afff0 - _0x1b5a4f;
        }
        const _0x246dd7 = {
          time: true
        };
        _0x219c45.log("已完成等待", _0x246dd7);
      }
    }
    async wait_gap_interval(_0x380985, _0x47b42d) {
      let _0x55e493 = Date.now() - _0x380985;
      _0x55e493 < _0x47b42d && (await this.wait(_0x47b42d - _0x55e493));
    }
  }(_0x3dc8ae);
}