import { assertEquals, assertThrows } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/lodash.js";

Deno.test("drop", () => {
    assertEquals(_.drop([1, 2, 3]), [2, 3])
    assertEquals(_.drop([1, 2, 3], 2), [3])
  })