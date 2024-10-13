//Sun Oct 13 2024 20:04:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("番茄小说");
let envSplitor = ["@", "\n"],
  httpResult,
  httpReq,
  httpResp,
  userCookie = ($.isNode() ? process.env.fqxxsapp : $.getdata("fqxxsapp")) || "",
  userList = [],
  userIdx = 0,
  userCount = 0;
var myDate = new Date(),
  myHour = myDate.getHours();
class UserInfo {
  constructor(_0x7aaf65) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.cFlag = true;
    this.id = 0;
    this.token = "";
    this.ydid = "";
    this.name = "";
    this.tid = "";
    this.sjid = "";
    try {
      this.ck = _0x7aaf65;
      this.iid = this.ck.split("&")[1];
      this.did = this.ck.split("&")[2];
      this.uu = "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=sem_shenma_hgxs25&aid=1967&app_name=novelapp&version_code=350&version_name=5.6.9.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&openudid=23223b450f2405c0&manifest_version_code=569&resolution=1080*2232&dpi=480&update_version_code=56932&_rticket=1678886547809&_rticket=1678886547829&gender=1&comment_tag_c=3&vip_state=0&category_style=1&oaid=ef6bedfc76ecde9350702b295d1adcc5&cdid=06b1ac06-3035-45b8-9b29-644e9a79fc31&act_token=i_9cm7AG150_jFamQOBSNihVqKLilfuxWTcB3s3EJXHsDpWmzBmlTgV3nd0S1yPdXoEdvmrJ2EXY4z9j4TsdyQ&act_hash=fd7b31e8130ef2d796d20a1cce683e47&cookie_base=V4n_wttCwtcOAOPmn1MxAaQz5eXzyYUnJohYle02V4HKn48eS750kak54a4e2yVsxo7Wy_Du_nBppu3T6yl_Dg&cookie_data=u8SelqBJGhzU7C0newFmWw&luckycat_version_name=3.0.0-rc.35-novel&luckycat_version_code=300035&status_bar_height=32&ip=192.168.68.17&new_bookshelf=true";
      this.ck = this.ck.split("&")[0];
    } catch (_0x583ebf) {}
  }
  async sh() {
    try {
      await this.fqdl();
      await $.wait(100);
      await this.fqxx();
      await $.wait(100);
      await this.fqqt();
      await $.wait(100);
      await this.fqlist();
      await $.wait(100);
      await this.fqqd();
      await $.wait(100);
      await this.fqkgg();
      await this.fqtsgg();
      await this.fqllhw();
      await this.fqllsp();
      await $.wait(100);
      await this.fqgj();
      await $.wait(100);
      await this.fqbx();
      await $.wait(300);
      await this.fqbxsp();
      await this.fqewgg();
      for (let _0x4572cd = 0; _0x4572cd < 5000; _0x4572cd++) {
        await this.fqkgg();
      }
      for (let _0x370228 of ["excitation_ad_chapter_end", "excitation_ad_chapter_end_low_arpu", "excitation_ad_chapter_begin_low_arpu", "excitation_ad_repeat", "excitation_ad_chapter_end", "excitation_ad_chapter_start", "excitation_ad_daily_earning"]) {
        this.tid = _0x370228;
        await this.fqewgg1();
      }
      for (let _0x3988fa of ["{\"meal_type\":0}", "{\"meal_type\":1}", "{\"meal_type\":2}", "{\"meal_type\":3}"]) {
        this.tid = _0x3988fa;
        await this.fqcf();
      }
      await this.fqcjcs();
      await this.fqcj();
      await this.fqlxcj();
      if (myHour == 19) {
        await this.fqsj();
      } else {
        myHour == 2 && (await this.fqsx());
      }
    } catch (_0x401fe8) {
      console.log(_0x401fe8);
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqdl() {
    try {
      let _0x239bfb = "https://i.snssdk.com/reading/user/info/v/?iid=" + this.iid + "&device_id=" + this.did + this.uu;
      this.populateUrlObject(_0x239bfb);
      await httpRequest("get", this.urlObject);
      let _0x487efb = httpResult;
      _0x487efb.code == 0 ? console.log("账号[" + this.index + "]:番茄小说用户：" + _0x487efb.data.user_name) : (console.log("账号[" + this.index + "]:番茄小说用户：" + JSON.stringify(_0x487efb)), this.cFlag = false);
    } catch (_0x10e6ad) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqxx() {
    try {
      let _0x475475 = "https://i.snssdk.com/luckycat/novel/v1/user/info?iid=" + this.iid + "&device_id=" + this.did + this.uu;
      this.populateUrlObject(_0x475475);
      await httpRequest("get", this.urlObject);
      let _0x34f0e3 = httpResult;
      _0x34f0e3.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说现金金额：" + _0x34f0e3.data.income_info_list[0].amount / 100 + "元，金币金额：" + _0x34f0e3.data.income_info_list[1].amount) : (console.log("账号[" + this.index + "]:番茄小说：" + JSON.stringify(_0x34f0e3)), this.cFlag = false);
    } catch (_0x4fde3b) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqlist() {
    try {
      let _0x24725c = "https://i.snssdk.com/luckycat/novel/v1/task/list?iid=" + this.iid + "&device_id=" + this.did + this.uu;
      this.populateUrlObject(_0x24725c);
      await httpRequest("get", this.urlObject);
      let _0x5c52e0 = httpResult;
      if (_0x5c52e0.err_no == 0) {
        for (let _0x58231b = 0; _0x58231b < _0x5c52e0.data.task_list.daily.length; _0x58231b++) {
          _0x5c52e0.data.task_list.daily[_0x58231b].completed == false && (_0x5c52e0.data.task_list.daily[_0x58231b].name.indexOf("阅读") > -1 && (this.ydid = _0x5c52e0.data.task_list.daily[_0x58231b].key, this.name = _0x5c52e0.data.task_list.daily[_0x58231b].name, await this.fqyd()), _0x5c52e0.data.task_list.daily[_0x58231b].name.indexOf("漫画") > -1 && (this.ydid = _0x5c52e0.data.task_list.daily[_0x58231b].key, this.name = _0x5c52e0.data.task_list.daily[_0x58231b].name, await this.fqmh()), _0x5c52e0.data.task_list.daily[_0x58231b].name.indexOf("听书") > -1 && (this.ydid = _0x5c52e0.data.task_list.daily[_0x58231b].key, this.name = _0x5c52e0.data.task_list.daily[_0x58231b].name, await this.fqts()));
        }
      } else {
        console.log("账号[" + this.index + "]:番茄小说：" + JSON.stringify(_0x5c52e0));
        this.cFlag = false;
      }
    } catch (_0x130ab8) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqkgg() {
    this.iid = random(16);
    this.did = random(16);
    try {
      let _0x5e0d66 = "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad_signin?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x496db3 = "{\"from\":\"sign_in\",\"task_key\":\"excitation_ad_signin\"}";
      this.populateUrlObject(_0x5e0d66, _0x496db3);
      await httpRequest("post", this.urlObject);
      let _0x3e9939 = httpResult;
      _0x3e9939.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说看广告获得：" + _0x3e9939.data.amount + "金币") : this.cFlag = false;
    } catch (_0x40317d) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqtsgg() {
    try {
      let _0x170c30 = "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad_listen_page?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x1ba391 = "{\"task_key\":\"excitation_ad_listen_page\"}";
      this.populateUrlObject(_0x170c30, _0x1ba391);
      await httpRequest("post", this.urlObject);
      let _0x5b394d = httpResult;
      _0x5b394d.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说听书看广告获得：" + _0x5b394d.data.amount + "金币") : this.cFlag = false;
    } catch (_0x3e0072) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqllhw() {
    try {
      let _0x9118ed = "https://i.snssdk.com/luckycat/novel/v1/task/done/shopping_earn_money?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x27accb = "{\"task_key\":\"shopping_earn_money\"}";
      this.populateUrlObject(_0x9118ed, _0x27accb);
      await httpRequest("post", this.urlObject);
      let _0x2ed7c6 = httpResult;
      _0x2ed7c6.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说浏览好物获得：" + _0x2ed7c6.data.amount + "金币") : this.cFlag = false;
    } catch (_0x525b70) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqllsp() {
    try {
      let _0x598094 = "https://i.snssdk.com/luckycat/novel/v1/task/done/browse_products?iid=" + this.iid + "&device_id=" + this.did + this.uu + "&new_bookshelf=true",
        _0x24a435 = "{\"{\"new_bookshelf\"\":\"true,\"task_key\":\"browse_products\"}\"}";
      this.populateUrlObject(_0x598094, _0x24a435);
      await httpRequest("post", this.urlObject);
      let _0x2822a3 = httpResult;
      _0x2822a3.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说浏览商品获得：" + _0x2822a3.data.amount + "金币") : this.cFlag = false;
    } catch (_0x5a1a64) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqd() {
    try {
      let _0x5be673 = "https://i.snssdk.com/luckycat/novel/v1/task/done/sign_in?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x42570d = "{}";
      this.populateUrlObject(_0x5be673, _0x42570d);
      await httpRequest("post", this.urlObject);
      let _0x210c9a = httpResult;
      _0x210c9a.err_no == 0 ? (console.log("账号[" + this.index + "]:番茄小说签到获得：" + _0x210c9a.data.amount + "金币"), await this.fqqdsp()) : (await this.fqqdsp(), this.cFlag = false);
    } catch (_0x135401) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqdsp() {
    try {
      let _0x3aec02 = "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad_signin?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x53ebef = "{\"from\":\"sign_in\"}";
      this.populateUrlObject(_0x3aec02, _0x53ebef);
      await httpRequest("post", this.urlObject);
      let _0x314e0b = httpResult;
      _0x314e0b.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说签到视频获得：" + _0x314e0b.data.amount + "金币") : this.cFlag = false;
    } catch (_0x176d34) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqgj() {
    try {
      let _0x108a6e = "https://i.snssdk.com/luckycat/novel/v1/task/done/shopping_earn_money?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0xd47100 = "{}";
      this.populateUrlObject(_0x108a6e, _0xd47100);
      await httpRequest("post", this.urlObject);
      let _0xba6e68 = httpResult;
      _0xba6e68.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说逛街获得：" + _0xba6e68.data.amount + "金币") : this.cFlag = false;
    } catch (_0x38acc4) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqbx() {
    try {
      let _0x42111e = "https://i.snssdk.com/luckycat/novel/v1/task/done/treasure_task?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x337a6e = "{}";
      this.populateUrlObject(_0x42111e, _0x337a6e);
      await httpRequest("post", this.urlObject);
      let _0x1a8949 = httpResult;
      _0x1a8949.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说开宝箱获得：" + _0x1a8949.data.amount + "金币") : this.cFlag = false;
    } catch (_0x44aaa3) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqbxsp() {
    try {
      let _0x301413 = "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad_treasure_box?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x5b0f59 = "{\"from\":\"gold_coin_reward_dialog_open_treasure\"}";
      this.populateUrlObject(_0x301413, _0x5b0f59);
      await httpRequest("post", this.urlObject);
      let _0x52f23a = httpResult;
      _0x52f23a.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说宝箱视频获得：" + _0x52f23a.data.amount + "金币") : this.cFlag = false;
    } catch (_0xa6283b) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqewgg() {
    try {
      let _0x2ace38 = "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x232f8f = "{\"from\":\"listen_task\"}";
      this.populateUrlObject(_0x2ace38, _0x232f8f);
      await httpRequest("post", this.urlObject);
      let _0x2c8965 = httpResult;
      _0x2c8965.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说看额外广告获得：" + _0x2c8965.data.amount + "金币") : this.cFlag = false;
    } catch (_0x3b0170) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqyd() {
    try {
      let _0x59656b = "https://i.snssdk.com/luckycat/novel/v1/task/done/" + this.ydid + "?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x450637 = "{\"task_key\":\"" + this.ydid + "\"}";
      this.populateUrlObject(_0x59656b, _0x450637);
      await httpRequest("post", this.urlObject);
      let _0x571a0f = httpResult;
      _0x571a0f.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说" + this.name + "获得：" + _0x571a0f.data.amount + "金币") : this.cFlag = false;
    } catch (_0x29ba36) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqmh() {
    try {
      let _0x3b2956 = "https://api5-normal-lf.fqnovel.com/luckycat/novel/v1/task/done/daily_read_comics?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x27b226 = "{\"read_comics_task_key\":\"" + this.ydid + "\",\"task_key\":\"daily_read_comics\"}";
      this.populateUrlObject(_0x3b2956, _0x27b226);
      await httpRequest("post", this.urlObject);
      let _0x1b22ad = httpResult;
      _0x1b22ad.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说" + this.name + "获得：" + _0x1b22ad.data.amount + "金币") : this.cFlag = false;
    } catch (_0x13d121) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqts() {
    try {
      let _0x378c0a = "https://api3-normal-lf.fqnovel.com/luckycat/novel/v1/task/done/" + this.ydid + "?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x425d8b = "{\"task_key\":\"" + this.ydid + "\"}";
      this.populateUrlObject(_0x378c0a, _0x425d8b);
      await httpRequest("post", this.urlObject);
      let _0x4f3a80 = httpResult;
      _0x4f3a80.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说" + this.name + "获得：" + _0x4f3a80.data.amount + "金币") : this.cFlag = false;
    } catch (_0x1bff47) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqt() {
    try {
      let _0x5d34bb = "https://i.snssdk.com/luckycat/novel/v1/task/done/read_end_distribution?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x30da0f = "{}";
      this.populateUrlObject(_0x5d34bb, _0x30da0f);
      await httpRequest("post", this.urlObject);
      let _0x4f5ff9 = httpResult;
      _0x4f5ff9.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说" + this.name + "获得：" + _0x4f5ff9.data.amount + "金币") : this.cFlag = false;
    } catch (_0x5c1754) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqewgg1() {
    try {
      let _0x93a66f = "https://i.snssdk.com/luckycat/novel/v1/task/done/" + this.tid + "?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x320dd6 = "{\"new_bookshelf\":true,\"task_key\":\"" + this.tid + "\"}";
      this.populateUrlObject(_0x93a66f, _0x320dd6);
      await httpRequest("post", this.urlObject);
      let _0x228047 = httpResult;
      _0x228047.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说额外任务获得：" + _0x228047.data.amount + "金币") : this.cFlag = false;
    } catch (_0x1f8dc6) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqcj() {
    try {
      let _0x11e9b8 = "https://i.snssdk.com/luckycat/novel/v1/lottery/do_lottery?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x4d18ba = "{\"new_bookshelf\":true}";
      this.populateUrlObject(_0x11e9b8, _0x4d18ba);
      await httpRequest("post", this.urlObject);
      let _0x5bbf68 = httpResult;
      _0x5bbf68.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说抽奖获得：" + _0x5bbf68.data.reward.amount + "金币") : this.cFlag = false;
    } catch (_0x367bab) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqlxcj() {
    try {
      let _0xe1498b = "https://i.snssdk.com/luckycat/novel/v1/lottery/continue_lottery?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x599e09 = "{\"new_bookshelf\":true}";
      this.populateUrlObject(_0xe1498b, _0x599e09);
      await httpRequest("post", this.urlObject);
      let _0x322f10 = httpResult;
      _0x322f10.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说抽奖签到获得：" + _0x322f10.data.amount + "金币") : this.cFlag = false;
    } catch (_0x356569) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqcf() {
    try {
      let _0x59378d = "https://i-hl.snssdk.com/luckycat/novel/v1/task/done/meal?_request_from=web&new_bookshelf=false&ac=wifi&aid=1967&app_name=novelapp&version_code=300&version_name=3.0.0.32&device_platform=android&ssmix=a&device_brand=Xiaomi&language=zh&os_api=30&os_version=11&openudid=c1ad0d7fd6238e3a&manifest_version_code=300&resolution=1440*3007&dpi=560&update_version_code=30032&_rticket=1675348202727&gender=0&comment_tag_c=3&vip_state=0&category_style=1",
        _0x561e60 = this.tid;
      this.populateUrlObject(_0x59378d, _0x561e60);
      await httpRequest("post", this.urlObject);
      let _0x5e308b = httpResult;
      _0x5e308b.err_no == 0 ? (console.log("账号[" + this.index + "]:番茄小说吃饭补贴，获得" + _0x5e308b.data.amount + "金币"), this.sjid = _0x5e308b.data.ui_status, await this.fqsxlq()) : this.cFlag = false;
    } catch (_0x34da6d) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqcjcs() {
    try {
      let _0x2ff6e6 = "https://i.snssdk.com/luckycat/novel/v1/lottery/update_chance?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x228098 = "{\"task_id\":0}";
      this.populateUrlObject(_0x2ff6e6, _0x228098);
      await httpRequest("post", this.urlObject);
      let _0x3277bb = httpResult;
      _0x3277bb.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说抽奖次数增加：" + _0x3277bb.err_tips) : this.cFlag = false;
    } catch (_0x3b64eb) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqsj() {
    try {
      let _0x38f8df = "https://i.snssdk.com/luckycat/novel/v1/task/done/sleep?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x469484 = "{\"done_type\":\"start_sleep\",\"task_key\":\"sleep\"}";
      this.populateUrlObject(_0x38f8df, _0x469484);
      await httpRequest("post", this.urlObject);
      let _0x21a702 = httpResult;
      _0x21a702.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说睡觉：" + _0x21a702.err_tips) : this.cFlag = false;
    } catch (_0x4f90b5) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqsx() {
    try {
      let _0x1ddc13 = "https://i.snssdk.com/luckycat/novel/v1/task/done/sleep?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x433013 = "{\"done_type\":\"end_sleep\",\"task_key\":\"sleep\"}";
      this.populateUrlObject(_0x1ddc13, _0x433013);
      await httpRequest("post", this.urlObject);
      let _0x3ef3dd = httpResult;
      _0x3ef3dd.err_no == 0 ? (console.log("账号[" + this.index + "]:番茄小说睡醒,可领取金币：" + _0x3ef3dd.data.ui_status), this.sjid = _0x3ef3dd.data.ui_status, await this.fqsxlq()) : this.cFlag = false;
    } catch (_0x22ed88) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqsxlq() {
    try {
      let _0x463bf3 = "https://i.snssdk.com/luckycat/novel/v1/task/done/sleep?iid=" + this.iid + "&device_id=" + this.did + this.uu,
        _0x1610d4 = "{\"done_type\":\"receive_awards\",\"amount\":" + this.sjid + ",\"task_key\":\"sleep\"}";
      this.populateUrlObject(_0x463bf3, _0x1610d4);
      await httpRequest("post", this.urlObject);
      let _0x11c009 = httpResult;
      _0x11c009.err_no == 0 ? console.log("账号[" + this.index + "]:番茄小说睡醒,领取金币：" + _0x11c009.data.title) : this.cFlag = false;
    } catch (_0x462c2a) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async populateUrlObject(_0x14ed07, _0x3d1bdd = "") {
    let _0x4348d2 = _0x14ed07.replace("//", "/").split("/")[1],
      _0x4ccedd = {
        url: _0x14ed07,
        headers: {
          Host: _0x4348d2,
          "Content-Type": "application/json;charset=utf-8",
          Cookie: "sessionid=" + this.ck,
          gender: "1",
          "sdk-version": "1",
          "User-Agent": "com.dragon.read/310 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:4df3ca9d 2019-11-25)",
          "Accept-Encoding": "gzip, deflate",
          "X-Khronos": "",
          "X-Gorgon": ""
        },
        timeout: 5000,
        body: _0x3d1bdd
      };
    _0x3d1bdd;
    this.urlObject = _0x4ccedd;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    await Announcement();
    if (!(await checkEnv())) {
      return;
    }
    if (userList.length > 0) {
      taskall = [];
      for (let _0xaca2d9 of userList) {
        if (_0xaca2d9.cFlag) {
          taskall.push(_0xaca2d9.sh());
        }
        taskall.length > 4 && (await Promise.all(taskall), taskall = []);
      }
      if (taskall.length > 0) {
        await Promise.all(taskall);
      }
    }
    await $.showmsg();
  }
})().catch(_0x4d6083 => console.log(_0x4d6083)).finally(() => $.done());
async function GetRewrite() {
  $request.url.indexOf("api.ibreader.com/api/user/userInfo") > -1 && (ck = "" + $request.headers.Cookie, userCookie ? -1 == userCookie.indexOf(ck) && (userCookie = userCookie + "@" + ck, $.setdata(userCookie, "bkcookie"), ckList = userCookie.split("@"), $.msg("获取第" + ckList.length + "个ck成功: " + ck)) : ($.setdata(ck, "bkcookie"), $.msg("获取第1个ck成功: " + ck)));
}
function logAndNotify(_0xc0f58e) {
  console.log(_0xc0f58e);
}
async function Announcement() {
  let _0x5bcbee = {
    url: "https://luobook.coding.net/api/user/luobook/project/code.json/shared-depot/luobook/git/blob/master/code.json"
  };
  await httpRequest("get", _0x5bcbee);
  data = JSON.parse(httpResult.data.file.data);
  logAndNotify(data.commomLog + "\n");
}
async function checkEnv() {
  if (userCookie) {
    let _0x58e9ab = envSplitor[0];
    for (let _0x2f4d56 of envSplitor) if (userCookie.indexOf(_0x2f4d56) > -1) {
      _0x58e9ab = _0x2f4d56;
      break;
    }
    for (let _0x23f19f of userCookie.split(_0x58e9ab)) _0x23f19f && userList.push(new UserInfo(_0x23f19f));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return !0;
}
function populateUrlObject(_0x4f615f, _0x4b3d1d, _0x3e8c55 = "") {
  let _0x2d500e = _0x4f615f.replace("//", "/").split("/")[1],
    _0x3e32f0 = {
      url: _0x4f615f,
      headers: {
        Host: _0x2d500e,
        Cookie: this.ck
      },
      timeout: 5000,
      body: _0x3e8c55
    };
  _0x3e8c55;
  return _0x3e32f0;
}
async function httpRequest(_0x252858, _0x266deb) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x10fe0a => {
    $.send(_0x252858, _0x266deb, async (_0x1d11a6, _0x26f4f7, _0x22ed1c) => {
      try {
        if (!(httpReq = _0x26f4f7, httpResp = _0x22ed1c, _0x1d11a6)) {
          if (_0x22ed1c.body) {
            if ("object" == typeof _0x22ed1c.body) {
              httpResult = _0x22ed1c.body;
            } else {
              try {
                httpResult = JSON.parse(_0x22ed1c.body);
              } catch (_0x30acb1) {
                httpResult = _0x22ed1c.body;
              }
            }
          }
        }
      } catch (_0x487fae) {
        console.log(_0x487fae);
      } finally {
        _0x10fe0a();
      }
    });
  });
}
function random(_0x4ac22e = 12) {
  let _0x581e8f = "0123456789",
    _0x289834 = _0x581e8f.length,
    _0x5bb1ea = "";
  for (i = 0; i < _0x4ac22e; i++) {
    _0x5bb1ea += _0x581e8f.charAt(Math.floor(Math.random() * _0x289834));
  }
  return _0x5bb1ea;
}
function MD5Encrypt(_0x2cb9a2) {
  function _0x5022a4(_0x79e399, _0x1d37cc) {
    return _0x79e399 << _0x1d37cc | _0x79e399 >>> 32 - _0x1d37cc;
  }
  function _0x47ca09(_0x50c533, _0x5c1d75) {
    var _0x4bc72a, _0x419917, _0x622aa2, _0x3ee60d, _0xc17129;
    _0x622aa2 = 2147483648 & _0x50c533;
    _0x3ee60d = 2147483648 & _0x5c1d75;
    _0x4bc72a = 1073741824 & _0x50c533;
    _0x419917 = 1073741824 & _0x5c1d75;
    _0xc17129 = (1073741823 & _0x50c533) + (1073741823 & _0x5c1d75);
    return _0x4bc72a & _0x419917 ? 2147483648 ^ _0xc17129 ^ _0x622aa2 ^ _0x3ee60d : _0x4bc72a | _0x419917 ? 1073741824 & _0xc17129 ? 3221225472 ^ _0xc17129 ^ _0x622aa2 ^ _0x3ee60d : 1073741824 ^ _0xc17129 ^ _0x622aa2 ^ _0x3ee60d : _0xc17129 ^ _0x622aa2 ^ _0x3ee60d;
  }
  function _0x2a86e5(_0x4bae28, _0x52bb79, _0xecc5e4) {
    return _0x4bae28 & _0x52bb79 | ~_0x4bae28 & _0xecc5e4;
  }
  function _0xb2af7b(_0x2ee818, _0x5524b0, _0x21cdca) {
    return _0x2ee818 & _0x21cdca | _0x5524b0 & ~_0x21cdca;
  }
  function _0x3240e5(_0x25c0e2, _0x122ff1, _0x1ce435) {
    return _0x25c0e2 ^ _0x122ff1 ^ _0x1ce435;
  }
  function _0x15a872(_0x2810bc, _0x5be5df, _0x16303a) {
    return _0x5be5df ^ (_0x2810bc | ~_0x16303a);
  }
  function _0x15b26f(_0x1933d0, _0x48056e, _0x3933ed, _0x2d72ab, _0x5a5be1, _0x36deda, _0x5563e8) {
    _0x1933d0 = _0x47ca09(_0x1933d0, _0x47ca09(_0x47ca09(_0x2a86e5(_0x48056e, _0x3933ed, _0x2d72ab), _0x5a5be1), _0x5563e8));
    return _0x47ca09(_0x5022a4(_0x1933d0, _0x36deda), _0x48056e);
  }
  function _0xfb709f(_0x761c6f, _0x475987, _0x503450, _0x1be329, _0x3df108, _0x199ff6, _0x5c781d) {
    _0x761c6f = _0x47ca09(_0x761c6f, _0x47ca09(_0x47ca09(_0xb2af7b(_0x475987, _0x503450, _0x1be329), _0x3df108), _0x5c781d));
    return _0x47ca09(_0x5022a4(_0x761c6f, _0x199ff6), _0x475987);
  }
  function _0x351c53(_0x44eccd, _0x558ee0, _0xe668b5, _0x26bb9d, _0x3b22d9, _0x5962ae, _0x22358a) {
    _0x44eccd = _0x47ca09(_0x44eccd, _0x47ca09(_0x47ca09(_0x3240e5(_0x558ee0, _0xe668b5, _0x26bb9d), _0x3b22d9), _0x22358a));
    return _0x47ca09(_0x5022a4(_0x44eccd, _0x5962ae), _0x558ee0);
  }
  function _0x11e0ad(_0x4f7333, _0x565a9d, _0x5864ed, _0xc29ccb, _0x43a827, _0x354e94, _0x2efa10) {
    _0x4f7333 = _0x47ca09(_0x4f7333, _0x47ca09(_0x47ca09(_0x15a872(_0x565a9d, _0x5864ed, _0xc29ccb), _0x43a827), _0x2efa10));
    return _0x47ca09(_0x5022a4(_0x4f7333, _0x354e94), _0x565a9d);
  }
  function _0x18f129(_0x2fc31e) {
    for (var _0x2bd268, _0x1ac6f6 = _0x2fc31e.length, _0x1640b9 = _0x1ac6f6 + 8, _0x4f7233 = (_0x1640b9 - _0x1640b9 % 64) / 64, _0x5b4f0e = 16 * (_0x4f7233 + 1), _0x6fc622 = new Array(_0x5b4f0e - 1), _0x156df4 = 0, _0x244a9b = 0; _0x1ac6f6 > _0x244a9b;) {
      _0x2bd268 = (_0x244a9b - _0x244a9b % 4) / 4;
      _0x156df4 = _0x244a9b % 4 * 8;
      _0x6fc622[_0x2bd268] = _0x6fc622[_0x2bd268] | _0x2fc31e.charCodeAt(_0x244a9b) << _0x156df4;
      _0x244a9b++;
    }
    _0x2bd268 = (_0x244a9b - _0x244a9b % 4) / 4;
    _0x156df4 = _0x244a9b % 4 * 8;
    _0x6fc622[_0x2bd268] = _0x6fc622[_0x2bd268] | 128 << _0x156df4;
    _0x6fc622[_0x5b4f0e - 2] = _0x1ac6f6 << 3;
    _0x6fc622[_0x5b4f0e - 1] = _0x1ac6f6 >>> 29;
    return _0x6fc622;
  }
  function _0x3820ef(_0x59a510) {
    var _0x459161,
      _0x18e450,
      _0x2b2976 = "",
      _0x8355d3 = "";
    for (_0x18e450 = 0; 3 >= _0x18e450; _0x18e450++) {
      _0x459161 = _0x59a510 >>> 8 * _0x18e450 & 255;
      _0x8355d3 = "0" + _0x459161.toString(16);
      _0x2b2976 += _0x8355d3.substr(_0x8355d3.length - 2, 2);
    }
    return _0x2b2976;
  }
  function _0x43625b(_0x21b4ea) {
    _0x21b4ea = _0x21b4ea.replace(/\r\n/g, "\n");
    for (var _0x19a3ef = "", _0x145775 = 0; _0x145775 < _0x21b4ea.length; _0x145775++) {
      var _0x41e418 = _0x21b4ea.charCodeAt(_0x145775);
      128 > _0x41e418 ? _0x19a3ef += String.fromCharCode(_0x41e418) : _0x41e418 > 127 && 2048 > _0x41e418 ? (_0x19a3ef += String.fromCharCode(_0x41e418 >> 6 | 192), _0x19a3ef += String.fromCharCode(63 & _0x41e418 | 128)) : (_0x19a3ef += String.fromCharCode(_0x41e418 >> 12 | 224), _0x19a3ef += String.fromCharCode(_0x41e418 >> 6 & 63 | 128), _0x19a3ef += String.fromCharCode(63 & _0x41e418 | 128));
    }
    return _0x19a3ef;
  }
  var _0x2c2759,
    _0x12deb4,
    _0x29854a,
    _0x582a36,
    _0x55c12c,
    _0x12ea87,
    _0x31cf52,
    _0xba1035,
    _0x102028,
    _0x49ede2 = [],
    _0x160cef = 7,
    _0x39b52c = 12,
    _0x4a1646 = 17,
    _0x24d485 = 22,
    _0x248f0d = 5,
    _0x5056cd = 9,
    _0x2b9511 = 14,
    _0x509448 = 20,
    _0xe0a488 = 4,
    _0x4f55d3 = 11,
    _0x18e386 = 16,
    _0x48286d = 23,
    _0x150357 = 6,
    _0x115292 = 10,
    _0x3ec310 = 15,
    _0x3bccee = 21;
  for (_0x2cb9a2 = _0x43625b(_0x2cb9a2), _0x49ede2 = _0x18f129(_0x2cb9a2), _0x12ea87 = 1732584193, _0x31cf52 = 4023233417, _0xba1035 = 2562383102, _0x102028 = 271733878, _0x2c2759 = 0; _0x2c2759 < _0x49ede2.length; _0x2c2759 += 16) {
    _0x12deb4 = _0x12ea87;
    _0x29854a = _0x31cf52;
    _0x582a36 = _0xba1035;
    _0x55c12c = _0x102028;
    _0x12ea87 = _0x15b26f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 0], _0x160cef, 3614090360);
    _0x102028 = _0x15b26f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 1], _0x39b52c, 3905402710);
    _0xba1035 = _0x15b26f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 2], _0x4a1646, 606105819);
    _0x31cf52 = _0x15b26f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 3], _0x24d485, 3250441966);
    _0x12ea87 = _0x15b26f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 4], _0x160cef, 4118548399);
    _0x102028 = _0x15b26f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 5], _0x39b52c, 1200080426);
    _0xba1035 = _0x15b26f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 6], _0x4a1646, 2821735955);
    _0x31cf52 = _0x15b26f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 7], _0x24d485, 4249261313);
    _0x12ea87 = _0x15b26f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 8], _0x160cef, 1770035416);
    _0x102028 = _0x15b26f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 9], _0x39b52c, 2336552879);
    _0xba1035 = _0x15b26f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 10], _0x4a1646, 4294925233);
    _0x31cf52 = _0x15b26f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 11], _0x24d485, 2304563134);
    _0x12ea87 = _0x15b26f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 12], _0x160cef, 1804603682);
    _0x102028 = _0x15b26f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 13], _0x39b52c, 4254626195);
    _0xba1035 = _0x15b26f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 14], _0x4a1646, 2792965006);
    _0x31cf52 = _0x15b26f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 15], _0x24d485, 1236535329);
    _0x12ea87 = _0xfb709f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 1], _0x248f0d, 4129170786);
    _0x102028 = _0xfb709f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 6], _0x5056cd, 3225465664);
    _0xba1035 = _0xfb709f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 11], _0x2b9511, 643717713);
    _0x31cf52 = _0xfb709f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 0], _0x509448, 3921069994);
    _0x12ea87 = _0xfb709f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 5], _0x248f0d, 3593408605);
    _0x102028 = _0xfb709f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 10], _0x5056cd, 38016083);
    _0xba1035 = _0xfb709f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 15], _0x2b9511, 3634488961);
    _0x31cf52 = _0xfb709f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 4], _0x509448, 3889429448);
    _0x12ea87 = _0xfb709f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 9], _0x248f0d, 568446438);
    _0x102028 = _0xfb709f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 14], _0x5056cd, 3275163606);
    _0xba1035 = _0xfb709f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 3], _0x2b9511, 4107603335);
    _0x31cf52 = _0xfb709f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 8], _0x509448, 1163531501);
    _0x12ea87 = _0xfb709f(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 13], _0x248f0d, 2850285829);
    _0x102028 = _0xfb709f(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 2], _0x5056cd, 4243563512);
    _0xba1035 = _0xfb709f(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 7], _0x2b9511, 1735328473);
    _0x31cf52 = _0xfb709f(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 12], _0x509448, 2368359562);
    _0x12ea87 = _0x351c53(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 5], _0xe0a488, 4294588738);
    _0x102028 = _0x351c53(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 8], _0x4f55d3, 2272392833);
    _0xba1035 = _0x351c53(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 11], _0x18e386, 1839030562);
    _0x31cf52 = _0x351c53(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 14], _0x48286d, 4259657740);
    _0x12ea87 = _0x351c53(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 1], _0xe0a488, 2763975236);
    _0x102028 = _0x351c53(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 4], _0x4f55d3, 1272893353);
    _0xba1035 = _0x351c53(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 7], _0x18e386, 4139469664);
    _0x31cf52 = _0x351c53(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 10], _0x48286d, 3200236656);
    _0x12ea87 = _0x351c53(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 13], _0xe0a488, 681279174);
    _0x102028 = _0x351c53(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 0], _0x4f55d3, 3936430074);
    _0xba1035 = _0x351c53(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 3], _0x18e386, 3572445317);
    _0x31cf52 = _0x351c53(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 6], _0x48286d, 76029189);
    _0x12ea87 = _0x351c53(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 9], _0xe0a488, 3654602809);
    _0x102028 = _0x351c53(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 12], _0x4f55d3, 3873151461);
    _0xba1035 = _0x351c53(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 15], _0x18e386, 530742520);
    _0x31cf52 = _0x351c53(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 2], _0x48286d, 3299628645);
    _0x12ea87 = _0x11e0ad(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 0], _0x150357, 4096336452);
    _0x102028 = _0x11e0ad(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 7], _0x115292, 1126891415);
    _0xba1035 = _0x11e0ad(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 14], _0x3ec310, 2878612391);
    _0x31cf52 = _0x11e0ad(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 5], _0x3bccee, 4237533241);
    _0x12ea87 = _0x11e0ad(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 12], _0x150357, 1700485571);
    _0x102028 = _0x11e0ad(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 3], _0x115292, 2399980690);
    _0xba1035 = _0x11e0ad(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 10], _0x3ec310, 4293915773);
    _0x31cf52 = _0x11e0ad(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 1], _0x3bccee, 2240044497);
    _0x12ea87 = _0x11e0ad(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 8], _0x150357, 1873313359);
    _0x102028 = _0x11e0ad(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 15], _0x115292, 4264355552);
    _0xba1035 = _0x11e0ad(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 6], _0x3ec310, 2734768916);
    _0x31cf52 = _0x11e0ad(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 13], _0x3bccee, 1309151649);
    _0x12ea87 = _0x11e0ad(_0x12ea87, _0x31cf52, _0xba1035, _0x102028, _0x49ede2[_0x2c2759 + 4], _0x150357, 4149444226);
    _0x102028 = _0x11e0ad(_0x102028, _0x12ea87, _0x31cf52, _0xba1035, _0x49ede2[_0x2c2759 + 11], _0x115292, 3174756917);
    _0xba1035 = _0x11e0ad(_0xba1035, _0x102028, _0x12ea87, _0x31cf52, _0x49ede2[_0x2c2759 + 2], _0x3ec310, 718787259);
    _0x31cf52 = _0x11e0ad(_0x31cf52, _0xba1035, _0x102028, _0x12ea87, _0x49ede2[_0x2c2759 + 9], _0x3bccee, 3951481745);
    _0x12ea87 = _0x47ca09(_0x12ea87, _0x12deb4);
    _0x31cf52 = _0x47ca09(_0x31cf52, _0x29854a);
    _0xba1035 = _0x47ca09(_0xba1035, _0x582a36);
    _0x102028 = _0x47ca09(_0x102028, _0x55c12c);
  }
  var _0x5c7c11 = _0x3820ef(_0x12ea87) + _0x3820ef(_0x31cf52) + _0x3820ef(_0xba1035) + _0x3820ef(_0x102028);
  return _0x5c7c11.toLowerCase();
}
function Env(name, env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
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
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
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
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != "get" && m != "post" && m != "put" && m != "delete") {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == "get" && t.headers) {
        delete t.headers["Content-Type"];
        delete t.headers["Content-Length"];
      } else {
        if (t.body && t.headers) {
          if (!t.headers["Content-Type"]) {
            t.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == "get") {
          delete conf.data;
        }
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else {
        if (this.isQuanX()) {
          t.method = m.toUpperCase();
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: i,
              request: q,
              headers: r,
              body: o
            } = t;
            e(null, q, {
              statusCode: i,
              headers: r,
              body: o
            });
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: s,
              ...i
            } = t;
            this.instance = this.got.extend({
              followRedirect: false
            });
            this.instance[m](s, i).then(t => {
              const {
                statusCode: i,
                request: q,
                headers: r,
                body: o
              } = t;
              e(null, q, {
                statusCode: i,
                headers: r,
                body: o
              });
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr;
      if (!$.isNode()) {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
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
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== 系统通知 =============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = "0") {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = "";
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(paramIn = {}) {
      let ret = [];
      let obj = paramIn.obj;
      let connector = paramIn.connector || "";
      let keys = Object.keys(obj);
      if (paramIn.isSort) {
        keys = keys.sort();
      }
      for (let key of keys) {
        let v = obj[key];
        if (v && typeof v === "object") {
          v = JSON.stringify(v);
        }
        if (v && paramIn.encodeUrl) {
          v = encodeURIComponent(v);
        }
        ret.push(key + "=" + v);
      }
      return ret.join(connector);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split("&")) {
        if (!item) {
          continue;
        }
        let idx = item.indexOf("=");
        if (idx == -1) {
          continue;
        }
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) {
          v = decodeURIComponent(v);
        }
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = "abcdef0123456789") {
      let str = "";
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(t);
      }
      process.exit(0);
    }
    parseParam(p, d = "") {
      return p === undefined ? d : p;
    }
    randomPattern(pattern, charset = "abcdef0123456789") {
      let str = "";
      for (let chars of pattern) {
        if (chars == "x") {
          str += charset.charAt(Math.floor(Math.random() * charset.length));
        } else {
          if (chars == "X") {
            str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase();
          } else {
            str += chars;
          }
        }
      }
      return str;
    }
    param2str(param, encodeUrl = true) {
      let ret = [];
      for (let key in param) {
        if (typeof param[key] === "object") {
          param[key] = JSON.stringify(param[key]);
        }
        let v = param[key];
        if (encodeUrl) {
          v = escape(v);
        }
        let str = key + "=" + v;
        ret.push(str);
      }
      return ret.join("&");
    }
    randomWait(basetime, randomtime) {
      if (basetime == 0) {
        return;
      }
      let t = Math.floor(Math.random() * randomtime) + basetime;
      return this.wait(t);
    }
  }(name, env);
}