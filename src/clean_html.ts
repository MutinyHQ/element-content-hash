export function cleanHtml(htmlStr: string) {
  return htmlStr.replace(/<([^ >]+)[^>]*>/gi, "<$1>");
}
