const SEED_MAX = 9999997
var d = new Date();
var seed = d.getTime()/*取1970年1月1號到現在的毫秒數*/%SEED_MAX; //371

export function random() {
    seed = (seed+37 ) % SEED_MAX
    var x = Math.sin(seed) * 93177
    return x - Math.floor(x);
}

