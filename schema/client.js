// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Blog: {
      id: "kjzl6hvfrbw6caow4s2eh889ae6eyrfos9ebyk9570txwg9lwl34226z2fg9rpb",
      accountRelation: { type: "list" },
    },
    Fleet: {
      id: "kjzl6hvfrbw6c8h8r4iakt2jc49kn8m85durbtziy9d206um2ylnu3pv71mxvip",
      accountRelation: { type: "list" },
    },
    User: {
      id: "kjzl6hvfrbw6c5ni4cmk81rs0a1msmcdaq5p3p8zrw0nqvzki98zmnd24x8lekx",
      accountRelation: { type: "single" },
    },
    Subscription: {
      id: "kjzl6hvfrbw6cb5ig1jae2ae451pslcb38n46ggkqz1fhqjd4cufk9vvx6bigvy",
      accountRelation: { type: "list" },
    },
    Warden: {
      id: "kjzl6hvfrbw6c5e2c7q45lvbfsl26cyszke93pnu111gxpcou6b4bnjbge5quvq",
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
      isFree: { type: "boolean", required: false },
      address: { type: "string", required: true },
      contentURL: { type: "string", required: true },
      author: { type: "view", viewType: "documentAccount" },
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
      contentURL: { type: "string", required: true },
      author: { type: "view", viewType: "documentAccount" },
    },
    User: {
      name: { type: "string", required: true },
      tokens: { type: "float", required: false },
      address: { type: "string", required: true },
      imageURL: { type: "string", required: false },
      channelAddress: { type: "string", required: true },
      account: { type: "view", viewType: "documentAccount" },
      subscriptions: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6cb5ig1jae2ae451pslcb38n46ggkqz1fhqjd4cufk9vvx6bigvy",
          property: "subscriptionID",
        },
      },
      wardens: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c5e2c7q45lvbfsl26cyszke93pnu111gxpcou6b4bnjbge5quvq",
          property: "wardenID",
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
            "kjzl6hvfrbw6c5ni4cmk81rs0a1msmcdaq5p3p8zrw0nqvzki98zmnd24x8lekx",
          property: "userID",
        },
      },
      subscription: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5ni4cmk81rs0a1msmcdaq5p3p8zrw0nqvzki98zmnd24x8lekx",
          property: "subscriptionID",
        },
      },
    },
    WardenTag: { name: { type: "string", required: true } },
    Warden: {
      name: { type: "string", required: true },
      tags: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "WardenTag",
          required: false,
        },
      },
      author: { type: "view", viewType: "documentAccount" },
    },
  },
  enums: {},
  accountData: {
    blogList: { type: "connection", name: "Blog" },
    fleetList: { type: "connection", name: "Fleet" },
    user: { type: "node", name: "User" },
    subscriptionList: { type: "connection", name: "Subscription" },
    wardenList: { type: "connection", name: "Warden" },
  },
};
