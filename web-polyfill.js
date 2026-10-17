/* 喵科大起始页 Web 版 Polyfill
 * 让柠檬源码构建的扩展产物，在不加载扩展（纯网页 / GitHub Pages）环境下也能运行。
 * 模拟 chrome.* API，storage 用 localStorage 持久化。
 */
(function () {
  if (
    typeof chrome !== 'undefined' &&
    chrome &&
    chrome.runtime &&
    chrome.runtime.id
  ) {
    return // 已处于扩展环境，不覆盖
  }
  var NAMESPACE = 'miaoke-start:'
  function readAll() {
    try { return JSON.parse(localStorage.getItem(NAMESPACE + 'all') || '{}') } catch (e) { return {} }
  }
  function writeAll(obj) {
    try { localStorage.setItem(NAMESPACE + 'all', JSON.stringify(obj)) } catch (e) {}
  }
  function getValue(keys) {
    var all = readAll()
    var out = {}
    var list = Array.isArray(keys) ? keys : (keys == null ? Object.keys(all) : [keys])
    list.forEach(function (k) { out[k] = all[k] })
    return out
  }
  var evt = function () {
    return { addListener: function () {}, removeListener: function () {}, hasListener: function () { return false } }
  }
  var storageArea = {
    get: async function (k) { return getValue(k) },
    set: async function (obj) {
      var all = readAll(); Object.assign(all, obj); writeAll(all); return undefined
    },
    remove: async function (k) {
      var all = readAll(); if (Array.isArray(k)) k.forEach(function (x) { delete all[x] }); else delete all[k]
      writeAll(all)
    },
    clear: async function () { try { localStorage.removeItem(NAMESPACE + 'all') } catch (e) {} },
    onChanged: evt(),
  }
  var storage = {
    local: storageArea,
    sync: { get: async function () { return {} }, set: async function () {}, remove: async function () {}, onChanged: evt() },
    managed: { get: async function () { return {} }, onChanged: evt() },
    session: { get: async function () { return {} }, set: async function () {}, remove: async function () {}, onChanged: evt() },
    onChanged: evt(),
  }
  globalThis.chrome = {
    runtime: {
      id: 'web',
      getURL: function (p) { return p },
      getManifest: function () { return { version: '1.0.0', name: 'miaoke-start' } },
      onMessage: evt(),
      sendMessage: async function () { return undefined },
    },
    storage: storage,
    topSites: { get: async function () { return [] }, onMostVisitedURLs: evt() },
    bookmarks: { getTree: async function () { return [] } },
    i18n: { getMessage: function (k) { return k }, getUILanguage: function () { return 'zh-CN' } },
    tabs: { create: async function () {}, update: async function () {}, query: async function () { return [] } },
    permissions: { contains: async function () { return true }, request: async function () { return true } },
    alarms: { create: function () {}, onAlarm: evt() },
    contextMenus: { create: function () {} },
    windows: { create: async function () {} },
    browserAction: { onClicked: evt() },
    action: { onClicked: evt() },
    runtime_: evt(),
  }
  // —— 网页版 Wallpaper 修复：拦截 Bing 每日壁纸请求，改用可加载的图片源 ——
  try {
    var WALLPAPER = 'https://picsum.photos/seed/miaoke/1920/1080'
    var _fetch = globalThis.fetch.bind(globalThis)
    globalThis.fetch = async function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || ''
      if (url.indexOf('HPImageArchive') >= 0) {
        return new Response(
          JSON.stringify({
            images: [
              { fullstartdate: Date.now(), url: '', urlbase: '/th?id=OHR.miaoke-web', copyright: '', copyrightlink: '', title: '喵科大' },
            ],
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } },
        )
      }
      if (url.indexOf('/th?id=OHR.miaoke-web') >= 0) {
        var imgResp = await _fetch(WALLPAPER)
        var blob = await imgResp.blob()
        return new Response(blob, {
          status: 200,
          headers: { 'Content-Type': blob.type || 'image/jpeg' },
        })
      }
      return _fetch(input, init)
    }
  } catch (e) {}
  // —— 网页版快捷链接显示 + 背景兜底修复 ——
  ;(function () {
    var tries = 0
    var iv = setInterval(function () {
      tries++
      var ql = document.querySelector('[class*="quick-links"]')
      if (ql) {
        ql.style.opacity = '1'
        ql.style.visibility = 'visible'
      }
      // 背景兜底：柠檬 Bing 壁纸在网页版无法加载时，直接设置壁纸
      var bgImg = document.querySelector('.background-container img, .background-container video')
      var wrapper = document.querySelector('.background-wrapper')
      if (!bgImg && wrapper) {
        wrapper.style.backgroundImage =
          "url('https://picsum.photos/seed/miaoke/1920/1080')"
        wrapper.style.backgroundSize = 'cover'
        wrapper.style.backgroundPosition = 'center'
      }
      // 右下角按钮：hover 提示 + 可见文字标签（手机无 hover 也能看到是什么）
      var tips = { 'setting-btn': '设置', 'bookmark-btn': '书签', 'download-bg-btn': '下载背景', 'refresh-bg-btn': '更换背景', 'action-btn': '下载背景' }
      var abtns = document.querySelectorAll('.action-btn')
      for (var ai = 0; ai < abtns.length; ai++) {
        var ab = abtns[ai]
        var acls = ab.getAttribute('class') || ''
        var labelText = null
        for (var tk in tips) {
          if (acls.indexOf(tk) >= 0) { labelText = tips[tk]; break }
        }
        if (!labelText) continue
        if (!ab.getAttribute('title')) ab.setAttribute('title', labelText)
        if (!ab.querySelector('.miaoke-label')) {
          var sp = document.createElement('span')
          sp.className = 'miaoke-label'
          sp.textContent = labelText
          ab.appendChild(sp)
        }
      }
      if (tries > 50) clearInterval(iv)
    }, 400)
  })()
  // —— i18n 初始化：设置面板文字依赖 i18next 翻译，网页版跳过 settings init 导致未初始化，这里单独触发 ——
  ;(function () {
    var tried = 0
    var iv = setInterval(function () {
      tried++
      if (document.querySelector('.app') || tried > 10) {
        clearInterval(iv)
        setTimeout(function () {
          import('/chunks/i18n-zGyb6THU.js')
            .then(function (m) {
              if (m.initI18n) return m.initI18n()
            })
            .catch(function () {})
        }, 0)
      }
    }, 300)
  })()
  // —— 右下角按钮文字标签样式（图标下方小字，不破坏原布局） ——
  ;(function () {
    var st = document.createElement('style')
    st.textContent =
      '.action-btn{position:relative!important}' +
      '.miaoke-label{position:absolute;top:calc(100% + 4px);left:50%;transform:translateX(-50%);' +
      'font-size:10px;line-height:1;white-space:nowrap;color:rgba(255,255,255,.82);' +
      'text-shadow:0 1px 2px rgba(0,0,0,.55);pointer-events:none;z-index:30}'
    document.head.appendChild(st)
  })()
})()
