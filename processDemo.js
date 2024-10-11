console.log(process.argv)

//pid
console.log(process.pid)

//process.env
console.log(process.env.LOGNAME);

// cwd
console.log(process.cwd())

//title
console.log(process.title);

//memoryUsage()
console.log(process.memoryUsage());

//uptime
console.log(process.uptime())

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
}) 

//exit()
process.exit(0);

console.log("hello")

