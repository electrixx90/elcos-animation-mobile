import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eH5u7mJ9bOs1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 1920 1080\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><g id=\"eH5u7mJ9bOs2\" transform=\"matrix(2.2 0 0 2.2 517.342 556.448335)\" opacity=\"0\"><path d=\"M51.11,8.24C47.33,7.84,43.6,7,40.01,5.73c-3.29-1.16-6.45-2.68-9.42-4.51-1.58-.97-3.57-.97-5.15,0-2.97,1.83-6.13,3.35-9.42,4.51-3.59,1.26-7.31,2.11-11.1,2.51-2.52.26-4.43,2.38-4.43,4.91v14.66c0,11.02,5.98,21.17,15.61,26.52l9.51,5.28c1.49.84,3.31.84,4.8,0l9.51-5.29c9.63-5.35,15.6-15.5,15.6-26.52v-14.66c0-2.53-1.91-4.65-4.43-4.91l.02.01Z\" fill=\"#2855a2\" stroke=\"#000\" stroke-miterlimit=\"10\"\/><path d=\"M27.09591,0.4925C24.12591,2.3225,19.31,4.57,16.02,5.73C12.43,6.99,8.71,7.84,4.92,8.24c-2.52.26-4.43,2.38-4.43,4.91v14.66c0,11.02,5.98,21.17,15.61,26.52l10.99591,5.909998\" fill=\"#186bb4\" stroke=\"#000\" stroke-miterlimit=\"10\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eH5u7mJ9bOs1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"eH5u7mJ9bOs2\":{\"opacity\":[{\"t\":0,\"v\":0},{\"t\":1000,\"v\":1}]}},\"s\":\"MDQA1ZGI2QzVkRQzlmYjBhZDljJYWZhNGFhYTkE1ZDc1NmU2YlIM2Yk02YjY3NBWQ5ZmE0WFBhCZGEwOWVhZmEH0U2FhYTk1ZDVc1NmM2NzVkYATRCYWZhMGFkYOWNhZmE0YWFWhOWFlNWQ3NTKZjNjc1ZGExYNTRhN2E3NWQ3RNTZjNjc1ZDlEjYTdhZmEwYWMRhOTljYWZhMPDVkNzVhMTljXYTdhZVZhMDYT3NWRhZWFiYTTBhMDlmNWQ3NHTZjNjc1ZGExWYWJhZVM1ZDcO1NmM2YjZiYjTg\/\"}],\"options\":\"MDUAxODkyMzlGOQGE4Yjc4ODk4GYjM5QTUxMzkY4N1g4OTg2N2NU4OTc4ODQ4NGDc4OGI4MDdhWMzk5NA|\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
