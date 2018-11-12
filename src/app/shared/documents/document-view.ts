import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Directory } from './document-view-directory';

@Component({
    selector: 'tree-view',
    templateUrl: './document-view.html',
    styleUrls: ['./document-view.scss']
})

export class TreeView {
    @Input() directories: Array<Directory>;
    files: any; filesToUpload: Array<File>;
    @Output() uploadFileEvent = new EventEmitter<any>();

    constructor() {
        this.filesToUpload = [];
    }

    dragover(event) {
        event.preventDefault();
        event.stopPropagation();
        // this.background = '#999';
    }
    dragleave(event) {
        event.preventDefault();
        event.stopPropagation();
        //this.background = 'transparent'
    }
    drop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.files = event.dataTransfer.files;
        this.processFile(this.files);
    }

    processFile(fileInput: any) {
        debugger;
        this.filesToUpload = <Array<File>>fileInput;
        this.upload();
    }

    upload() {
        debugger;
        this.makeFileRequest("http://localhost:1337/", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        debugger;
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            this.uploadFileEvent.emit(formData.get('uploads[]').name);

            xhr.send(formData);
        });
    }



}