// ==UserScript==
// @name        米游社/B站/任意网站获取cookie
// @namespace   https://github.com/a776058959/MihoyoBBSGetCookie
// @match       https://user.mihoyo.com/
// @match       https://www.bilibili.com/
// @match       *://*/*
// @version     0.4
// @author      EA乖离
// @description 米游社、B站等任意网站获取cookie，只需点击菜单中的获取。(某些网站或未登录网站可能会获取失败)
// @grant       GM_registerMenuCommand
// @updateurl   https://raw.iqiq.io/a776058959/MihoyoBBSGetCookie/main/mihoyo.com%E8%8E%B7%E5%8F%96cookie.user.js
// ==/UserScript==
(function() {
  'use strict';
  async function runCommand() {
    try {
      var cookie = document.cookie
      var ask = confirm('Cookie:' + cookie + '\n\n\u662f\u5426\u8981\u5c06\u0063\u006f\u006f\u006b\u0069\u0065\u590d\u5236\u5230\u526a\u8d34\u677f\u003f')
      if (ask == true) {
        copy(cookie)
        function copy (cookie) {
          // cookie是复制文本
          // 创建input元素
          const el = document.createElement('input')
          // 给input元素赋值需要复制的文本
          el.setAttribute('value', cookie)
          // 将input元素插入页面
          document.body.appendChild(el)
          // 选中input元素的文本
          el.select()
          // 复制内容到剪贴板
          document.execCommand('copy')
          // 删除input元素
          document.body.removeChild(el)
//          alert('复制成功')
        }
        msg = cookie
      } else {
        msg = 'Cancel'
      }
    } catch (error) {
      localStorage.removeItem('MYS_COOKIE')
      await pushNotice(`\u83b7\u53d6\u5931\u8D25\uFF1A${error.message}`);
    }
  }
  GM_registerMenuCommand("\u83b7\u53d6", runCommand);
})();