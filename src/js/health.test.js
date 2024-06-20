import { health } from "./app";

test('Health', () => {
    expect(health({name: 'Маг', health: 90})).toEqual('healthy')
    expect(health({name: 'Маг', health: 50})).toEqual('wounded')
    expect(health({name: 'Маг', health: 14})).toEqual('critical')
    expect(health({})).toEqual('No data')
    expect(health()).toEqual('No data')
})