import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eBAZ2q1yVRL1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 1920 1080\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><g transform=\"matrix(.7 0 0 0.7-4.870781 296.477793)\"><g id=\"eBAZ2q1yVRL3\" transform=\"matrix(.27021 0 0 0.27021 1705.429656 600.588876)\" opacity=\"0\"><circle r=\"256\" transform=\"translate(256 256)\" fill=\"#f44336\"\/><ellipse rx=\"36.890481\" ry=\"36.890481\" transform=\"matrix(4.324334 0 0 4.324334 257.1219 255.999996)\" fill=\"#f44336\" stroke=\"#fff\" stroke-width=\"10\"\/><\/g><g id=\"eBAZ2q1yVRL6\" transform=\"matrix(.27 0 0 0.27 1705.48 600.64)\" opacity=\"0\"><path d=\"M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256-114.8-256-256-256Z\" clip-rule=\"evenodd\" fill=\"#4bae4f\" fill-rule=\"evenodd\"\/><rect width=\"75\" height=\"335\" rx=\"0\" ry=\"0\" transform=\"translate(218 90.3)\" fill=\"#fff\"\/><\/g><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eBAZ2q1yVRL1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"eBAZ2q1yVRL3\":{\"opacity\":[{\"t\":800,\"v\":0},{\"t\":1000,\"v\":1},{\"t\":2000,\"v\":0},{\"t\":7000,\"v\":1}]},\"eBAZ2q1yVRL6\":{\"opacity\":[{\"t\":0,\"v\":0},{\"t\":2000,\"v\":1},{\"t\":7000,\"v\":0},{\"t\":7100,\"v\":0}]}},\"s\":\"MDAA1ZGNmNzZiOSGM5YzZiNWM4WYmRjM2MyNzYF4ZVM4Yzg0ODXQ4NDgwNzZGYCjhiZGM2YjliDN2M4YmRjM2MMyQTc2OGU4NTTgwNzZiZGM4YTjljNmI1YzhUAYmRjM2MyTWMF3NzY4ZTg1ODKBDNzZiYWJkYOzBjMDc2OGU4PNTgwNzZiNWMIwYzhiOWM2YzBJiNWM4Yjk3NOjhlYmFiNWMwDYzdiOTgwNzZEjN0hjNGI5YjYliODc2OGU4NYVE4MDc2YmFjLNEljNzc2OGUM4NTg0ODRIZDUE\/\"}],\"options\":\"MDNAxODhhMzE4MPlU4MzcwODE4AMzMxNDkzMUgN3ZjgxN2U3NjNgxNzA3YzdjNLzA4Mzc4NzIzVMThj\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    const html = getHtml();
    if (!SVGatorPlayer.getWebViewProps) {
        console.warn("Your currently installed @svgator/react-native package is outdated. " +
            "Please update it to the newest version. " +
            "See more: https://www.npmjs.com/package/@svgator/react-native");
        const newProps = SVGatorPlayer.parseProps(props, html);
        return (
            <WebView ref={ref}
                     {...newProps}
                     source={{html}}
                     containerStyle={{flex: 0}}
                     style={{backgroundColor: "transparent", flex: 0}}/>
        );
    }

    const {newProps, styles} = SVGatorPlayer.getWebViewProps(props, html);

    return (
        <WebView
            ref={ref}
            {...newProps}
            source={{html}}
            containerStyle={[styles.container, props.container]}
            style={styles.style}
        />
    );
});

export default SVGatorComponent;
