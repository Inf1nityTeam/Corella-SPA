const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const ObjectId = require('mongoose').Schema.Types.ObjectId;
const User = require('./user');
const Issue = require('./issue');

const columnSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	isStarting: {
		type: Boolean,
		required: true
	},
	isClosing: {
		type: Boolean,
		required: true
	},
	issues: {
		required: true,
		type: [ObjectId],
		ref: Issue
	}
});

const projectRoleSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: true
	},
	isManager: {
		type: Boolean,
		required: true
	},
	issueTransitionMatrix: {
		type: Map,
		of: [ObjectId],
		required: true
	},
	isCreator: {
		type: Boolean,
		required: true
	},
	isDestroyer: {
		type: Boolean,
		required: true
	},
	isEditor: {
		type: Boolean,
		required: true
	},
	members: [{
		type: ObjectId,
		ref: User
	}]
});

const projectSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	roles: [projectRoleSchema],
	columns: [columnSchema]
});

const Project = mongoose.model('Project', projectSchema, 'projects');
module.exports = Project;