(function() {
    "use strict";
    console.log('Myscript Loaded');

    /**
     * 対応状況表で表示させる人(表示名, KintoneログインID, userNo)
     */
var User = [
  { name:'秋元', code:'jsakai@softcreate.co.jp', id:'1'},
  { name:'坂井', code:'ykitazawa@softcreate.co.jp', id:'3'},
  { name:'北沢', code:'hatakei@softcreate.co.jp', id:'4'},
  { name:'武井', code:'nakimoto@softcreate.co.jp', id:'5'},
];


    // レコード一覧画面
    kintone.events.on('app.record.index.show', function(event) {
        changeColor(event);
        createHeaderMenu();
        return event;
    });

    // レコード一覧編集画面
    kintone.events.on('app.record.index.edit.show', function(event) {
        return event;
    });

    // レコード詳細画面
    kintone.events.on('app.record.detail.show', function(event) {
        return event;
    });

    // レコード新規作成画面
    kintone.events.on('app.record.create.show', function(event) {
        areaChange(event);
        return event;
    });

    // レコード編集画面
    kintone.events.on('app.record.edit.show', function(event) {
        return event;
    });


    /**
     * 対応状況に応じて行色を変更する
     */
const changeColor = (event) => {
        const colors = {
      "未対応": "#FFFF99",
      "対応中": "#FFFFFF",
    };
    [].forEach.call(document.getElementsByClassName("recordlist-row-gaia"), function(tr){
      var column = tr.getElementsByClassName("value-5519883")[0];
      if(column) tr.style.background = colors[column.innerText];
    });
        console.log('ChangeColor Loaded');
        return;
};

const areaChange = (event) => {
var headwize = document.createElement('p')
    headwize.className = 'boxtopcss';
document.getElementsByClassName('contents-plus-gaia')[0].appendChild(headwize)[1];// 生成したdiv要素を追加する

    
        console.log('run AreaCahnge');
        return;
};

    /**
     * 一覧表示画面のヘッダー部分にメニューを追加する
     */
const createHeaderMenu = (event) => {
var MinT = document.createElement('table');
var MinR1 = document.createElement('tr');
var MinD1 = document.createElement('td');
    MinD1.className = 'MinD1';
var MinD2 = document.createElement('td');
var MinD3 = document.createElement('td');
    MinD3.className = 'MinD3';
var SubT1 = document.createElement('table');
var SubT2 = document.createElement('table');
var SubT3 = document.createElement('table');
        console.log('HeaderTableElement Loaded');

var KIimg = document.createElement('img');
　  KIimg.className = 'header-menu-pics';
　  KIimg.src = 'https://static.cybozu.com/contents/k/image/icon/app/tool.png';
var KIanchor = document.createElement("a");
　  KIanchor.href = "https://softcreate.cybozu.com/k/1757/";
    KIanchor.className = 'HEADER-anchor-txt';
    KIanchor.text = "キッティング";
var HEimg = document.createElement('img');
　  HEimg.className = 'header-menu-pics';
    HEimg.src = 'https://static.cybozu.com/contents/k/image/icon/app/appSupport.png';
var HEanchor = document.createElement("a");
    HEanchor.href = "https://softcreate.cybozu.com/k/1857/";
    HEanchor.className = 'HEADER-anchor-txt';
    HEanchor.text = "Helpデスク";
var OPimg = document.createElement('img');
　  OPimg.className = 'header-menu-pics';
    OPimg.src = 'https://static.cybozu.com/contents/k/image/icon/app/linegraph.png';
var OPanchor = document.createElement("a");
    OPanchor.href = "https://softcreate.cybozu.com/k/1858/";
    OPanchor.className = 'HEADER-anchor-txt';
    OPanchor.text = "運用代行";
        console.log('HeaderAnchorElement Loaded');
    
var f_url = 'https://devgxtsty.cybozu.com/k/'
var m_url = '/?view=2114&q=f5519900%20in%20(%22%20USER%22%2C%20%22'
var e_url = '%22)#sort_0=f5519891&order_0=asc&size=20'
        console.log('URLFunction Loaded');

var r_end = 1;  // rows
var c_end = User.length;  // columns



for (var r = 1; r <= r_end; r++) {
  var r000 = (r);
                var trJ1 = document.createElement('tr');                    
                var trJ2 = document.createElement('tr');
                for (let c = 1; c <= c_end; c++) {
                    var c000 = ('0000', c);
                    var tdJ1 = document.createElement('td');
                        tdJ1.className = 'tdJ';
                    var tdJ2 = document.createElement('td');
                        tdJ2.className = 'tdJ';
                    var UTXT = User[c-1].name;
                    var URL = f_url + kintone.app.getId() + m_url + User[c-1].id + e_url;
                    tdJ1.innerHTML = UTXT.link(URL) ;


var body = {
  'app': kintone.app.getId(),
  'query': 'PersonInCharge in ("' + (User[c-1].code) + '") and Status_0 not in ("クローズ")',
  'totalCount': 'true',
};

(function(tdJ2){
kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
  // success
  // console.log(resp.totalCount);
                    tdJ2.innerHTML = (resp.totalCount) ;
}, function(resp) {
  // error
  // console.log(error);
  if (resp.message !== undefined) {
      errmsg +='\n' + resp.message;
  }
alert(errmsg);
});
})(tdJ2);

                SubT2.appendChild(trJ1);
                SubT2.appendChild(trJ2);
                    trJ1.appendChild(tdJ1);
                    trJ2.appendChild(tdJ2);

}}//LoopEnd





var ul1 = document.createElement("ul");
    ul1.setAttribute('ID', 'nav');
var ul2 = document.createElement("ul");
var ul3 = document.createElement("ul");
var ul4 = document.createElement("ul");

var li1 = document.createElement("li");
  var a1 = document.createElement("a");
  		a1.href = "";
  		a1.innerText = "・運用SG-Menu";
    li1.appendChild(a1);

var li2 = document.createElement("li");
  var a2 = document.createElement("a");
  		a2.href = "https://softcreate.cybozu.com/k/1840/";
  		a2.target = "_blank";
  		a2.innerText = "・サービス契約一覧";
    li2.appendChild(a2);

var li3 = document.createElement("li");
  var a3 = document.createElement("a");
  		a3.href = "https://softcreate.cybozu.com/k/1869/";
  		a3.target = "_blank";
  		a3.innerText = "・FortiCloud契約一覧";
    li3.appendChild(a3);

var li4 = document.createElement("li");
  var a4 = document.createElement("a");
  		a4.href = "https://softcreate.cybozu.com/k/1837/";
  		a4.target = "_blank";
  		a4.innerText = "・PCLC業務改善";
    li4.appendChild(a4);

var li5 = document.createElement("li");
  var a5 = document.createElement("a");
  		a5.href = "https://softcreate.cybozu.com/k/1234/";
  		a5.target = "_blank";
  		a5.innerText = "・ProjectList";
    li5.appendChild(a5);

var li6 = document.createElement("li");
  var a6 = document.createElement("a");
  		a6.href = "https://softcreate.cybozu.com/k/1223/";
  		a6.target = "_blank";
  		a6.innerText = "・旧TS2G";
    li5.appendChild(a6);

var div = document.createElement("div");
    div.className = 'nav';
//:::::::::::::::::::[ExtMenu AppendArea]
ul1.appendChild(li1);
li1.appendChild(ul2);
  ul2.appendChild(li2);
  ul2.appendChild(li3);
  ul2.appendChild(li4);
  ul2.appendChild(li5);
  ul2.appendChild(li6);


//:::::::::::::::::::::::::::BaseTableAppendArea
SubT1.appendChild(KIimg);
SubT1.appendChild(KIanchor);
SubT1.appendChild(HEimg);
SubT1.appendChild(HEanchor);
SubT1.appendChild(OPimg);
SubT1.appendChild(OPanchor);
SubT3.appendChild(ul1);
    MinD1.appendChild(SubT1);
    MinD2.appendChild(SubT2);
    MinD3.appendChild(SubT3);
        MinR1.appendChild(MinD1);
        MinR1.appendChild(MinD2);
        MinR1.appendChild(MinD3);
            MinT.appendChild(MinR1);
            
document.getElementsByClassName('gaia-argoui-app-titlebar gaia-argoui-app-titlebar-has-icon')[0].appendChild(MinT)[1];// 生成したdiv要素を追加する


        return;
    };


    

})();