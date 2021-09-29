import expect from "https://deno.land/x/tdd@v0.6/mod.ts";
import * as _ from "../sum";

Deno.test("sum", () => {
    let a = _.sum([4, 2, 8, 6])
    expect(a).to.equal(20)
    console.log("\n✔  _.sum([4, 2, 8, 6]) = 20")
})