import { Component, Compiler, Injector, NgModuleRef, ViewChild, ViewContainerRef, AfterViewInit, NgModule, OnInit, Renderer, ElementRef, ViewChildren } from '@angular/core';
import { TreeView } from './treeview.model';
import { ChildTreeViewComponent } from './childTreeView.component';

@Component({
    selector: 'parent-tree-view',
    template: '<child-tree-view [directories]="directories" #addFile  (uploadFileEvent)="receiveFiles($event)"></child-tree-view>'
})

export class ParentTreeViewComponent implements OnInit {
    directories: Array<TreeView>;
    file: any; whichFolder: string;
    @ViewChild('addFile', { read: ViewContainerRef }) _container: ViewContainerRef;
    @ViewChildren('subDoc') subDoc: ElementRef;
    dynamicTemplate;

    constructor(private _compiler: Compiler,
        private _injector: Injector,
        private _m: NgModuleRef<any>, private renderer: Renderer) {
        this.loadDirectories();
    }

    loadDirectories() {
        const submission = new TreeView('Submission', [], ['Submission_Oldv1.cat', 'Submission_Oldv2.cat']);
        const pricing = new TreeView('Pricing', [], ['Pricing_Oldv1.cat', 'Pricing_Oldv2.cat']);
        const contractDocs = new TreeView('Contract Docs', [], ['Contract Docs_Oldv1.cat', 'Contract Docs_Oldv2.cat']);
        const correspondence = new TreeView('Correspondence', [], ['Correspondence_Oldv1.cat', 'Correspondence_Oldv2.cat']);
        const dealTracking = new TreeView('Deal tracking', [], ['Deal tracking_Oldv1.cat', 'Deal tracking_Oldv2.cat']);
        const finalDocs = new TreeView('Final Documents', [], ['Final Documents_Oldv1.cat', 'Final Documents_Oldv2.cat']);

        let A2 = new TreeView('A2', [], ['A21.jpg', 'A22.jpg', 'A23.jpg']);
        let A1 = new TreeView('A1', [], ['A11.jpg', 'A12.jpg', 'A13.jpg']);
        let A = new TreeView('A', [A1, A2], []);

        this.directories = [submission, pricing, contractDocs, correspondence, dealTracking, finalDocs];
    }

    receiveFiles(fileInput) {
        this.file = fileInput.formData;
        this.whichFolder = fileInput.folder;
        alert("file uploaded in - " + this.whichFolder.toUpperCase());
        this.dynamicTemplate = `
        <li class="pad-70-left">
             <i class="fa fa-file-text txtRed  txtSize32 pad-10-left pad-7-right" aria-hidden="true"></i>
        {{fileName}}
        </li>`;
        const tmpCmp = Component({ template: this.dynamicTemplate })(class { });
        const tmpModule = NgModule({ declarations: [tmpCmp] })(class { });
        this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[0];
                const cmpRef = f.create(this._injector, [], null, this._m);
                cmpRef.instance.fileName = this.file;
                this._container.insert(cmpRef.hostView); // Here problem is it is addding after the child.
            });
    }

    ngAfterViewInit() {   // attempt to insert with in the child but not able to catch the reference
        // this.renderer.invokeElementMethod(this.subDoc.nativeElement, 'insertAdjacentHTML', ['beforeend', this.dynamicTemplate]);
    }

    ngOnInit() {

    }
}