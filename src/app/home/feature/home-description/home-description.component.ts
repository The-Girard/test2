import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '@shared/ui/components/tag/tag.component';
import { TAGS } from '../../data/tags.mock';
import { FlexDirective } from '@shared/ui/directives/flex.directive';
import { SocialsComponent } from '../../ui/socials/socials.component';

@Component({
  selector: 'cv-home-description',
  standalone: true,
  imports: [CommonModule, TagComponent, FlexDirective, SocialsComponent],
  template: `
    <div id="title-container" flex>
      <div>
        <h1 id="name">Théophane Girard</h1>
      </div>
      <div id="logo-container" flex>
        <!-- TODO: insert logo here -->
      </div>
    </div>
    <br />
    <div id="skill-tag-list">
      <cv-tag
        *ngFor="let tag of tags"
        [backgroundColor]="tag.backgroundColor"
        [label]="tag.label"
        [textColor]="tag.textColor"
      ></cv-tag>
    </div>
    <br />
    <i>Working on angular projects as developer since 2018</i>
    <cv-socials></cv-socials>
  `,
  styleUrls: ['./home-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDescriptionComponent {
  tags = TAGS;
}
