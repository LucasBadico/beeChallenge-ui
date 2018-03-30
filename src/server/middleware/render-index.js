export default function renderIndex(html, css, assetMap, store) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bee</title>
  

    <style data-aphrodite>
    body {
      background: #e9e9e9;
      color: #666666;
      font-family: 'RobotoDraft', 'Roboto', sans-serif;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    #pricing-table {
      margin: 100px auto;
      text-align: center;
      width: 892px; /* total computed width = 222 x 3 + 226 */
    }
    
    #pricing-table .plan {
      font: 12px 'Lucida Sans', 'trebuchet MS', Arial, Helvetica;
      text-shadow: 0 1px rgba(255,255,255,.8);        
      background: #fff;      
      border: 1px solid #ddd;
      color: #333;
      padding: 20px;
      width: 180px; /* plan width = 180 + 20 + 20 + 1 + 1 = 222px */      
      float: left;
      position: relative;
    }
    
    #pricing-table #most-popular {
      z-index: 2;
      top: -13px;
      border-width: 3px;
      padding: 30px 20px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);
      -webkit-box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);
      box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);    
    }
    
    #pricing-table .plan:nth-child(1) {
      -moz-border-radius: 5px 0 0 5px;
      -webkit-border-radius: 5px 0 0 5px;
      border-radius: 5px 0 0 5px;        
    }
    
    #pricing-table .plan:nth-child(4) {
      -moz-border-radius: 0 5px 5px 0;
      -webkit-border-radius: 0 5px 5px 0;
      border-radius: 0 5px 5px 0;        
    }
    
    /* --------------- */	
    
    #pricing-table h3 {
      font-size: 20px;
      font-weight: 600;
      color: #11a9e9 !important;
      padding: 20px;
      margin: -20px -20px 50px -20px;
      background-color: #eee;
      background-image: -moz-linear-gradient(#fff,#eee);
      background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));    
      background-image: -webkit-linear-gradient(#fff, #eee);
      background-image: -o-linear-gradient(#fff, #eee);
      background-image: -ms-linear-gradient(#fff, #eee);
      background-image: linear-gradient(#fff, #eee);
    }
    
    #pricing-table #most-popular h3 {
      background-color: #ddd;
      background-image: -moz-linear-gradient(#eee,#ddd);
      background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));    
      background-image: -webkit-linear-gradient(#eee, #ddd);
      background-image: -o-linear-gradient(#eee, #ddd);
      background-image: -ms-linear-gradient(#eee, #ddd);
      background-image: linear-gradient(#eee, #ddd);
      margin-top: -30px;
      padding-top: 30px;
      -moz-border-radius: 5px 5px 0 0;
      -webkit-border-radius: 5px 5px 0 0;
      border-radius: 5px 5px 0 0; 		
    }
    
    #pricing-table .plan:nth-child(1) h3 {
      -moz-border-radius: 5px 0 0 0;
      -webkit-border-radius: 5px 0 0 0;
      border-radius: 5px 0 0 0;       
    }
    
    #pricing-table .plan:nth-child(4) h3 {
      -moz-border-radius: 0 5px 0 0;
      -webkit-border-radius: 0 5px 0 0;
      border-radius: 0 5px 0 0;       
    }	
    
    #pricing-table h3 span {
      display: block;
      font: bold 25px/100px Georgia, Serif;
      color: #777;
      background: #fff;
      border: 5px solid #fff;
      height: 100px;
      width: 100px;
      margin: 10px auto -65px;
      -moz-border-radius: 100px;
      -webkit-border-radius: 100px;
      border-radius: 100px;
      -moz-box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;
      -webkit-box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;
      box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;
    }
    
    /* --------------- */
    
    #pricing-table ul {
      margin: 20px 0 0 0;
      padding: 0;
      list-style: none;
    }
    
    #pricing-table li {
      border-top: 1px solid #ddd;
      padding: 10px 0;
    }
    
    /* --------------- */
      
    #pricing-table .signup {
      position: relative;
      padding: 8px 20px;
      margin: 20px 0 0 0;  
      color: #fff;
      font: bold 14px Arial, Helvetica;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;       
      background-color: #72ce3f;
      background-image: -moz-linear-gradient(#72ce3f, #62bc30);
      background-image: -webkit-gradient(linear, left top, left bottom, from(#72ce3f), to(#62bc30));    
      background-image: -webkit-linear-gradient(#72ce3f, #62bc30);
      background-image: -o-linear-gradient(#72ce3f, #62bc30);
      background-image: -ms-linear-gradient(#72ce3f, #62bc30);
      background-image: linear-gradient(#72ce3f, #62bc30);
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;     
      text-shadow: 0 1px 0 rgba(0,0,0,.3);        
      -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);
      -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);
      box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);
    }
    
    #pricing-table .signup:hover {
      background-color: #62bc30;
      background-image: -moz-linear-gradient(#62bc30, #72ce3f);
      background-image: -webkit-gradient(linear, left top, left bottom, from(#62bc30), to(#72ce3f));      
      background-image: -webkit-linear-gradient(#62bc30, #72ce3f);
      background-image: -o-linear-gradient(#62bc30, #72ce3f);
      background-image: -ms-linear-gradient(#62bc30, #72ce3f);
      background-image: linear-gradient(#62bc30, #72ce3f); 
    }
    
    #pricing-table .signup:active, #pricing-table .signup:focus {
      background: #62bc30;       
      top: 2px;
      -moz-box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset;
      -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset;
      box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset; 
    }
    
    /* --------------- */
    
    .clear:before, .clear:after {
      content:"";
      display:table
    }
    
    .clear:after {
      clear:both
    }
    
    .clear {
      zoom:1
    }

    .toggle {
      cursor: pointer;
      position: absolute;
      top: -0;
      right: -0;
      background: #33b5e5;
      width: 30px;
      height: 30px;
      margin: -5px 0 0;
      color: #ffffff;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
    }
    .toggle .tooltip {
      position: absolute;
      top: 10px;
      left: -60px;
      display: block;
      background: rgba(0, 0, 0, 0.6);
      width: auto;
      padding: 5px;
      font-size: 10px;
      line-height: 1;
      text-transform: uppercase;
    }
    .toggle .tooltip:before {
      content: '';
      position: absolute;
      top: 5px;
      right: -5px;
      display: block;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid rgba(0, 0, 0, 0.6);
    }

    ${css.content}
    </style>
    <script>
      var _rollbarConfig = {
          accessToken: "${process.env.ROLLBAR_ACCESS_TOKEN}",
          captureUncaught: false,
          enabled: ${process.env.NODE_ENV === 'production'},
          payload: {
            environment: "${process.env.SOURCE_VERSION}",
            client: {
              javascript: {
                source_map_enabled: true,
                code_version: "{{{ git_sha }}}",
                guess_uncaught_frames: true
              }
            }
          }
      };
      // Rollbar Snippet
      !function(r){function e(t){if(o[t])return o[t].exports;var n=o[t]={exports:{},id:t,loaded:!1};return r[t].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=r,e.c=o,e.p="",e(0)}([function(r,e,o){"use strict";var t=o(1).Rollbar,n=o(2);_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://d37gvrvc0wt4s1.cloudfront.net/js/v1.9/rollbar.min.js";var a=t.init(window,_rollbarConfig),i=n(a,_rollbarConfig);a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,i)},function(r,e){"use strict";function o(r){return function(){try{return r.apply(this,arguments)}catch(e){try{console.error("[Rollbar]: Internal error",e)}catch(o){}}}}function t(r,e,o){window._rollbarWrappedError&&(o[4]||(o[4]=window._rollbarWrappedError),o[5]||(o[5]=window._rollbarWrappedError._rollbarContext),window._rollbarWrappedError=null),r.uncaughtError.apply(r,o),e&&e.apply(window,o)}function n(r){var e=function(){var e=Array.prototype.slice.call(arguments,0);t(r,r._rollbarOldOnError,e)};return e.belongsToShim=!0,e}function a(r){this.shimId=++c,this.notifier=null,this.parentShim=r,this._rollbarOldOnError=null}function i(r){var e=a;return o(function(){if(this.notifier)return this.notifier[r].apply(this.notifier,arguments);var o=this,t="scope"===r;t&&(o=new e(this));var n=Array.prototype.slice.call(arguments,0),a={shim:o,method:r,args:n,ts:new Date};return window._rollbarShimQueue.push(a),t?o:void 0})}function l(r,e){if(e.hasOwnProperty&&e.hasOwnProperty("addEventListener")){var o=e.addEventListener;e.addEventListener=function(e,t,n){o.call(this,e,r.wrap(t),n)};var t=e.removeEventListener;e.removeEventListener=function(r,e,o){t.call(this,r,e&&e._wrapped?e._wrapped:e,o)}}}var c=0;a.init=function(r,e){var t=e.globalAlias||"Rollbar";if("object"==typeof r[t])return r[t];r._rollbarShimQueue=[],r._rollbarWrappedError=null,e=e||{};var i=new a;return o(function(){if(i.configure(e),e.captureUncaught){i._rollbarOldOnError=r.onerror,r.onerror=n(i);var o,a,c="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(o=0;o<c.length;++o)a=c[o],r[a]&&r[a].prototype&&l(i,r[a].prototype)}return e.captureUnhandledRejections&&(i._unhandledRejectionHandler=function(r){var e=r.reason,o=r.promise,t=r.detail;!e&&t&&(e=t.reason,o=t.promise),i.unhandledRejection(e,o)},r.addEventListener("unhandledrejection",i._unhandledRejectionHandler)),r[t]=i,i})()},a.prototype.loadFull=function(r,e,t,n,a){var i=function(){var e;if(void 0===r._rollbarPayloadQueue){var o,t,n,i;for(e=new Error("rollbar.js did not load");o=r._rollbarShimQueue.shift();)for(n=o.args,i=0;i<n.length;++i)if(t=n[i],"function"==typeof t){t(e);break}}"function"==typeof a&&a(e)},l=!1,c=e.createElement("script"),d=e.getElementsByTagName("script")[0],p=d.parentNode;c.crossOrigin="",c.src=n.rollbarJsUrl,c.async=!t,c.onload=c.onreadystatechange=o(function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){c.onload=c.onreadystatechange=null;try{p.removeChild(c)}catch(r){}l=!0,i()}}),p.insertBefore(c,d)},a.prototype.wrap=function(r,e){try{var o;if(o="function"==typeof e?e:function(){return e||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._wrapped){r._wrapped=function(){try{return r.apply(this,arguments)}catch(e){throw e._rollbarContext=o()||{},e._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=e,e}},r._wrapped._isWrap=!0;for(var t in r)r.hasOwnProperty(t)&&(r._wrapped[t]=r[t])}return r._wrapped}catch(n){return r}};for(var d="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError,unhandledRejection".split(","),p=0;p<d.length;++p)a.prototype[d[p]]=i(d[p]);r.exports={Rollbar:a,_rollbarWindowOnError:t}},function(r,e){"use strict";r.exports=function(r,e){return function(o){if(!o&&!window._rollbarInitialized){var t=window.RollbarNotifier,n=e||{},a=n.globalAlias||"Rollbar",i=window.Rollbar.init(n,r);i._processShimQueue(window._rollbarShimQueue||[]),window[a]=i,window._rollbarInitialized=!0,t.processPayloads()}}}}]);
      // End Rollbar Snippet
    </script>
    <link rel="stylesheet" href="https://unpkg.com/react-select@1.2.1/dist/react-select.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <div id="mount">${html}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      window.RENDERED_CLASS_NAMES = ${JSON.stringify(css.renderedClassNames)}
    </script>
    <script src="/beeChallenge-ui/build/client/assets/${assetMap['bundle.js']}"></script>
  </body>
</html>
`
}
