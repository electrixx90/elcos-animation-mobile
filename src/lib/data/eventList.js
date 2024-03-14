export const eventList = {
  'SinotticoMode': [{
    'MODE_OFF': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1500).pause(); true;`),
      duration: 2000,
      loop: false
    }],
    'MODE_MAN': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2500).pause(); true;`),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](3500).pause(); true;`),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT_ESC': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](4500).pause(); true;`),
      duration: 2000,
      loop: false
    }],
    'MODE_AUT_INC': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }]
  }],
  'SinotticoMains': [{
    'MAINS_ABS': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: 2000,
      loop: false,
    }],
    'MAINS_PRES': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 2000);
      },
      duration: null,
      loop: false,
    }],
    'MAINS_ANOM': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](5000).play(); true;`),
      duration: 2000,
      loop: true,
    }],
    'MAINS_WAIT': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).play(); true;`),
      duration: 2000,
      loop: true,
    }]
  }],
  'SinotticoMotor': [{
    'MOTOR_OFF': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 1000);
      },
      duration: null,
      loop: false
    }],
    'MOTOR_ON': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](3000).play(); true;`),
      duration: 2000,
      loop: true
    }]
  }],
  'SinotticoEP': [{
    'EP_OFF': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    'EP_ON': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).play(); true;`),
      duration: 2000,
      loop: true
    }]
  }],
  'SinotticoPress': [{
    'PRESS_EXCL': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 1000);
      },
      duration: null,
      loop: false
    }],
    'PRESS_YES': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    'PRESS_NO': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](3000).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 3000);
      },
      duration: null,
      loop: false
    }]
  }],
  'SinotticoAlarm': [{
    'ALARM_NO': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    'ALARM_Y_B': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 2400);
      },
      duration: null,
      loop: false
    }],
    'ALARM_Y_A': [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](5000).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 2400);
      },
      duration: null,
      loop: false
    }]
  }],
  'SinotticoStatus': [{
    'ANOM_NO': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](500).pause(); true;`),
      duration: null,
      loop: false
    }],
    'ANOM_YES': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).play(); true;`),
      duration: 2000,
      loop: true
    }]
  }],
  'SinotticoReq': [{
    'REQ_NO': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQ_START': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](3000).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQ_STOP': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](7000).pause(); true;`),
      duration: null,
      loop: false
    }]
  }],
  'SinotticoReqT': [{
    'REQT_NO': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQT_PRESS': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](500).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQT_GALL': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](5000).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQT_TEST': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).play(); true;`),
      duration: 1000,
      loop: true
    }],
    'REQT_TP': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](6000).pause(); true;`),
      duration: null,
      loop: false
    }],
    'REQT_IN': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](7000).play(); true;`),
      duration: 1000,
      loop: true
    }],
    'REQT_KEY': [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](11600).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],

  "SinotticoTraliccio": [{
    "TRALICCIO_NO": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "TRALICCIO_YES": [{
      fn: (p) => {
        p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).play(); true;`);
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 1000);
      },
      duration: null,
      loop: false
    }]
  }],
  "SinotticoReteA": [{
    "CBRETE_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoReteB": [{
    "CBRETE_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CBRETE_OK": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CBRETE_UNPL": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(), true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoCBA": [{
    "CB_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoCBB": [{
    "CB_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CB_PRESS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "CB_ANOM": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoBattA": [{
    "BATT_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "MODE_PRESS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "MODE_ANOM": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoBattB": [{
    "BATT_ABS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
    "MODE_PRESS": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "MODE_ANOM": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](2000).pause(); true;`),
      duration: null,
      loop: false
    }],
  }],
  "SinotticoEngine": [{
    "ENGINE_ON": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](3000).play(); true;`),
      duration: 2000,
      loop: true
    }],
    "ENGINE_OFF": [{
      fn: (p) => {
        p.seekTo(0).play();
        return setTimeout(() => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.pause(); true;`), 1000);
      },
      duration: null,
      loop: false
    }],
  }],
  "SinotticoEngineProt": [{
    "ENGINEPROT_ON": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](1000).pause(); true;`),
      duration: null,
      loop: false
    }],
    "ENGINEPROT_OFF": [{
      fn: (p) => p.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['seekTo'](0).pause(); true;`),
      duration: null,
      loop: false
    }],
  }]
}
