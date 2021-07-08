# sequelize init

# --- Generate base table models and migration files ('models' and 'migrations' folders) ---
# sequelize model:generate --name user --attributes firstName:string,lastName:string,email:string

# --- Generate custom migration, order matters, may need to customize and reorder migration files this way ('migrations' folder) ---
# sequelize migration:create --name addUserColumn

# --- Undoing and Redoing Database migrations ('migrations' folder)
# sequelize db:migrate
# sequelize db:migrate:undo

# --- Examples of generating seed data for a table ('seeders' folder)---
# sequelize seed:generate --name users
# sequelize seed:generate --name categories
# sequelize seed:generate --name posts
# sequelize seed:generate --name comments

# --- Migrate Seed Data ('seeders' folder) ---
# sequelize db:seed:all