import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorage } from "../shared/data-storage.service";

@Component({
selector : 'app-header',
templateUrl: './header.component.html',

})
export class HeaderComponent{
 
constructor(private dataStorageService: DataStorage){

}
    onSaveData(){
        this.dataStorageService.storeData();
    }

    onFetchData(){
        this.dataStorageService.fetchData();
    }
}