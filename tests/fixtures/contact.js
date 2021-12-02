exports.testContact = {
    name: 'John Smith',
    phone: {
        home: '04123456',
        work: '07123456',
        mobile: '06123456',
        other: '00123456',
    },
    email: 'j.smith@chalkb.com',
    address: {
        street: '3 circle street',
        postalCode: '1234',
        country: 'Belgium'
    },
    userId: 'abc123'
}

exports.testContactPhoneUndefined = {
    name: 'John Smith',
    email: 'j.smith@chalkb.com',
    address: {
        street: '3 circle street',
        postalCode: '1234',
        country: 'Belgium'
    },
    userId: 'abc123'
}

exports.testContactPhoneEmpty = {
    name: 'John Smith',
    email: 'j.smith@chalkb.com',
    phone: {},
    address: {
        street: '3 circle street',
        postalCode: '1234',
        country: 'Belgium'
    },
    userId: 'abc123'
}