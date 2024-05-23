
import { defineDb, defineTable, column, NOW } from 'astro:db';




const DarkTheme = defineTable({
  columns: {
    dark: column.boolean({ default:true }),
    
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {DarkTheme}
});