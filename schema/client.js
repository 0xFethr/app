// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Blog: {
      id: "kjzl6hvfrbw6cab0ktrt6h3atsmt0937ljxhe6o4f603bywf3cxg9l1wqvv7g1c",
      accountRelation: { type: "list" },
    },
    User: {
      id: "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
      accountRelation: { type: "single" },
    },
    Favourite: {
      id: "kjzl6hvfrbw6c98hrjr3j7it2ut1283z7962lm0decln9qmsi48sxbp7tzig92t",
      accountRelation: { type: "list" },
    },
    Fleet: {
      id: "kjzl6hvfrbw6c8dselrq70nxgpej2cpxp9hj55nyb2zp3ndinczcea61ptda38w",
      accountRelation: { type: "list" },
    },
    LeftSwipe: {
      id: "kjzl6hvfrbw6cavpwewuxhk4tnyz0dzlcw470hu5c2296w472wzx87498pxno3y",
      accountRelation: { type: "list" },
    },
    RigthSwipe: {
      id: "kjzl6hvfrbw6cav6ohfewdugx8ckmyjjfsursoyuy1owr1hj4qirb07g1t31v7n",
      accountRelation: { type: "list" },
    },
    Subscription: {
      id: "kjzl6hvfrbw6c6dvz3svm4ooksdq8omjcxh8kfae8rkdxflwafwvcr17pfjr7ij",
      accountRelation: { type: "list" },
    },
    Warden: {
      id: "kjzl6hvfrbw6c67vsd24pbma4zrfx4pshvjtfbc909j55ueq3rjktl2b07r70me",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    BlogTag: { name: { type: "string", required: true } },
    Blog: {
      tags: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "BlogTag",
          required: false,
        },
      },
      title: { type: "string", required: true },
      author: { type: "did", required: true },
      isFree: { type: "boolean", required: false },
      address: { type: "string", required: true },
      pricing: { type: "float", required: false },
    },
    User: {
      name: { type: "string", required: true },
      tokens: { type: "float", required: false },
      address: { type: "string", required: true },
      imageURL: { type: "string", required: false },
      isPremium: { type: "boolean", required: false },
      favourites: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c98hrjr3j7it2ut1283z7962lm0decln9qmsi48sxbp7tzig92t",
          property: "blogID",
        },
      },
      leftSwipe: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6cavpwewuxhk4tnyz0dzlcw470hu5c2296w472wzx87498pxno3y",
          property: "fleetID",
        },
      },
      rightSwipe: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6cav6ohfewdugx8ckmyjjfsursoyuy1owr1hj4qirb07g1t31v7n",
          property: "fleetID",
        },
      },
      subscriptions: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c67vsd24pbma4zrfx4pshvjtfbc909j55ueq3rjktl2b07r70me",
          property: "wardenID",
        },
      },
    },
    Favourite: {
      blogID: { type: "streamid", required: true },
      userID: { type: "streamid", required: true },
      blog: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6cab0ktrt6h3atsmt0937ljxhe6o4f603bywf3cxg9l1wqvv7g1c",
          property: "blogID",
        },
      },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
          property: "userID",
        },
      },
    },
    FleetTag: { name: { type: "string", required: true } },
    Fleet: {
      tags: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "FleetTag",
          required: false,
        },
      },
      title: { type: "string", required: true },
      author: { type: "did", required: true },
      address: { type: "string", required: true },
    },
    LeftSwipe: {
      userID: { type: "streamid", required: true },
      fleetID: { type: "streamid", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
          property: "userID",
        },
      },
      leftSwipe: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c8dselrq70nxgpej2cpxp9hj55nyb2zp3ndinczcea61ptda38w",
          property: "fleetID",
        },
      },
    },
    RigthSwipe: {
      userID: { type: "streamid", required: true },
      fleetID: { type: "streamid", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
          property: "userID",
        },
      },
      rigthSwipe: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c8dselrq70nxgpej2cpxp9hj55nyb2zp3ndinczcea61ptda38w",
          property: "fleetID",
        },
      },
    },
    Subscription: {
      userID: { type: "streamid", required: true },
      subscriptionID: { type: "streamid", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
          property: "userID",
        },
      },
      subscription: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
          property: "subscriptionID",
        },
      },
    },
    Warden: {
      name: { type: "string", required: true },
      author: { type: "did", required: true },
    },
  },
  enums: {},
  accountData: {
    blogList: { type: "connection", name: "Blog" },
    user: { type: "node", name: "User" },
    favouriteList: { type: "connection", name: "Favourite" },
    fleetList: { type: "connection", name: "Fleet" },
    leftSwipeList: { type: "connection", name: "LeftSwipe" },
    rigthSwipeList: { type: "connection", name: "RigthSwipe" },
    subscriptionList: { type: "connection", name: "Subscription" },
    wardenList: { type: "connection", name: "Warden" },
  },
};
