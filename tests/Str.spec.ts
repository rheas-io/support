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
});