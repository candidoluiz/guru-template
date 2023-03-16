import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';
import { light } from '../theme/light';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private active: Theme = light;
    //private availableThemes: Theme[] = [light];

    // getAvailableThemes(): Theme[] {
    //     return this.availableThemes;
    // }

    getActiveTheme(): Theme {
        return this.active;
    }

    setLightTheme(): void {
        this.setActiveTheme(light);
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}
