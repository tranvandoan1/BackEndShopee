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
      default: 0 || null,
    },
    review: {
      type: Number,
      default: 0 || null,
    },

    sold: {
      type: Number,
      default: 0 || null,
    },
    description: {
      type: String,
    },
    sale: {
      type: Number,
      default: 0 || null,
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

    classification: {
      name_classify1: { type: String | null },
      name_classify2: { type: String | null },
      value1:
        [
          {
            price: {
              type: Number,
            },
            name: {
              type: String,
            },
            photo: {
              type: String,
            },

            quantity: {
              type: Number,
            },
          },
        ] || null,
      value2:
        [
          {
            name: {
              type: String,
            },
            photo: {
              type: String,
            },
            value: [
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
        ] || null,
    },

    // name_commodityvalue: {
    //   type: String,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", productSchema);
