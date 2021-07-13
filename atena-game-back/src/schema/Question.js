const { Schema, model } = require('mongoose')

const Question = new Schema(
	{
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: Number,
			required: true,
		},
		image_url: String,
		allowed: { type: Boolean, default: false },
		tags: [String],
	},
	{
		timestamps: true,
	}
)

module.exports = model('Question', Question)
