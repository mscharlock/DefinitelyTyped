declare const FileUploader_base: any;
declare class FileUploader extends FileUploader_base {
    constructor(element: any, options?: {});
    _filenamesHTML(name: any, id: any): string;
    _uploadHTML(): string;
    _closeButtonHTML(): string;
    _checkmarkHTML(): string;
    _changeState: (state: any, detail: any, callback: any) => void;
    _getStateContainers(): any[];
    _displayFilenames(files?: any): void;
    _removeState(element: any): void;
    _handleStateChange(elements: any, selectIndex: any, html: any): void;
    _handleDeleteButton: (evt: any) => void;
    _handleDragDrop: (evt: any) => void;
    setState(state: any, selectIndex: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorInput: string;
        selectorContainer: string;
        selectorCloseButton: string;
        selectorSelectedFile: string;
        selectorDropContainer: string;
        selectorOtherDropContainers: string;
        classLoading: string;
        classLoadingAnimation: string;
        classLoadingSvg: string;
        classLoadingBackground: string;
        classLoadingStroke: string;
        classFileName: string;
        classFileClose: string;
        classFileComplete: string;
        classSelectedFile: string;
        classStateContainer: string;
        classDragOver: string;
        eventBeforeDeleteFilenameFileuploader: string;
        eventAfterDeleteFilenameFileuploader: string;
    };
}
export default FileUploader;
