/**
 * All errors an adapter could potentially return
 */

module.exports = {

  /**
   * Unique errors
   */

  notUnique: 'Record does not satisfy unique constraints',

  /**
   * Not found errors
   */

  notFound: 'Record with the provided primary key was not found',

  /**
   * Schema errors
   */

  collectionNotRegistered: 'Unable to find registered collection',

  /**
   * Primary key errors
   */

  primaryKeyUpdate: 'Primary key cannot be updated',
  primaryKeyMissing: 'Primary key was not set and is not auto increment',
  primaryKeyCollision: 'A record with that primary key has already been created',

  /**
   * Auto increment errors
   */

  invalidAutoIncrement: 'An attribute that is auto increment cannot be set'
};