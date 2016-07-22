import { Tinytest } from "meteor/tinytest";

import { name as packageName } from "meteor/meteor-autoform-selectable";

Tinytest.add('meteor-autoform-selectable - example', function (test) {
  test.equal(packageName, "meteor-autoform-selectable");
});
