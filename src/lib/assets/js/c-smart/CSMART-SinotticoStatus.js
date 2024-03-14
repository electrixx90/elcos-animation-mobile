import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eag3e0xYPyv1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 1920 1080\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><g id=\"eag3e0xYPyv5\" transform=\"matrix(.246342 0 0 0.246342 53.047369 489.296293)\"><path d=\"M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256-114.8-256-256-256Z\" clip-rule=\"evenodd\" fill=\"#4bae4f\" fill-rule=\"evenodd\"\/><path d=\"M206.7,373.1c-32.7-32.7-65.2-65.7-98-98.4-3.6-3.6-3.6-9.6,0-13.2l37.7-37.7c3.6-3.6,9.6-3.6,13.2,0l53.9,53.9L352.1,139c3.7-3.6,9.6-3.6,13.3,0l37.8,37.8c3.7,3.7,3.7,9.6,0,13.2L219.9,373.1c-3.6,3.7-9.5,3.7-13.2,0Z\" fill=\"#fff\"\/><\/g><g id=\"eag3e0xYPyv8\" transform=\"matrix(.25 0 0 0.25 50.577817 487.319608)\" opacity=\"0\"><g transform=\"translate(-.014063-13.399999)\"><path d=\"M506.4,432.6L294.7,36.1c-2.8-5.3-6.7-9.8-11.2-13.4-3.8-3-8-5.3-12.7-6.9-.9-.3-1.9-.6-2.8-.9-3.8-1-7.8-1.5-12-1.5-16.6,0-31.1,8.5-38.7,22.7L5.6,432.6C-2,447,-1.9,462.9,6,476.5c8,13.8,22.3,22.1,38.3,22.1h211.7h211.7v0c16,0,30.3-8.3,38.3-22.1c7.9-13.6,8-29.5.4-43.9Z\" fill=\"#f44336\"\/><g><path d=\"M256,313.5v0v0c22.1,0,40-18,40-40v-86.5c0-21.4-16.8-38.9-38-40-.7,0-1.4-.1-2.1-.1v0v0c-22.1,0-40,18-40,40v86.5c.1,22.2,18,40.1,40.1,40.1Z\" fill=\"#fff\"\/><path d=\"M282.9,363.9c-.9-.9-1.9-1.7-3-2.4-1.5-1.2-3.2-2.2-4.9-3.1-5.7-3.1-12.2-4.8-19.1-4.8v0v0v0c-22.1,0-40,18-40,40c0,22.1,18,40,40,40v0v0v0c6.9,0,13.4-1.8,19.1-4.8c1.7-.9,3.3-2,4.9-3.1c1-.8,2-1.6,3-2.4C291,416,296,405.4,296,393.7c0-11.9-5-22.4-13.1-29.8Z\" fill=\"#fff\"\/><\/g><\/g><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eag3e0xYPyv1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"eag3e0xYPyv5\":{\"opacity\":[{\"t\":0,\"v\":1},{\"t\":800,\"v\":0}]},\"eag3e0xYPyv8\":{\"transform\":{\"data\":{\"o\":{\"x\":114.577817,\"y\":551.319608,\"type\":\"corner\"},\"t\":{\"x\":-256,\"y\":-256}},\"keys\":{\"s\":[{\"t\":800,\"v\":{\"x\":0.25,\"y\":0.25}},{\"t\":1000,\"v\":{\"x\":0.25,\"y\":0.25}},{\"t\":2000,\"v\":{\"x\":0.3,\"y\":0.3}},{\"t\":3000,\"v\":{\"x\":0.25,\"y\":0.25}}]}},\"opacity\":[{\"t\":800,\"v\":0},{\"t\":1000,\"v\":0},{\"t\":2000,\"v\":1},{\"t\":3000,\"v\":1},{\"t\":3200,\"v\":0}]}},\"s\":\"MDIA1ZGMzNmFhYT2JkYmFhOWJjNYjFiN2I2NmER4MjdmNzk3ZDEc4NzhCNzQ2YWWFjYjFiYWFkQYWJiY2IxYjdXiNjZhODI3OTCc0NmFiMUZiYR2FkYmFhOWJjLYjFiN2I2YmIO2YTgySjc4NzJQ2YWFlYjFiNMGI0NmE4Mjc5CNzQ2YWE5YjRTTYmNhZGJhYjCZhOWJjYWQ2YOTgyYWVhOUFiENGJiYWQ3NDZYhYmJiOGFkYWGRhYzZhODI3OITc0NmFhZWI4QYmJXNmE4MjdHhN2NjNQ|\"}],\"options\":\"MDLAxODhhMzFNONDI4MzcwODE4EMzMxNDkzMTdVmODE3ZUs3NjQgxNzA3YzdjNTzA4Mzc4NzIzGMThj\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
