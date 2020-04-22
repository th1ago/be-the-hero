// Criacao da tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidentes', function (table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  // caso volte atras na criacao da tabela
  exports.down = function(knex) {
    return knex.schema.dropTable('incidentes');
  };
  