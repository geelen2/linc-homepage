import { css } from 'styled-components'

export default css`
  @font-face {
    font-family: 'Rubik';
    font-style:  normal;
    font-weight: 300;
    src: url("${require('./Rubik-Light.woff2')}") format("woff2"),
         url("${require('./Rubik-Light.woff')}") format("woff");
  }
  @font-face {
    font-family: 'Rubik';
    font-style:  italic;
    font-weight: 300;
    src: url("${require('./Rubik-LightItalic.woff2')}") format("woff2"),
         url("${require('./Rubik-LightItalic.woff')}") format("woff");
  }
  
  @font-face {
    font-family: 'Rubik';
    font-style:  normal;
    font-weight: 400;
    src: url("${require('./Rubik-Regular.woff2')}") format("woff2"),
         url("${require('./Rubik-Regular.woff')}") format("woff");
  }
  @font-face {
    font-family: 'Rubik';
    font-style:  italic;
    font-weight: 400;
    src: url("${require('./Rubik-Italic.woff2')}") format("woff2"),
         url("${require('./Rubik-Italic.woff')}") format("woff");
  }
  
  @font-face {
    font-family: 'Rubik';
    font-style:  normal;
    font-weight: 500;
    src: url("${require('./Rubik-Medium.woff2')}") format("woff2"),
         url("${require('./Rubik-Medium.woff')}") format("woff");
  }
  @font-face {
    font-family: 'Rubik';
    font-style:  italic;
    font-weight: 500;
    src: url("${require('./Rubik-MediumItalic.woff2')}") format("woff2"),
         url("${require('./Rubik-MediumItalic.woff')}") format("woff");
  }
  
  @font-face {
    font-family: 'Rubik';
    font-style:  normal;
    font-weight: 700;
    src: url("${require('./Rubik-Bold.woff2')}") format("woff2"),
         url("${require('./Rubik-Bold.woff')}") format("woff");
  }
  @font-face {
    font-family: 'Rubik';
    font-style:  italic;
    font-weight: 700;
    src: url("${require('./Rubik-BoldItalic.woff2')}") format("woff2"),
         url("${require('./Rubik-BoldItalic.woff')}") format("woff");
  }
  
  @font-face {
    font-family: 'Rubik';
    font-style:  normal;
    font-weight: 900;
    src: url("${require('./Rubik-Black.woff2')}") format("woff2"),
         url("${require('./Rubik-Black.woff')}") format("woff");
  }
  @font-face {
    font-family: 'Rubik';
    font-style:  italic;
    font-weight: 900;
    src: url("${require('./Rubik-BlackItalic.woff2')}") format("woff2"),
         url("${require('./Rubik-BlackItalic.woff')}") format("woff");
  }
`
