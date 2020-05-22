import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/sql"

export class Product extends Model {}
export class Category extends Model {}
export class Brand extends Model {}
export class Media extends Model {}
export class Specs extends Model {}

Product.init({
	model: DataTypes.STRING,
	description: DataTypes.STRING,
	sku: DataTypes.STRING,
	price: DataTypes.FLOAT,
	link: DataTypes.STRING,
	delivery: DataTypes.STRING,
	warranty: DataTypes.STRING,
	instock: DataTypes.BOOLEAN
}, { sequelize, modelName: "product" })

Category.init({
	name: DataTypes.STRING
}, { sequelize, modelName: "category" })

Brand.init({
	name: DataTypes.STRING
}, { sequelize, modelName: "brand" })

Media.init({
	filename: DataTypes.STRING,
	name: DataTypes.STRING,
	filetype: DataTypes.STRING,
	height: DataTypes.INTEGER,
	width: DataTypes.INTEGER,
	filesize: DataTypes.INTEGER,
	path: DataTypes.STRING
}, { sequelize, modelName: "media" })

Specs.init({
	name: DataTypes.STRING,
	content: DataTypes.STRING
}, { sequelize, modelName: "specs" })

Category.hasOne(Product, { foreignKey: "categoryId" })
Product.belongsTo(Category, { foreignKey: "categoryId" })

Brand.hasOne(Product, { foreignKey: "brandId" })
Product.belongsTo(Brand, { foreignKey: "brandId" })

Product.belongsToMany(Media, { through: "ProductMedia" })
Media.belongsToMany(Product, { through: "ProductMedia" })

Media.hasOne(Category, { foreignKey: "mediaId"})
Category.belongsTo(Media, { foreignKey: "mediaId"})

Product.belongsToMany(Specs, { through: "ProductSpecs" })
Specs.belongsToMany(Product, { through: "ProductSpecs" })

sequelize.sync({ force: false })
	.then(function() {
		console.log("Tables created")
	})
	.catch(function(error: Error) {
		console.error(error)
	})
