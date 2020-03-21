// ------------------------------------------------------------
// kintone record showイベント
(function() {
    "use strict";
    kintone.events.on('app.record.index.show', function(event) {

// ------------------------------------------------------------
// div要素生成
    var div0 = document.createElement('div');// div要素を生成
        div0.className = 'pclc-header-0';// classを追加
     var div1 = document.createElement('div');// div要素を生成
        div1.className = 'pclc-header-root';// classを追加



    var img = document.createElement('img');// img要素を生成
      img.className = 'kintone-setting-pics';// 画像classを追加
      img.src = 'https://static.cybozu.com/contents/k/image/icon/app/tool.png';// 画像パスを追加
      img.alt = 'kintone-setting-pics';// altを追加
            div1.appendChild(img);// img要素をdiv要素の子要素に追加
    var KIanchor = document.createElement("a");// HTMLAnchorElement オブジェクトを作成する
      KIanchor.href = "https://devgxtsty.cybozu.com/k/2/";// ハイパーリンク先を指定
      KIanchor.className = 'HEADER-anchor-txt';// 画像classを追加
            div1.appendChild(KIanchor);// BODY のノードリストに登録する
      ElementSetTextContent(KIanchor," キッティング  ");// アンカーに文字列をセットする

    var img = document.createElement('img');// img要素を生成
      img.className = 'kintone-setting-pics';// 画像classを追加
      img.src = 'https://static.cybozu.com/contents/k/image/icon/app/appSupport.png';// 画像パスを追加
      img.alt = 'kintone-setting-pics';// altを追加
            div1.appendChild(img);// img要素をdiv要素の子要素に追加
    var HEanchor = document.createElement("a");// HTMLAnchorElement オブジェクトを作成する
      HEanchor.href = "https://devgxtsty.cybozu.com/k/1/";// ハイパーリンク先を指定
      HEanchor.className = 'HEADER-anchor-txt';// 画像classを追加
            div1.appendChild(HEanchor);// BODY のノードリストに登録する
      ElementSetTextContent(HEanchor,"HELPデスク");// アンカーに文字列をセットする


// ------------------------------------------------------------
// エレメントに文字列をセットして、テキストノードを構築する関数
function ElementSetTextContent(element,str){
	if(element.textContent !== undefined){
		element.textContent = str;
	}
	if(element.innerText !== undefined){
		element.innerText = str;
	}
}
	    
     var div2 = document.createElement('div');// div要素を生成
        div2.className = 'pclc-header-contents';// classを追加

// ------------------------------------------------------------
// 各div要素をappend
{div0.appendChild(div1)// pclc-header-0 < pclc-header-root
div0.appendChild(div2);// pclc-header-root < pclc-header-contents
document.getElementsByClassName(
  'gaia-argoui-app-titlebar gaia-argoui-app-titlebar-has-icon')[0]
        .appendChild(div0)[1];// 生成したdiv要素を追加する
}

    });
})();
