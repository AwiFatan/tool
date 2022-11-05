cwebp = (data1Array,data2Array) => {

var result = "";
    for (i = 0; i < data1Array.length; i++) {
                    result += `cwebp -q 80"` + data1Array[i] + `" -o "` + data2Array[i] + `.webp"`
                    result += "\n"
    }
return result;
}
