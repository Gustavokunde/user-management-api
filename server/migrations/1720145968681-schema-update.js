class SchemaUpdate1720145968681 {
  name = 'SchemaUpdate1720145968681';

  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "username" character varying(12) NOT NULL`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
  }
}
module.exports = {
  SchemaUpdate1720145968681,
};
