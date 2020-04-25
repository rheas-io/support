"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe("Str test suits", function () {
    // Test camel case of string
    it("camel case", function () {
        expect(src_1.Str.camel("abc def ghi")).toBe("abcDefGhi");
    });
    // Test studly case of string
    it("studly case", function () {
        expect(src_1.Str.studly("aBc def ghi")).toBe("ABcDefGhi");
    });
    // Test snake case of string
    it("snake case", function () {
        expect(src_1.Str.snake("abc def ghi")).toBe("abc_def_ghi");
        expect(src_1.Str.snake("abcDef123")).toBe("abc_def123");
        expect(src_1.Str.snake("abcDef123XYZAbc")).toBe("abc_def123_x_y_z_abc");
        expect(src_1.Str.snake('Foo-Bar')).toBe('foo-_bar');
        expect(src_1.Str.snake('ŻółtaŁódka')).toBe('żółtałódka');
    });
    // Test kebab case of string
    it("Kebab case", function () {
        expect(src_1.Str.kebab("abc def ghi")).toBe("abc-def-ghi");
        expect(src_1.Str.kebab("abcDef123")).toBe("abc-def123");
        expect(src_1.Str.kebab('Foo-Bar')).toBe('foo--bar');
        expect(src_1.Str.kebab('ŻółtaŁódka')).toBe('żółtałódka');
    });
    // Test lcfirst for a simple string
    it("Test lcfirst abc", function () {
        expect(src_1.Str.lcfirst("aBc")).toBe("aBc");
        expect(src_1.Str.lcfirst("")).toBe("");
        expect(src_1.Str.lcfirst("a")).toBe("a");
    });
});
