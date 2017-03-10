
var editor = new MediumEditor('.editable');
require('../renderer.js');


var fs = require('fs');

// Save changes

document.getElementById('save-changes').addEventListener('click',function(){
    var actualFilePath = "./txt/test_file.txt";

    if(actualFilePath){
        saveChanges(actualFilePath,document.getElementById("session-content").value);
    }else{
        console.log("Please select a file first");
    }
},false);


    document.getElementById('create-new-file').addEventListener('click',function(){
        var content = document.getElementById("session-content").value;

        dialog.showSaveDialog(function (fileName) {
            if (fileName === undefined){
                console.log("You didn't save the file");
                return;
            }

            fs.writeFile(fileName, content, function (err) {
                if(err){
                    alert("An error ocurred creating the file "+ err.message)
                }

                alert("The file has been succesfully saved");
            });
        });
    },false);

    function readFile(filepath) {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            document.getElementById("session-content").value = data;
        });
    }

    function saveChanges(filepath,content){
        fs.writeFile(filepath, content, function (err) {
            if(err){
                alert("An error ocurred updating the file"+ err.message);
                console.log(err);
                return;
            }

            alert("The file has been succesfully saved");
        });
    }
