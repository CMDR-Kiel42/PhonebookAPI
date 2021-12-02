const Contact = require('../models/contact');
const fixtures = require('./fixtures/contact');
const {
    dbConnect,
    dbDisconnect,
} = require('./utils/dbHandler');

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('Contact Model Test Suite', () => {

    test('validate saving a new contact', async () => {
        const testContact = new Contact(fixtures.testContact);
        const savedContact = await testContact.save();

        expect(savedContact).not.toBeNull();
		expect(savedContact.name).toEqual('John Smith');
    });

	test('should throw when phone is undefined', async () => {
        expect.assertions(4);
        var testContact = new Contact(fixtures.testContactPhoneUndefined);

        try {
            await testContact.save();
        }
        catch(error) {
            expect(error.name).toEqual('ValidationError');
			expect(error.errors['phone']).not.toBeNull();
			expect(error.errors['phone']).toBeDefined();
            expect(error.errors['phone'].message).toEqual('At least one phone number should be given');
        }

	});

	test('should throw when no phone has been specified', async () => {
		expect.assertions(4);
        const testContact = new Contact(fixtures.testContactPhoneEmpty);

        try {
            await testContact.save();
        }
        catch(error) {
            expect(error.name).toEqual('ValidationError');
			expect(error.errors['phone']).not.toBeNull();
			expect(error.errors['phone']).toBeDefined();
            expect(error.errors['phone'].message).toEqual('At least one phone number should be given');
        }
    });

	test('saving a contact with no address should work', async () => {
        const testContact = new Contact(fixtures.testContactNoAddress);
        const savedContact = await testContact.save();

        expect(savedContact).not.toBeNull();
		expect(savedContact.name).toEqual('John Smith');
        expect(savedContact.address).toBeUndefined();
    });
    
	test('should throw when the address is incomplete', async () => {
		expect.assertions(4);
        const testContact = new Contact(fixtures.testContactAddressIncomplete);

        try {
            await testContact.save();
        }
        catch(error) {
            console.log(error);
            expect(error.name).toEqual('ValidationError');
			expect(error.errors['address.country']).not.toBeNull();
			expect(error.errors['address.country']).toBeDefined();
            expect(error.errors['address.country'].kind).toEqual('required');
        }
    });
});
