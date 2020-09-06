import { writable, derived, readable } from 'svelte/store'
import type { Writable, Readable } from 'svelte/store';

export abstract class BaseComponent<PropertyType> {

    properties: Writable<PropertyType>;

    constructor(
        private propsGetter: () => PropertyType,
        onMountCallback: (fn: any) => void,
        beforeUpdateCallback: (fn: any) => void
    ) {
        this.properties = writable(propsGetter());
                
        onMountCallback(() => this.onMount())    
        beforeUpdateCallback(() => this.beforeUpdate())    

        this.updateProperties();
    }

    protected onMount() {
        
    }

    protected beforeUpdate() {
        this.updateProperties();
    }

    protected updateProperties() {
        this.properties.set(this.propsGetter());
    }
}