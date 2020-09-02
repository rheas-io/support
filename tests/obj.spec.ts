import { Obj } from '../src';

describe('Object related functions', () => {
    const obj = {
        id: '1234567890',
        user: {
            name: 'Kalesh Kaladharan',
            company: 'Kaysy LLC',
            address: {
                street: '',
                city: 'Sheridan',
                state: 'Wyoming',
            },
            email: 'no-reply@kaysy.io',
        },
        posts: [],
        admin: 0,
    };

    it('nested get', () => {
        expect(Obj.get(obj, 'id')).toBe('1234567890');
        expect(Obj.get(obj, 'user.name')).toBe('Kalesh Kaladharan');
        expect(Obj.get(obj, 'user.address.state')).toBe('Wyoming');
        expect(Obj.get(obj, 'user.address.street')).toBe('');
        expect(Obj.get(obj, 'user.address.street')).not.toBe(null);
        expect(Obj.get(obj, 'posts')).toEqual([]);
        expect(Obj.get(obj, 'admin')).toStrictEqual(0);
        expect(Obj.get(obj, 'website')).toEqual(null);
        expect(Obj.get(obj, 'user.id')).toEqual(null);
    });
});
