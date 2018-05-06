import { NgModule } from '@angular/core';
import { TitlePartialComponent } from './title-partial/title-partial';
import { ListPartialComponent } from './list-partial/list-partial';
@NgModule({
	declarations: [TitlePartialComponent,
    ListPartialComponent],
	imports: [],
	exports: [TitlePartialComponent,
    ListPartialComponent]
})
export class ComponentsModule {}
