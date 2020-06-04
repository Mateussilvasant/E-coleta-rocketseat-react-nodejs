import Knex from 'knex';

export async function up(knex : Knex){
    return await knex.schema.createTable('item',table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('titulo').notNullable();
    });
}

export async function down(knex : Knex){
    return knex.schema.dropTable('item');
}