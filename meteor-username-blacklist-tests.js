// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-username-blacklist.js.
import { name as packageName } from "meteor/mageshkhanna:meteor-username-blacklist";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-username-blacklist - example', function (test) {
  test.equal(packageName, "meteor-username-blacklist");
});
