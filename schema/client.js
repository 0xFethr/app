// This is an auto-generated file, do not edit manually
export const definition = {
    models: {
        Blog: {
            id: 'kjzl6hvfrbw6cab0ktrt6h3atsmt0937ljxhe6o4f603bywf3cxg9l1wqvv7g1c',
            accountRelation: { type: 'list' },
        },
        User: {
            id: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
            accountRelation: { type: 'single' },
        },
        Favourite: {
            id: 'kjzl6hvfrbw6c5ntnbcqzy0mgbjw0xjnulejhwuh7364lwdph2lghcutt9q5u4r',
            accountRelation: { type: 'list' },
        },
        Fleet: {
            id: 'kjzl6hvfrbw6c7yhqjubjjvi95ckxsbav43mpab9s9mgoc9aunfbid4vmrbv383',
            accountRelation: { type: 'list' },
        },
        LeftSwipe: {
            id: 'kjzl6hvfrbw6c7wysddotjpkx05ffj4jqc83pv4ojx6dnb3uvusqam829pw00l0',
            accountRelation: { type: 'list' },
        },
        RigthSwipe: {
            id: 'kjzl6hvfrbw6c5rgnad85wug6a2l6irbd90lzj0vgc2947tpr6w6w656c69wm18',
            accountRelation: { type: 'list' },
        },
        Subscription: {
            id: 'kjzl6hvfrbw6cayjlqsoqtp3odctbbrrqwim43vzb9bo03y0kykmwktzk0jah2q',
            accountRelation: { type: 'list' },
        },
        Warden: {
            id: 'kjzl6hvfrbw6cacrbm9alvok87jtyivhptyi6y7ses8zstzp5gd6ypr8sjh4gjn',
            accountRelation: { type: 'list' },
        },
    },
    objects: {
        BlogTag: { name: { type: 'string', required: true } },
        Blog: {
            tags: {
                type: 'list',
                required: false,
                item: {
                    type: 'reference',
                    refType: 'object',
                    refName: 'BlogTag',
                    required: false,
                },
            },
            title: { type: 'string', required: true },
            author: { type: 'did', required: true },
            isFree: { type: 'boolean', required: false },
            address: { type: 'string', required: true },
            pricing: { type: 'float', required: false },
        },
        User: {
            name: { type: 'string', required: true },
            tokens: { type: 'float', required: false },
            address: { type: 'string', required: true },
            userDID: { type: 'did', required: true },
            imageURL: { type: 'string', required: false },
            isPremium: { type: 'boolean', required: false },
            favourites: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'queryConnection',
                    model: 'kjzl6hvfrbw6c5ntnbcqzy0mgbjw0xjnulejhwuh7364lwdph2lghcutt9q5u4r',
                    property: 'blogID',
                },
            },
            leftSwipe: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'queryConnection',
                    model: 'kjzl6hvfrbw6c7wysddotjpkx05ffj4jqc83pv4ojx6dnb3uvusqam829pw00l0',
                    property: 'fleetID',
                },
            },
            rightSwipe: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'queryConnection',
                    model: 'kjzl6hvfrbw6c5rgnad85wug6a2l6irbd90lzj0vgc2947tpr6w6w656c69wm18',
                    property: 'fleetID',
                },
            },
            subscriptions: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'queryConnection',
                    model: 'kjzl6hvfrbw6cayjlqsoqtp3odctbbrrqwim43vzb9bo03y0kykmwktzk0jah2q',
                    property: 'subscriptionID',
                },
            },
        },
        Favourite: {
            blogID: { type: 'streamid', required: true },
            userID: { type: 'streamid', required: true },
            blog: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6cab0ktrt6h3atsmt0937ljxhe6o4f603bywf3cxg9l1wqvv7g1c',
                    property: 'blogID',
                },
            },
            user: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
                    property: 'userID',
                },
            },
        },
        FleetTag: { name: { type: 'string', required: true } },
        Fleet: {
            tags: {
                type: 'list',
                required: false,
                item: {
                    type: 'reference',
                    refType: 'object',
                    refName: 'FleetTag',
                    required: false,
                },
            },
            title: { type: 'string', required: true },
            author: { type: 'did', required: true },
            address: { type: 'string', required: true },
        },
        LeftSwipe: {
            userID: { type: 'streamid', required: true },
            fleetID: { type: 'streamid', required: true },
            user: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
                    property: 'userID',
                },
            },
            leftSwipe: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c7yhqjubjjvi95ckxsbav43mpab9s9mgoc9aunfbid4vmrbv383',
                    property: 'fleetID',
                },
            },
        },
        RigthSwipe: {
            userID: { type: 'streamid', required: true },
            fleetID: { type: 'streamid', required: true },
            user: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
                    property: 'userID',
                },
            },
            rigthSwipe: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c7yhqjubjjvi95ckxsbav43mpab9s9mgoc9aunfbid4vmrbv383',
                    property: 'fleetID',
                },
            },
        },
        Subscription: {
            userID: { type: 'streamid', required: true },
            subscriptionID: { type: 'streamid', required: true },
            user: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
                    property: 'userID',
                },
            },
            subscription: {
                type: 'view',
                viewType: 'relation',
                relation: {
                    source: 'document',
                    model: 'kjzl6hvfrbw6c6s017berbiq8yb009koyqjfqkw8reoz2h9e8d2gze73hvzq1v2',
                    property: 'subscriptionID',
                },
            },
        },
        Warden: {
            name: { type: 'string', required: true },
            author: { type: 'did', required: true },
        },
    },
    enums: {},
    accountData: {
        blogList: { type: 'connection', name: 'Blog' },
        user: { type: 'node', name: 'User' },
        favouriteList: { type: 'connection', name: 'Favourite' },
        fleetList: { type: 'connection', name: 'Fleet' },
        leftSwipeList: { type: 'connection', name: 'LeftSwipe' },
        rigthSwipeList: { type: 'connection', name: 'RigthSwipe' },
        subscriptionList: { type: 'connection', name: 'Subscription' },
        wardenList: { type: 'connection', name: 'Warden' },
    },
}
