//Sat Jun 29 2024 13:19:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x258020 = _0x15f66e("中国联通"),
  _0x398945 = require("got"),
  _0x31c2ca = require("crypto-js"),
  {
    CookieJar: _0x299038
  } = require("tough-cookie"),
  _0x18753e = "chinaUnicom",
  _0x477bff = ["\n", "&", "@"],
  _0x5eda0a = [_0x18753e + "Cookie"],
  _0x459ed3 = 50000,
  _0x26d2ae = 3;
const _0x363db7 = 1.14,
  _0x506d8d = "chinaUnicom",
  _0x3768e3 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x158917 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x506d8d + ".json",
  _0x5e434b = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x8b1594 = 5,
  _0x4c30e5 = 13,
  _0x773cf4 = 1000,
  _0x362968 = 3600000,
  _0x576c64 = 100,
  _0x109d0c = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x1af3b5 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x2a7919 = "10000002",
  _0x31b05d = "7k1HcDL8RKvc",
  _0x46b6ac = "update!@#1234567",
  _0x170061 = "16-Bytes--String",
  _0x5c66aa = "225",
  _0x509c09 = "225",
  _0x519a76 = "party",
  _0x3152da = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x118193 = "0123456789",
  _0xb9f688 = "qwertyuiopasdfghjklzxcvbnm",
  _0x1232b7 = process.env[_0x18753e + "Uuid"] || _0x258020.randomUuid(),
  _0x2ad9d4 = [9, 10, 11, 12, 13],
  _0x111a99 = 1000,
  _0x597a76 = 5000,
  _0x56af9c = "1001000003",
  _0x5b3991 = "100002",
  _0x13d9c0 = "";
let _0x54055c = [],
  _0x5c84d1 = [],
  _0x510833 = [],
  _0x51535b = null,
  _0x503258 = [6640, 6641];
const _0x4da767 = 7,
  _0x2153e9 = 5;
