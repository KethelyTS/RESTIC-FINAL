player-module.ts
@@ -0,0 +1,220 @@


import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';

declare const DEFAULT_PLAYER_HEIGHT = 390;

declare const DEFAULT_PLAYER_WIDTH = 640;

declare namespace i1 {
    export {
        PLAYER_MODULE_CONFIG,
        PlayerModuleConfig,
        DEFAULT_PLAYER_WIDTH,
        DEFAULT_PLAYER_HEIGHT,
        PlayerModule
    }
}

/**  Quality of the placeholder image.  */
export declare type PlaceholderImageQuality = 'high' | 'standard' | 'low';

/** Injection token used to configure the `PlayerModule`. */
export declare const PLAYER_MODULE_CONFIG: InjectionToken<PlayerModuleConfig>;

/**
 * Angular component that renders a video player via the player module
 * iframe API.
 * @see https://developers.google.com/youtube/iframe_api_reference
 */
export declare class PlayerModule implements AfterViewInit, OnChanges, OnDestroy {
    private _ngZone;
    private readonly _nonce;
