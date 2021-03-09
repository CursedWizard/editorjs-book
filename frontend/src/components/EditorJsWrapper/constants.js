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
import Carousel from 'carousel-editorjs/dist/bundle.js';
const CodeBox = require('@bomdi/codebox');
const ColorPlugin = require('editorjs-text-color-plugin');

export const EDITOR_JS_TOOLS = {
  // embed: Embed,
  table: Table,
  marker: Marker,
 Color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
         colorCollections: ['#D68B45', '#45BCD6', '#FFF', '#000'],
         defaultColor: '#000',
         type: 'text', 
      }     
    },
  list: List,
  alert: Alert,
  carousel: {
    class: Carousel,
    config: {
      endpoints: {
        byFile: "http://localhost:3000/testFile",
      }
    }
  },
  // warning: Warning,
  // code: Code,
  // linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: 'http://localhost:3000/testFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
      }
    }
  },
  // raw: Raw,
  header: Header,
  codeBox: {
      class: CodeBox,
      config: {
        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/nord.min.css', // Optional
        themeName: 'nord', // Optional
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
