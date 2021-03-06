import { Str } from '../src/str';
import { AnyObject } from '@rheas/contracts';

describe('Str helper functions test suite.', () => {
    /**
     *
     */
    it('should convert normal string to camelCase', async () => {
        expect(Str.camel('abc def ghi')).toBe('abcDefGhi');
    });

    /**
     * Test dotted path
     */
    it('dottedPath', () => {
        expect(Str.dottedPath('kaysy/framework/rheas')).toBe('kaysy.framework.rheas');
        expect(Str.dottedPath('kaysy/framework/rheas/index.html')).toBe(
            'kaysy.framework.rheas.index.html',
        );
        expect(Str.dottedPath('kaysy.framework.rheas')).toBe('kaysy.framework.rheas');
        expect(Str.dottedPath('kaysy/framework/rheas/')).toBe('kaysy.framework.rheas');
        expect(Str.dottedPath(' /kaysy/framework/rheas/ ')).toBe('kaysy.framework.rheas');
    });

    // is valid email check
    it('isEmail', async () => {
        expect(Str.isValidEmail('kalesh123')).toBe(false);
        expect(Str.isValidEmail('kalesh@kaysy.io')).toBe(true);

        // email 320 character check
        let random = (await Str.random(320)) + '@kaysy.com';
        expect(Str.isValidEmail(random)).toBe(false);

        // Local part 65 char
        let randomLocal = (await Str.random(65)) + '@kaysy.com';
        expect(Str.isValidEmail(randomLocal)).toBe(false);

        // local part dot check
        randomLocal = '.' + (await Str.random(15)) + '@kaysy.com';
        expect(Str.isValidEmail(randomLocal)).toBe(false);

        // random username truthiness.
        randomLocal = (await Str.random(15)) + '@kaysy.com';
        expect(Str.isValidEmail(randomLocal)).toBe(true);
    });

    /**
     * Checks the isAlphanum functionality of Str helper class.
     */
    it('isAlphaNum', () => {
        expect(Str.isAlphaNum('9c168aa9843ae2bcc')).toBe(true);
        expect(Str.isAlphaNum('vw9c168aa9843ae2bcczy')).toBe(true);
        expect(Str.isAlphaNum('9c168aa984_3ae2bcc')).toBe(false);
        expect(Str.isAlphaNum('9c168aa9843ae2bcc ')).toBe(false);
        expect(Str.isAlphaNum('')).toBe(false);
        expect(Str.isAlphaNum(' ')).toBe(false);
    });

    /**
     * Checks the isHex functionality of Str helper class.
     */
    it('isHex', () => {
        expect(Str.isHex('9c168aa9843ae2bcc')).toBe(true);
        expect(Str.isHex('9c168aa984_3ae2bcc')).toBe(false);
        expect(Str.isHex('9c168aa9843ae2bcc ')).toBe(false);
        expect(Str.isHex('')).toBe(false);
        expect(Str.isHex(' ')).toBe(false);
    });

    it('isUrl', () => {
        expect(Str.isValidUrl('http://rheas.io')).toBe(true);
        expect(Str.isValidUrl('http://rheas')).toBe(false);

        // Protocol manadatory check
        expect(Str.isValidUrl('rheas.io')).toBe(false);

        // Localhost check fails. Rheas use ip as localhost.
        expect(Str.isValidUrl('http://localhost:3000')).toBe(false);

        // Localhost ip check
        expect(Str.isValidUrl('http://127.0.0.1:3000')).toBe(true);

        // Excluded ip check
        expect(Str.isValidUrl('http://0.0.0.1:3000')).toBe(false);
    });

    // Test kebab case of string
    it('kebab-case', () => {
        expect(Str.kebab('abc def ghi')).toBe('abc-def-ghi');
        expect(Str.kebab('abcDef123')).toBe('abc-def123');
        expect(Str.kebab('Foo-Bar')).toBe('foo--bar');
        expect(Str.kebab('ŻółtaŁódka')).toBe('żółtałódka');
    });

    // Test lcfirst for a simple string
    it('lcfirst', () => {
        expect(Str.lcfirst('aBc')).toBe('aBc');
        expect(Str.lcfirst('')).toBe('');
        expect(Str.lcfirst('a')).toBe('a');
    });

    /**
     * Regex pattern match check.
     *
     * 1. Valid pattern check
     * 2. Invalid pattern check.
     * 3. Empty pattern check.
     * 4. Empty string on valid pattern check.
     */
    it('pattern match', () => {
        expect(Str.matches('', '')).toBe(true);
        expect(Str.matches('', '*')).toBe(true);
        expect(Str.matches('/payment/123', '*')).toBe(true);

        expect(Str.matches('/payment/123', '/payment/*')).toBe(true);
        expect(Str.matches('/payment/123', '/payment/123')).toBe(true);
        expect(Str.matches('/paym$ent/123', '/paym$ent/123')).toBe(true);
        expect(Str.matches('/payment/failed/123', '/payment/*/123')).toBe(true);

        expect(Str.matches('/payment/123', 'paym.ent/123')).toBe(false);
        expect(Str.matches('/payment/123', '/payment/*/456')).toBe(false);

        expect(Str.matches('/payment/123', '')).toBe(false);

        expect(Str.matches('', '/payment/123')).toBe(false);
    });

    //Test replace slashes
    it('path', () => {
        expect(Str.path('\\app\\controllers\\\\filename')).toBe('app/controllers/filename');
        expect(Str.path('\\\\app\\controllers\\filename\\ ')).toBe('app/controllers/filename');
        expect(Str.path('/app/controllers/filename')).toBe('app/controllers/filename');
    });

    // Query string
    it('queryString', () => {
        const params: AnyObject = { id: 1, name: 'Kaysy', fbId: 'abc1234==' };

        expect(Str.queryString(params)).toBe('?id=1&name=Kaysy&fbId=abc1234%3D%3D');
        expect(Str.queryString(params, ['fbId'])).toBe('?id=1&name=Kaysy');

        params['encoded'] = 'ciåo';
        expect(Str.queryString(params, ['fbId'])).toBe('?id=1&name=Kaysy&encoded=ci%C3%A5o');
    });

    /**
     * Test random string for various string length.
     *
     * 1. Valid length
     * 2. 0 as length
     * 3. Invalid or negative length - should return empty string.
     *
     * Also check if these strings are just alpha numeric strings with
     * no special characters.
     */
    it('random string', async () => {
        let random = await Str.random(16);
        expect(random).toHaveLength(16);
        expect(Str.isAlphaNum(random)).toBe(true);

        random = await Str.random(40);
        expect(random).toHaveLength(40);
        expect(Str.isAlphaNum(random)).toBe(true);

        random = await Str.random(0);
        expect(random).toEqual('');
        expect(random).toHaveLength(0);
        expect(Str.isAlphaNum(random)).toBe(false);

        random = await Str.random(-1);
        expect(random).toHaveLength(0);
        expect(Str.isAlphaNum(random)).toBe(false);
    });

    /**
     * Random bytes test for different lengths.
     *
     * 1. Valid byte size.
     * 2. 0 as byte size.
     * 3. Invalid byte size - throw an error
     */
    it('random bytes', async () => {
        let random = await Str.randomBytes(16);
        expect(random).toHaveLength(16);

        random = await Str.randomBytes(0);
        expect(random).toHaveLength(0);

        // Throw an error when invalid byte size is given.
        expect(Str.randomBytes(-1)).rejects.toThrow();
    });

    //Test multiple replace
    it('replace', () => {
        expect(Str.replace('abcDefGhi./\\//', '?', '/')).toBe('abcDefGhi./\\//');
        expect(Str.replace('abcDefGhi./\\//', 'Def', 'dEF')).toBe('abcdEFGhi./\\//');
        expect(Str.replace('aaabcDefGhi./\\//', 'a', 'b')).toBe('bbbbcDefGhi./\\//');
        expect(Str.replace('aaabcDefGhiii./\\//', 'i', 'j')).toBe('aaabcDefGhjjj./\\//');
        expect(Str.replace('//bcDefGhi./\\//', '/', '\\')).toBe('\\\\bcDefGhi.\\\\\\\\');
    });

    //Test multiple replace with one
    it('replaceOne', () => {
        expect(Str.replaceWithOne('abcDefGhi./\\//', '?')).toBe('abcDefGhi./\\//');
        expect(Str.replaceWithOne('abcDefGhi./\\//', '/')).toBe('abcDefGhi./\\/');
        expect(Str.replaceWithOne('aaabcDefGhi./\\//', 'a')).toBe('abcDefGhi./\\//');
        expect(Str.replaceWithOne('aaabcDefGhiii./\\//', 'i')).toBe('aaabcDefGhi./\\//');
        expect(Str.replaceWithOne('//bcDef///Ghi./\\//', '/')).toBe('/bcDef/Ghi./\\/');
    });

    // Test snake case of string
    it('snake_case', () => {
        expect(Str.snake('abc def ghi')).toBe('abc_def_ghi');
        expect(Str.snake('abcDef123')).toBe('abc_def123');
        expect(Str.snake('abcDef123XYZAbc')).toBe('abc_def123_x_y_z_abc');
        expect(Str.snake('Foo-Bar')).toBe('foo-_bar');
        expect(Str.snake('ŻółtaŁódka')).toBe('żółtałódka');
    });

    // Test studly case of string
    it('StudlyCase', () => {
        expect(Str.studly('aBc def ghi')).toBe('ABcDefGhi');
    });

    //Test trim
    it('trim', () => {
        expect(Str.trim('abcDefGhi./\\//abc', 'abc')).toBe('DefGhi./\\//');
        expect(Str.trim('\\aaabcDefGhi./\\//\\', '\\')).toBe('aaabcDefGhi./\\//');
        expect(Str.trim('aaabcDefGhiii./\\//aaabcd', 'aaabc')).toBe('DefGhiii./\\//aaabcd');
        expect(Str.trim('???//bcDefGhi./\\//???', '?')).toBe('//bcDefGhi./\\//');
        expect(Str.trim('//bcDefGhi./\\////', '/')).toBe('bcDefGhi./\\');
    });

    //Test trimEnd
    it('trimEnd', () => {
        expect(Str.trimEnd('abcDefGhi./\\//', '/')).toBe('abcDefGhi./\\');
        expect(Str.trimEnd('aaabcDefGhi./\\//\\', '\\')).toBe('aaabcDefGhi./\\//');
        expect(Str.trimEnd('aaabcDefGhiii./\\//abcd', 'abcd')).toBe('aaabcDefGhiii./\\//');
        expect(Str.trimEnd('//bcDefGhi./\\//???', '?')).toBe('//bcDefGhi./\\//');
        expect(Str.trimEnd('//bcDefGhi./\\////', '/')).toBe('//bcDefGhi./\\');
    });

    //Test trimStart
    it('trimStart', () => {
        expect(Str.trimStart('abcDefGhi./\\//', 'a')).toBe('bcDefGhi./\\//');
        expect(Str.trimStart('\\aaabcDefGhi./\\//\\', '\\')).toBe('aaabcDefGhi./\\//\\');
        expect(Str.trimStart('aaabcDefGhiii./\\//abcd', 'aaabc')).toBe('DefGhiii./\\//abcd');
        expect(Str.trimStart('???//bcDefGhi./\\//???', '?')).toBe('//bcDefGhi./\\//???');
        expect(Str.trimStart('//bcDefGhi./\\////', '/')).toBe('bcDefGhi./\\////');
        expect(Str.trimStart('bcDefGhi./\\//', 'b')).toBe('cDefGhi./\\//');
    });

    //Test trimStart multiple
    it('trimStart multiple', () => {
        expect(Str.trimStart('aaabbcDefGhi./\\//', ['a', 'b'])).toBe('cDefGhi./\\//');
        expect(Str.trimStart('//\\//\\\\bcDefGhi./\\////', ['/', '\\'])).toBe('bcDefGhi./\\////');
        expect(Str.trimStart('https://kaysy.io', ['https://', 'http://'])).toBe('kaysy.io');
        expect(Str.trimStart('https://http://kaysy.io', ['https://', 'http://'])).toBe('kaysy.io');
        expect(Str.trimStart('http://https://kaysy.io', ['https://', 'http://'])).toBe('kaysy.io');
        expect(Str.trimStart('http://https://kaysy.io/https://', ['https://', 'http://'])).toBe(
            'kaysy.io/https://',
        );
    });
});
