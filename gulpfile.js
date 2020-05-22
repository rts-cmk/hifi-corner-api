const gulp = require("gulp")
const ts = require("gulp-typescript")

const tsProject = ts.createProject("tsconfig.json")

function typescript() {
	const tsResult = tsProject.src().pipe(tsProject())
	return tsResult.js.pipe(gulp.dest("./dist"))
}

function watchTypescript() {
	gulp.watch("src/**/*.ts", { ignoreInitial: false }, typescript)
}

function publicFolder() {
	gulp.src("src/public/**/*")
		.pipe(gulp.dest("dist/public"))
}

function watchPublicFolder() {
	gulp.watch("src/public/**/*", { ignoreInitial: false }, publicFolder)
}

function dataFolder() {
	gulp.src("src/data/**/*")
		.pipe(gulp.dest("dist/data"))
}

function watchDataFolder() {
	gulp.watch("src/data/**/*", { ignoreInitial: false }, dataFolder)
}

function fileFolder() {
	gulp.src("src/file-bucket/**/*")
		.pipe(gulp.dest("dist/file-bucket"))
}

function watchFileFolder() {
	gulp.watch("src/file-bucket/**/*", { ignoreInitial: false }, fileFolder)
}

gulp.task("build", function(done) {
	typescript()
	publicFolder()
	dataFolder()
	fileFolder()
	done()
})

gulp.task("dev", function(done) {
	watchTypescript()
	watchPublicFolder()
	watchDataFolder()
	watchFileFolder()
	done()
})
