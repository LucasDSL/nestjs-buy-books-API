const { Table } = require('typeorm');

module.exports = class createProducts1644935631573 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'onStock',
            type: 'int',
          },
        ],
      }),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('products');
  }
};
