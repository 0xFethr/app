// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Blog: {
      id: "kjzl6hvfrbw6c7jtoz52yql11012mkfzo9lizs3dzjwnpgd5i7ji4aigryjrtl9",
      accountRelation: { type: "list" },
    },
    Fleet: {
      id: "kjzl6hvfrbw6c9k8njy70hinaak059fcj1h0nzx3rgu8zmisx0x4g7uo489p1j5",
      accountRelation: { type: "list" },
    },
    User: {
      id: "kjzl6hvfrbw6c5og04fltopb755bfc7n8e4t9itxr94x2z17qrn1i3mlznqt30h",
      accountRelation: { type: "single" },
    },
    Subscription: {
      id: "kjzl6hvfrbw6c6dvz3svm4ooksdq8omjcxh8kfae8rkdxflwafwvcr17pfjr7ij",
      accountRelation: { type: "list" },
    },
    Warden: {
      id: "kjzl6hvfrbw6c8ehh3meqcwslutp3mm8wg04a82smnbqwao3tp329icud17dpq0",
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
      contentURL: { type: "string", required: true },
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
      contentURL: { type: "string", required: true },
    },
    User: {
      name: { type: "string", required: true },
      tokens: { type: "float", required: false },
      address: { type: "string", required: true },
      imageURL: { type: "string", required: false },
      isPremium: { type: "boolean", required: false },
      subscriptions: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c8ehh3meqcwslutp3mm8wg04a82smnbqwao3tp329icud17dpq0",
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
      author: { type: "did", required: true },
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
