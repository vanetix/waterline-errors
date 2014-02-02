/**
 * All errors an adapter could potentially return
 */

module.exports = {
  // Primary key errors
  primaryKeyUpdate: 'Primary key cannot be updated',
  primaryKeyMissing: 'Primary key was not set and is not auto increment',
  primaryKeyCollision: 'A record with that primary key has already been created',

  // Not found
  notFound: 'Record with the provided criteria was not found',

  // Uniqueness
  notUnique: 'Record does not satisfy unique constraints',

  // Not registered
  collectionNotRegistered: 'Unable to find registered collection',

  // Invalid attribute passed that is auto increment
  invalidAutoIncrement: 'An attribute that is auto increment cannot be set',

  // Group by criteria not present
  groupBy: 'Cannot groupBy without a calculation',

  // Authentication failure
  authFailure: 'Could not authenticate using credentials provided'
};