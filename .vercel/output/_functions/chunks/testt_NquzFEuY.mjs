import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DKTmtTZ_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>test<img src=\"/images/raiden shogun wheeze meme.webp\" alt=\"\"></p>\n<p>hrllo\r\ntest</p>";

				const frontmatter = {"title":"testt","description":"test","pubDate":"2024-02-29T23:00:00.000Z","heroImage":"/images/raiden shogun aqua begging meme.webp"};
				const file = "C:/Users/elfai/Documents/Apps/gaming/src/content/blog/testt.md";
				const url = undefined;
				function rawContent() {
					return "\r\ntest![](</images/raiden shogun wheeze meme.webp>)\r\n\r\nhrllo\r\ntest\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
