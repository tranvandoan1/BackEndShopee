import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    cate_id: {
      type: ObjectId,
      ref: "categories",
    },
    shop_id: {
      type: ObjectId,
      ref: "shopowner",
    },
    photo: {
      type: String,
    },

    view: {
      type: Number,
    },
    review: {
      type: Number,
    },

    sold: {
      type: Number,
    },
    description: {
      type: String,
    },
    sale: {
      type: Number,
    },
    origin: {
      type: String,
    },
    trademark: {
      type: String,
    },
    warehouse: {
      type: String,
    },
    sent_from: {
      type: String,
    },

    classification: [
      {
        name_classify1: { type: String | null },
        name_classify2: { type: String | null },
        value1: [
          {
            price: {
              type: Number,
            },
            name: {
              type: String,
            },
            quantity: {
              type: Number,
            },
          },
        ],
        value2: [
          {
            price: {
              type: Number,
            },
            name: {
              type: String,
            },
            quantity: {
              type: Number,
            },
          },
        ],
      },
    ],
    // name_commodityvalue: {
    //   type: String,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", productSchema);
