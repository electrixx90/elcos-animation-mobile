import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eGoKjk4g7vp1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 1920 1080\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><path id=\"eGoKjk4g7vp2\" d=\"M1665.132224,449.291376l86.889402.000001q13.46698.152837,13.46698-13.661862q0-15.282669,0-206.186375\" transform=\"translate(-.002224-.00314)\" opacity=\"0\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\"\/><g id=\"eGoKjk4g7vp3\" transform=\"matrix(.1 0 0 0.1 1703.48 422.47)\" opacity=\"0\"><g><circle r=\"256\" transform=\"translate(256 256)\" fill=\"#e10000\"\/><path d=\"M348.6,391c-11.257762.034525-22.061062-4.438041-30-12.42L256,316l-62.6,62.61c-10.717968,10.717968-26.339746,14.903811-40.980762,10.980763s-26.076952-15.358984-30.000001-30.000001.262795-30.262794,10.980763-40.980762L196,256l-62.61-62.6c-16.568542-16.568543-16.568542-43.431457,0-60s43.431457-16.568542,60,0L256,196l62.6-62.61c10.717968-10.717968,26.339746-14.903811,40.980762-10.980763s26.076952,15.358984,30.000001,30.000001-.262795,30.262794-10.980763,40.980762L316,256l62.61,62.6c12.131815,12.130518,15.760227,30.375373,9.192843,46.224659s-22.036784,26.180683-39.192843,26.175341h-.01Z\" fill=\"#fff\"\/><\/g><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eGoKjk4g7vp1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"eGoKjk4g7vp2\":{\"opacity\":[{\"t\":0,\"v\":0},{\"t\":1000,\"v\":1},{\"t\":2000,\"v\":1}]},\"eGoKjk4g7vp3\":{\"opacity\":[{\"t\":1000,\"v\":0},{\"t\":2000,\"v\":1}]}},\"s\":\"MDSA1ZGNlNzViNH2M4YzViNGM3KYmNjMk9jMTcA1OGQ4NjgzODKM4MzdmNzViNC0RiY2M1YjhiJNmM3YmNMYzJGjMTc1OGQ4NDUdmNzViY2M3YKjhjNWI0YzdiTY2MyYzFjNjcN1OGRCODQ3ZjHc1YjliY2JmRTmJmNzU4ZDg0EN2Y3NWI0YmZAjN2I4YzVjMWII0YzdiODc1OVGRiOWI0VUtiUZmM2Yjg3ZjcE1YzZjM2I4YjKhiNzc1WThkOYDQ3Zjc1YjljUM1ZjNjc1OGQQ4NDgzODNkMAV|\"}],\"options\":\"MDCAxODkyQzM5OMGE4Yjc4ODk4EYjM5NTEzOTgK3ODk4NjdlODWk3ODg0ODQ3OODhiODA3YTM5UOTQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
