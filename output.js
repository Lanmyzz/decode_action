//Sun Jun 30 2024 10:05:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x15f162 = _0x5df551("电信营业厅"),
  _0x3efff8 = require("got"),
  _0x51ab89 = require("fs"),
  _0x3ce52d = require("crypto-js"),
  {
    CookieJar: _0x542aa1
  } = require("tough-cookie"),
  _0x420c18 = "chinaTelecom",
  _0x4a03bf = /[\n\&\@]/,
  _0x4aacb5 = [_0x420c18 + "Account"],
  _0x4a3d03 = 30000,
  _0x55fd5d = 3;
const _0x552b8a = 5.03,
  _0x4dfec7 = "chinaTelecom",
  _0x2672b9 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
let _0x7c2d09 = {};
const _0x1bab84 = "./chinaTelecom_cache.json",
  _0x42f0a2 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x15b736 = "34d7cb0bcdf07523",
  _0xb3bf84 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x35cc86 = "\0\0\0\0\0\0\0\0",
  _0x10bb49 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x8b3960 = "-----BEGIN PUBLIC KEY-----\n" + _0x10bb49 + "\n-----END PUBLIC KEY-----",
  _0x1cb34f = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x206122 = "-----BEGIN PUBLIC KEY-----\n" + _0x1cb34f + "\n-----END PUBLIC KEY-----",
  _0x3c2bc9 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x3654bc = "-----BEGIN PUBLIC KEY-----\n" + _0x3c2bc9 + "\n-----END PUBLIC KEY-----",
  _0x27f247 = require("node-rsa");
let _0x4b7624 = new _0x27f247(_0x8b3960);
const _0x7e79a1 = {
  encryptionScheme: "pkcs1"
};
_0x4b7624.setOptions(_0x7e79a1);
let _0x4d12f3 = new _0x27f247(_0x206122);
const _0x3bf48b = {
  encryptionScheme: "pkcs1"
};
_0x4d12f3.setOptions(_0x3bf48b);
let _0x2245eb = new _0x27f247(_0x3654bc);
const _0x4b4446 = {
  encryptionScheme: "pkcs1"
};
_0x2245eb.setOptions(_0x4b4446);
const _0x1c5c15 = {
    taskShort: "hg_qd_rmrwtjq",
    taskLong: "hg_qd_zrwzjd",
    signReward: "hg_qd_qdjdtc",
    recommandExchange: "hg_qd_jddhsptjq",
    vipExchange: "hg_qd_jddhhl",
    continueSign: "hg_qd_qdtqtc",
    jindouExchangeHuafei_am: "hg_qd_jdmszswjp",
    jindouExchangeHuafei_pm: "hg_qd_jdmszxwjp"
  },
  _0xd251b4 = 5;
