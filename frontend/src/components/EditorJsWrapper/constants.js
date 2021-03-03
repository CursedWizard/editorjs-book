// import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
// import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
// import Quote from "@editorjs/quote";
import Alert from "editorjs-alert";
import SimpleImage from "@editorjs/simple-image";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import InlineImage from 'editorjs-inline-image';
const CodeBox = require('@bomdi/codebox');
const ColorPlugin = require('editorjs-text-color-plugin');
// const SimpleImage = require('simple-image-editorjs');

export const EDITOR_JS_TOOLS = {
  // embed: Embed,
  table: Table,
  marker: Marker,
 Color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
         colorCollections: ['#FF1300','#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF', '#000'],
         defaultColor: '#FF1300',
         type: 'text', 
      }     
    },
  list: List,
  alert: Alert,
  // warning: Warning,
  // code: Code,
  // linkTool: LinkTool,
  image: SimpleImage,
  // raw: Raw,
  header: Header,
  codeBox: {
      class: CodeBox,
      config: {
        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-light.min.css', // Optional
        themeName: 'atom-one-dark', // Optional
        useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
      }
    },
  // quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  // simpleImage: SimpleImage
};

export const data = {
  time: 1556098174501,
  blocks: [
    {
      type: "header",
      data: {
        text: "Юридическая ответственность и её виды",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
        "Юридическая ответственность — это применение мер государственного принуждения к нарушителю за совершение противоправного деяния."
      }
    },
    {
      type: "header",
      data: {
        text: "Особенности юридической ответственности:",
        level: 4
      }
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Устанавливается за нарушение правовых требований, а не за их выполнение.",
          "Всегда оценивает прошлое: это ответственность за действие (бездействие), которое уже имело место, произошло."
        ]
      }
    },
    {
      type: "paragraph",
      data: {
        text:
        'Юридическая ответственность не сводится к государственному принуждению, а возникает после установления факта правонарушения, который является основанием её возникновения.'
      }
    },
    {
      type: "header",
      data: {
        text: "Цели юридической ответственности:",
        level: 4
      }
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "создание упорядоченного состояния общественных отношений;",
          "снижение уровня правонарушений;",
          "воспитание активной гражданской позиции, формирование уважительного отношения к закону и вытеснение из сознания граждан правового нигилизма;"
        ]
      }
    },
    {
      type: "delimiter",
      data: {}
    },
    {
      type: "paragraph",
      data: {
        text:
        "Привет 👋 "
      }
    },
  ],
  version: "2.12.4"
}
