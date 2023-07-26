// ==UserScript==
// @name        米游社/B站/任意网站获取cookie
// @namespace   https://github.com/a776058959/MihoyoBBSGetCookie
// @homepageURL https://github.com/a776058959/MihoyoBBSGetCookie
// @supportURL  https://github.com/a776058959/MihoyoBBSGetCookie/issues
// @updateURL   https://hub.fgit.gq/a776058959/MihoyoBBSGetCookie/raw/main/mihoyo.com%E8%8E%B7%E5%8F%96cookie.user.js
// @downloadURL https://hub.fgit.gq/a776058959/MihoyoBBSGetCookie/raw/main/mihoyo.com%E8%8E%B7%E5%8F%96cookie.user.js
// @match       *://*/*
// @exclude     *://live.bilibili.com/*
// @exclude     *://message.bilibili.com/*
// @exclude     *://*.hdslb.*
// @version     0.6
// @author      EA乖离
// @description 米游社、B站等任意网站获取cookie，只需点击菜单中的获取。(某些网站或未登录网站可能会获取失败。)
// @grant       GM_registerMenuCommand
// ==/UserScript==
(function() {
  'use strict';
  GM_registerMenuCommand("\u83b7\u53d6", runCommand);
  async function runCommand() {
    try {
      var cookie = document.cookie
      var ask = confirm('\u662f\u5426\u8981\u5c06\u0063\u006f\u006f\u006b\u0069\u0065\u590d\u5236\u5230\u526a\u8d34\u677f\u003f\n\n' + 'Cookie:' + cookie)
      if (ask == true) {
        console.log('点击了确认');
        copy(cookie)
        function copy(cookie) {
          console.log('开始准备复制cookie');
          // navigator clipboard 需要https等安全上下文
          if (navigator.clipboard && window.isSecureContext) {
            console.log('clipboard方式:向剪贴板写文本');
            navigator.clipboard.writeText(cookie);
            console.log('clipboard方式Cookie获取成功');
            return
          } else {
            console.log('创建文本标签');
            let cookieinp = document.createElement("input");
            cookieinp.value = cookie.toString();
            console.log('设置该文本标签不可见');
            cookieinp.style.position = "absolute";
            cookieinp.style.opacity = 0;
            cookieinp.style.left = "-999999px";
            cookieinp.style.top = "-999999px";
            console.log('将该标签插入页面');
            document.body.appendChild(cookieinp);
            cookieinp.focus();
            cookieinp.select();
            console.log('execCommand方式:向剪贴板写文本');
            document.execCommand('copy');
            console.log('移除文本标签');
            cookieinp.remove();
            console.log('execCommand方式Cookie获取成功');
          }
        }
      } else {
        console.log('Cookie获取失败');
      }
    } catch (error) {
      console.log(`\u83b7\u53d6\u5931\u8D25\uFF1A${error.message}`);
    }
  }
})();