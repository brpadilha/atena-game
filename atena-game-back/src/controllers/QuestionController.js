const Question = require('../schema/Question')
// const { findConnections, sendMessage } = require('../websocket')
module.exports = {
	async index(req, res) {
		let question
		if (req.query.tag) {
			question = await Question.find({
				tags: req.query.tag,
				allowed: true,
			}).limit(10)
		} else {
			question = await Question.find({ allowed: true }).limit(10)
		}
		return res.json(question)
	},

	async store(req, res) {
		const { question, answer, image_url, tags } = req.body
		const questionSaved = await Question.create({
			question,
			answer,
			image_url,
			tags,
		})
		return res.json({ question: questionSaved })
	},

	async update(req, res) {
		const {
			params: { id },
		} = req
		try {
			const question = await Question.findById(id)
			question.allowed = !!req.body.allowed
			await question.save()
			return res.json({ question })
		} catch (e) {
			return res.status(404).json({ message: 'Question not found' })
		}
	},
}
