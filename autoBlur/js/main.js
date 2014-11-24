
require.config({
    urlArgs: "v=" + (new Date()).getTime(),
    baseUrl: 'js/',
    paths: {
        'jQuery': '/include/js/jquery',
        'underscore': '/include/js/underscore',
        'text': '/include/js/require.text',
        'domReady': '/include/js/require.domReady',
        'sun': '/sun/sun'
    }
});

require(['jQuery', 'underscore', 'sun'], function () {
    $('#opciones').hide();
        
    var srcElm = $('#searchBox');
    var elmBlur = $('#opciones');
    
    srcElm.click(function (evt) {
        elmBlur.slideDown();
        
        sun.autoBlur(srcElm[0], elmBlur[0], function () {
            elmBlur.hide();
        });
    });
    
    var srcElm2 = $('#searchBox2');
    var elmBox2 = $('#box2');
    
    srcElm2.click(function (evt){
        elmBox2.show();
        
        sun.autoBlur(srcElm2[0], elmBox2[0], function () {
            elmBox2.hide();
        });
    });
});

function getTemplateUrl (sUrl) {
    return 'text!../templates/' + sUrl;
}

