import { installHtmlInCanvasPolyfill } from "three-html-render/polyfill";

installHtmlInCanvasPolyfill();

export {
  uninstallHtmlInCanvasPolyfill,
  getHtmlRenderer,
} from "three-html-render/polyfill";
