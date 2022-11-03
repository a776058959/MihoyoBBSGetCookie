// ==UserScript==
// @name        mihoyo.com获取cookie
// @namespace   none
// @match       https://user.mihoyo.com/
// @version     0.1
// @author      EA乖离
// @description 米游社获取cookie
// @grant       GM_registerMenuCommand
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