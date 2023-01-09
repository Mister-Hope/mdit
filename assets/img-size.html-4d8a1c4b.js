import{_ as s}from"./logo-a60c622a.js";import{_ as l,V as u,W as i,a0 as k,Y as r,Z as t,X as a,$ as n,a1 as d,k as g}from"./framework-065971e3.js";const m={},h=a("p",null,"Plugins to support image size syntax.",-1),w=a("h2",{id:"usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),x=a("div",{class:"language-typescript","data-ext":"ts"},[a("pre",{class:"language-typescript"},[a("code",null,[a("span",{class:"token keyword"},"import"),n(" MarkdownIt "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"markdown-it"'),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" imgSize "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"@mdit/plugin-img-size"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" mdIt "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"MarkdownIt"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),n("imgSize"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

mdIt`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"render"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"![image](https://example.com/image.png =300x200)"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1),q=a("div",{class:"language-javascript","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token keyword"},"const"),n(" MarkdownIt "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"markdown-it"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"{"),n(" imgSize "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"@mdit/plugin-img-size"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" mdIt "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"MarkdownIt"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),n("imgSize"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`

mdIt`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"render"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"![image](https://example.com/image.png =300x200)"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])])],-1),v=d(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>You can use <code>=widthxheight</code> to specify the image size at the end of image link.</p><p>Both <code>width</code> and <code>height</code> should be number which means size in pixels, and both of them are optional. The whole marker should be separated with spaces from the image link.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>![Alt](/example.png =200x300)

![Alt](/example.jpg &quot;Image title&quot; =200x)
![Alt](/example.bmp =x300)
</code></pre></div><p>will be parsed as:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Image title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/example.bmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p><img src="`+s+'" alt="Logo" title="Markdown" width="200" height="200" loading="lazy"><img src="'+s+'" alt="Logo" title="Markdown" width="150" loading="lazy"><img src="'+s+`" alt="Logo" title="Markdown" height="100" loading="lazy"></p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>![Logo](/logo.svg &quot;Markdown&quot; =200x200)
![Logo](/logo.svg &quot;Markdown&quot; =150x)
![Logo](/logo.svg &quot;Markdown&quot; =x100)
</code></pre></div>`,9);function _(f,y){const e=g("CodeTabs");return u(),i("div",null,[h,k(" more "),w,r(e,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:o,value:p,isActive:c})=>[x]),tab1:t(({title:o,value:p,isActive:c})=>[q]),_:1}),v])}const I=l(m,[["render",_],["__file","img-size.html.vue"]]);export{I as default};
