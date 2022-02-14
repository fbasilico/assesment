import { MatCardModule } from '@angular/material/card';
import {
  Spectator,
  createComponentFactory,
  byText,
  byAltText,
} from '@ngneat/spectator';
import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let spectator: Spectator<CardItemComponent>;
  const createComponent = createComponentFactory({
    component: CardItemComponent,
    imports: [MatCardModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          content: 'content',
          title: 'title',
          imageUrl:
            'https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/71/fd/7a/71fd7ada-17e3-51a1-922c-f8828cba24fb/U0MtTVMtV1ctTk1ELU1hcnlKQmxpZ2VBREFNX0lEPTEwNTMxNjU4NTcucG5n.png/600x600SC.DN01.jpg?l=en-US',
        },
      }))
  );

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should show default info', () => {
    expect(spectator.query(byText('content'))).toBeTruthy();
    expect(spectator.query(byText('title'))).toBeTruthy();
    expect(spectator.query(byAltText('title'))).toBeTruthy();
  });

  it('should not render image if not found', () => {
    spectator.setInput('imageUrl', undefined);
    expect(spectator.query(byAltText('title'))).toBeFalsy();
  });
});
