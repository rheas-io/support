import { Str } from "../src";

describe("Str test suits", () => {

    // Test camel case of string
    it("camel case", () => {
        expect(Str.camel("abc def ghi")).toBe("abcDefGhi");
    });

    // Test studly case of string
    it("studly case", () => {
        expect(Str.studly("aBc def ghi")).toBe("ABcDefGhi");
    });

    // Test snake case of string
    it("snake case", () => {
        expect(Str.snake("abc def ghi")).toBe("abc_def_ghi");
        expect(Str.snake("abcDef123")).toBe("abc_def123");
        expect(Str.snake("abcDef123XYZAbc")).toBe("abc_def123_x_y_z_abc");
        expect(Str.snake('Foo-Bar')).toBe('foo-_bar');
        expect(Str.snake('ŻółtaŁódka')).toBe('żółtałódka');
    });

    // Test kebab case of string
    it("Kebab case", () => {
        expect(Str.kebab("abc def ghi")).toBe("abc-def-ghi");
        expect(Str.kebab("abcDef123")).toBe("abc-def123");
        expect(Str.kebab('Foo-Bar')).toBe('foo--bar');
        expect(Str.kebab('ŻółtaŁódka')).toBe('żółtałódka');
    });

    // Test lcfirst for a simple string
    it("Test lcfirst abc", () => {
        expect(Str.lcfirst("aBc")).toBe("aBc");
        expect(Str.lcfirst("")).toBe("");
        expect(Str.lcfirst("a")).toBe("a");
    });

    //Test multiple replace
    it("test multiple replace", () => {
        expect(Str.replace("abcDefGhi./\\//", "?", "/")).toBe("abcDefGhi./\\//");
        expect(Str.replace("abcDefGhi./\\//", "Def", "dEF")).toBe("abcdEFGhi./\\//");
        expect(Str.replace("aaabcDefGhi./\\//", "a", "b")).toBe("bbbbcDefGhi./\\//");
        expect(Str.replace("aaabcDefGhiii./\\//", "i", "j")).toBe("aaabcDefGhjjj./\\//");
        expect(Str.replace("//bcDefGhi./\\//", "/", "\\")).toBe("\\\\bcDefGhi.\\\\\\\\");
    });

    //Test multiple replace with one
    it("test replace with one", () => {
        expect(Str.replaceWithOne("abcDefGhi./\\//", "?")).toBe("abcDefGhi./\\//");
        expect(Str.replaceWithOne("abcDefGhi./\\//", "/")).toBe("abcDefGhi./\\/");
        expect(Str.replaceWithOne("aaabcDefGhi./\\//", "a")).toBe("abcDefGhi./\\//");
        expect(Str.replaceWithOne("aaabcDefGhiii./\\//", "i")).toBe("aaabcDefGhi./\\//");
        expect(Str.replaceWithOne("//bcDef///Ghi./\\//", "/")).toBe("/bcDef/Ghi./\\/");
    });

    //Test trimEnd
    it("test trimEnd", () => {
        expect(Str.trimEnd("abcDefGhi./\\//", "/")).toBe("abcDefGhi./\\");
        expect(Str.trimEnd("aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//");
        expect(Str.trimEnd("aaabcDefGhiii./\\//abcd", "abcd")).toBe("aaabcDefGhiii./\\//");
        expect(Str.trimEnd("//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//");
        expect(Str.trimEnd("//bcDefGhi./\\////", "/")).toBe("//bcDefGhi./\\");
    });

    //Test trimStart
    it("test trimStart", () => {
        expect(Str.trimStart("abcDefGhi./\\//", "a")).toBe("bcDefGhi./\\//");
        expect(Str.trimStart("\\aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//\\");
        expect(Str.trimStart("aaabcDefGhiii./\\//abcd", "aaabc")).toBe("DefGhiii./\\//abcd");
        expect(Str.trimStart("???//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//???");
        expect(Str.trimStart("//bcDefGhi./\\////", "/")).toBe("bcDefGhi./\\////");
    });

    //Test trim
    it("test trim both ends", () => {
        expect(Str.trim("abcDefGhi./\\//abc", "abc")).toBe("DefGhi./\\//");
        expect(Str.trim("\\aaabcDefGhi./\\//\\", "\\")).toBe("aaabcDefGhi./\\//");
        expect(Str.trim("aaabcDefGhiii./\\//aaabcd", "aaabc")).toBe("DefGhiii./\\//aaabcd");
        expect(Str.trim("???//bcDefGhi./\\//???", "?")).toBe("//bcDefGhi./\\//");
        expect(Str.trim("//bcDefGhi./\\////", "/")).toBe("bcDefGhi./\\");
    });
});