import { BaseComponent } from "../../lib";
import { writable, derived, readable } from 'svelte/store'
import type { Writable, Readable } from 'svelte/store';

export type propType = {name:string, counter:number};

export class AppComponent extends BaseComponent<propType> {    

    private subscription: Array<(o:any)=>void> = [];
    private internalValue: Writable<number>;

    customName: Readable<string>;

    constructor(
        propsGetter: () => propType,
        onMountCallback: (fn: any) => void, 
        beforeUpdateCallback: (fn: any) => void
    ) {
        super(propsGetter, onMountCallback, beforeUpdateCallback);
        
        this.internalValue = writable(200);
        
        this.customName = derived([this.properties, this.internalValue], this.evaluateCustomName); 
        
        setTimeout(() => {
            this.internalValue.update(x => 300);
        }, 2000);
    }

    incrementInternalCounter() {
        this.internalValue.update(x => x+1);
    }

    private evaluateCustomName(values:[propType, number]) {
        const props = values[0];
        const internalValue = values[1]; 
        
        return `${internalValue} ${props?.counter} ${props?.name || ""}`;
    }
 
}  