/**
 * All errors an adapter could potentially return
 */

module.exports = {

  /**
   * Unique errors
   */

  notUnique: 'Record does not satisfy unique constraints',

  /**
   * Primary key errors
   */

  primaryKeyMissing: 'Primary key was not set and is not auto increment',

  /**
   * Collision of primary key
   */

  primaryKeyCollision: 'A record with that primary key has already been created'
};