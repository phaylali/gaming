import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DKTmtTZ_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I couldn’t wake up early as I was planning, instead woke up late at 11AM with a headache, been a lot of work but I did speed up the workflow quite a bit.\r\ncame home and watched jojo S05E18 to S05E25.\r\nfor the website I removed the icons in the header and added and fixed social icons in the footer, also cleaned the front page from the default text to prepare it for something cool.\r\nadded a place for projects where I’m gonna link every project (software and such) that I consider worthy of showing the world.</p>\n<h4 id=\"cover-of-the-day\">Cover of the day</h4>\n<p>I generated this raiden shogun aqu begging meme by stable diffusion using the following metadata:</p>\n<p>Prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>purple eyes, purple hair, gradient hair, hair ornament, looking at viewer, outdoors, grass, anime, raiden shogun &#x3C;lora:raidenshogun1:1.0>, &#x3C;lora:merrytail_aqua_crying_meme_v02-05:0.7>, closed mouth, tears, wavy mouth, tearing up, pout, :i, meme, :t, parody, frown, v-shaped eyebrows, crying, sad, crying with eyes open, puffy cheeks</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Negative prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>verybadimagenegative_v1.3, badhandv4, two side up, twintails, colored inner hair, pointy ears,</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Steps: 20, VAE: vae-ft-mse-840000-ema-pruned, Size: 768x512, Seed: 2528587892, Model: incursiosMeme_v16Pruned, Parser: Full parser, Backend: Original, Version: 90afba3, Sampler: DPM++ SDE Karras, CFG scale: 6, Clip skip: 2, Model hash: 1750bf7d5c, Operations: txt2img, “raidenshogun1: 8c2e28fdf17c, Image CFG Scale: 6, Token merging ratio: 0.3, merrytail_aqua_crying_meme_v02-05: 14ac3dcbec0b”</p>";

				const frontmatter = {"title":"Watching more jojo stone ocean","description":"Just Another boring tiring day","pubDate":"Sep 13 2023","heroImage":"/images/raiden shogun aqua begging meme.webp"};
				const file = "C:/Users/elfai/Documents/Apps/gaming/src/content/blog/more_jojo_lot_of_work.md";
				const url = undefined;
				function rawContent() {
					return "I couldn't wake up early as I was planning, instead woke up late at 11AM with a headache, been a lot of work but I did speed up the workflow quite a bit.\r\ncame home and watched jojo S05E18 to S05E25.\r\nfor the website I removed the icons in the header and added and fixed social icons in the footer, also cleaned the front page from the default text to prepare it for something cool.\r\nadded a place for projects where I'm gonna link every project (software and such) that I consider worthy of showing the world.\r\n\r\n#### Cover of the day ####\r\n\r\nI generated this raiden shogun aqu begging meme by stable diffusion using the following metadata:\r\n\r\nPrompt:\r\n\r\n    purple eyes, purple hair, gradient hair, hair ornament, looking at viewer, outdoors, grass, anime, raiden shogun <lora:raidenshogun1:1.0>, <lora:merrytail_aqua_crying_meme_v02-05:0.7>, closed mouth, tears, wavy mouth, tearing up, pout, :i, meme, :t, parody, frown, v-shaped eyebrows, crying, sad, crying with eyes open, puffy cheeks\r\n\r\nNegative prompt: \r\n\r\n    verybadimagenegative_v1.3, badhandv4, two side up, twintails, colored inner hair, pointy ears,\r\n\r\nSteps: 20, VAE: vae-ft-mse-840000-ema-pruned, Size: 768x512, Seed: 2528587892, Model: incursiosMeme_v16Pruned, Parser: Full parser, Backend: Original, Version: 90afba3, Sampler: DPM++ SDE Karras, CFG scale: 6, Clip skip: 2, Model hash: 1750bf7d5c, Operations: txt2img, \"raidenshogun1: 8c2e28fdf17c, Image CFG Scale: 6, Token merging ratio: 0.3, merrytail_aqua_crying_meme_v02-05: 14ac3dcbec0b\"\r\n";
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
