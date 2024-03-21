import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DKTmtTZ_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I started the website using bun 1.0 after few days of its released, using Astro.js , it was a seemless experience, and I was extremely surprised by the google lighthouse complete 100 score, I didn’t even think that this was possible, I was happy to be wrong.</p>\n<h4 id=\"cover-of-the-day\">Cover of the day</h4>\n<p>Prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span> masterpiece, best quality, wheeze, wheeze meme, upper body,      open mouth, laughing, simple background, white background,   &#x3C;lyco:WheezeMemeTemplate:1.0> , raiden shogun &#x3C;lora:raidenshogun1:1.0></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Negative prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span> EasyNegative, verybadimagenegative_v1.3, no pussy, bald, bald girl, wearing a crown, flower crown, super crown, armpit detail, (random hair, disconnected hair, broken hair, missing hair:1.4)</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Steps: 20, Seed: 2776298602, Sampler: DDIM, CFG scale: 6, Size: 768x512, Parser: Full parser, Model: incursiosMeme_v16Pruned, Model hash: 1750bf7d5c, VAE: vae-ft-mse-840000-ema-pruned, Image CFG Scale: 6, Backend: Original, Version: 90afba3, Operations: txt2img, Token merging ratio: 0.3, Lora hashes: “raidenshogun1: 8c2e28fdf17c”</p>\n<p>I need to add night mode to this website and customize the icons and links</p>\n<p>I finished watching Baki Hanma son of ogre, now I will move to other series and anime</p>";

				const frontmatter = {"title":"Let's the journey begin","description":"This is the beginning of this website","pubDate":"Sep 11 2023","heroImage":"/images/raiden shogun wheeze meme.webp"};
				const file = "C:/Users/elfai/Documents/Apps/gaming/src/content/blog/creation_of_the_website.md";
				const url = undefined;
				function rawContent() {
					return "I started the website using bun 1.0 after few days of its released, using Astro.js , it was a seemless experience, and I was extremely surprised by the google lighthouse complete 100 score, I didn't even think that this was possible, I was happy to be wrong.\r\n\r\n#### Cover of the day ####\r\n\r\nPrompt:\r\n```\r\n masterpiece, best quality, wheeze, wheeze meme, upper body,      open mouth, laughing, simple background, white background,   <lyco:WheezeMemeTemplate:1.0> , raiden shogun <lora:raidenshogun1:1.0>\r\n```\r\nNegative prompt: \r\n\r\n```\r\n EasyNegative, verybadimagenegative_v1.3, no pussy, bald, bald girl, wearing a crown, flower crown, super crown, armpit detail, (random hair, disconnected hair, broken hair, missing hair:1.4)\r\n```\r\nSteps: 20, Seed: 2776298602, Sampler: DDIM, CFG scale: 6, Size: 768x512, Parser: Full parser, Model: incursiosMeme_v16Pruned, Model hash: 1750bf7d5c, VAE: vae-ft-mse-840000-ema-pruned, Image CFG Scale: 6, Backend: Original, Version: 90afba3, Operations: txt2img, Token merging ratio: 0.3, Lora hashes: \"raidenshogun1: 8c2e28fdf17c\"\r\n\r\nI need to add night mode to this website and customize the icons and links\r\n\r\nI finished watching Baki Hanma son of ogre, now I will move to other series and anime\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"cover-of-the-day","text":"Cover of the day"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
