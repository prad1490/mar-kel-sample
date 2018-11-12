import { Component, Compiler, Injector, NgModuleRef, ViewChild, ViewContainerRef, AfterViewInit, NgModule, OnInit } from '@angular/core';
import { Directory } from './document-view-directory';
import { TreeView } from './document-view';

@Component({
    selector: 'my-tree-view',
    template: '<tree-view [directories]="directories" #addFile  (uploadFileEvent)="receiveFiles($event)"></tree-view>'
})

export class TreeViewDemo implements OnInit {
    directories: Array<Directory>;
    file: any;
    @ViewChild('addFile', { read: ViewContainerRef }) _container: ViewContainerRef;

    constructor(private _compiler: Compiler,
        private _injector: Injector,
        private _m: NgModuleRef<any>) {
        this.loadDirectories();
    }

    loadDirectories() {
        const submission = new Directory('Submission', [], ['Submission_Oldv1.cat', 'Submission_Oldv2.cat']);
        const pricing = new Directory('Pricing', [], ['Pricing_Oldv1.cat', 'Pricing_Oldv2.cat']);
        const contractDocs = new Directory('Contract Docs', [], ['Contract Docs_Oldv1.cat', 'Contract Docs_Oldv2.cat']);
        const correspondence = new Directory('Correspondence', [], ['Correspondence_Oldv1.cat', 'Correspondence_Oldv2.cat']);
        const dealTracking = new Directory('Deal tracking', [], ['Deal tracking_Oldv1.cat', 'Deal tracking_Oldv2.cat']);
        const finalDocs = new Directory('Final Documents', [], ['Final Documents_Oldv1.cat', 'Final Documents_Oldv2.cat']);

        this.directories = [submission, pricing, contractDocs, correspondence, correspondence, dealTracking, finalDocs];
    }

    receiveFiles(filename) {
        this.file = filename;
        debugger;
        const template = `
        <li class="pad-70-left">
             <i class="fa fa-file-text txtRed  txtSize32 pad-10-left pad-7-right" aria-hidden="true"></i>
        {{fileName}}
        </li>`;
        const tmpCmp = Component({ template: template })(class { });
        const tmpModule = NgModule({ declarations: [tmpCmp] })(class { });
        this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[0];
                const cmpRef = f.create(this._injector, [], null, this._m);
                cmpRef.instance.fileName = this.file;
                this._container.insert(cmpRef.hostView);
            });

    }

    ngAfterViewInit() {

    }

    ngOnInit() {

    }
}