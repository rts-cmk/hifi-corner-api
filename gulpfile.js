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

gulp.task("build", function(done) {
	typescript()
	done()
})

gulp.task("dev", function(done) {
	watchTypescript()
	done()
})
