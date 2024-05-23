import { db, DarkTheme } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(DarkTheme).values([{
		dark: true
	}])
}
