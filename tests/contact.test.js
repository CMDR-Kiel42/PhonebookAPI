const Contact = require('../models/contact');
const fixtures = require('./fixtures/contact');
const {
    dbConnect,
    dbDisconnect,
} = require('./utils/dbHandler');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Contact Model Test Suite', () => {

    test('Validate saving a new contact', async () => {
        const testContact = new Contact(fixtures.testContact);
        const savedContact = await testContact.save();

        expect(savedContact).not.toBeNull();
		expect(savedContact.name).toEqual('John Smith');
    });
});
