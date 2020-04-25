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
    //Test multiple replace
    it("test multiple replace", function () {
        expect(src_1.Str.replace("abcDefGhi./\\//", "?", "/")).toBe("abcDefGhi./\\//");
        expect(src_1.Str.replace("abcDefGhi./\\//", "Def", "dEF")).toBe("abcdEFGhi./\\//");
        expect(src_1.Str.replace("aaabcDefGhi./\\//", "a", "b")).toBe("bbbbcDefGhi./\\//");
        expect(src_1.Str.replace("aaabcDefGhiii./\\//", "i", "j")).toBe("aaabcDefGhjjj./\\//");
        expect(src_1.Str.replace("//bcDefGhi./\\//", "/", "\\")).toBe("\\\\bcDefGhi.\\\\\\\\");
    });
    //Test multiple replace with one
    it("test replace with one", function () {
        expect(src_1.Str.replaceWithOne("abcDefGhi./\\//", "?")).toBe("abcDefGhi./\\//");
        expect(src_1.Str.replaceWithOne("abcDefGhi./\\//", "/")).toBe("abcDefGhi./\\/");
        expect(src_1.Str.replaceWithOne("aaabcDefGhi./\\//", "a")).toBe("abcDefGhi./\\//");
        expect(src_1.Str.replaceWithOne("aaabcDefGhiii./\\//", "i")).toBe("aaabcDefGhi./\\//");
        expect(src_1.Str.replaceWithOne("//bcDef///Ghi./\\//", "/")).toBe("/bcDef/Ghi./\\/");
    });
    //Test trimEnd
    it("test trimEnd", function () {
        expect(src_1.Str.trimEnd("abcDefGhi./\\//", "/")).toBe("abcDefGhi./\\");
        expect(src_1.Str.trimEnd("aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//");
        expect(src_1.Str.trimEnd("aaabcDefGhiii./\\//abcd", "abcd")).toBe("aaabcDefGhiii./\\//");
        expect(src_1.Str.trimEnd("//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//");
        expect(src_1.Str.trimEnd("//bcDefGhi./\\////", "/")).toBe("//bcDefGhi./\\");
    });
    //Test trimStart
    it("test trimStart", function () {
        expect(src_1.Str.trimStart("abcDefGhi./\\//", "a")).toBe("bcDefGhi./\\//");
        expect(src_1.Str.trimStart("\\aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//\\");
        expect(src_1.Str.trimStart("aaabcDefGhiii./\\//abcd", "aaabc")).toBe("DefGhiii./\\//abcd");
        expect(src_1.Str.trimStart("???//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//???");
        expect(src_1.Str.trimStart("//bcDefGhi./\\////", "/")).toBe("bcDefGhi./\\////");
    });
    //Test trim
    it("test trim both ends", function () {
        expect(src_1.Str.trim("abcDefGhi./\\//abc", "abc")).toBe("DefGhi./\\//");
        expect(src_1.Str.trim("\\aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//");
        expect(src_1.Str.trim("aaabcDefGhiii./\\//aaabcd", "aaabc")).toBe("DefGhiii./\\//aaabcd");
        expect(src_1.Str.trim("???//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//");
        expect(src_1.Str.trim("//bcDefGhi./\\////", "/")).toBe("bcDefGhi./\\");
    });
});
