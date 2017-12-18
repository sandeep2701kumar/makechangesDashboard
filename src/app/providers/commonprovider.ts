import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core';


@Injectable()
export class CommonProvider {
    @Output() fire: EventEmitter<any> = new EventEmitter();


    constructor() {
        this.fire.emit('changed');
        console.log('shared service started');
    }

    change() {
        console.log('change started');
        this.fire.emit(true);
    }

    getEmittedValue() {
        return this.fire;
    }

}
