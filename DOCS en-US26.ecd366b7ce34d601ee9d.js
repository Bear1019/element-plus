(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/i18n.md?vue&type=template&id=2c6fce50

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"internationalization\"><a class=\"header-anchor\" href=\"#internationalization\">¶</a> Internationalization</h2><p>The default locale of Element Plus is English. If you want to use another language, you&#39;ll need to do some i18n configuration. In your entry file, if you are importing Element Plus entirely:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n\ncreateApp(App).use(ElementPlus, { locale })\n</code></pre><p>Or if you are importing Element Plus on demand:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\n<span class=\"hljs-comment\">// configure language</span>\nlocale.use(lang)\n\n<span class=\"hljs-comment\">// import components</span>\nVue.component(ElButton.name, ElButton)\nVue.component(ElSelect.name, ElSelect)\n</code></pre><h3 id=\"set-day.js-locale\"><a class=\"header-anchor\" href=\"#set-day.js-locale\">¶</a> Set Day.js locale</h3><p>Element Plus use date time locale (month name, first day of the week ...) from <a href=\"https://day.js.org/\">Day.js</a> directlly. And will set the global Day.js locale automaticatlly after the locale file is loaded.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n\n<span class=\"hljs-comment\">// will auto set Day.js locale to &#39;zh-cn&#39;</span>\napp.use(ElementPlus, { locale })\n</code></pre><p>However, you can use another Day.js locale if needed.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\ndayjs.locale(<span class=\"hljs-string\">&#39;fr&#39;</span>)\n</code></pre><p>The English locale is imported by default, even if you&#39;re using another locale. But with <code>NormalModuleReplacementPlugin</code> provided by webpack you can replace default locale:</p><p>webpack.config.js</p><pre><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(\n      <span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>,\n      <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>,\n    ),\n  ]\n}\n</code></pre><h3 id=\"compatible-vue-i18n-9.x\"><a class=\"header-anchor\" href=\"#compatible-vue-i18n-9.x\">¶</a> Compatible <code>vue-i18n@9.x</code></h3><p>If you need to check out <a href=\"https://vue-i18n-next.intlify.dev/guide/#html\">VueI18n documentation</a>, please click this link to check it out.</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// No message translations, it will fallback to en lang, the definition of fallbackLocale is below 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus, {\n  <span class=\"hljs-attr\">i18n</span>: i18n.global.t,\n})\n\n<span class=\"hljs-comment\">// Remember to use this plugin.</span>\napp.use(i18n)\n</code></pre><h3 id=\"compatible-with-other-i18n-plugins\"><a class=\"header-anchor\" href=\"#compatible-with-other-i18n-plugins\">¶</a> Compatible with other i18n plugins</h3><p>Element Plus may not be compatible with i18n plugins other than vue-i18n, but you can customize how Element Plus processes i18n.</p><div class=\"tip\"><p>Once you set this method, the internal translation function will be invalid, only the customized translation method will be used, be sure that your custom translation method can translate format like <code>el.scope.subName</code>, other wise the internal translation string will be raw string.</p></div><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n<span class=\"hljs-comment\">// The is the signature of i18n method.</span>\n<span class=\"hljs-keyword\">type</span> i18n = <span class=\"hljs-function\">(<span class=\"hljs-params\">...args: <span class=\"hljs-built_in\">any</span>[]</span>) =&gt;</span> <span class=\"hljs-built_in\">string</span>\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">path, options</span>) </span>{\n    <span class=\"hljs-comment\">// ...</span>\n  },\n  <span class=\"hljs-comment\">// others.</span>\n})\n</code></pre><h3 id=\"custom-i18n-in-on-demand-components\"><a class=\"header-anchor\" href=\"#custom-i18n-in-on-demand-components\">¶</a> Custom i18n in on-demand components</h3><p>\bIf you need to know how to lazy loading translation strings, please check this out<a href=\"https://vue-i18n-next.intlify.dev/guide/advanced/lazy.html\">Lazy loading</a></p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n    <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// No message translations, it will fallback to en lang, the definition of fallbackLocale is below 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\nElementLocale.i18n(i18n.global.t)\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(i18n)\n</code></pre><h3 id=\"import-via-cdn\"><a class=\"header-anchor\" href=\"#import-via-cdn\">¶</a> Import via CDN</h3><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/dayjs/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  ELEMENT.locale(ELEMENT.lang.zhCn)\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Compatible with <code>vue-i18n</code></p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">const</span> i18n = Vue18n.createI18n({\n    <span class=\"hljs-attr\">locale</span>: Element.lang.zhCN.name,\n    <span class=\"hljs-attr\">fallbackLocale</span>: Element.lang.en.name,\n    <span class=\"hljs-attr\">messages</span>: {\n      [ELEMENT.lang.en.name]: {\n        <span class=\"hljs-comment\">// el property is critical, set this in order for ElementPlus translate strings correctly.</span>\n        <span class=\"hljs-attr\">el</span>: ELEMENT.lang.en.el,\n        <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n        <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n        },\n      },\n      [ELEMENT.lang.zhCN.name]: {\n        <span class=\"hljs-attr\">el</span>: ELEMENT.lang.zhCN.el,\n        <span class=\"hljs-comment\">// Define your own dictionary with your own namespace, but DO NOT use the namespace `el`,</span>\n        <span class=\"hljs-comment\">// Because that makes the ElementPlus internal translation invalid.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n        },\n      },\n      <span class=\"hljs-attr\">testLocale</span>: {\n        <span class=\"hljs-attr\">el</span>: {},\n        <span class=\"hljs-comment\">// No message translations, it will fallback to en lang.</span>\n      },\n    },\n  })\n\n  <span class=\"hljs-keyword\">const</span> app = Vue.createApp()\n  app.use(i18n)\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Currently Element Plus ships with the following languages:</p><ul class=\"language-list\"><li>Simplified Chinese (zh-cn)</li><li>English (en)</li><li>German (de)</li><li>Portuguese (pt)</li><li>Spanish (es)</li><li>Danish (da)</li><li>French (fr)</li><li>Norwegian (nb-NO)</li><li>Traditional Chinese (zh-tw)</li><li>Italian (it)</li><li>Korean (ko)</li><li>Japanese (ja)</li><li>Dutch (nl)</li><li>Vietnamese (vi)</li><li>Russian (ru)</li><li>Turkish (tr)</li><li>Brazilian Portuguese (pt-br)</li><li>Farsi (fa)</li><li>Thai (th)</li><li>Indonesian (id)</li><li>Bulgarian (bg)</li><li>Polish (pl)</li><li>Finnish (fi)</li><li>Swedish (sv)</li><li>Greek (el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>Czech (cs)</li><li>Ukrainian (uk)</li><li>Turkmen (tk)</li><li>Tamil (ta)</li><li>Latvian (lv)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>Hebrew (he)</li><li>Lithuanian (lt)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>Hungarian (hu)</li><li>Romanian (ro)</li><li>Kurdish (ku)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li></ul><p>If your target language is not included, you are more than welcome to contribute: just add another language config <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang\">here</a> and create a pull request.</p>", 30);

function render(_ctx, _cache) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/en-US/i18n.md?vue&type=template&id=2c6fce50

// CONCATENATED MODULE: ./website/docs/en-US/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);