function _0x898e8c(_0x2dd22f, _0x257c21, _0x4d2b3f, _0x4f488b, _0x4b5757, _0x1dcd9f) {
  return _0x31c2ca[_0x2dd22f].encrypt(_0x31c2ca.enc.Utf8.parse(_0x4f488b), _0x31c2ca.enc.Utf8.parse(_0x4b5757), {
    mode: _0x31c2ca.mode[_0x257c21],
    padding: _0x31c2ca.pad[_0x4d2b3f],
    iv: _0x31c2ca.enc.Utf8.parse(_0x1dcd9f)
  }).ciphertext.toString(_0x31c2ca.enc.Hex);
}
function _0x2b6169(_0x11c0dd, _0x5cc690, _0x1a1676, _0xd99293, _0x484cbd, _0x11c245) {
  return _0x31c2ca[_0x11c0dd].decrypt({
    ciphertext: _0x31c2ca.enc.Hex.parse(_0xd99293)
  }, _0x31c2ca.enc.Utf8.parse(_0x484cbd), {
    mode: _0x31c2ca.mode[_0x5cc690],
    padding: _0x31c2ca.pad[_0x1a1676],
    iv: _0x31c2ca.enc.Utf8.parse(_0x11c245)
  }).toString(_0x31c2ca.enc.Utf8);
}
class _0x287e24 {
  constructor() {
    this.index = _0x258020.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x55d6d3 = {
      limit: 0
    };
    const _0x573b1d = {
      Connection: "keep-alive"
    };
    const _0x405440 = {
      retry: _0x55d6d3,
      timeout: _0x459ed3,
      followRedirect: false,
      headers: _0x573b1d
    };
    this.got = _0x398945.extend(_0x405440);
  }
  log(_0x597096, _0x233cc8 = {}) {
    var _0x533337 = "",
      _0x18249a = _0x258020.userCount.toString().length;
    if (this.index) {
      _0x533337 += "账号[" + _0x258020.padStr(this.index, _0x18249a) + "]";
    }
    if (this.name) {
      _0x533337 += "[" + this.name + "]";
    }
    _0x258020.log(_0x533337 + _0x597096, _0x233cc8);
  }
  set_cookie(_0x1900a4, _0x2bdef0, _0x59d164, _0x2854b5, _0x58175d = {}) {
    this.cookieJar.setCookieSync(_0x1900a4 + "=" + _0x2bdef0 + "; Domain=" + _0x59d164 + ";", "" + _0x2854b5);
  }
  async request(_0x4dca8a) {
    const _0x39bfda = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x29c242 = ["TimeoutError"],
      _0x544153 = [];
    var _0x378da9 = null,
      _0x514a91 = 0,
      _0x2cb99c = _0x4dca8a.fn || _0x4dca8a.url;
    let _0x2831d2 = _0x258020.get(_0x4dca8a, "valid_code", _0x544153);
    _0x4dca8a.method = _0x4dca8a?.["method"]?.["toUpperCase"]() || "GET";
    let _0x45cf29;
    while (_0x514a91 < _0x26d2ae) {
      try {
        _0x514a91++;
        _0x45cf29 = null;
        let _0x2b1460 = null,
          _0xc4c3e5 = _0x4dca8a?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x459ed3,
          _0x5d4c68 = false;
        await new Promise(async _0x599547 => {
          setTimeout(() => {
            _0x5d4c68 = true;
            _0x599547();
          }, _0xc4c3e5);
          await this.got(_0x4dca8a).then(_0x1f8199 => {
            _0x378da9 = _0x1f8199;
          }, _0x21d3f8 => {
            _0x2b1460 = _0x21d3f8;
            _0x378da9 = _0x21d3f8.response;
            _0x45cf29 = _0x2b1460?.["code"];
          });
          _0x599547();
        });
        if (_0x5d4c68) {
          this.log("[" + _0x2cb99c + "]请求超时(" + _0xc4c3e5 / 1000 + "秒)，重试第" + _0x514a91 + "次");
        } else {
          if (_0x29c242.includes(_0x2b1460?.["name"])) {
            this.log("[" + _0x2cb99c + "]请求超时(" + _0x2b1460.code + ")，重试第" + _0x514a91 + "次");
          } else {
            if (_0x39bfda.includes(_0x2b1460?.["code"])) {
              this.log("[" + _0x2cb99c + "]请求错误(" + _0x2b1460.code + ")，重试第" + _0x514a91 + "次");
            } else {
              let _0xfbd629 = _0x378da9?.["statusCode"] || 999,
                _0x1f155b = _0xfbd629 / 100 | 0;
              _0x1f155b > 3 && !_0x2831d2.includes(_0xfbd629) && this.log("请求[" + _0x2cb99c + "]返回[" + _0xfbd629 + "]");
              if (_0x1f155b <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x2dd936) {
        _0x2dd936.name == "TimeoutError" ? this.log("[" + _0x2cb99c + "]请求超时，重试第" + _0x514a91 + "次") : this.log("[" + _0x2cb99c + "]请求错误(" + _0x2dd936.message + ")，重试第" + _0x514a91 + "次");
      }
    }
    if (_0x378da9 == null) {
      return Promise.resolve({
        statusCode: _0x45cf29 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x26fa4f,
      headers: _0x39cb5a,
      body: _0x524586
    } = _0x378da9;
    if (_0x524586) {
      try {
        _0x524586 = JSON.parse(_0x524586);
      } catch {}
    }
    const _0x4baaa5 = {
      statusCode: _0x26fa4f,
      headers: _0x39cb5a,
      result: _0x524586
    };
    return Promise.resolve(_0x4baaa5);
  }
}
let _0x55a9bf = new _0x287e24();
class _0x421ede extends _0x287e24 {
  constructor(_0x232168) {
    super();
    this.cookieJar = new _0x299038();
    const _0x18f164 = {
      "User-Agent": _0x5e434b
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x18f164
    });
    let _0x756e13 = _0x232168.split("#");
    this.token_online = _0x756e13[0];
    this.unicomTokenId = _0x258020.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x258020.randomString(32, _0x118193 + _0xb9f688).toUpperCase();
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
  set_cookie(_0x3c5da1, _0x270443, _0x4643d3 = {}) {
    let _0x2d4e12 = _0x4643d3?.["domain"] || "10010.com",
      _0x5f57d9 = _0x4643d3?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x3c5da1, _0x270443, _0x2d4e12, _0x5f57d9, _0x4643d3);
  }
  get_bizchannelinfo() {
    const _0x306834 = {
      bizChannelCode: _0x509c09,
      disriBiz: _0x519a76,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x53cfa8 = JSON.stringify(_0x306834);
    return _0x53cfa8;
  }
  get_epay_authinfo() {
    const _0x5b6229 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x5b6229);
  }
  get_flmf_data(_0x13fbf9 = "welfareCenter") {
    const _0x5f3846 = {
      sid: this.flmf_sid,
      actcode: _0x13fbf9
    };
    return _0x5f3846;
  }
  encode_woread(_0x4dd06b) {
    let _0x1803e8 = _0x898e8c("AES", "CBC", "Pkcs7", JSON.stringify(_0x4dd06b), _0x46b6ac, _0x170061);
    return Buffer.from(_0x1803e8, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x258020.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x2f5b77) {
    let _0x7384c5 = Date.now(),
      _0x5e6ba1 = Math.floor(89999 * Math.random()) + 100000,
      _0x5e5993 = _0x5b3991,
      _0x3d65a2 = _0x13d9c0,
      _0x55c501 = _0x31c2ca.MD5(_0x2f5b77 + _0x7384c5 + _0x5e6ba1 + _0x5e5993 + _0x3d65a2).toString();
    const _0x1cb122 = {
      key: _0x2f5b77,
      resTime: _0x7384c5,
      reqSeq: _0x5e6ba1,
      channel: _0x5e5993,
      version: _0x3d65a2,
      sign: _0x55c501
    };
    return _0x1cb122;
  }
  async onLine(_0x29346b = {}) {
    let _0x4cda3d = false;
    try {
      let _0x5378dc = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x258020.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x109d0c,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x14cdff,
          statusCode: _0x5b113e
        } = await this.request(_0x5378dc),
        _0x3694f2 = _0x258020.get(_0x14cdff, "code", _0x5b113e);
      if (_0x3694f2 == 0) {
        _0x4cda3d = true;
        this.valid = true;
        this.mobile = _0x14cdff?.["desmobile"];
        this.name = _0x14cdff?.["desmobile"];
        this.ecs_token = _0x14cdff?.["ecs_token"];
        this.city = _0x14cdff?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x3694f2 + "]");
      }
    } catch (_0x4cc740) {
      console.log(_0x4cc740);
    } finally {
      return _0x4cda3d;
    }
  }
  async openPlatLineNew(_0x271241, _0x58abfe = {}) {
    let _0x1b9b5c = {
      ticket: "",
      type: "",
      loc: ""
    };
    try {
      const _0xd26a9c = {
        to_url: _0x271241
      };
      let _0x3afe75 = {
          fn: "openPlatLineNew",
          method: "get",
          url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
          searchParams: _0xd26a9c
        },
        {
          headers: _0x3bd184,
          statusCode: _0x16b058
        } = await this.request(_0x3afe75);
      if (_0x3bd184?.["location"]) {
        let _0x4381d9 = new URL(_0x3bd184.location),
          _0x54cd2e = _0x4381d9.searchParams.get("type") || "02",
          _0x267634 = _0x4381d9.searchParams.get("ticket");
        !_0x267634 && this.log("获取ticket失败");
        const _0xd06486 = {
          loc: _0x3bd184.location,
          ticket: _0x267634,
          type: _0x54cd2e
        };
        _0x1b9b5c = _0xd06486;
      } else {
        this.log("获取ticket失败[" + _0x16b058 + "]");
      }
    } catch (_0x235ede) {
      console.log(_0x235ede);
    } finally {
      return _0x1b9b5c;
    }
  }
  async gettaskip(_0x2a62f9 = {}) {
    let _0x406a04 = _0x258020.randomString(32).toUpperCase();
    try {
      const _0x1b299a = {
        mobile: this.mobile,
        orderId: _0x406a04
      };
      let _0x49b6f5 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x1b299a
      };
      await this.request(_0x49b6f5);
    } catch (_0x22f514) {
      console.log(_0x22f514);
    } finally {
      return _0x406a04;
    }
  }
  async draw_28_queryChance(_0x35b061 = {}) {
    try {
      let _0x2be7bb = {
          fn: "draw_28_queryChance",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
        },
        {
          result: _0x9f1840,
          statusCode: _0x4d449a
        } = await this.request(_0x2be7bb),
        _0x3a5e43 = _0x258020.get(_0x9f1840, "status", _0x4d449a);
      if (_0x3a5e43 == "0000") {
        let _0x1358da = parseInt(_0x9f1840?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x1358da + "次");
        let _0x1ccc2e = false;
        while (_0x1358da-- > 0) {
          if (_0x1ccc2e) {
            await _0x258020.wait(8000);
          }
          _0x1ccc2e = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x5cd6b8 = _0x9f1840?.["message"] || _0x9f1840?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x3a5e43 + "]: " + _0x5cd6b8);
      }
    } catch (_0x4393d8) {
      console.log(_0x4393d8);
    }
  }
  async draw_28_lottery(_0x15c203 = {}) {
    try {
      let _0x42ed05 = {
          fn: "draw_28_lottery",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
        },
        {
          result: _0x1a8698,
          statusCode: _0x1db5fb
        } = await this.request(_0x42ed05),
        _0x5b1a5b = _0x258020.get(_0x1a8698, "status", _0x1db5fb);
      if (_0x5b1a5b == "0000") {
        let _0x5092a2 = _0x258020.get(_0x1a8698?.["data"], "code", -1);
        if (_0x1a8698?.["data"]?.["uuid"]) {
          await _0x258020.wait(2000);
          await this.draw_28_winningRecord(_0x1a8698.data.uuid);
        } else {
          let _0x1753e5 = _0x1a8698?.["data"]?.["message"] || _0x1a8698?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x5092a2 + "]: " + _0x1753e5);
        }
      } else {
        let _0x3dc058 = _0x1a8698?.["message"] || _0x1a8698?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x5b1a5b + "]: " + _0x3dc058);
      }
    } catch (_0x4afecc) {
      console.log(_0x4afecc);
    }
  }
  async draw_28_winningRecord(_0x39aff7, _0x2eab75 = {}) {
    try {
      const _0x4ac484 = {
        requestId: _0x39aff7
      };
      let _0x27382f = {
          fn: "draw_28_winningRecord",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
          form: _0x4ac484
        },
        {
          result: _0x149c60,
          statusCode: _0x3b2f10
        } = await this.request(_0x27382f),
        _0x48b9ab = _0x258020.get(_0x149c60, "status", _0x3b2f10);
      if (_0x48b9ab == "0000") {
        let _0xf6bbe4 = _0x258020.get(_0x149c60?.["data"], "code", -1);
        if (_0xf6bbe4 == "0000") {
          const _0x2c8a62 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x149c60?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x2c8a62);
        } else {
          let _0x2c7eaa = _0x149c60?.["data"]?.["message"] || _0x149c60?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0xf6bbe4 + "]: " + _0x2c7eaa);
        }
      } else {
        let _0x3e0db7 = _0x149c60?.["message"] || _0x149c60?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x48b9ab + "]: " + _0x3e0db7);
      }
    } catch (_0x1ab5e8) {
      console.log(_0x1ab5e8);
    }
  }
  async ttlxj_authorize(_0x5beb50, _0x6252d3, _0x352aef, _0x22488a = {}) {
    try {
      let _0x1e666d = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x352aef
          },
          json: {
            response_type: "rptid",
            client_id: _0x1af3b5,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x5beb50,
              st_type: _0x6252d3,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x258020.randomString(13),
              trace_id: _0x258020.randomString(32)
            }
          }
        },
        {
          result: _0x590618
        } = await this.request(_0x1e666d),
        _0x27d62b = _0x258020.get(_0x590618, "status", -1);
      if (_0x27d62b == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x7d7c45 = _0x590618?.["message"] || _0x590618?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x27d62b + "]: " + _0x7d7c45);
      }
    } catch (_0x4d8229) {
      console.log(_0x4d8229);
    }
  }
  async ttlxj_authCheck(_0x5765e9 = {}) {
    try {
      let _0x33fe1b = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x21be62
        } = await this.request(_0x33fe1b),
        _0x4b5e6b = _0x258020.get(_0x21be62, "code", -1);
      if (_0x4b5e6b == "0000") {
        let {
          mobile: _0x7a5341,
          sessionId: _0x51f424,
          tokenId: _0x80aebb,
          userId: _0x2724be
        } = _0x21be62?.["data"]?.["authInfo"];
        const _0x2f7b26 = {
          sessionId: _0x51f424,
          tokenId: _0x80aebb,
          userId: _0x2724be
        };
        Object.assign(this, _0x2f7b26);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x4b5e6b == "2101000100") {
          let _0x23991d = _0x21be62?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x23991d);
        } else {
          let _0x4599b3 = _0x21be62?.["msgInside"] || _0x21be62?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x4b5e6b + "]: " + _0x4599b3);
        }
      }
    } catch (_0x40480d) {
      console.log(_0x40480d);
    }
  }
  async ttlxj_login(_0x400fce, _0x4bf7fe = {}) {
    try {
      _0x400fce += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x5c66aa + "&bizChannelCode=" + _0x509c09;
      let _0x3da0a8 = {
          fn: "ttlxj_login",
          method: "get",
          url: _0x400fce
        },
        {
          headers: _0xdd6a1b,
          statusCode: _0x34fec3
        } = await this.request(_0x3da0a8);
      if (_0xdd6a1b?.["location"]) {
        let _0x2a2fb0 = new URL(_0xdd6a1b.location);
        this.rptId = _0x2a2fb0.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x34fec3 + "]");
      }
    } catch (_0x411d6a) {
      console.log(_0x411d6a);
    }
  }
  async ttlxj_userDrawInfo(_0x2a7449 = {}) {
    try {
      let _0x4d4804 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x47c67d
        } = await this.request(_0x4d4804),
        _0x34f6df = _0x258020.get(_0x47c67d, "code", -1);
      if (_0x34f6df == "0000") {
        let _0x5e1798 = _0x47c67d?.["data"]?.["dayOfWeek"],
          _0x3fb090 = "day" + _0x5e1798,
          _0xc6cc5b = _0x47c67d?.["data"]?.[_0x3fb090] == "1";
        const _0x23103c = {
          notify: true
        };
        this.log("天天领现金今天" + (_0xc6cc5b ? "未" : "已") + "打卡", _0x23103c);
        if (_0xc6cc5b) {
          let _0x3cb172 = new Date().getDay();
          _0x3cb172 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x292e08 = _0x47c67d?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x34f6df + "]: " + _0x292e08);
      }
    } catch (_0x49524b) {
      console.log(_0x49524b);
    }
  }
  async ttlxj_unifyDrawNew(_0x1c130e, _0x20a193 = {}) {
    try {
      const _0x47f47f = {
        drawType: _0x1c130e,
        bizFrom: _0x5c66aa,
        activityId: "TTLXJ20210330"
      };
      let _0x16e303 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x47f47f
        },
        {
          result: _0x551b70
        } = await this.request(_0x16e303),
        _0xb896f9 = _0x258020.get(_0x551b70, "code", -1);
      if (_0xb896f9 == "0000" && _0x551b70?.["data"]?.["returnCode"] == 0) {
        let _0x33f4d9 = _0x551b70?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x551b70?.["data"]?.["amount"]);
        const _0x139b84 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x33f4d9, _0x139b84);
      } else {
        let _0x27d86a = _0x551b70?.["data"]?.["returnMsg"] || _0x551b70?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x551b70?.["data"]?.["returnCode"] || _0xb896f9) + "]: " + _0x27d86a);
      }
    } catch (_0x1b5376) {
      console.log(_0x1b5376);
    }
  }
  async ttlxj_h(_0x508d5f = {}) {
    try {
      const _0x435dab = {
        bizFrom: _0x5c66aa,
        activityId: "TTLXJ20210330",
        uid: _0x3152da
      };
      let _0x523164 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: _0x435dab
      };
      await this.request(_0x523164);
    } catch (_0x2b39e2) {
      console.log(_0x2b39e2);
    }
  }
  async ttlxj_queryAvailable(_0x3a8187 = {}) {
    try {
      let _0x4a2b12 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x155077
        } = await this.request(_0x4a2b12),
        _0x33dd2d = _0x258020.get(_0x155077, "code", -1);
      if (_0x33dd2d == "0000" && _0x155077?.["data"]?.["returnCode"] == 0) {
        let _0x2a7888 = _0x155077?.["data"]?.["availableAmount"] || 0;
        const _0x13e978 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x2a7888 / 100).toFixed(2) + "元", _0x13e978);
        let _0x2a948a = [],
          _0x284511 = Date.now();
        for (let _0x341693 of _0x155077?.["data"]?.["prizeList"]?.["filter"](_0x37667a => _0x37667a.status == "A")) {
          let _0x2599e = _0x341693.endTime,
            _0x363645 = new Date(_0x2599e.slice(0, 4) + "-" + _0x2599e.slice(4, 6) + "-" + _0x2599e.slice(6, 8) + " 00:00:00"),
            _0x6ca17f = _0x363645.getTime();
          if (_0x6ca17f - _0x284511 < _0x4da767 * 24 * 60 * 60 * 1000) {
            let _0x22e312 = _0x258020.time("yyyy-MM-dd", _0x6ca17f);
            const _0x54506a = {
              timestamp: _0x6ca17f,
              date: _0x22e312,
              amount: _0x341693.amount
            };
            _0x2a948a.push(_0x54506a);
          }
        }
        if (_0x2a948a.length) {
          let _0x141718 = {
              timestamp: 0
            },
            _0x4a0ae3 = _0x2a948a.reduce(function (_0x4d58af, _0x256c2f) {
              (_0x141718.timestamp == 0 || _0x256c2f.timestamp < _0x141718.timestamp) && (_0x141718 = _0x256c2f);
              return _0x4d58af + parseFloat(_0x256c2f.amount);
            }, 0);
          const _0x4bef69 = {
            notify: true
          };
          this.log(_0x4da767 + "天内过期立减金: " + _0x4a0ae3.toFixed(2) + "元", _0x4bef69);
          const _0x3d2fd3 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x141718.amount + "元 -- " + _0x141718.date + "过期", _0x3d2fd3);
        } else {
          const _0x461d98 = {
            notify: true
          };
          this.log(_0x4da767 + "天内没有过期的立减金", _0x461d98);
        }
      } else {
        let _0x4b7ed8 = _0x155077?.["data"]?.["returnMsg"] || _0x155077?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x155077?.["data"]?.["returnCode"] || _0x33dd2d) + "]: " + _0x4b7ed8);
      }
    } catch (_0x7887) {
      console.log(_0x7887);
    }
  }
  async epay_28_authCheck(_0x3c9a42 = {}) {
    try {
      let _0xb260a8 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3f528b
        } = await this.request(_0xb260a8),
        _0x1f2fd1 = _0x258020.get(_0x3f528b, "code", -1);
      if (_0x1f2fd1 == "0000") {
        let {
          mobile: _0x2b94f4,
          sessionId: _0x4db5b3,
          tokenId: _0x1d6007,
          userId: _0x5248f4
        } = _0x3f528b?.["data"]?.["authInfo"];
        const _0x7b4561 = {
          sessionId: _0x4db5b3,
          tokenId: _0x1d6007,
          userId: _0x5248f4
        };
        Object.assign(this, _0x7b4561);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x1f2fd1 == "2101000100") {
          let _0x2bc122 = _0x3f528b?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x2bc122);
        } else {
          let _0x1c54d9 = _0x3f528b?.["msgInside"] || _0x3f528b?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x1f2fd1 + "]: " + _0x1c54d9);
        }
      }
    } catch (_0x43af88) {
      console.log(_0x43af88);
    }
  }
  async epay_28_login(_0x3f821b, _0x160c69 = {}) {
    try {
      let _0x556de1 = _0x258020.time("yyyyMM") + "28ZFR";
      _0x3f821b += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x556de1 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      let _0x47612e = {
          fn: "epay_28_login",
          method: "get",
          url: _0x3f821b
        },
        {
          headers: _0x2253bc,
          statusCode: _0x338449
        } = await this.request(_0x47612e);
      if (_0x2253bc?.["location"]) {
        let _0x175871 = new URL(_0x2253bc.location);
        this.rptId = _0x175871.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x338449 + "]");
      }
    } catch (_0x37c69f) {
      console.log(_0x37c69f);
    }
  }
  async epay_28_queryUserPage(_0x19033a = {}) {
    try {
      let _0x3c0673 = _0x258020.time("yyyyMM") + "28ZFR";
      const _0x564c47 = {
        templateName: _0x3c0673
      };
      let _0x38c1d4 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x564c47
        },
        {
          result: _0x29305d
        } = await this.request(_0x38c1d4),
        _0x25923d = _0x258020.get(_0x29305d, "code", -1);
      if (_0x25923d == "0000" && _0x29305d?.["data"]?.["returnCode"] == 0) {
        for (let _0xc4ff4c of _0x29305d?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0xc4ff4c?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0xc4ff4c.rainbowUnitInfos[0]));
          if (_0xc4ff4c?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x3c0673, _0xc4ff4c.mouldName);
            break;
          }
        }
      } else {
        let _0x35bc35 = _0x29305d?.["message"] || _0x29305d?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x25923d + "]: " + _0x35bc35);
      }
    } catch (_0x2f90e9) {
      console.log(_0x2f90e9);
    }
  }
  async epay_28_queryMiddleUnit(_0x1e1eb7, _0x227522, _0x3d67e9 = {}) {
    try {
      const _0x58ece8 = {
        activityId: _0x1e1eb7,
        mouldName: _0x227522
      };
      let _0x149846 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x58ece8
        },
        {
          result: _0x329c9f
        } = await this.request(_0x149846),
        _0x4ab6f3 = _0x258020.get(_0x329c9f, "code", -1);
      if (_0x4ab6f3 == "0000") {
        let _0x839c08 = _0x258020.time("dd");
        _0x329c9f?.["data"]?.[_0x839c08] == "1" ? this.log("联通支付日今日(" + _0x839c08 + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x1e1eb7, _0x227522);
      } else {
        let _0x24b11c = _0x329c9f?.["message"] || _0x329c9f?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x4ab6f3 + "]: " + _0x24b11c);
      }
    } catch (_0x5e21bf) {
      console.log(_0x5e21bf);
    }
  }
  async epay_28_unifyDrawNew(_0x494ed3, _0x42e20a, _0x535986 = {}) {
    try {
      const _0x3a38ba = {
        bizFrom: _0x5c66aa,
        activityId: _0x494ed3,
        mouldName: _0x42e20a
      };
      let _0x1013c2 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3a38ba
        },
        {
          result: _0x341850
        } = await this.request(_0x1013c2),
        _0x5be1fd = _0x258020.get(_0x341850, "code", -1);
      if (_0x5be1fd == "0000" && _0x341850?.["data"]?.["returnCode"] == 0) {
        let _0x4b4017 = _0x341850?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x341850?.["data"]?.["amount"]);
        const _0x4bfe16 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x4b4017, _0x4bfe16);
      } else {
        let _0x16db99 = _0x341850?.["data"]?.["returnMsg"] || _0x341850?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x341850?.["data"]?.["returnCode"] || _0x5be1fd) + "]: " + _0x16db99);
      }
    } catch (_0x148612) {
      console.log(_0x148612);
    }
  }
  async epay_28_unifyDraw(_0x47c66f, _0x1a007a = {}) {
    try {
      const _0xda9977 = {
        activityId: _0x47c66f.unitActivityId,
        isBigActivity: _0x47c66f.isBigActivity,
        bigActivityId: _0x47c66f.bigActivityId,
        bizFrom: _0x5c66aa
      };
      let _0x3837a5 = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0xda9977
        },
        {
          result: _0x20eeba
        } = await this.request(_0x3837a5),
        _0x1f2a7c = _0x258020.get(_0x20eeba, "code", -1);
      if (_0x1f2a7c == "0000" && _0x20eeba?.["data"]?.["returnCode"] == 0) {
        const _0x2ef785 = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x20eeba?.["data"]?.["prizeName"] || ""), _0x2ef785);
      } else {
        let _0x1f6f7f = _0x20eeba?.["data"]?.["returnMsg"] || _0x20eeba?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x20eeba?.["data"]?.["returnCode"] || _0x1f2a7c) + "]: " + _0x1f6f7f);
      }
    } catch (_0x2fd7b3) {
      console.log(_0x2fd7b3);
    }
  }
  async appMonth_28_bind(_0x5d753b, _0x2a5993 = {}) {
    try {
      const _0x19242a = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: {},
        valid_code: [401]
      };
      _0x19242a.form.shareCode = _0x5d753b;
      _0x19242a.form.cl = "WeChat";
      let _0x14f355 = _0x19242a,
        {
          result: _0x36220a
        } = await this.request(_0x14f355);
    } catch (_0x138f23) {
      console.log(_0x138f23);
    }
  }
  async appMonth_28_queryChance(_0x57c6b1 = {}) {
    try {
      let _0x31ca60 = {
          fn: "appMonth_28_queryChance",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
        },
        {
          result: _0x1d0ead
        } = await this.request(_0x31ca60),
        _0x15fe3f = _0x258020.get(_0x1d0ead, "status", -1);
      if (_0x15fe3f == "0000") {
        let {
          allRemainTimes: _0x2be0b6,
          isUnicom: _0xbfac5f
        } = _0x1d0ead?.["data"];
        if (_0xbfac5f) {
          let _0x58a103 = Math.min(_0x2153e9, _0x2be0b6);
          this.log("联通支付日可以开宝箱" + _0x2be0b6 + "次, 去抽" + _0x58a103 + "次");
          while (_0x58a103-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x187df3 = _0x1d0ead?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x15fe3f + "]: " + _0x187df3);
      }
    } catch (_0x14bb25) {
      console.log(_0x14bb25);
    }
  }
  async appMonth_28_lottery(_0x3c5437 = {}) {
    try {
      let _0x1a960d = {
          fn: "appMonth_28_lottery",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
        },
        {
          result: _0x2f7688
        } = await this.request(_0x1a960d),
        _0x57b700 = _0x258020.get(_0x2f7688, "status", -1);
      if (_0x57b700 == "0000") {
        let {
          code: _0x568166,
          uuid: _0x3977b9
        } = _0x2f7688?.["data"];
        _0x3977b9 ? await this.appMonth_28_winningRecord(_0x3977b9) : this.log("联通支付日开宝箱失败[" + _0x568166 + "]");
      } else {
        let _0x2c66e0 = _0x2f7688?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x57b700 + "]: " + _0x2c66e0);
      }
    } catch (_0x5bf85a) {
      console.log(_0x5bf85a);
    }
  }
  async appMonth_28_winningRecord(_0x32b8eb, _0x34b05f = {}) {
    try {
      const _0x14e72f = {
        requestId: _0x32b8eb
      };
      let _0x3f13c7 = {
          fn: "appMonth_28_winningRecord",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
          form: _0x14e72f
        },
        {
          result: _0x193540
        } = await this.request(_0x3f13c7),
        _0x15f84f = _0x258020.get(_0x193540, "status", -1);
      if (_0x15f84f == "0000") {
        let {
          code: _0x2ac3fe,
          prizeName: _0x5693d4
        } = _0x193540?.["data"];
        if (_0x2ac3fe == "0000") {
          const _0x470e1f = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x5693d4, _0x470e1f);
        } else {
          let _0x4481fa = _0x193540?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x2ac3fe + "]: " + _0x4481fa);
        }
      } else {
        let _0x3fbc75 = _0x193540?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x15f84f + "]: " + _0x3fbc75);
      }
    } catch (_0x433b87) {
      console.log(_0x433b87);
    }
  }
  async sign_getContinuous(_0x5b3c00 = {}) {
    try {
      const _0x4754c1 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: {}
      };
      _0x4754c1.form.taskId = "";
      _0x4754c1.form.channel = "shouye";
      _0x4754c1.form.imei = "";
      let _0x46985f = _0x4754c1,
        {
          result: _0x48227d
        } = await this.request(_0x46985f),
        _0x8cd6c8 = _0x258020.get(_0x48227d, "status", -1);
      if (_0x8cd6c8 == "0000") {
        let _0x5600b6 = _0x48227d?.["data"]?.["todaySigned"] || 0;
        const _0x367d46 = {
          notify: true
        };
        this.log("签到区今天" + (_0x5600b6 == "1" ? "未" : "已") + "签到", _0x367d46);
        _0x5600b6 == "1" && (await _0x258020.wait(1000), await this.sign_daySign());
      } else {
        let _0x4e8ad2 = _0x48227d?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x8cd6c8 + "]: " + _0x4e8ad2);
      }
    } catch (_0x2ba2a2) {
      console.log(_0x2ba2a2);
    }
  }
  async sign_daySign(_0x60b6c1 = {}) {
    try {
      const _0xfb09e = {
        shareCl: "",
        shareCode: ""
      };
      let _0x56b1ad = {
          fn: "sign_daySign",
          method: "post",
          url: "https://act.10010.com/SigninApp/signin/daySign",
          form: _0xfb09e
        },
        {
          result: _0x4a4da9
        } = await this.request(_0x56b1ad),
        _0x44d519 = _0x258020.get(_0x4a4da9, "status", -1);
      if (_0x44d519 == "0000") {
        let {
          prizeName: _0x306cf7,
          redSignMessage: _0x25f0b5
        } = _0x4a4da9?.["data"];
        const _0x219fb6 = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x306cf7 + "]" + _0x25f0b5, _0x219fb6);
      } else {
        let _0x3232fe = _0x4a4da9?.["msg"] || "";
        this.log("签到区签到失败[" + _0x44d519 + "]: " + _0x3232fe);
      }
    } catch (_0x72653b) {
      console.log(_0x72653b);
    }
  }
  async sign_queryBubbleTask(_0x1892a8 = {}) {
    try {
      let _0x121714 = {
          fn: "sign_queryBubbleTask",
          method: "post",
          url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
        },
        {
          result: _0x1fc655
        } = await this.request(_0x121714),
        _0x413f53 = _0x258020.get(_0x1fc655, "status", -1);
      if (_0x413f53 == "0000") {
        for (let _0x1d546e of _0x1fc655?.["data"]?.["paramsList"]?.["filter"](_0x493d1b => _0x493d1b.taskState == 1)) {
          let _0x2032bd = await this.gettaskip();
          await this.sign_doTask(_0x1d546e, _0x2032bd);
        }
      } else {
        let _0x411066 = _0x1fc655?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x413f53 + "]: " + _0x411066);
      }
    } catch (_0x456a16) {
      console.log(_0x456a16);
    }
  }
  async sign_doTask(_0xd2f882, _0x172933, _0x1d673e = {}) {
    try {
      const _0x113cc8 = {
        id: _0xd2f882.id,
        orderId: _0x172933,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0xd2f882.rewardType,
        positionFlag: 0
      };
      let _0x266805 = {
          fn: "sign_doTask",
          method: "post",
          url: "https://act.10010.com/SigninApp/task/doTask",
          form: _0x113cc8
        },
        {
          result: _0x75f525
        } = await this.request(_0x266805),
        _0x53f8a8 = _0x258020.get(_0x75f525, "status", -1);
      if (_0x53f8a8 == "0000") {
        this.log("完成任务[" + _0xd2f882.actName + "]获得: " + _0x75f525?.["data"]?.["prizeCount"] + _0x75f525?.["data"]?.["prizeName"]);
      } else {
        let _0x5669a5 = _0x75f525?.["msg"] || "";
        this.log("完成任务[" + _0xd2f882.actName + "]失败[" + _0x53f8a8 + "]: " + _0x5669a5);
      }
    } catch (_0x150f97) {
      console.log(_0x150f97);
    }
  }
  async game_login(_0xaefa5f, _0xb9e1ba = {}) {
    try {
      const _0xb5bb19 = {
        channelid: "GAMELTAPP_90005"
      };
      const _0x388299 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: _0xb5bb19,
        json: {}
      };
      _0x388299.json.identityType = "esToken";
      _0x388299.json.code = this.ecs_token;
      _0x388299.json.ticket = _0xaefa5f;
      _0x388299.json.uuid = _0x1232b7;
      let _0x174804 = _0x388299,
        {
          result: _0x3b5144
        } = await this.request(_0x174804),
        _0x397687 = _0x258020.get(_0x3b5144, "code", -1);
      if (_0x397687 == 200) {
        this.game_token = _0x3b5144?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x485af4 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x485af4);
      } else {
        let _0xaeb2e2 = _0x3b5144?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x397687 + "]: " + _0xaeb2e2);
      }
    } catch (_0x140129) {
      console.log(_0x140129);
    }
  }
  async game_getMemberInfo(_0x3860d0 = {}) {
    try {
      let _0x10a080 = {
          fn: "game_getMemberInfo",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
        },
        {
          result: _0xe58710
        } = await this.request(_0x10a080),
        _0x26abb0 = _0x258020.get(_0xe58710, "code", -1);
      if (_0x26abb0 == 200) {
        this.point = _0xe58710?.["data"]?.["userIntegral"];
      } else {
        let _0x1b08fa = _0xe58710?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x26abb0 + "]: " + _0x1b08fa);
      }
    } catch (_0x45ca9e) {
      console.log(_0x45ca9e);
    }
  }
  async game_signRecord(_0x27e331 = {}) {
    try {
      let _0x15ca04 = {
          fn: "game_signRecord",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/signRecord"
        },
        {
          result: _0x4d422e
        } = await this.request(_0x15ca04),
        _0x1906c3 = _0x258020.get(_0x4d422e, "code", -1);
      if (_0x1906c3 == 200) {
        for (let _0x233232 of _0x4d422e?.["data"]) {
          if (_0x233232.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x233232.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x233232.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x455b38 = _0x4d422e?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x1906c3 + "]: " + _0x455b38);
      }
    } catch (_0x5d55d6) {
      console.log(_0x5d55d6);
    }
  }
  async game_signIn(_0x2d961c = {}) {
    try {
      let _0x3d584f = {
          fn: "game_signIn",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/signIn"
        },
        {
          result: _0x58d2f4
        } = await this.request(_0x3d584f),
        _0x59e840 = _0x258020.get(_0x58d2f4, "code", -1);
      if (_0x59e840 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x278f5f = _0x58d2f4?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x59e840 + "]: " + _0x278f5f);
      }
    } catch (_0x476b22) {
      console.log(_0x476b22);
    }
  }
  async game_checkSlider(_0x4b4d9d = {}) {
    let _0x11c07f = false;
    try {
      const _0x23bd5f = {
        xPos: 234
      };
      let _0x12c8d4 = {
          fn: "game_checkSlider",
          method: "post",
          url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
          searchParams: _0x23bd5f
        },
        {
          result: _0x39c509
        } = await this.request(_0x12c8d4),
        _0x4c480c = _0x258020.get(_0x39c509, "code", -1);
      if (_0x4c480c == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x3095da = _0x39c509?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x4c480c + "]: " + _0x3095da);
      }
    } catch (_0x475d60) {
      console.log(_0x475d60);
    } finally {
      return _0x11c07f;
    }
  }
  async game_lottery(_0x1a251e = {}) {
    try {
      let _0x586181 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x258020.get(_0x1a251e, "id", 1)
          }
        },
        {
          result: _0x108419
        } = await this.request(_0x586181),
        _0x310bab = _0x258020.get(_0x108419, "code", -1);
      if (_0x310bab == 200) {
        const _0x3c2e98 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x108419?.["data"]?.["productName"], _0x3c2e98);
      } else {
        let _0x106add = _0x108419?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x310bab + "]: " + _0x106add);
      }
    } catch (_0x431472) {
      console.log(_0x431472);
    }
  }
  async game_taskList(_0x4d5582 = {}) {
    try {
      let _0x1e161b = {
          fn: "game_taskList",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/task/list"
        },
        {
          result: _0x52ee3c
        } = await this.request(_0x1e161b),
        _0x37fba6 = _0x258020.get(_0x52ee3c, "code", -1);
      if (_0x37fba6 == 200) {
        for (let _0x139a6c of _0x52ee3c?.["data"]) {
          switch (_0x139a6c.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x139a6c);
              break;
            case 2:
              break;
            default:
              _0x258020.log("任务[" + _0x139a6c.taskName + "]未知状态[" + _0x139a6c.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x42d5e4 = _0x52ee3c?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x37fba6 + "]: " + _0x42d5e4);
      }
    } catch (_0x1eadd2) {
      console.log(_0x1eadd2);
    }
  }
  async game_taskReceive(_0x290195, _0x4c0894 = {}) {
    try {
      const _0x1249af = {
        productId: _0x290195.productId,
        taskId: _0x290195.id
      };
      let _0x42698c = {
          fn: "game_taskReceive",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/task/receive",
          searchParams: _0x1249af
        },
        {
          result: _0x2cfcc4
        } = await this.request(_0x42698c),
        _0x540a16 = _0x258020.get(_0x2cfcc4, "code", -1);
      if (_0x540a16 == 200) {
        this.log("领取任务[" + _0x290195.taskName + "]奖励成功");
      } else {
        let _0x40ce72 = _0x2cfcc4?.["msg"] || "";
        this.log("领取任务[" + _0x290195.taskName + "]奖励失败[" + _0x540a16 + "]: " + _0x40ce72);
      }
    } catch (_0x4948ef) {
      console.log(_0x4948ef);
    }
  }
  async game_playSave(_0x4c1d88 = {}) {
    try {
      let _0x2e3def = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x258020.randomString(2, "0123456789")
          }
        },
        {
          result: _0x495199
        } = await this.request(_0x2e3def),
        _0x5a4ddb = _0x258020.get(_0x495199, "code", -1);
      if (!(_0x5a4ddb == 200)) {
        let _0x5a1817 = _0x495199?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x5a4ddb + "]: " + _0x5a1817);
      }
    } catch (_0x5d89f6) {
      console.log(_0x5d89f6);
    }
  }
  async flmf_login(_0x3160f2, _0x196a82 = {}) {
    try {
      let _0x391c6f = {
          fn: "flmf_login",
          method: "get",
          url: _0x3160f2
        },
        {
          headers: _0x382eab,
          statusCode: _0x5c700f
        } = await this.request(_0x391c6f);
      if (_0x382eab?.["location"]) {
        let _0xd7b48c = new URL(_0x382eab.location);
        this.flmf_sid = _0xd7b48c.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x5c700f + "]");
      }
    } catch (_0x2140de) {
      console.log(_0x2140de);
    }
  }
  async flmf_signInInit(_0x3137d3 = {}) {
    try {
      let _0x21eb80 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x24d844
        } = await this.request(_0x21eb80),
        _0x2bdd5e = _0x258020.get(_0x24d844, "resultCode", -1);
      if (_0x2bdd5e == "0000") {
        this.log("福利魔方今天" + (_0x24d844?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x24d844?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x24d844?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0xd8f6e3 = _0x24d844?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x2bdd5e + "]: " + _0xd8f6e3);
      }
    } catch (_0x246482) {
      console.log(_0x246482);
    }
  }
  async flmf_signIn(_0x4cc205 = {}) {
    try {
      let _0x2dc21b = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x259801
        } = await this.request(_0x2dc21b),
        _0xf9751a = _0x258020.get(_0x259801, "resultCode", -1);
      if (_0xf9751a == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x366c38 = _0x259801?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0xf9751a + "]: " + _0x366c38);
      }
    } catch (_0x11479e) {
      console.log(_0x11479e);
    }
  }
  async flmf_taskList(_0x16461f = {}) {
    try {
      let _0x3d0316 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x29016b
        } = await this.request(_0x3d0316),
        _0x15e146 = _0x258020.get(_0x29016b, "resultCode", -1);
      if (_0x15e146 == "0000") {
        for (let _0xa67153 of _0x29016b?.["data"]?.["taskInfoList"]) {
          for (let _0x38928a of _0xa67153.taskInfoList.filter(_0x4ca376 => !_0x4ca376.done)) {
            for (let _0x88f3a4 = _0x38928a.hascount; _0x88f3a4 < _0x38928a.count; _0x88f3a4++) {
              await this.flmf_gogLance(_0x38928a.id);
            }
          }
        }
      } else {
        let _0xf956a5 = _0x29016b?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x15e146 + "]: " + _0xf956a5);
      }
    } catch (_0x11d150) {
      console.log(_0x11d150);
    }
  }
  async flmf_scanTask() {
    for (let _0x51ae4b of _0x2ad9d4) {
      await this.flmf_gogLance(_0x51ae4b);
    }
  }
  async flmf_gogLance(_0x52755f, _0x368957 = {}) {
    try {
      let _0x223343 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x52755f,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x80a3d2
        } = await this.request(_0x223343);
      await _0x258020.wait_gap_interval(this.t_flmf_task, _0x111a99);
      let _0x1bae81 = _0x258020.get(_0x80a3d2, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x1bae81 == "0000") {
        this.log("完成任务[" + _0x52755f + "]成功");
      } else {
        let _0x51fa36 = _0x80a3d2?.["resultMsg"] || "";
        this.log("完成任务[" + _0x52755f + "]失败[" + _0x1bae81 + "]: " + _0x51fa36);
      }
    } catch (_0x1a56dc) {
      console.log(_0x1a56dc);
    }
  }
  async woread_api(_0x102672) {
    let _0x392730 = await this.request(_0x258020.copy(_0x102672)),
      _0x25faa9 = _0x392730?.["result"]?.["message"] || "";
    _0x25faa9?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x392730 = await this.request(_0x258020.copy(_0x102672)));
    return _0x392730;
  }
  async woread_auth(_0x4e40cd = {}) {
    let _0x5935e4 = false;
    try {
      let _0x3fc433 = _0x258020.time("yyyyMMddhhmmss");
      const _0xee4e2c = {
        timestamp: _0x3fc433
      };
      let _0x1415b5 = this.encode_woread(_0xee4e2c),
        _0x49ac6e = Date.now().toString(),
        _0x58b7dc = _0x31c2ca.MD5(_0x2a7919 + _0x31b05d + _0x49ac6e).toString();
      const _0x5344e0 = {
        sign: _0x1415b5
      };
      let _0x568c0c = {
          fn: "woread_auth",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x2a7919 + "/" + _0x49ac6e + "/" + _0x58b7dc,
          json: _0x5344e0
        },
        {
          result: _0x251358
        } = await this.request(_0x568c0c),
        _0x25adaf = _0x258020.get(_0x251358, "code", -1);
      if (_0x25adaf == "0000") {
        _0x5935e4 = true;
        this.woread_accesstoken = _0x251358?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x252cb6 = _0x251358?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x25adaf + "]: " + _0x252cb6);
      }
    } catch (_0x8c30c8) {
      console.log(_0x8c30c8);
    } finally {
      return _0x5935e4;
    }
  }
  async woread_login(_0x29f378 = {}) {
    let _0x4ad1cb = false;
    try {
      let _0x517946 = {
          phone: this.mobile,
          timestamp: _0x258020.time("yyyyMMddhhmmss")
        },
        _0x12b0e7 = this.encode_woread(_0x517946);
      const _0xa9ec04 = {
        sign: _0x12b0e7
      };
      let _0x1575a9 = {
          fn: "woread_login",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
          json: _0xa9ec04
        },
        {
          result: _0x39b7e5
        } = await this.request(_0x1575a9),
        _0x9a8d7f = _0x258020.get(_0x39b7e5, "code", -1);
      if (_0x9a8d7f == "0000") {
        _0x4ad1cb = true;
        let {
          userid: _0x3bec2e,
          userindex: _0x531a81,
          token: _0x35cc4f,
          verifycode: _0x27b816
        } = _0x39b7e5?.["data"];
        this.woread_token = _0x35cc4f;
        this.woread_verifycode = _0x27b816;
        const _0x510e7a = {
          woread_userid: _0x3bec2e,
          woread_userindex: _0x531a81,
          woread_token: _0x35cc4f,
          woread_verifycode: _0x27b816
        };
        Object.assign(this, _0x510e7a);
      } else {
        let _0x5bd6a8 = _0x39b7e5?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x9a8d7f + "]: " + _0x5bd6a8);
      }
    } catch (_0x31185e) {
      console.log(_0x31185e);
    } finally {
      return _0x4ad1cb;
    }
  }
  async woread_getSeeVideoAddNumber(_0x4aafbc, _0x28c390 = {}) {
    try {
      let _0x2e0d95 = {
          activityIndex: _0x4aafbc,
          ...this.get_woread_param()
        },
        _0x1bdab8 = this.encode_woread(_0x2e0d95);
      const _0x3f3029 = {
        sign: _0x1bdab8
      };
      let _0x36b52a = {
          fn: "woread_getSeeVideoAddNumber",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
          json: _0x3f3029
        },
        {
          result: _0x406c28
        } = await this.woread_api(_0x36b52a),
        _0x4021dc = _0x258020.get(_0x406c28, "code", -1);
      if (_0x4021dc == "0000") {
        _0x406c28?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x4aafbc));
      } else {
        let _0x38928b = _0x406c28?.["message"] || "";
        this.log("阅读活动[" + _0x4aafbc + "]查询抽奖视频失败[" + _0x4021dc + "]: " + _0x38928b);
      }
    } catch (_0x597e67) {
      console.log(_0x597e67);
    }
  }
  async woread_addUserSeeVideo(_0x2bbe37, _0x5734d4 = {}) {
    try {
      let _0x255a64 = _0x5734d4.num || 5,
        _0x516f88 = {
          activityIndex: _0x2bbe37,
          num: _0x255a64,
          ...this.get_woread_param()
        },
        _0x43096d = this.encode_woread(_0x516f88);
      const _0x5da85b = {
        sign: _0x43096d
      };
      let _0x579d59 = {
          fn: "woread_addUserSeeVideo",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
          json: _0x5da85b
        },
        {
          result: _0x4d8d55
        } = await this.woread_api(_0x579d59),
        _0x3a2135 = _0x258020.get(_0x4d8d55, "code", -1);
      if (_0x3a2135 == "0000") {
        this.log("阅读活动[" + _0x2bbe37 + "]看视频增加抽奖次数成功");
      } else {
        let _0x503669 = _0x4d8d55?.["message"] || "";
        this.log("阅读活动[" + _0x2bbe37 + "]看视频增加抽奖次数失败[" + _0x3a2135 + "]: " + _0x503669);
      }
    } catch (_0x2d7c17) {
      console.log(_0x2d7c17);
    }
  }
  async woread_getActivityNumber(_0x5379e3, _0x35f758 = {}) {
    try {
      let _0x110086 = {
          activeIndex: _0x5379e3,
          ...this.get_woread_param()
        },
        _0x393292 = this.encode_woread(_0x110086);
      const _0x56b7e7 = {
        sign: _0x393292
      };
      let _0x33a49c = {
          fn: "woread_getActivityNumber",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
          json: _0x56b7e7
        },
        {
          result: _0xbe44aa
        } = await this.woread_api(_0x33a49c),
        _0x580838 = _0x258020.get(_0xbe44aa, "code", -1);
      if (_0x580838 == "0000") {
        let _0x53f194 = _0xbe44aa?.["data"] || 0;
        this.log("阅读活动[" + _0x5379e3 + "]可以抽奖" + _0x53f194 + "次");
        while (_0x53f194-- > 0) {
          await _0x258020.wait(5000);
          await this.woread_doDraw(_0x5379e3);
        }
      } else {
        let _0x3cc7d8 = _0xbe44aa?.["message"] || "";
        this.log("阅读活动[" + _0x5379e3 + "]查询抽奖次数失败[" + _0x580838 + "]: " + _0x3cc7d8);
      }
    } catch (_0x89443) {
      console.log(_0x89443);
    }
  }
  async woread_addDrawTimes(_0x3bf80c, _0xed0de4 = {}) {
    try {
      let _0x172bd6 = {
          activetyindex: _0x3bf80c,
          ...this.get_woread_param()
        },
        _0x5a83f9 = this.encode_woread(_0x172bd6);
      const _0x27c2db = {
        sign: _0x5a83f9
      };
      let _0x34b807 = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x27c2db
      };
      await _0x258020.wait_gap_interval(this.t_woread_draw, _0x597a76);
      let {
        result: _0x447e66
      } = await this.woread_api(_0x34b807);
      this.t_woread_draw = Date.now();
      let _0x9ea47 = _0x258020.get(_0x447e66, "code", -1);
      if (_0x9ea47 == "0000") {
        this.log("阅读活动[" + _0x3bf80c + "]打卡增加抽奖次数成功");
      } else {
        if (_0x9ea47 != "9999") {
          let _0x3e2bb1 = _0x447e66?.["message"] || "";
          this.log("阅读活动[" + _0x3bf80c + "]打卡增加抽奖次数失败[" + _0x9ea47 + "]: " + _0x3e2bb1);
        }
      }
    } catch (_0x297b2a) {
      console.log(_0x297b2a);
    }
  }
  async woread_doDraw(_0x100de4, _0x4b97a2 = {}) {
    try {
      let _0x594f88 = {
          activeindex: _0x100de4,
          ...this.get_woread_param()
        },
        _0x3966fc = this.encode_woread(_0x594f88);
      const _0x33659f = {
        sign: _0x3966fc
      };
      let _0x4e5486 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x33659f
      };
      await _0x258020.wait_gap_interval(this.t_woread_draw, _0x597a76);
      let {
        result: _0x3fc9a5
      } = await this.woread_api(_0x4e5486);
      this.t_woread_draw = Date.now();
      let _0xd20d57 = _0x258020.get(_0x3fc9a5, "code", -1);
      if (_0xd20d57 == "0000") {
        const _0x173937 = {
          notify: true
        };
        this.log("阅读活动[" + _0x100de4 + "]抽奖: " + (_0x3fc9a5?.["data"]?.["prizedesc"] || "空气"), _0x173937);
      } else {
        let _0x16e62b = _0x3fc9a5?.["message"] || "";
        this.log("阅读活动[" + _0x100de4 + "]抽奖失败[" + _0xd20d57 + "]: " + _0x16e62b);
      }
    } catch (_0x20b0db) {
      console.log(_0x20b0db);
    }
  }
  async woread_queryTicketAccount(_0x2edd03 = {}) {
    try {
      let _0x47f172 = this.get_woread_param(),
        _0x13677d = this.encode_woread(_0x47f172);
      const _0x46f46c = {
        sign: _0x13677d
      };
      let _0x37d329 = {
          fn: "woread_queryTicketAccount",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
          json: _0x46f46c
        },
        {
          result: _0x32c309
        } = await this.woread_api(_0x37d329),
        _0x556bcf = _0x258020.get(_0x32c309, "code", -1);
      if (_0x556bcf == "0000") {
        let _0x2af6df = (_0x32c309?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x4cf080 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x2af6df, _0x4cf080);
      } else {
        let _0x9cc1a4 = _0x32c309?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x556bcf + "]: " + _0x9cc1a4);
      }
    } catch (_0x3447aa) {
      console.log(_0x3447aa);
    }
  }
  async woread_addReadTime(_0x15b076 = {}) {
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
        } = _0x15b076,
        _0x55d0dd = {
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
        _0xaa69b0 = this.encode_woread(_0x55d0dd);
      const _0x14a0c5 = {
        sign: _0xaa69b0
      };
      let _0x875caf = {
          fn: "woread_addReadTime",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
          json: _0x14a0c5
        },
        {
          result: _0x48907a
        } = await this.request(_0x875caf),
        _0x234ac4 = _0x258020.get(_0x48907a, "code", -1);
      if (_0x234ac4 == "0000") {
        this.log("刷新读小说时间: " + _0x48907a?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x48907a?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x12c398 = _0x48907a?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x234ac4 + "]: " + _0x12c398);
      }
    } catch (_0x5d4cec) {
      console.log(_0x5d4cec);
    }
  }
  async rabblit_queryActivityData(_0xdef08d = {}) {
    try {
      let _0x11673d = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xb5f98d = this.encode_woread(_0x11673d);
      const _0x1c9585 = {
        sign: _0xb5f98d
      };
      let _0x49ae1d = {
          fn: "rabblit_queryActivityData",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
          json: _0x1c9585
        },
        {
          result: _0x29700c
        } = await this.woread_api(_0x49ae1d),
        _0x45d4b6 = _0x258020.get(_0x29700c, "code", -1);
      if (_0x45d4b6 == "0000") {
        let {
          totalcharpternums: _0xc077aa,
          totalreadnums: _0x594e3a,
          status: _0x4cafcb,
          activitystatus: _0x2e5c16
        } = _0x29700c?.["data"];
        if (_0x2e5c16 == 1) {
          this.need_read_rabbit = false;
          const _0x596f77 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x596f77);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x594e3a + "/" + _0xc077aa + "分钟");
        if (_0x4cafcb == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x594e3a >= _0xc077aa) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x29f33a = _0x29700c?.["message"] || "";
        _0x29f33a?.["includes"]("未参加") && !_0xdef08d.join_retry && (await this.rabblit_joinRuning()) ? (_0xdef08d.join_retry = true, await this.rabblit_queryActivityData(_0xdef08d)) : this.log("龟兔赛跑查询状态失败[" + _0x45d4b6 + "]: " + _0x29f33a);
      }
    } catch (_0x529cfb) {
      console.log(_0x529cfb);
    }
  }
  async rabblit_joinRuning(_0xd13749 = {}) {
    let _0x11912b = false;
    try {
      let _0x4ac94b = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4d7385 = this.encode_woread(_0x4ac94b);
      const _0x102f18 = {
        sign: _0x4d7385
      };
      let _0xe04e6e = {
          fn: "rabblit_joinRuning",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
          json: _0x102f18
        },
        {
          result: _0x38c90b
        } = await this.woread_api(_0xe04e6e),
        _0x4aec9c = _0x258020.get(_0x38c90b, "code", -1);
      if (_0x4aec9c == "0000") {
        _0x11912b = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x489451 = _0x38c90b?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x4aec9c + "]: " + _0x489451);
      }
    } catch (_0x5529bc) {
      console.log(_0x5529bc);
    } finally {
      return _0x11912b;
    }
  }
  async rabblit_wakeRabbit(_0x2ecf70 = {}) {
    try {
      let _0x2ae447 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x2402a1 = this.encode_woread(_0x2ae447);
      const _0x196bc5 = {
        sign: _0x2402a1
      };
      let _0x449fcf = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x196bc5
      };
      await _0x258020.wait_gap_interval(this.t_woread_draw, _0x597a76);
      let {
        result: _0x514dce
      } = await this.woread_api(_0x449fcf);
      this.t_woread_draw = Date.now();
      let _0x4e583e = _0x258020.get(_0x514dce, "code", -1);
      if (_0x4e583e == "0000") {
        const _0x5ae7c5 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x514dce?.["data"]?.["prizedesc"] || "空气"), _0x5ae7c5);
      } else {
        let _0x1480bd = _0x514dce?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x4e583e + "]: " + _0x1480bd);
      }
    } catch (_0x23077c) {
      console.log(_0x23077c);
    }
  }
  async rabblit_finishActivity(_0x234c6b = {}) {
    try {
      let _0x40eb8e = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x11b130 = this.encode_woread(_0x40eb8e);
      const _0x4488fc = {
        sign: _0x11b130
      };
      let _0x1e40bc = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x4488fc
      };
      await _0x258020.wait_gap_interval(this.t_woread_draw, _0x597a76);
      let {
        result: _0x53a917
      } = await this.woread_api(_0x1e40bc);
      this.t_woread_draw = Date.now();
      let _0x5e9dbc = _0x258020.get(_0x53a917, "code", -1);
      if (_0x5e9dbc == "0000") {
        this.need_read_rabbit = false;
        const _0x23023c = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x53a917?.["data"]?.["prizedesc"] || "空气"), _0x23023c);
      } else {
        let _0x2e91da = _0x53a917?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x5e9dbc + "]: " + _0x2e91da);
      }
    } catch (_0x2dd235) {
      console.log(_0x2dd235);
    }
  }
  async moonbox_queryActiveInfo(_0x58f61f = {}) {
    try {
      let _0x4aef9c = this.get_woread_param(),
        _0xc9dc95 = this.encode_woread(_0x4aef9c);
      const _0x19dc57 = {
        sign: _0xc9dc95
      };
      let _0x2b24c4 = {
          fn: "moonbox_queryActiveInfo",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
          json: _0x19dc57
        },
        {
          result: _0x4db7cf
        } = await this.woread_api(_0x2b24c4),
        _0x13763e = _0x258020.get(_0x4db7cf, "code", -1);
      if (_0x13763e == "0000") {
        let {
          activeId: _0x5b95fa,
          activeName: _0x29792b
        } = _0x4db7cf?.["data"];
        _0x51535b = _0x5b95fa;
      } else {
        let _0x2ca2cf = _0x4db7cf?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x13763e + "]: " + _0x2ca2cf);
      }
    } catch (_0x42f6d3) {
      console.log(_0x42f6d3);
    }
  }
  async moonbox_queryCurTaskStatus(_0x56c5bf = {}) {
    try {
      let _0xa0cdc2 = {
          activeIndex: _0x51535b,
          ...this.get_woread_param()
        },
        _0x59b13f = this.encode_woread(_0xa0cdc2);
      const _0x178981 = {
        sign: _0x59b13f
      };
      let _0x23d9b2 = {
          fn: "moonbox_queryCurTaskStatus",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
          json: _0x178981
        },
        {
          result: _0x3e0d69
        } = await this.woread_api(_0x23d9b2),
        _0x104f82 = _0x258020.get(_0x3e0d69, "code", -1);
      if (_0x104f82 == "0000") {
        for (let _0x36e128 of _0x3e0d69?.["data"] || []) {
          let {
            taskName: _0x74e009,
            currentValue: _0x5c90fc,
            taskValue: _0x14c53d
          } = _0x36e128?.["taskDetail"];
          switch (_0x36e128.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x74e009] = true;
                this.log("阅光宝盒[" + _0x74e009 + "]进度: " + parseInt(_0x5c90fc) + "/" + _0x14c53d + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x36e128);
              }
            case 1:
              {
                this.moonbox_task_record[_0x74e009] = false;
                if (!this.moonbox_notified.includes(_0x74e009)) {
                  this.moonbox_notified.push(_0x74e009);
                  const _0x4251fd = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x74e009 + "]已完成", _0x4251fd);
                }
                break;
              }
          }
        }
      } else {
        let _0x5ee09c = _0x3e0d69?.["message"] || "";
        _0x5ee09c?.["includes"]("未领取") && !_0x56c5bf.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x56c5bf.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x56c5bf)) : this.log("阅光宝盒查询任务状态失败[" + _0x104f82 + "]: " + _0x5ee09c);
      }
    } catch (_0x37a19c) {
      console.log(_0x37a19c);
    }
  }
  async moonbox_completeActiveTask(_0x3547e9, _0x2b518c = {}) {
    try {
      let _0x512d4a = {
          taskId: _0x3547e9.id,
          ...this.get_woread_param()
        },
        _0x2c5a80 = this.encode_woread(_0x512d4a);
      const _0x47dd8a = {
        sign: _0x2c5a80
      };
      let _0x452bbe = {
          fn: "moonbox_completeActiveTask",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
          json: _0x47dd8a
        },
        {
          result: _0x288e87
        } = await this.woread_api(_0x452bbe),
        _0x420a3d = _0x258020.get(_0x288e87, "code", -1);
      if (_0x420a3d == "0000") {
        const _0xe92bd7 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x288e87?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x288e87?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0xe92bd7);
      } else {
        let _0x2a4e05 = _0x288e87?.["message"] || "";
        this.log("阅光宝盒[" + _0x3547e9?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x420a3d + "]: " + _0x2a4e05);
      }
    } catch (_0x317ca7) {
      console.log(_0x317ca7);
    }
  }
  async moonbox_queryActiveTaskList(_0x433b16 = {}) {
    try {
      let _0x519ebd = {
          activeIndex: _0x51535b,
          ...this.get_woread_param()
        },
        _0x3a3acd = this.encode_woread(_0x519ebd);
      const _0x3ff903 = {
        sign: _0x3a3acd
      };
      let _0x44c64d = {
          fn: "moonbox_queryActiveTaskList",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
          json: _0x3ff903
        },
        {
          result: _0x3f64d6
        } = await this.woread_api(_0x44c64d),
        _0x5c022d = _0x258020.get(_0x3f64d6, "code", -1);
      if (_0x5c022d == "0000") {
        let _0x355f5b = _0x3f64d6?.["data"]?.["sort"](function (_0x25024f, _0x5b075e) {
            let _0x3fc304 = parseInt(_0x5b075e.taskDetail.taskValue),
              _0x303cdc = parseInt(_0x25024f.taskDetail.taskValue);
            return _0x3fc304 - _0x303cdc;
          }),
          _0x606c98 = _0x355f5b.filter(_0x11471c => _0x11471c.maxNum - _0x11471c.receiveNum > 0 && _0x11471c.taskDetail.materialGroup.groupName.includes("红包"));
        _0x606c98?.["length"] ? await this.moonbox_receiveActiveTask(_0x606c98) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x3115b9 = _0x3f64d6?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x5c022d + "]: " + _0x3115b9);
      }
    } catch (_0x4d1481) {
      console.log(_0x4d1481);
    }
  }
  async moonbox_receiveActiveTask(_0x51b011, _0x426fba = 0, _0x2a0a5b = {}) {
    try {
      let _0x429966 = _0x51b011?.[_0x426fba]?.["taskDetail"]?.["taskName"] || "",
        _0x33411f = {
          activeId: _0x51535b,
          taskId: _0x51b011[_0x426fba].secondTaskId,
          ...this.get_woread_param()
        },
        _0x4d45ac = this.encode_woread(_0x33411f);
      const _0x2a329b = {
        sign: _0x4d45ac
      };
      let _0x462d9b = {
          fn: "moonbox_queryActiveTaskList",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
          json: _0x2a329b
        },
        {
          result: _0x3c2301
        } = await this.woread_api(_0x462d9b),
        _0x7f4ed4 = _0x258020.get(_0x3c2301, "code", -1);
      if (_0x7f4ed4 == "0000") {
        this.moonbox_task_record[_0x429966] = true;
        this.log("领取阅光宝盒任务[" + _0x429966 + "]成功");
      } else {
        let _0x494c78 = _0x3c2301?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x429966 + "]失败[" + _0x7f4ed4 + "]: " + _0x494c78);
        _0x494c78?.["includes"]("今天无法完成") && _0x51b011?.["length"] > _0x426fba + 1 && (await this.moonbox_receiveActiveTask(_0x51b011, _0x426fba + 1, _0x2a0a5b));
      }
    } catch (_0x1d5e28) {
      console.log(_0x1d5e28);
    }
  }
  async moonbox_queryReadStatus(_0x3a9528 = {}) {
    try {
      let _0x5460b9 = {
          activeIndex: _0x51535b,
          ...this.get_woread_param()
        },
        _0x41fb5f = this.encode_woread(_0x5460b9);
      const _0x51e88a = {
        sign: _0x41fb5f
      };
      let _0x1b0cb4 = {
          fn: "moonbox_queryReadStatus",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
          json: _0x51e88a
        },
        {
          result: _0xaf939f
        } = await this.woread_api(_0x1b0cb4),
        _0x333b83 = _0x258020.get(_0xaf939f, "code", -1);
      if (_0x333b83 == "0000") {
        switch (_0xaf939f?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x4d7035 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x4d7035);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0xaf939f?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0xa73e49 = _0xaf939f?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x333b83 + "]: " + _0xa73e49);
      }
    } catch (_0x501c8c) {
      console.log(_0x501c8c);
    }
  }
  async moonbox_drawReadActivePrize(_0x5935e2 = {}) {
    try {
      let _0x73f8b = {
          activeIndex: _0x51535b,
          ...this.get_woread_param()
        },
        _0x49e746 = this.encode_woread(_0x73f8b);
      const _0x1e46e9 = {
        sign: _0x49e746
      };
      let _0x19877b = {
          fn: "moonbox_drawReadActivePrize",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
          json: _0x1e46e9
        },
        {
          result: _0x52c0ac
        } = await this.woread_api(_0x19877b),
        _0x26d48d = _0x258020.get(_0x52c0ac, "code", -1);
      if (_0x26d48d == "0000") {
        const _0x41f3a1 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x52c0ac?.["data"]?.["prizedesc"] || JSON.stringify(_0x52c0ac)), _0x41f3a1);
      } else {
        let _0x148d92 = _0x52c0ac?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x26d48d + "]: " + _0x148d92);
      }
    } catch (_0x14c0a0) {
      console.log(_0x14c0a0);
    }
  }
  async ltyp_login(_0x586d98, _0x1446c6 = {}) {
    try {
      const _0x361ff7 = {
        "client-Id": _0x56af9c,
        accessToken: ""
      };
      const _0x5d927a = {
        clientId: _0x56af9c,
        ticket: _0x586d98
      };
      let _0x33ce91 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x361ff7,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x5d927a
          }
        },
        {
          result: _0x40563c
        } = await this.request(_0x33ce91),
        _0x291d86 = _0x258020.get(_0x40563c, "STATUS", -1);
      if (_0x291d86 == 200) {
        this.ltyp_token = _0x40563c?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x573660 of _0x54055c) {
          await this.ltyp_incentiveTimes(_0x573660);
          await this.ltyp_lottery(_0x573660);
        }
      } else {
        let _0x3d7c25 = _0x40563c?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x291d86 + "]: " + _0x3d7c25);
      }
    } catch (_0x46eba4) {
      console.log(_0x46eba4);
    }
  }
  async ltyp_incentiveTimes(_0x4952b2, _0x320a7f = {}) {
    try {
      const _0x1e7fec = {
        "client-Id": _0x56af9c,
        "Access-Token": this.ltyp_token
      };
      const _0x3dfe1c = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x4952b2
      };
      let _0x3d1f77 = {
          fn: "ltyp_incentiveTimes",
          method: "get",
          url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
          headers: _0x1e7fec,
          searchParams: _0x3dfe1c
        },
        {
          result: _0x470513
        } = await this.request(_0x3d1f77),
        _0x5481dc = _0x258020.get(_0x470513?.["meta"], "code", -1);
      if (_0x5481dc == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x470513?.["result"];
        if (isIncentiveTask) {
          for (let _0x462107 = incentiveTimeDone; _0x462107 < incentiveTimeTotal; _0x462107++) {
            await this.ltyp_incentiveTask(_0x4952b2);
          }
        }
      } else {
        let _0x4add72 = _0x470513?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x5481dc + "]: " + _0x4add72);
      }
    } catch (_0x110bd8) {
      console.log(_0x110bd8);
    }
  }
  async ltyp_incentiveTask(_0x4a3279, _0x44ea48 = {}) {
    try {
      const _0x2ac878 = {
        "client-Id": _0x56af9c,
        "Access-Token": this.ltyp_token
      };
      const _0x10e1de = {
        activityId: _0x4a3279
      };
      const _0x562c23 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x2ac878,
        json: {}
      };
      _0x562c23.json.bizKey = "incentiveTaskPipeline";
      _0x562c23.json.bizObject = _0x10e1de;
      let _0xea808b = _0x562c23,
        {
          result: _0x378f05
        } = await this.request(_0xea808b),
        _0x18eb04 = _0x258020.get(_0x378f05?.["meta"], "code", -1);
      if (_0x18eb04 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x378f05?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x571ffd = _0x378f05?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x18eb04 + "]: " + _0x571ffd);
      }
    } catch (_0x272b74) {
      console.log(_0x272b74);
    }
  }
  async ltyp_lottery_times(_0x3cf3e0, _0x3aa2e3 = {}) {
    try {
      const _0x30391f = {
        "client-Id": _0x56af9c,
        token: this.ltyp_token
      };
      const _0x571aa5 = {
        activityId: _0x3cf3e0
      };
      let _0x34eaf8 = {
          fn: "ltyp_lottery_times",
          method: "get",
          url: "https://panservice.mail.wo.cn/activity/v1/times",
          headers: _0x30391f,
          searchParams: _0x571aa5
        },
        {
          result: _0x49b8a8
        } = await this.request(_0x34eaf8),
        _0x4ea499 = _0x258020.get(_0x49b8a8, "RSP_CODE", -1);
      if (_0x4ea499 == 0) {
        let {
          times = 0
        } = _0x49b8a8?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x258020.wait(1000);
          await this.ltyp_lottery(_0x3cf3e0);
        }
      } else {
        let _0x1eda16 = _0x49b8a8?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x4ea499 + "]: " + _0x1eda16);
      }
    } catch (_0x33c2a7) {
      console.log(_0x33c2a7);
    }
  }
  async ltyp_lottery(_0xb0fa5a, _0x3ddabd = {}) {
    try {
      const _0x58144e = {
        "client-Id": _0x56af9c,
        "Access-Token": this.ltyp_token
      };
      const _0x8d192b = {
        activityId: _0xb0fa5a,
        type: 3
      };
      const _0x755b07 = {
        lottery: _0x8d192b
      };
      const _0x2fcae9 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x58144e,
        json: {}
      };
      _0x2fcae9.json.bizKey = "newLottery";
      _0x2fcae9.json.bizObject = _0x755b07;
      let _0x16474b = _0x2fcae9,
        {
          result: _0x2d54e8
        } = await this.request(_0x16474b),
        _0x1d5946 = _0x258020.get(_0x2d54e8?.["meta"], "code", -1);
      if (_0x1d5946 == 0) {
        let {
          prizeName = ""
        } = _0x2d54e8?.["result"];
        if (prizeName) {
          const _0x5ac69f = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x5ac69f);
          await this.ltyp_lottery(_0xb0fa5a, _0x3ddabd);
        }
      } else {
        let _0x459af9 = _0x2d54e8?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x1d5946 + "]: " + _0x459af9);
      }
    } catch (_0x3342b7) {
      console.log(_0x3342b7);
    }
  }
  async act_517_userAccount(_0xf5fa60 = {}) {
    try {
      let _0x57adcc = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x27d414,
            statusCode: _0x134722
          } = await this.request(_0x258020.copy(_0x57adcc)),
          _0x15eda7 = _0x258020.get(_0x27d414, "code", _0x134722);
        if (_0x15eda7 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x3922d5 = _0x27d414?.["message"] || _0x27d414?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x15eda7 + "]: " + _0x3922d5);
          return;
        }
      }
      {
        let {
            result: _0x2fcbd3,
            statusCode: _0x126fdf
          } = await this.request(_0x258020.copy(_0x57adcc)),
          _0x4850be = _0x258020.get(_0x2fcbd3, "code", _0x126fdf);
        if (_0x4850be == "0000") {
          let {
            chances: _0x3de22f
          } = _0x2fcbd3?.["data"];
          this.log("517活动可以抽奖" + _0x3de22f + "次");
          let _0x5f024e = false;
          while (_0x3de22f-- > 0) {
            if (_0x5f024e) {
              await _0x258020.wait(3000);
            }
            _0x5f024e = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x46869c = _0x2fcbd3?.["message"] || _0x2fcbd3?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x4850be + "]: " + _0x46869c);
        }
      }
      {
        let {
            result: _0x3dadf3,
            statusCode: _0x1b4716
          } = await this.request(_0x258020.copy(_0x57adcc)),
          _0x3565df = _0x258020.get(_0x3dadf3, "code", _0x1b4716);
        if (_0x3565df == "0000") {
          let {
            amount: _0x552c4d,
            targetAmount: _0x479454
          } = _0x3dadf3?.["data"];
          this.log("517活动现金进度: " + _0x552c4d + "/" + _0x479454);
        } else {
          let _0xded2f7 = _0x3dadf3?.["message"] || _0x3dadf3?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x3565df + "]: " + _0xded2f7);
        }
      }
    } catch (_0x11566d) {
      console.log(_0x11566d);
    }
  }
  async act_517_bind(_0x34f04b, _0x4edc0a = {}) {
    try {
      const _0xaa6a79 = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0xaa6a79.json.shareCode = _0x34f04b;
      _0xaa6a79.json.channel = "countersign";
      let _0x22642d = _0xaa6a79,
        {
          result: _0x5d2105
        } = await this.request(_0x22642d);
    } catch (_0x27f6a0) {
      console.log(_0x27f6a0);
    }
  }
  async act_517_lottery(_0x45a612 = {}) {
    try {
      let _0x503867 = {
          fn: "act_517_lottery",
          method: "get",
          url: "https://activity.10010.com/2024517charges/lottery/lottery"
        },
        {
          result: _0x168eef,
          statusCode: _0x1c00a0
        } = await this.request(_0x503867),
        _0x36dac0 = _0x258020.get(_0x168eef, "code", _0x1c00a0);
      if (_0x36dac0 == "0000") {
        _0x168eef?.["data"]?.["uuid"] ? (await _0x258020.wait(2000), await this.act_517_winningRecord(_0x168eef.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x23ac0b = _0x168eef?.["message"] || _0x168eef?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0x36dac0 + "]: " + _0x23ac0b);
      }
    } catch (_0x226b07) {
      console.log(_0x226b07);
    }
  }
  async act_517_winningRecord(_0x5973b0, _0x4b6bb3 = {}) {
    try {
      const _0x9e3e10 = {
        requestId: _0x5973b0
      };
      let _0x29ead3 = {
          fn: "act_517_winningRecord",
          method: "get",
          url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
          searchParams: _0x9e3e10
        },
        {
          result: _0x361bc9,
          statusCode: _0x138fef
        } = await this.request(_0x29ead3),
        _0x33992b = _0x258020.get(_0x361bc9, "code", _0x138fef);
      if (_0x33992b == "0000") {
        if (_0x361bc9?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0xef7c31,
              prizeList: _0x58f359,
              afterAmount: _0xa0d6f6,
              targetAmount: _0x266935,
              showAmount = "0"
            } = _0x361bc9?.["data"],
            _0x53c784 = (_0x58f359 || []).filter(_0x3d0b96 => _0x3d0b96.prizeName).map(_0x24ac55 => _0x24ac55.prizeName).join(", ") || "";
          const _0x5dd021 = {
            notify: true
          };
          if (_0x53c784) {
            this.log("517活动抽奖: " + _0x53c784, _0x5dd021);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0xef7c31 + " (" + _0xa0d6f6 + "/" + _0x266935 + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x3a036b = _0x361bc9?.["message"] || _0x361bc9?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x33992b + "]: " + _0x3a036b);
      }
    } catch (_0x179076) {
      console.log(_0x179076);
    }
  }
  async act_517_taskList(_0x827ce0 = {}) {
    try {
      let _0xe63312 = {
          fn: "act_517_taskList",
          method: "get",
          url: "https://activity.10010.com/2024517charges/dotask/taskList"
        },
        {
          result: _0x44a6ec,
          statusCode: _0x274ebe
        } = await this.request(_0xe63312),
        _0x4ab5e7 = _0x258020.get(_0x44a6ec, "code", _0x274ebe);
      if (_0x4ab5e7 == "0000") {
        let _0x3f4f80 = _0x44a6ec?.["data"]?.["taskList"] || [];
        for (let _0x546feb of _0x3f4f80) {
          let {
            completeNum = 0,
            maxNum: _0x137976,
            isComplete: _0x496b4d,
            taskType: _0x4aba04
          } = _0x546feb;
          if (_0x496b4d) {
            continue;
          }
          if (_0x4aba04 == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x137976 = parseInt(_0x137976);
          for (let _0x2e4220 = completeNum; _0x2e4220 < _0x137976; _0x2e4220++) {
            await this.act_517_completeTask(_0x546feb);
          }
        }
      } else {
        let _0x113718 = _0x44a6ec?.["message"] || _0x44a6ec?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x4ab5e7 + "]: " + _0x113718);
      }
    } catch (_0x4ac812) {
      console.log(_0x4ac812);
    }
  }
  async act_517_completeTask(_0x4e2d18, _0x53075f = {}) {
    try {
      let _0x3fc9ae = _0x4e2d18.title;
      const _0x539866 = {
        taskId: _0x4e2d18.taskId
      };
      let _0x5db90c = {
          fn: "act_517_completeTask",
          method: "get",
          url: "https://activity.10010.com/2024517charges/dotask/completeTask",
          searchParams: _0x539866
        },
        {
          result: _0x5b082a,
          statusCode: _0xdb5617
        } = await this.request(_0x5db90c),
        _0x23d1f7 = _0x258020.get(_0x5b082a, "code", _0xdb5617);
      if (_0x23d1f7 == "0000") {
        if (_0x5b082a?.["data"]) {
          let {
            num: _0x16c0f4,
            title: _0x15119b
          } = _0x5b082a.data;
          this.log("完成任务[" + _0x15119b + "]成功: " + _0x16c0f4 + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x3fc9ae + "]失败没有获得抽奖机会");
        }
      } else {
        let _0x6497e8 = _0x5b082a?.["message"] || _0x5b082a?.["msg"] || "";
        this.log("完成任务[" + _0x3fc9ae + "]失败[" + _0x23d1f7 + "]: " + _0x6497e8);
      }
    } catch (_0x47b4db) {
      console.log(_0x47b4db);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x14baee = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x5fe3a2
      } = await this.openPlatLineNew(_0x14baee);
    if (!_0x5fe3a2) {
      return;
    }
    await this.game_login(_0x5fe3a2);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x2ab97e = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x5e158c,
        type: _0x4d3db4,
        loc: _0x42b69a
      } = await this.openPlatLineNew(_0x2ab97e);
    if (!_0x5e158c) {
      return;
    }
    await this.ttlxj_authorize(_0x5e158c, _0x4d3db4, _0x42b69a);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x41204f = new Date().getDate();
    if (_0x41204f >= 26 && _0x41204f <= 28) {
      await this.epay_28_authCheck();
      if (_0x5c84d1.length) {
        let _0x598dc4 = _0x258020.randomList(_0x5c84d1);
        await this.appMonth_28_bind(_0x598dc4);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x5c306d = new Date().getDate();
    _0x5c306d == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x18ed2f = new Date("2024-05-10 00:00:00"),
      _0xc27f2a = new Date("2024-06-09 00:00:00"),
      _0x1009f9 = Date.now();
    if (_0x1009f9 > _0x18ed2f.getTime() && _0x1009f9 < _0xc27f2a.getTime()) {
      if (_0x510833.length) {
        let _0x3e9068 = _0x258020.randomList(_0x510833);
        await this.act_517_bind(_0x3e9068);
      }
      await this.act_517_userAccount();
    }
  }
  async flmf_task() {
    if (this.city.filter(_0x5c4fdd => _0x5c4fdd.proCode == "091").length == 0) {
      return;
    }
    let _0x371791 = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x41ca23
      } = await this.openPlatLineNew(_0x371791);
    if (!_0x41ca23) {
      return;
    }
    await this.flmf_login(_0x41ca23);
  }
  async ltyp_task() {
    let _0x242eef = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x93a8d7
      } = await this.openPlatLineNew(_0x242eef);
    if (!_0x93a8d7) {
      return;
    }
    await this.ltyp_login(_0x93a8d7);
  }
  async woread_draw_task(_0x93c6f1) {
    await this.woread_getSeeVideoAddNumber(_0x93c6f1);
    await this.woread_addDrawTimes(_0x93c6f1);
    await this.woread_getActivityNumber(_0x93c6f1);
  }
  async woread_task() {
    for (let _0x485c34 of _0x503258) {
      await this.woread_draw_task(_0x485c34);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x53ee25 = Object.values(this.moonbox_task_record).filter(_0x580312 => _0x580312 === true).length;
    while (this.need_read_rabbit || _0x53ee25) {
      let _0x40773 = 2;
      const _0x4bfabc = {
        readTime: _0x40773
      };
      await this.woread_addReadTime(_0x4bfabc);
      let _0xd1e999 = Date.now();
      if (_0x53ee25) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x53ee25 = Object.values(this.moonbox_task_record).filter(_0x1ae964 => _0x1ae964 === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x52e99f = Date.now(),
        _0xe58880 = 125000 + _0xd1e999 - _0x52e99f;
      (this.need_read_rabbit || _0x53ee25) && _0xe58880 > 0 && (this.log("等待2分钟..."), await _0x258020.wait(_0xe58880));
    }
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
    if (!_0x51535b) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x258020.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.sign_task();
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x258020.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0x10aaf7())) {
    return;
  }
  await _0x619190();
  _0x258020.read_env(_0x421ede);
  for (let _0x5632e8 of _0x258020.userList) {
    await _0x5632e8.userLoginTask();
  }
  for (let _0x35cd1b of _0x258020.userList.filter(_0x126dfa => _0x126dfa.valid)) {
    await _0x35cd1b.userTask();
  }
  let _0x3e50a7 = _0x258020.userList.filter(_0x243c57 => _0x243c57.valid && _0x243c57.woread_verifycode && (_0x243c57.need_read_rabbit || Object.values(_0x243c57.moonbox_task_record).filter(_0x1cbe46 => _0x1cbe46 === true).length));
  if (_0x3e50a7.length) {
    let _0x3bd7d5 = [];
    _0x258020.log("\n============ 开始刷阅读时长 ============");
    for (let _0x3790fc of _0x3e50a7) {
      _0x3bd7d5.push(_0x3790fc.woread_reading_task());
    }
    await Promise.all(_0x3bd7d5);
  }
})().catch(_0xcf7f09 => _0x258020.log(_0xcf7f09)).finally(() => _0x258020.exitNow());
async function _0x10aaf7(_0x7a73a4 = 0) {
  let _0x24703c = false;
  try {
    let _0x18396f = {
        fn: "auth",
        method: "get",
        url: _0x3768e3,
        timeout: 20000
      },
      {
        statusCode: _0x374df1,
        result: _0x244213
      } = await _0x55a9bf.request(_0x18396f);
    if (_0x374df1 != 200) {
      _0x7a73a4++ < _0x8b1594 && (_0x24703c = await _0x10aaf7(_0x7a73a4));
      return _0x24703c;
    }
    if (_0x244213?.["code"] == 0) {
      _0x244213 = JSON.parse(_0x244213.data.file.data);
      if (_0x244213?.["commonNotify"] && _0x244213.commonNotify.length > 0) {
        const _0x133aca = {
          notify: true
        };
        _0x258020.log(_0x244213.commonNotify.join("\n") + "\n", _0x133aca);
      }
      _0x244213?.["commonMsg"] && _0x244213.commonMsg.length > 0 && _0x258020.log(_0x244213.commonMsg.join("\n") + "\n");
      if (_0x244213[_0x506d8d]) {
        let _0xdec0fc = _0x244213[_0x506d8d];
        _0xdec0fc.status == 0 ? _0x363db7 >= _0xdec0fc.version ? (_0x24703c = true, _0x258020.log(_0xdec0fc.msg[_0xdec0fc.status]), _0x258020.log(_0xdec0fc.updateMsg), _0x258020.log("现在运行的脚本版本是：" + _0x363db7 + "，最新脚本版本：" + _0xdec0fc.latestVersion)) : _0x258020.log(_0xdec0fc.versionMsg) : _0x258020.log(_0xdec0fc.msg[_0xdec0fc.status]);
      } else {
        _0x258020.log(_0x244213.errorMsg);
      }
    } else {
      _0x7a73a4++ < _0x8b1594 && (_0x24703c = await _0x10aaf7(_0x7a73a4));
    }
  } catch (_0x57bfb6) {
    _0x258020.log(_0x57bfb6);
  } finally {
    return _0x24703c;
  }
}
async function _0x619190() {
  let _0x3bcb1e = false;
  try {
    let _0x3cf077 = {
        fn: "getTaskUrl",
        method: "get",
        url: _0x158917
      },
      {
        statusCode: _0x83a9e9,
        result: _0x56bcdb
      } = await _0x55a9bf.request(_0x3cf077);
    if (_0x83a9e9 != 200) {
      return Promise.resolve();
    }
    if (_0x56bcdb?.["code"] == 0) {
      _0x56bcdb = JSON.parse(_0x56bcdb.data.file.data);
      _0x54055c = _0x56bcdb?.["ltyp_lottery"] || _0x54055c;
      _0x503258 = _0x56bcdb?.["woread_draw_id"] || _0x503258;
      _0x5c84d1 = _0x56bcdb?.["appMonth_28_share"] || _0x5c84d1;
      _0x510833 = _0x56bcdb?.["act_517_share"] || _0x510833;
    }
  } catch (_0x445da0) {
    _0x258020.log(_0x445da0);
  } finally {
    return _0x3bcb1e;
  }
}
function _0x15f66e(_0x31756a) {
  return new class {
    constructor(_0x12c3a7) {
      this.name = _0x12c3a7;
      this.startTime = Date.now();
      const _0x6637a5 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x6637a5);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x3b73e4, _0x1e42e8 = {}) {
      let _0x4594f6 = {
        console: true
      };
      Object.assign(_0x4594f6, _0x1e42e8);
      if (_0x4594f6.time) {
        let _0x3b7c98 = _0x4594f6.fmt || "hh:mm:ss";
        _0x3b73e4 = "[" + this.time(_0x3b7c98) + "]" + _0x3b73e4;
      }
      if (_0x4594f6.notify) {
        this.notifyStr.push(_0x3b73e4);
      }
      if (_0x4594f6.console) {
        console.log(_0x3b73e4);
      }
    }
    get(_0x55be24, _0x329ea4, _0x2a3d15 = "") {
      let _0x1e8da0 = _0x2a3d15;
      _0x55be24?.["hasOwnProperty"](_0x329ea4) && (_0x1e8da0 = _0x55be24[_0x329ea4]);
      return _0x1e8da0;
    }
    pop(_0x3cc9be, _0x1d1e2e, _0x140ace = "") {
      let _0x22bd2f = _0x140ace;
      _0x3cc9be?.["hasOwnProperty"](_0x1d1e2e) && (_0x22bd2f = _0x3cc9be[_0x1d1e2e], delete _0x3cc9be[_0x1d1e2e]);
      return _0x22bd2f;
    }
    copy(_0x5504d5) {
      return Object.assign({}, _0x5504d5);
    }
    read_env(_0x41da42) {
      let _0x8bc4eb = _0x5eda0a.map(_0x20b0f9 => process.env[_0x20b0f9]);
      for (let _0x5191fe of _0x8bc4eb.filter(_0x266260 => !!_0x266260)) {
        let _0x297b2c = _0x477bff.filter(_0x31e080 => _0x5191fe.includes(_0x31e080)),
          _0x32e261 = _0x297b2c.length > 0 ? _0x297b2c[0] : _0x477bff[0];
        for (let _0xde62e4 of _0x5191fe.split(_0x32e261).filter(_0x507b77 => !!_0x507b77)) {
          this.userList.push(new _0x41da42(_0xde62e4));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x36cb86 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x5eda0a.map(_0x2ca9c4 => "[" + _0x2ca9c4 + "]").join("或"), _0x36cb86);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x327355, _0x15ff98, _0x352e1d = {}) {
      while (_0x15ff98.idx < _0x258020.userList.length) {
        let _0xcbd6fe = _0x258020.userList[_0x15ff98.idx++];
        if (!_0xcbd6fe.valid) {
          continue;
        }
        await _0xcbd6fe[_0x327355](_0x352e1d);
      }
    }
    async threadTask(_0x8ee547, _0x415780) {
      let _0x5901cb = [];
      let _0x43cf6a = {
        idx: 0
      };
      while (_0x415780--) {
        _0x5901cb.push(this.threads(_0x8ee547, _0x43cf6a));
      }
      await Promise.all(_0x5901cb);
    }
    time(_0x338082, _0x425af0 = null) {
      let _0x958f73 = _0x425af0 ? new Date(_0x425af0) : new Date(),
        _0x562d59 = {
          "M+": _0x958f73.getMonth() + 1,
          "d+": _0x958f73.getDate(),
          "h+": _0x958f73.getHours(),
          "m+": _0x958f73.getMinutes(),
          "s+": _0x958f73.getSeconds(),
          "q+": Math.floor((_0x958f73.getMonth() + 3) / 3),
          S: this.padStr(_0x958f73.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x338082) && (_0x338082 = _0x338082.replace(RegExp.$1, (_0x958f73.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x19abb0 in _0x562d59) new RegExp("(" + _0x19abb0 + ")").test(_0x338082) && (_0x338082 = _0x338082.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x562d59[_0x19abb0] : ("00" + _0x562d59[_0x19abb0]).substr(("" + _0x562d59[_0x19abb0]).length)));
      return _0x338082;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x30e155 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x30e155.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5b8057, _0x582ad5, _0x59f843 = {}) {
      let _0x150198 = _0x59f843.padding || "0",
        _0x123299 = _0x59f843.mode || "l",
        _0x41fec0 = String(_0x5b8057),
        _0x4ecfc7 = _0x582ad5 > _0x41fec0.length ? _0x582ad5 - _0x41fec0.length : 0,
        _0x180563 = "";
      for (let _0x3b8f07 = 0; _0x3b8f07 < _0x4ecfc7; _0x3b8f07++) {
        _0x180563 += _0x150198;
      }
      _0x123299 == "r" ? _0x41fec0 = _0x41fec0 + _0x180563 : _0x41fec0 = _0x180563 + _0x41fec0;
      return _0x41fec0;
    }
    json2str(_0xa53cc3, _0x334a91, _0x316dcb = false) {
      let _0x23f58b = [];
      for (let _0x17e5a5 of Object.keys(_0xa53cc3).sort()) {
        let _0x450f33 = _0xa53cc3[_0x17e5a5];
        if (_0x450f33 && _0x316dcb) {
          _0x450f33 = encodeURIComponent(_0x450f33);
        }
        _0x23f58b.push(_0x17e5a5 + "=" + _0x450f33);
      }
      return _0x23f58b.join(_0x334a91);
    }
    str2json(_0xd1d7bb, _0x551a27 = false) {
      let _0x2dc93d = {};
      for (let _0x46bafe of _0xd1d7bb.split("&")) {
        if (!_0x46bafe) {
          continue;
        }
        let _0xc59fea = _0x46bafe.indexOf("=");
        if (_0xc59fea == -1) {
          continue;
        }
        let _0x5e423b = _0x46bafe.substr(0, _0xc59fea),
          _0x5142ec = _0x46bafe.substr(_0xc59fea + 1);
        if (_0x551a27) {
          _0x5142ec = decodeURIComponent(_0x5142ec);
        }
        _0x2dc93d[_0x5e423b] = _0x5142ec;
      }
      return _0x2dc93d;
    }
    randomPattern(_0x4a22d7, _0x4e74e4 = "abcdef0123456789") {
      let _0x42e0bd = "";
      for (let _0x488253 of _0x4a22d7) {
        if (_0x488253 == "x") {
          _0x42e0bd += _0x4e74e4.charAt(Math.floor(Math.random() * _0x4e74e4.length));
        } else {
          _0x488253 == "X" ? _0x42e0bd += _0x4e74e4.charAt(Math.floor(Math.random() * _0x4e74e4.length)).toUpperCase() : _0x42e0bd += _0x488253;
        }
      }
      return _0x42e0bd;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x210209, _0x3a5b63 = "abcdef0123456789") {
      let _0x2c4af6 = "";
      for (let _0x35f30f = 0; _0x35f30f < _0x210209; _0x35f30f++) {
        _0x2c4af6 += _0x3a5b63.charAt(Math.floor(Math.random() * _0x3a5b63.length));
      }
      return _0x2c4af6;
    }
    randomList(_0x4e644d) {
      let _0x90d83c = Math.floor(Math.random() * _0x4e644d.length);
      return _0x4e644d[_0x90d83c];
    }
    wait(_0x57c9d2) {
      return new Promise(_0x5541b0 => setTimeout(_0x5541b0, _0x57c9d2));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4246be = Date.now(),
        _0xa22e81 = (_0x4246be - this.startTime) / 1000;
      this.log("");
      const _0x13ae49 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0xa22e81 + "秒", _0x13ae49);
      process.exit(0);
    }
    normalize_time(_0x11e281, _0xd326cb = {}) {
      let _0x3d2e1d = _0xd326cb.len || _0x4c30e5;
      _0x11e281 = _0x11e281.toString();
      let _0xfd8236 = _0x11e281.length;
      while (_0xfd8236 < _0x3d2e1d) {
        _0x11e281 += "0";
      }
      _0xfd8236 > _0x3d2e1d && (_0x11e281 = _0x11e281.slice(0, 13));
      return parseInt(_0x11e281);
    }
    async wait_until(_0x20146f, _0x4da791 = {}) {
      let _0x135d0c = _0x4da791.logger || this,
        _0x2798f8 = _0x4da791.interval || _0x773cf4,
        _0x27e610 = _0x4da791.limit || _0x362968,
        _0x3be191 = _0x4da791.ahead || _0x576c64;
      if (typeof _0x20146f == "string" && _0x20146f.includes(":")) {
        if (_0x20146f.includes("-")) {
          _0x20146f = new Date(_0x20146f).getTime();
        } else {
          let _0x2b484c = this.time("yyyy-MM-dd ");
          _0x20146f = new Date(_0x2b484c + _0x20146f).getTime();
        }
      }
      let _0x1e6c6b = this.normalize_time(_0x20146f) - _0x3be191,
        _0x4ba9e3 = this.time("hh:mm:ss.S", _0x1e6c6b),
        _0x197320 = Date.now();
      _0x197320 > _0x1e6c6b && (_0x1e6c6b += 86400000);
      let _0x207e6d = _0x1e6c6b - _0x197320;
      if (_0x207e6d > _0x27e610) {
        const _0x12423b = {
          time: true
        };
        _0x135d0c.log("离目标时间[" + _0x4ba9e3 + "]大于" + _0x27e610 / 1000 + "秒,不等待", _0x12423b);
      } else {
        const _0x2a8cd0 = {
          time: true
        };
        _0x135d0c.log("离目标时间[" + _0x4ba9e3 + "]还有" + _0x207e6d / 1000 + "秒,开始等待", _0x2a8cd0);
        while (_0x207e6d > 0) {
          let _0x116097 = Math.min(_0x207e6d, _0x2798f8);
          await this.wait(_0x116097);
          _0x197320 = Date.now();
          _0x207e6d = _0x1e6c6b - _0x197320;
        }
        const _0x454821 = {
          time: true
        };
        _0x135d0c.log("已完成等待", _0x454821);
      }
    }
    async wait_gap_interval(_0x83e63b, _0x46cd7d) {
      let _0x357ffb = Date.now() - _0x83e63b;
      _0x357ffb < _0x46cd7d && (await this.wait(_0x46cd7d - _0x357ffb));
    }
  }(_0x31756a);
}