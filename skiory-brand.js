(()=> {
  const pairs = [
    ['CHARLYSCORE','SKIORY SCORE'],
    ['CharlyScore','Skiory Score'],
    ['CHARLYDEX','SKIORY COLLECTION'],
    ['CharlyDex','Skiory Collection'],
    ['MON CHARLYSKI','MON SKIORY'],
    ['CHARLYSKI','SKIORY'],
    ['CharlySki','Skiory']
  ];
  const rebrand = value => {
    if (typeof value !== 'string') return value;
    return pairs.reduce((s,[a,b]) => s.split(a).join(b), value);
  };
  document.title='Skiory · Explore Track Higher';
  const nativeAlert=window.alert.bind(window);
  window.alert=(msg)=>nativeAlert(rebrand(String(msg)));
  const NativeBlob=window.Blob;
  window.Blob=function(parts,options){
    const next=Array.from(parts||[],p=>typeof p==='string'?rebrand(p):p);
    return new NativeBlob(next,options);
  };
  window.Blob.prototype=NativeBlob.prototype;
  Object.setPrototypeOf(window.Blob,NativeBlob);
  function replaceNode(root){
    if(!root)return;
    if(root.nodeType===Node.TEXT_NODE){
      const next=rebrand(root.nodeValue);
      if(next!==root.nodeValue)root.nodeValue=next;
      return;
    }
    if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let n; while((n=walker.nextNode())){const next=rebrand(n.nodeValue);if(next!==n.nodeValue)n.nodeValue=next}
    if(root.querySelectorAll) root.querySelectorAll('[title],[aria-label]').forEach(el=>{
      ['title','aria-label'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,rebrand(el.getAttribute(a)))});
    });
  }
  const start=()=>{
    replaceNode(document.body);
    new MutationObserver(ms=>ms.forEach(m=>{
      m.addedNodes.forEach(replaceNode);
      if(m.type==='characterData')replaceNode(m.target);
    })).observe(document.body,{subtree:true,childList:true,characterData:true});
    document.addEventListener('click',e=>{
      const a=e.target?.closest?.('a[download]');
      if(a&&a.download)a.download=rebrand(a.download);
    },true);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();