function _0x999b95(_0x2f323d, _0x1a7cfe, _0x2e4501, _0x13e026, _0x617e00, _0x38f8b3) {
  return _0x3ce52d[_0x2f323d].encrypt(_0x3ce52d.enc.Utf8.parse(_0x13e026), _0x3ce52d.enc.Utf8.parse(_0x617e00), {
    mode: _0x3ce52d.mode[_0x1a7cfe],
    padding: _0x3ce52d.pad[_0x2e4501],
    iv: _0x3ce52d.enc.Utf8.parse(_0x38f8b3)
  }).ciphertext.toString(_0x3ce52d.enc.Hex);
}
function _0x2bb911(_0x5ebe0d, _0x3bbd70, _0x9428c7, _0x1c354a, _0x145c0f, _0x1af6ef) {
  return _0x3ce52d[_0x5ebe0d].decrypt({
    ciphertext: _0x3ce52d.enc.Hex.parse(_0x1c354a)
  }, _0x3ce52d.enc.Utf8.parse(_0x145c0f), {
    mode: _0x3ce52d.mode[_0x3bbd70],
    padding: _0x3ce52d.pad[_0x9428c7],
    iv: _0x3ce52d.enc.Utf8.parse(_0x1af6ef)
  }).toString(_0x3ce52d.enc.Utf8);
}
function _0x4cf7e2() {
  try {
    _0x51ab89.writeFileSync(_0x1bab84, JSON.stringify(_0x7c2d09, null, 4), "utf-8");
  } catch (_0x105796) {
    console.log("保存缓存出错");
  }
}
function _0x1ef3f2() {
  try {
    _0x7c2d09 = JSON.parse(_0x51ab89.readFileSync(_0x1bab84, "utf-8"));
  } catch (_0x461e2a) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x4cf7e2();
  }
}
class _0x5a25c8 {
  constructor() {
    this.index = _0x15f162.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x56514d = {
      limit: 0
    };
    const _0x13064e = {
      Connection: "keep-alive"
    };
    const _0x798699 = {
      retry: _0x56514d,
      timeout: _0x4a3d03,
      followRedirect: false,
      headers: _0x13064e
    };
    this.got = _0x3efff8.extend(_0x798699);
  }
  log(_0x28c10e, _0x566b1c = {}) {
    var _0x1d1216 = "",
      _0x1ac914 = _0x15f162.userCount.toString().length;
    if (this.index) {
      _0x1d1216 += "账号[" + _0x15f162.padStr(this.index, _0x1ac914) + "]";
    }
    if (this.name) {
      _0x1d1216 += "[" + this.name + "]";
    }
    _0x15f162.log(_0x1d1216 + _0x28c10e, _0x566b1c);
  }
  async request(_0x361de7) {
    const _0x1e5f36 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x19dd2d = ["TimeoutError"];
    var _0xb64947 = null,
      _0x38f12a = 0,
      _0x5ddf02 = _0x361de7.fn || _0x361de7.url;
    _0x361de7.method = _0x361de7?.["method"]?.["toUpperCase"]() || "GET";
    let _0x3dc5fc;
    while (_0x38f12a < _0x55fd5d) {
      try {
        _0x38f12a++;
        _0x3dc5fc = null;
        let _0x373e01 = null,
          _0x1c2d30 = _0x361de7?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x4a3d03,
          _0x3aed23 = false;
        await new Promise(async _0x282e81 => {
          setTimeout(() => {
            _0x3aed23 = true;
            _0x282e81();
          }, _0x1c2d30);
          await this.got(_0x361de7).then(_0x14bf13 => {
            _0xb64947 = _0x14bf13;
          }, _0x1c0258 => {
            _0x373e01 = _0x1c0258;
            _0xb64947 = _0x1c0258.response;
            _0x3dc5fc = _0x373e01?.["code"];
          });
          _0x282e81();
        });
        if (_0x3aed23) {
          this.log("[" + _0x5ddf02 + "]请求超时(" + _0x1c2d30 / 1000 + "秒)，重试第" + _0x38f12a + "次");
        } else {
          if (_0x19dd2d.includes(_0x373e01?.["name"])) {
            this.log("[" + _0x5ddf02 + "]请求超时(" + _0x373e01.code + ")，重试第" + _0x38f12a + "次");
          } else {
            if (_0x1e5f36.includes(_0x373e01?.["code"])) {
              this.log("[" + _0x5ddf02 + "]请求错误(" + _0x373e01.code + ")，重试第" + _0x38f12a + "次");
            } else {
              let _0x42f935 = _0xb64947?.["statusCode"] || 999,
                _0xe3480f = _0x42f935 / 100 | 0;
              if (_0xe3480f > 3) {
                this.log("请求[" + _0x5ddf02 + "]返回[" + _0x42f935 + "]");
              }
              if (_0xe3480f <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x5c0807) {
        _0x5c0807.name == "TimeoutError" ? this.log("[" + _0x5ddf02 + "]请求超时，重试第" + _0x38f12a + "次") : this.log("[" + _0x5ddf02 + "]请求错误(" + _0x5c0807.message + ")，重试第" + _0x38f12a + "次");
      }
    }
    if (_0xb64947 == null) {
      return Promise.resolve({
        statusCode: _0x3dc5fc || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x118ce4,
      headers: _0xfc5664,
      body: _0x5dce51
    } = _0xb64947;
    if (_0x5dce51) {
      try {
        _0x5dce51 = JSON.parse(_0x5dce51);
      } catch {}
    }
    const _0x362e03 = {
      statusCode: _0x118ce4,
      headers: _0xfc5664,
      result: _0x5dce51
    };
    return Promise.resolve(_0x362e03);
  }
}
let _0x213f23 = new _0x5a25c8();
class _0x1e1362 extends _0x5a25c8 {
  constructor(_0x17eae7) {
    super();
    let _0x36fa6f = _0x17eae7.split("#");
    this.name = _0x36fa6f[0];
    this.passwd = _0x36fa6f?.[1] || "";
    this.uuid = [_0x15f162.randomPattern("xxxxxxxx"), _0x15f162.randomPattern("xxxx"), _0x15f162.randomPattern("4xxx"), _0x15f162.randomPattern("xxxx"), _0x15f162.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x542aa1();
    this.can_feed = true;
    const _0x32db09 = {
      Connection: "keep-alive",
      "User-Agent": _0x42f0a2
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x32db09
    });
  }
  load_token() {
    let _0xe0e6ad = false;
    _0x7c2d09[this.name] && (this.userId = _0x7c2d09[this.name].userId, this.token = _0x7c2d09[this.name].token, this.log("读取到缓存token"), _0xe0e6ad = true);
    return _0xe0e6ad;
  }
  encode_phone() {
    let _0x42c4b4 = this.name.split("");
    for (let _0x58d126 in _0x42c4b4) {
      _0x42c4b4[_0x58d126] = String.fromCharCode(_0x42c4b4[_0x58d126].charCodeAt(0) + 2);
    }
    return _0x42c4b4.join("");
  }
  async login(_0x27ce4c = {}) {
    let _0x5217f7 = false;
    try {
      let _0x2a9153 = _0x15f162.time("yyyyMMddhhmmss"),
        _0x1f5fb8 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x2a9153 + this.passwd + "0$$$0.",
        _0x146fae = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x2a9153,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x4b7624.encrypt(_0x1f5fb8, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x10619f
        } = await this.request(_0x146fae),
        _0x3c0621 = _0x15f162.get(_0x10619f?.["responseData"], "resultCode", -1);
      if (_0x3c0621 == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x10619f?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x7c2d09[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x4cf7e2();
        _0x5217f7 = true;
      } else {
        let _0x2a529a = _0x10619f?.["msg"] || _0x10619f?.["responseData"]?.["resultDesc"] || _0x10619f?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x3c0621 + "]: " + _0x2a529a);
      }
    } catch (_0x1800db) {
      console.log(_0x1800db);
    } finally {
      return _0x5217f7;
    }
  }
  async get_ticket(_0x53cacb = {}) {
    let _0x583b83 = "";
    try {
      let _0xbce878 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x15f162.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x999b95("TripleDES", "CBC", "Pkcs7", this.userId, _0xb3bf84, _0x35cc86) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      let _0x292aab = {
          fn: "get_ticket",
          method: "post",
          url: "https://appgologin.189.cn:9031/map/clientXML",
          body: _0xbce878
        },
        {
          result: _0x471178
        } = await this.request(_0x292aab);
      if (_0x471178) {
        let _0x30cec5 = _0x471178.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x30cec5) {
          let _0x1f3c87 = _0x30cec5[1];
          _0x583b83 = _0x2bb911("TripleDES", "CBC", "Pkcs7", _0x1f3c87, _0xb3bf84, _0x35cc86);
          this.ticket = _0x583b83;
        }
      }
      !_0x583b83 && (!_0x53cacb.retry && (await this.login()) ? (_0x53cacb.retry = true, _0x583b83 = await this.get_ticket(_0x53cacb)) : (this.log("没有获取到ticket: "), _0x471178 && console.log(_0x471178)));
    } catch (_0x2960ba) {
      console.log(_0x2960ba);
    } finally {
      return _0x583b83;
    }
  }
  async get_sign(_0x240f03 = {}) {
    let _0x2833dd = false;
    try {
      const _0x4640f0 = {
        ticket: this.ticket
      };
      let _0x592640 = {
          fn: "login",
          method: "get",
          url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
          searchParams: _0x4640f0
        },
        {
          result: _0x20485c
        } = await this.request(_0x592640),
        _0x2d0a3d = _0x15f162.get(_0x20485c, "resoultCode", -1);
      _0x20485c?.["resoultCode"] == 0 ? (_0x2833dd = _0x20485c?.["sign"], this.sign = _0x2833dd, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x2d0a3d + "]");
    } catch (_0x598442) {
      console.log(_0x598442);
    } finally {
      return _0x2833dd;
    }
  }
  encrypt_para(_0xa3f61b) {
    return _0x4d12f3.encrypt(JSON.stringify(_0xa3f61b), "hex");
  }
  async userCoinInfo(_0x2f235a = false, _0x58ba22 = {}) {
    try {
      let _0x32fc7d = {
          phone: this.name
        },
        _0x4a89f8 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x32fc7d)
          }
        },
        {
          result: _0x3e9f99
        } = await this.request(_0x4a89f8),
        _0x528ba1 = _0x15f162.get(_0x3e9f99, "resoultCode", -1);
      if (_0x528ba1 == 0) {
        this.coin = _0x3e9f99?.["totalCoin"] || 0;
        if (_0x2f235a) {
          const _0x364bda = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x364bda);
          if (_0x3e9f99.amountEx) {
            let _0x868458 = _0x15f162.time("yyyy-MM-dd", _0x3e9f99.expireDate);
            const _0x5c26ca = {
              notify: true
            };
            _0x15f162.log("-- [" + _0x868458 + "]将过期" + _0x3e9f99.amountEx + "金豆", _0x5c26ca);
          }
        }
      } else {
        let _0x4b9033 = _0x3e9f99?.["msg"] || _0x3e9f99?.["resoultMsg"] || _0x3e9f99?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x528ba1 + "]: " + _0x4b9033);
      }
    } catch (_0x2383a5) {
      console.log(_0x2383a5);
    }
  }
  async userStatusInfo(_0x863951 = {}) {
    try {
      let _0x68a57a = {
          phone: this.name
        },
        _0x166b44 = {
          fn: "userStatusInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
          json: {
            para: this.encrypt_para(_0x68a57a)
          }
        };
      {
        let {
            result: _0x3af0c7
          } = await this.request(_0x15f162.copy(_0x166b44)),
          _0x5f1a12 = _0x15f162.get(_0x3af0c7, "resoultCode", -1);
        if (_0x5f1a12 == 0) {
          let {
            isSign: _0x5638e8
          } = _0x3af0c7?.["data"];
          _0x5638e8 ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0x2b1661 = _0x3af0c7?.["msg"] || _0x3af0c7?.["resoultMsg"] || _0x3af0c7?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x5f1a12 + "]: " + _0x2b1661);
        }
      }
      {
        let {
            result: _0x3cfdac
          } = await this.request(_0x15f162.copy(_0x166b44)),
          _0x4dd07e = _0x15f162.get(_0x3cfdac, "resoultCode", -1);
        if (_0x4dd07e == 0) {
          let {
            continuousDay: _0x5723cf,
            signDay: _0x1e2de4,
            isSeven: _0x29ac83
          } = _0x3cfdac?.["data"];
          this.log("已签到" + _0x1e2de4 + "天, 连签" + _0x5723cf + "天");
          _0x29ac83 && (await this.exchangePrize());
        } else {
          let _0x582d92 = _0x3cfdac?.["msg"] || _0x3cfdac?.["resoultMsg"] || _0x3cfdac?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x4dd07e + "]: " + _0x582d92);
        }
      }
    } catch (_0x472f06) {
      console.log(_0x472f06);
    }
  }
  async continueSignDays(_0x48d1e5 = {}) {
    try {
      let _0x11cc42 = {
          phone: this.name
        },
        _0x5894ce = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0x11cc42)
          }
        },
        {
          result: _0x389c32
        } = await this.request(_0x5894ce),
        _0x2cfc23 = _0x15f162.get(_0x389c32, "resoultCode", -1);
      if (_0x2cfc23 == 0) {
        this.log("抽奖连签天数: " + (_0x389c32?.["continueSignDays"] || 0) + "天");
        if (_0x389c32?.["continueSignDays"] == 15) {
          const _0x2361b7 = {
            type: "15"
          };
          await this.exchangePrize(_0x2361b7);
        } else {
          if (_0x389c32?.["continueSignDays"] == 28) {
            const _0x50731b = {
              type: "28"
            };
            await this.exchangePrize(_0x50731b);
          }
        }
      } else {
        let _0x50846e = _0x389c32?.["msg"] || _0x389c32?.["resoultMsg"] || _0x389c32?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x2cfc23 + "]: " + _0x50846e);
      }
    } catch (_0x2c349e) {
      console.log(_0x2c349e);
    }
  }
  async doSign(_0x276ba9 = {}) {
    try {
      let _0x5649c2 = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0x52284e = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: _0x999b95("AES", "ECB", "Pkcs7", JSON.stringify(_0x5649c2), _0x15b736, 0)
          }
        },
        {
          result: _0x125c22
        } = await this.request(_0x52284e),
        _0x3e9ab0 = _0x15f162.get(_0x125c22, "resoultCode", -1);
      if (_0x3e9ab0 == 0) {
        let _0x304999 = _0x15f162.get(_0x125c22?.["data"], "code", -1);
        if (_0x304999 == 1) {
          const _0x583893 = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x125c22?.["data"]?.["coin"] || 0) + "金豆", _0x583893);
          await this.userStatusInfo();
        } else {
          const _0x2db090 = {
            notify: true
          };
          this.log("签到失败[" + _0x304999 + "]: " + _0x125c22.data.msg, _0x2db090);
        }
      } else {
        let _0x43b77a = _0x125c22?.["msg"] || _0x125c22?.["resoultMsg"] || _0x125c22?.["error"] || "";
        this.log("签到错误[" + _0x3e9ab0 + "]: " + _0x43b77a);
      }
    } catch (_0xa3b49b) {
      console.log(_0xa3b49b);
    }
  }
  async exchangePrize(_0x1cb3ee = {}) {
    try {
      let _0xea56d6 = _0x15f162.pop(_0x1cb3ee, "type", "7");
      let _0x37deed = {
          phone: this.name,
          type: _0xea56d6
        },
        _0xaa4ad0 = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x37deed)
          }
        },
        {
          result: _0x5aa991
        } = await this.request(_0xaa4ad0),
        _0x12a0ce = _0x15f162.get(_0x5aa991, "resoultCode", -1);
      if (_0x12a0ce == 0) {
        let _0x2b3960 = _0x15f162.get(_0x5aa991?.["prizeDetail"], "code", -1);
        if (_0x2b3960 == 0) {
          const _0x1f29b8 = {
            notify: true
          };
          this.log("连签" + _0xea56d6 + "天抽奖: " + _0x5aa991?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x1f29b8);
        } else {
          let _0x2abf5e = _0x5aa991?.["prizeDetail"]?.["err"] || "";
          const _0x55c22f = {
            notify: true
          };
          this.log("连签" + _0xea56d6 + "天抽奖失败[" + _0x2b3960 + "]: " + _0x2abf5e, _0x55c22f);
        }
      } else {
        let _0x29f2b5 = _0x5aa991?.["msg"] || _0x5aa991?.["resoultMsg"] || _0x5aa991?.["error"] || "";
        this.log("连签" + _0xea56d6 + "天抽奖错误[" + _0x12a0ce + "]: " + _0x29f2b5);
      }
    } catch (_0xde177e) {
      console.log(_0xde177e);
    }
  }
  async homepage(_0x6780a1, _0x1603c7 = {}) {
    try {
      let _0x5ed91f = {
          phone: this.name,
          shopId: "20001",
          type: _0x6780a1
        },
        _0x1cc40e = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x5ed91f)
          }
        },
        {
          result: _0x2d5f89
        } = await this.request(_0x1cc40e),
        _0x2015a4 = _0x15f162.get(_0x2d5f89, "resoultCode", -1);
      if (_0x2015a4 == 0) {
        let _0x206d2c = _0x15f162.get(_0x2d5f89?.["data"]?.["head"], "code", -1);
        if (_0x206d2c == 0) {
          for (let _0x2de8b1 of _0x2d5f89?.["data"]?.["biz"]?.["adItems"] || []) {
            let _0x174bb6 = _0x2de8b1.title,
              _0x50d5f8 = [];
            switch (_0x2de8b1?.["taskState"]) {
              case "1":
                console.log("[" + _0x174bb6 + "] -- 可领取奖励");
                break;
              case "2":
                console.log("[" + _0x174bb6 + "] -- 已完成");
                break;
              case "0":
              default:
                console.log("[" + _0x174bb6 + "] -- 未完成");
                break;
            }
            if (["0", "1"].includes(_0x2de8b1?.["taskState"])) {
              switch (_0x2de8b1.contentOne) {
                case "3":
                  if (_0x2de8b1?.["rewardId"]) {
                    await this.receiveReward(_0x2de8b1);
                  }
                  break;
                case "5":
                  await this.openMsg(_0x2de8b1);
                  break;
                case "6":
                  await this.sharingGetGold();
                  break;
                case "10":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  if (this.xtoken) {
                    for (let _0x9af791 = 0; _0x9af791 < 10; _0x9af791++) {
                      let _0x1d6049 = Math.floor(Math.random() * 1000) + 1000;
                      _0x50d5f8.push(this.watchLiveInit(_0x1d6049));
                    }
                    await Promise.all(_0x50d5f8);
                  }
                  break;
                case "13":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  if (this.xtoken) {
                    for (let _0x30e48c = 0; _0x30e48c < 6; _0x30e48c++) {
                      let _0x896840 = Math.floor(Math.random() * 1000) + 3000;
                      await this.watchVideo(_0x896840);
                    }
                  }
                  break;
                case "18":
                  await this.polymerize(_0x2de8b1);
                  break;
                default:
                  break;
              }
            }
          }
        } else {
          let _0x44493a = _0x2d5f89?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x206d2c + "]: " + _0x44493a);
        }
      } else {
        this.log("获取任务列表错误[" + _0x2015a4 + "]");
      }
    } catch (_0x5b1247) {
      console.log(_0x5b1247);
    }
  }
  async receiveReward(_0x44c87e, _0x942cc1 = {}) {
    try {
      let _0x16124f = _0x44c87e?.["title"]?.["split"](" ")?.[0];
      let _0x3343db = {
          phone: this.name,
          rewardId: _0x44c87e?.["rewardId"] || ""
        },
        _0x2b8325 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x3343db)
          }
        },
        {
          result: _0x245f49
        } = await this.request(_0x2b8325),
        _0xb86106 = _0x15f162.get(_0x245f49, "resoultCode", -1);
      if (_0xb86106 == 0) {
        this.log("领取任务[" + _0x16124f + "]奖励成功: " + _0x245f49?.["resoultMsg"]);
      } else {
        let _0x4b17ba = _0x245f49?.["msg"] || _0x245f49?.["resoultMsg"] || _0x245f49?.["error"] || "";
        this.log("领取任务[" + _0x16124f + "]奖励错误[" + _0xb86106 + "]: " + _0x4b17ba);
      }
    } catch (_0x4ae752) {
      console.log(_0x4ae752);
    }
  }
  async openMsg(_0x18209c, _0xf5712c = {}) {
    try {
      let _0x264622 = _0x18209c?.["title"]?.["split"](" ")?.[0];
      let _0x4d8f7e = {
          phone: this.name
        },
        _0x1d8d50 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x4d8f7e)
          }
        },
        {
          result: _0x4432ec
        } = await this.request(_0x1d8d50),
        _0x2ccec3 = _0x15f162.get(_0x4432ec, "resoultCode", -1);
      if (_0x2ccec3 == 0) {
        this.log("完成任务[" + _0x264622 + "]成功: " + _0x4432ec?.["resoultMsg"]);
      } else {
        let _0xf7bcf5 = _0x4432ec?.["msg"] || _0x4432ec?.["resoultMsg"] || _0x4432ec?.["error"] || "";
        this.log("完成任务[" + _0x264622 + "]错误[" + _0x2ccec3 + "]: " + _0xf7bcf5);
      }
    } catch (_0x143acd) {
      console.log(_0x143acd);
    }
  }
  async polymerize(_0x3ce916, _0x5aaba6 = {}) {
    try {
      let _0x4cecd5 = _0x3ce916?.["title"]?.["split"](" ")?.[0];
      let _0x26c52a = {
          phone: this.name,
          jobId: _0x3ce916.taskId
        },
        _0x993b58 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x26c52a)
          }
        },
        {
          result: _0x53153c
        } = await this.request(_0x993b58),
        _0x3954e3 = _0x15f162.get(_0x53153c, "resoultCode", -1);
      if (_0x3954e3 == 0) {
        this.log("完成任务[" + _0x4cecd5 + "]成功: " + _0x53153c?.["resoultMsg"]);
      } else {
        let _0x20252c = _0x53153c?.["msg"] || _0x53153c?.["resoultMsg"] || _0x53153c?.["error"] || "";
        this.log("完成任务[" + _0x4cecd5 + "]错误[" + _0x3954e3 + "]: " + _0x20252c);
      }
    } catch (_0x1e56cf) {
      console.log(_0x1e56cf);
    }
  }
  async food(_0x37affe, _0x44128d = {}) {
    try {
      let _0x48db84 = {
          phone: this.name
        },
        _0x594158 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x48db84)
          }
        },
        {
          result: _0x528758
        } = await this.request(_0x594158),
        _0x5773ed = _0x15f162.get(_0x528758, "resoultCode", -1);
      if (_0x5773ed == 0) {
        this.log("第" + _0x37affe + "次喂食: " + (_0x528758?.["resoultMsg"] || "成功"));
        if (_0x528758?.["levelUp"]) {
          let _0x15ffa6 = _0x528758?.["currLevelRightList"][0]?.["level"];
          const _0x22a2f9 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x15ffa6 + "], 获得: " + _0x528758?.["currLevelRightList"][0]?.["righstName"], _0x22a2f9);
        }
      } else {
        let _0x38a17c = _0x528758?.["msg"] || _0x528758?.["resoultMsg"] || _0x528758?.["error"] || "";
        this.log("第" + _0x37affe + "次喂食失败[" + _0x5773ed + "]: " + _0x38a17c);
        _0x38a17c?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x560bf0) {
      console.log(_0x560bf0);
    }
  }
  async getParadiseInfo(_0x188c78 = {}) {
    try {
      let _0x58e39d = {
          phone: this.name
        },
        _0x2de10b = {
          fn: "getParadiseInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
          json: {
            para: this.encrypt_para(_0x58e39d)
          }
        };
      {
        let {
            result: _0x561427
          } = await this.request(_0x2de10b),
          _0x283f7a = _0x15f162.get(_0x561427, "resoultCode", -1);
        if (_0x283f7a == 0) {
          let _0x185bd3 = _0x561427?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x185bd3?.["level"];
          for (let _0x40653e = 1; _0x40653e <= 10 && this.can_feed; _0x40653e++) {
            await this.food(_0x40653e);
          }
        } else {
          let _0x2c224d = _0x561427?.["msg"] || _0x561427?.["resoultMsg"] || _0x561427?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x283f7a + "]: " + _0x2c224d);
          return;
        }
      }
      {
        let {
            result: _0x67c8d6
          } = await this.request(_0x2de10b),
          _0x3b9d2d = _0x15f162.get(_0x67c8d6, "resoultCode", -1);
        if (_0x3b9d2d == 0) {
          let _0x10dbeb = _0x67c8d6?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x10dbeb?.["level"];
          const _0x1e33ac = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x10dbeb?.["level"] + "], 升级进度: " + _0x10dbeb?.["growthValue"] + "/" + _0x10dbeb?.["fullGrowthCoinValue"], _0x1e33ac);
        } else {
          let _0x5bd56f = _0x67c8d6?.["msg"] || _0x67c8d6?.["resoultMsg"] || _0x67c8d6?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x3b9d2d + "]: " + _0x5bd56f);
          return;
        }
      }
    } catch (_0x44ef3a) {
      console.log(_0x44ef3a);
    }
  }
  async getLevelRightsList(_0x1a02bd = {}) {
    try {
      let _0x5b3e87 = {
          phone: this.name
        },
        _0x1684af = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x5b3e87)
          }
        },
        {
          result: _0x48d893
        } = await this.request(_0x1684af);
      if (_0x48d893?.["currentLevel"]) {
        let _0x498c7f = _0x48d893?.["currentLevel"] || 6;
        for (let _0xbad217 = _0x498c7f; _0xbad217 > 0; _0xbad217--) {
          let _0x33baca = "V" + _0xbad217;
          for (let _0x19de78 of _0x48d893[_0x33baca] || []) {
            let _0x528924 = _0x19de78?.["righstName"] || "";
            if (this.coin < _0x19de78.costCoin) {
              continue;
            }
            (_0x528924?.["includes"]("话费") || _0x528924?.["includes"]("专享") && _0x528924?.["includes"]("金豆")) && (await this.conversionRights(_0x19de78));
          }
        }
      } else {
        let _0x33c2ef = _0x48d893?.["msg"] || _0x48d893?.["resoultMsg"] || _0x48d893?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x33c2ef);
      }
    } catch (_0xdfc65e) {
      console.log(_0xdfc65e);
    }
  }
  async conversionRights(_0x8b30aa, _0x20ac58 = {}) {
    try {
      let _0x989fce = _0x8b30aa?.["righstName"] || "";
      let _0x393b7a = {
          phone: this.name,
          rightsId: _0x8b30aa.id
        },
        _0x25de54 = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x393b7a)
          }
        },
        {
          result: _0x61eab4
        } = await this.request(_0x25de54),
        _0x5ddf16 = _0x15f162.get(_0x61eab4, "resoultCode", -1);
      if (_0x5ddf16 == 0) {
        this.log("兑换权益[" + _0x989fce + "]成功");
      } else {
        let _0x3d19fc = _0x61eab4?.["msg"] || _0x61eab4?.["resoultMsg"] || _0x61eab4?.["error"] || "";
        this.log("兑换权益[" + _0x989fce + "]失败[" + _0x5ddf16 + "]: " + _0x3d19fc);
      }
    } catch (_0x154655) {
      console.log(_0x154655);
    }
  }
  async get_usercode(_0x412549 = {}) {
    try {
      const _0x902d02 = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x902d02.searchParams.userID = this.ticket;
      _0x902d02.searchParams.version = "9.3.3";
      _0x902d02.searchParams.type = "room";
      _0x902d02.searchParams.l = "renwu";
      let _0x1c5a92 = _0x902d02,
        {
          statusCode: _0xa03fd5,
          headers: _0x56a96e
        } = await this.request(_0x1c5a92),
        _0xab849e = _0x56a96e?.["location"]?.["match"](/usercode=(\w+)/);
      _0xab849e ? await this.codeToken(_0xab849e[1]) : this.log("获取code失败[" + _0xa03fd5 + "]");
    } catch (_0x29177f) {
      console.log(_0x29177f);
    }
  }
  async codeToken(_0x5583b7, _0x4f3e06 = {}) {
    try {
      const _0x544526 = {
        usercode: _0x5583b7
      };
      let _0x42d8f9 = {
          fn: "codeToken",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
          json: _0x544526
        },
        {
          result: _0x2d399a
        } = await this.request(_0x42d8f9),
        _0x20eb87 = _0x15f162.get(_0x2d399a, "code", -1);
      if (_0x20eb87 == 0) {
        this.xtoken = _0x2d399a?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x2245eb.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x40cab0 = _0x2d399a?.["msg"] || _0x2d399a?.["resoultMsg"] || _0x2d399a?.["error"] || _0x2d399a?.["msg"] || "";
        this.log("获取token失败[" + _0x20eb87 + "]: " + _0x40cab0);
      }
    } catch (_0x1b1a1e) {
      console.log(_0x1b1a1e);
    }
  }
  async watchLiveInit(_0x2b371d, _0x15c114 = {}) {
    try {
      const _0xaac216 = {
        period: 1,
        liveId: _0x2b371d
      };
      let _0x2729a5 = {
          fn: "watchLiveInit",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
          json: _0xaac216
        },
        {
          result: _0x4de425
        } = await this.request(_0x2729a5),
        _0x3775c3 = _0x15f162.get(_0x4de425, "code", -1);
      if (_0x3775c3 == 0) {
        await _0x15f162.wait(15000);
        await this.watchLive(_0x2b371d, _0x4de425?.["data"]);
      } else {
        let _0x114346 = _0x4de425?.["msg"] || _0x4de425?.["resoultMsg"] || _0x4de425?.["error"] || _0x4de425?.["msg"] || "";
        this.log("开始观看直播[" + _0x2b371d + "]失败[" + _0x3775c3 + "]: " + _0x114346);
      }
    } catch (_0x1ff9f8) {
      console.log(_0x1ff9f8);
    }
  }
  async watchLive(_0x251735, _0x2a44e8, _0x399a2c = {}) {
    try {
      const _0x2b6c37 = {
        period: 1,
        liveId: _0x251735,
        key: _0x2a44e8
      };
      let _0x2319f7 = {
          fn: "watchLive",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
          json: _0x2b6c37
        },
        {
          result: _0x4b3fc5
        } = await this.request(_0x2319f7),
        _0x403e57 = _0x15f162.get(_0x4b3fc5, "code", -1);
      if (_0x403e57 == 0) {
        this.log("观看直播[" + _0x251735 + "]成功");
      } else {
        let _0x4e18fa = _0x4b3fc5?.["msg"] || _0x4b3fc5?.["resoultMsg"] || _0x4b3fc5?.["error"] || _0x4b3fc5?.["msg"] || "";
        this.log("观看直播[" + _0x251735 + "]失败[" + _0x403e57 + "]: " + _0x4e18fa);
      }
    } catch (_0x5427c3) {
      console.log(_0x5427c3);
    }
  }
  async watchVideo(_0x2a3496, _0x3963c0 = {}) {
    try {
      const _0x55357a = {
        articleId: _0x2a3496
      };
      let _0x4b01e1 = {
          fn: "watchVideo",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
          json: _0x55357a
        },
        {
          result: _0x30752d
        } = await this.request(_0x4b01e1),
        _0x365eab = _0x15f162.get(_0x30752d, "code", -1);
      if (_0x365eab == 0) {
        this.log("观看短视频[" + _0x2a3496 + "]成功");
      } else {
        let _0x3849cb = _0x30752d?.["msg"] || _0x30752d?.["resoultMsg"] || _0x30752d?.["error"] || _0x30752d?.["msg"] || "";
        this.log("观看短视频[" + _0x2a3496 + "]失败[" + _0x365eab + "]: " + _0x3849cb);
      }
    } catch (_0x4efc7a) {
      console.log(_0x4efc7a);
    }
  }
  async like(_0x5e21d9, _0x4f46cc = {}) {
    try {
      const _0x383443 = {
        account: this.name,
        liveId: _0x5e21d9
      };
      let _0x2b48df = {
          fn: "like",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/room/like",
          json: _0x383443
        },
        {
          result: _0x204ac3
        } = await this.request(_0x2b48df),
        _0x44bc8 = _0x15f162.get(_0x204ac3, "code", -1);
      if (_0x44bc8 == 0) {
        this.log("点赞直播间[" + _0x5e21d9 + "]成功");
      } else {
        let _0x5d4ddf = _0x204ac3?.["msg"] || _0x204ac3?.["resoultMsg"] || _0x204ac3?.["error"] || _0x204ac3?.["msg"] || "";
        this.log("点赞直播间[" + _0x5e21d9 + "]失败[" + _0x44bc8 + "]: " + _0x5d4ddf);
      }
    } catch (_0x10b121) {
      console.log(_0x10b121);
    }
  }
  async sharingGetGold(_0xb542a1 = {}) {
    try {
      let _0x287916 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x15f162.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0x33a8d7
        } = await this.request(_0x287916),
        _0x146435 = _0x15f162.get(_0x33a8d7?.["responseData"], "resultCode", -1);
      if (_0x146435 == "0000") {
        this.log("分享成功");
      } else {
        let _0x4fd8c8 = _0x33a8d7?.["msg"] || _0x33a8d7?.["responseData"]?.["resultDesc"] || _0x33a8d7?.["error"] || _0x33a8d7?.["msg"] || "";
        this.log("分享失败[" + _0x146435 + "]: " + _0x4fd8c8);
      }
    } catch (_0x3e6b24) {
      console.log(_0x3e6b24);
    }
  }
  async userTask() {
    const _0xd871d = {
      notify: true
    };
    _0x15f162.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0xd871d);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.userStatusInfo();
    await this.continueSignDays();
    await this.homepage(_0x1c5c15.taskLong);
    await this.getParadiseInfo();
    await this.userCoinInfo(true);
  }
}
!(async () => {
  if (!(await _0x2728b1())) {
    return;
  }
  _0x15f162.read_env(_0x1e1362);
  _0x1ef3f2();
  for (let _0x2d894c of _0x15f162.userList) {
    await _0x2d894c.userTask();
  }
})().catch(_0x5797b0 => _0x15f162.log(_0x5797b0)).finally(() => _0x15f162.exitNow());
async function _0x2728b1(_0x14297f = 0) {
  let _0x370dee = false;
  try {
    let _0xe670b3 = {
        fn: "auth",
        method: "get",
        url: _0x2672b9,
        timeout: 20000
      },
      {
        statusCode: _0x12719d,
        result: _0xe7f1e5
      } = await _0x213f23.request(_0xe670b3);
    if (_0x12719d != 200) {
      _0x14297f++ < _0xd251b4 && (_0x370dee = await _0x2728b1(_0x14297f));
      return _0x370dee;
    }
    if (_0xe7f1e5?.["code"] == 0) {
      _0xe7f1e5 = JSON.parse(_0xe7f1e5.data.file.data);
      if (_0xe7f1e5?.["commonNotify"] && _0xe7f1e5.commonNotify.length > 0) {
        const _0x3791cf = {
          notify: true
        };
        _0x15f162.log(_0xe7f1e5.commonNotify.join("\n") + "\n", _0x3791cf);
      }
      _0xe7f1e5?.["commonMsg"] && _0xe7f1e5.commonMsg.length > 0 && _0x15f162.log(_0xe7f1e5.commonMsg.join("\n") + "\n");
      if (_0xe7f1e5[_0x4dfec7]) {
        let _0x20cced = _0xe7f1e5[_0x4dfec7];
        _0x20cced.status == 0 ? _0x552b8a >= _0x20cced.version ? (_0x370dee = true, _0x15f162.log(_0x20cced.msg[_0x20cced.status]), _0x15f162.log(_0x20cced.updateMsg), _0x15f162.log("现在运行的脚本版本是：" + _0x552b8a + "，最新脚本版本：" + _0x20cced.latestVersion)) : _0x15f162.log(_0x20cced.versionMsg) : _0x15f162.log(_0x20cced.msg[_0x20cced.status]);
      } else {
        _0x15f162.log(_0xe7f1e5.errorMsg);
      }
    } else {
      _0x14297f++ < _0xd251b4 && (_0x370dee = await _0x2728b1(_0x14297f));
    }
  } catch (_0x27eb82) {
    _0x15f162.log(_0x27eb82);
  } finally {
    return _0x370dee;
  }
}
function _0x5df551(_0x46ebd1) {
  return new class {
    constructor(_0x2c39e3) {
      this.name = _0x2c39e3;
      this.startTime = Date.now();
      const _0x44d818 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x44d818);
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
    log(_0x43c37a, _0xc29ca3 = {}) {
      let _0x448c39 = {
        console: true
      };
      Object.assign(_0x448c39, _0xc29ca3);
      if (_0x448c39.time) {
        let _0x4e77ed = _0x448c39.fmt || "hh:mm:ss";
        _0x43c37a = "[" + this.time(_0x4e77ed) + "]" + _0x43c37a;
      }
      if (_0x448c39.notify) {
        this.notifyStr.push(_0x43c37a);
      }
      if (_0x448c39.console) {
        console.log(_0x43c37a);
      }
    }
    get(_0x4fdb83, _0x143968, _0x5197c0 = "") {
      let _0x5acdba = _0x5197c0;
      _0x4fdb83?.["hasOwnProperty"](_0x143968) && (_0x5acdba = _0x4fdb83[_0x143968]);
      return _0x5acdba;
    }
    pop(_0x308d2d, _0x5cf3de, _0x1a9736 = "") {
      let _0x25e290 = _0x1a9736;
      _0x308d2d?.["hasOwnProperty"](_0x5cf3de) && (_0x25e290 = _0x308d2d[_0x5cf3de], delete _0x308d2d[_0x5cf3de]);
      return _0x25e290;
    }
    copy(_0xc42c87) {
      return Object.assign({}, _0xc42c87);
    }
    read_env(_0x26915f) {
      let _0x1304d2 = _0x4aacb5.map(_0x5a1292 => process.env[_0x5a1292]);
      for (let _0x2712f8 of _0x1304d2.filter(_0x22a084 => !!_0x22a084)) {
        for (let _0xb8050f of _0x2712f8.split(_0x4a03bf).filter(_0x1c376a => !!_0x1c376a)) {
          if (this.userList.includes(_0xb8050f)) {
            continue;
          }
          this.userList.push(new _0x26915f(_0xb8050f));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x3a1148 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x4aacb5.map(_0x383890 => "[" + _0x383890 + "]").join("或"), _0x3a1148);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x83ed27, _0x1d519e = null) {
      let _0x145c11 = _0x1d519e ? new Date(_0x1d519e) : new Date(),
        _0x278ce9 = {
          "M+": _0x145c11.getMonth() + 1,
          "d+": _0x145c11.getDate(),
          "h+": _0x145c11.getHours(),
          "m+": _0x145c11.getMinutes(),
          "s+": _0x145c11.getSeconds(),
          "q+": Math.floor((_0x145c11.getMonth() + 3) / 3),
          S: this.padStr(_0x145c11.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x83ed27) && (_0x83ed27 = _0x83ed27.replace(RegExp.$1, (_0x145c11.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x522c5d in _0x278ce9) new RegExp("(" + _0x522c5d + ")").test(_0x83ed27) && (_0x83ed27 = _0x83ed27.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x278ce9[_0x522c5d] : ("00" + _0x278ce9[_0x522c5d]).substr(("" + _0x278ce9[_0x522c5d]).length)));
      return _0x83ed27;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0xe4171d = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0xe4171d.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x2d42b1, _0x16c0f3, _0x45bd83 = {}) {
      let _0x1bbd07 = _0x45bd83.padding || "0",
        _0x1f47e5 = _0x45bd83.mode || "l",
        _0x5001e9 = String(_0x2d42b1),
        _0x59b61f = _0x16c0f3 > _0x5001e9.length ? _0x16c0f3 - _0x5001e9.length : 0,
        _0x369d87 = "";
      for (let _0x8b8130 = 0; _0x8b8130 < _0x59b61f; _0x8b8130++) {
        _0x369d87 += _0x1bbd07;
      }
      _0x1f47e5 == "r" ? _0x5001e9 = _0x5001e9 + _0x369d87 : _0x5001e9 = _0x369d87 + _0x5001e9;
      return _0x5001e9;
    }
    json2str(_0x2eeea4, _0x2f8256, _0xaef8eb = false) {
      let _0x4aaabe = [];
      for (let _0xe84c89 of Object.keys(_0x2eeea4).sort()) {
        let _0xc66a66 = _0x2eeea4[_0xe84c89];
        if (_0xc66a66 && _0xaef8eb) {
          _0xc66a66 = encodeURIComponent(_0xc66a66);
        }
        _0x4aaabe.push(_0xe84c89 + "=" + _0xc66a66);
      }
      return _0x4aaabe.join(_0x2f8256);
    }
    str2json(_0x4f4c9e, _0x4943a3 = false) {
      let _0x10a505 = {};
      for (let _0x1b7585 of _0x4f4c9e.split("&")) {
        if (!_0x1b7585) {
          continue;
        }
        let _0x5120f8 = _0x1b7585.indexOf("=");
        if (_0x5120f8 == -1) {
          continue;
        }
        let _0x2e83e4 = _0x1b7585.substr(0, _0x5120f8),
          _0x599c2a = _0x1b7585.substr(_0x5120f8 + 1);
        if (_0x4943a3) {
          _0x599c2a = decodeURIComponent(_0x599c2a);
        }
        _0x10a505[_0x2e83e4] = _0x599c2a;
      }
      return _0x10a505;
    }
    randomPattern(_0x288f64, _0x5c1884 = "abcdef0123456789") {
      let _0x2d8ad0 = "";
      for (let _0x11d7d6 of _0x288f64) {
        if (_0x11d7d6 == "x") {
          _0x2d8ad0 += _0x5c1884.charAt(Math.floor(Math.random() * _0x5c1884.length));
        } else {
          _0x11d7d6 == "X" ? _0x2d8ad0 += _0x5c1884.charAt(Math.floor(Math.random() * _0x5c1884.length)).toUpperCase() : _0x2d8ad0 += _0x11d7d6;
        }
      }
      return _0x2d8ad0;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x3a2d9e, _0x45794a = "abcdef0123456789") {
      let _0xe1129e = "";
      for (let _0x32be22 = 0; _0x32be22 < _0x3a2d9e; _0x32be22++) {
        _0xe1129e += _0x45794a.charAt(Math.floor(Math.random() * _0x45794a.length));
      }
      return _0xe1129e;
    }
    randomList(_0x3f8272) {
      let _0x14aa43 = Math.floor(Math.random() * _0x3f8272.length);
      return _0x3f8272[_0x14aa43];
    }
    wait(_0x4637c3) {
      return new Promise(_0x3f075e => setTimeout(_0x3f075e, _0x4637c3));
    }
    async exitNow() {
      await this.showmsg();
      let _0x2fc110 = Date.now(),
        _0x3f42a0 = (_0x2fc110 - this.startTime) / 1000;
      this.log("");
      const _0x118ce0 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3f42a0 + "秒", _0x118ce0);
      process.exit(0);
    }
    normalize_time(_0xdcdf7b, _0x1ed8b5 = {}) {
      let _0x208818 = _0x1ed8b5.len || this.default_timestamp_len;
      _0xdcdf7b = _0xdcdf7b.toString();
      let _0x4d2535 = _0xdcdf7b.length;
      while (_0x4d2535 < _0x208818) {
        _0xdcdf7b += "0";
      }
      _0x4d2535 > _0x208818 && (_0xdcdf7b = _0xdcdf7b.slice(0, 13));
      return parseInt(_0xdcdf7b);
    }
    async wait_until(_0x5851b8, _0x3e0d70 = {}) {
      let _0x4a8eb8 = _0x3e0d70.logger || this,
        _0xad03cb = _0x3e0d70.interval || this.default_wait_interval,
        _0x342662 = _0x3e0d70.limit || this.default_wait_limit,
        _0x4775cc = _0x3e0d70.ahead || this.default_wait_ahead;
      if (typeof _0x5851b8 == "string" && _0x5851b8.includes(":")) {
        if (_0x5851b8.includes("-")) {
          _0x5851b8 = new Date(_0x5851b8).getTime();
        } else {
          let _0x121c56 = this.time("yyyy-MM-dd ");
          _0x5851b8 = new Date(_0x121c56 + _0x5851b8).getTime();
        }
      }
      let _0x5a59e4 = this.normalize_time(_0x5851b8) - _0x4775cc,
        _0x3f0674 = this.time("hh:mm:ss.S", _0x5a59e4),
        _0x56bf41 = Date.now();
      _0x56bf41 > _0x5a59e4 && (_0x5a59e4 += 86400000);
      let _0x41b346 = _0x5a59e4 - _0x56bf41;
      if (_0x41b346 > _0x342662) {
        const _0x39f18c = {
          time: true
        };
        _0x4a8eb8.log("离目标时间[" + _0x3f0674 + "]大于" + _0x342662 / 1000 + "秒,不等待", _0x39f18c);
      } else {
        const _0x7531a9 = {
          time: true
        };
        _0x4a8eb8.log("离目标时间[" + _0x3f0674 + "]还有" + _0x41b346 / 1000 + "秒,开始等待", _0x7531a9);
        while (_0x41b346 > 0) {
          let _0xd3c4bc = Math.min(_0x41b346, _0xad03cb);
          await this.wait(_0xd3c4bc);
          _0x56bf41 = Date.now();
          _0x41b346 = _0x5a59e4 - _0x56bf41;
        }
        const _0x1c01b2 = {
          time: true
        };
        _0x4a8eb8.log("已完成等待", _0x1c01b2);
      }
    }
    async wait_gap_interval(_0x38d8bc, _0x3b1a04) {
      let _0x48d2d7 = Date.now() - _0x38d8bc;
      _0x48d2d7 < _0x3b1a04 && (await this.wait(_0x3b1a04 - _0x48d2d7));
    }
  }(_0x46ebd1);
}