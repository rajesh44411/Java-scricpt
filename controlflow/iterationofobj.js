const myFiles = {
    first: "video",
    second: "audio",
    third: "music",
    fourth: "imagges"

}

for (const key in myFiles) {
    console.log(myFiles[key]);
}
for (const key in myFiles) {
    console.log(`${key} files name is ${myFiles[key]}`);
}