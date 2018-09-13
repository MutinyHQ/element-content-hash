import { cleanHtml } from "./clean_html";

export function hashCode(str: string) {
  let hash = 0;
  if (str.length === 0) {
    return String(hash);
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    // tslint:disable:no-bitwise
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
    // tslint:enable:no-bitwise
  }
  return String(hash);
}

export default function(el: HTMLElement): string {
  if (el.tagName === "IMG") {
    return hashCode(el.getAttribute("src")!);
  } else {
    return hashCode(cleanHtml(el.outerHTML));
  }
}
