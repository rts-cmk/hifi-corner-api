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

gulp.task("build", function(done) {
	typescript()
	publicFolder()
	done()
})

gulp.task("dev", function(done) {
	watchTypescript()
	watchPublicFolder()
	done()
})
