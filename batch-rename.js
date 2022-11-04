                    
function rename(data1Array, data2Array) {
            var txt = '';
            var result = '';
            for (i = 0; i < data1Array.length; i++) {
                txt = 'ren \"' + data1Array[i] + '\" \"' + data2Array[i] + '\"\n';
                result += txt;
            }

            return result;
}  

