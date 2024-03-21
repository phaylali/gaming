import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DKTmtTZ_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>today was full of work (my full time job), I arrived at home tired and just sat and watch Jojo Stone Ocean anime on Netflix, S05E13 to S05E18, I’m planning to watch more until I finish it, latest episode right now is S05E38, I’ve been kinda reluctant to watch it because I was too busy but also because I did read the manga way before, in the manga I stopped at the beginning chapters of jojo lands.\r\nI’m still conflicted over what I should make the omniversify logo look like, but it will come eventually.\r\nI have a lot more work tomorrow and I wanna sleep early to wake up and run in the morning, I want to get in shape aafter my parents left.\r\nI did nothing to improve this website sadly, except discovering that leaving a space in md does the effect like code that you can see and copy easily, so I put the prompts and negative prompts in there and updated the first post with them. you can find the source good in the repo since this is an open source project.\r\nbut the Morocco football national team did beat Burkina Faso with a beautiful goal from the young talented, Azedin Ounahi.\r\njust discovered that joyner lucas dropped a new music video 4 days ago , <a href=\"https://www.youtube.com/watch?v=TLAuRp3xFTE\" title=\"Joyner Lucas - Seventeen\">Joyner Lucas - Seventeen</a>, Joyner is one of the ones in the new gen’s rap, coz bro be spitting bars and also got good music, I may be listening to this song for a while.</p>\n<h4 id=\"cover-of-the-day\">Cover of the day</h4>\n<p>I generated this raiden shogun roll safe meme by stable diffusion using the following metadata:</p>\n<p>Prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>Highly detailed, High Quality, Masterpiece, beautiful, RollSafeMeme, &#x3C;lora:RollSafeMeme:1.0>, 1girl, solo, upper body,  raiden shogun &#x3C;lora:raidenshogun1:1.0></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Negative prompt:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span>FastNegativeEmbedding, (worst quality, low quality:1.4)</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Steps: 20, Seed: 2776298602, Sampler: DPM++ 2M SDE Karras, CFG scale: 6, Size: 768x512, Parser: Full parser, Model: incursiosMeme_v16Pruned, Model hash: 1750bf7d5c, VAE: vae-ft-mse-840000-ema-pruned, Image CFG Scale: 6, Backend: Original, Version: 90afba3, Operations: txt2img, Token merging ratio: 0.3, Lora hashes: “RollSafeMeme: 3dfb40ca9f06, raidenshogun1: 8c2e28fdf17c”</p>\n<p>surprisinly it worked perfectly from the first time. raiden shogun is so pretty man, I would marry her if she was real, even if she tried to kill me, good night.</p>";

				const frontmatter = {"title":"Watching jojo stone ocean and Morocco Vs Burkina Faso","description":"Just A boring tiring day","pubDate":"Sep 12 2023","heroImage":"/images/raiden shogun roll safe meme.webp"};
				const file = "C:/Users/elfai/Documents/Apps/gaming/src/content/blog/jojo_morocco_vs_burkina_faso.md";
				const url = undefined;
				function rawContent() {
					return "today was full of work (my full time job), I arrived at home tired and just sat and watch Jojo Stone Ocean anime on Netflix, S05E13 to S05E18, I'm planning to watch more until I finish it, latest episode right now is S05E38, I've been kinda reluctant to watch it because I was too busy but also because I did read the manga way before, in the manga I stopped at the beginning chapters of jojo lands.\r\nI'm still conflicted over what I should make the omniversify logo look like, but it will come eventually.\r\nI have a lot more work tomorrow and I wanna sleep early to wake up and run in the morning, I want to get in shape aafter my parents left.\r\nI did nothing to improve this website sadly, except discovering that leaving a space in md does the effect like code that you can see and copy easily, so I put the prompts and negative prompts in there and updated the first post with them. you can find the source good in the repo since this is an open source project.\r\nbut the Morocco football national team did beat Burkina Faso with a beautiful goal from the young talented, Azedin Ounahi.\r\njust discovered that joyner lucas dropped a new music video 4 days ago , [Joyner Lucas - Seventeen](https://www.youtube.com/watch?v=TLAuRp3xFTE \"Joyner Lucas - Seventeen\"), Joyner is one of the ones in the new gen's rap, coz bro be spitting bars and also got good music, I may be listening to this song for a while.\r\n\r\n#### Cover of the day ####\r\n\r\nI generated this raiden shogun roll safe meme by stable diffusion using the following metadata:\r\n\r\nPrompt:\r\n\r\n    Highly detailed, High Quality, Masterpiece, beautiful, RollSafeMeme, <lora:RollSafeMeme:1.0>, 1girl, solo, upper body,  raiden shogun <lora:raidenshogun1:1.0>\r\n\r\nNegative prompt: \r\n\r\n    FastNegativeEmbedding, (worst quality, low quality:1.4)\r\n\r\nSteps: 20, Seed: 2776298602, Sampler: DPM++ 2M SDE Karras, CFG scale: 6, Size: 768x512, Parser: Full parser, Model: incursiosMeme_v16Pruned, Model hash: 1750bf7d5c, VAE: vae-ft-mse-840000-ema-pruned, Image CFG Scale: 6, Backend: Original, Version: 90afba3, Operations: txt2img, Token merging ratio: 0.3, Lora hashes: \"RollSafeMeme: 3dfb40ca9f06, raidenshogun1: 8c2e28fdf17c\"\r\n\r\nsurprisinly it worked perfectly from the first time. raiden shogun is so pretty man, I would marry her if she was real, even if she tried to kill me, good night.\r\n";
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
