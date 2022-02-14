const { TableColumn, Table } = require('typeorm');

module.exports = class createCustomers1644868614778 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'customers',
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
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'customerAddress',
            type: 'text',
          },
          {
            name: 'cpf',
            type: 'int',
          },
          {
            name: 'cellphone',
            type: 'int',
          },
        ],
      }),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('customers');
  }
};
