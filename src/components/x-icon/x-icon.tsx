import { Component, Element, Prop, Watch, Host, h } from '@stencil/core';
import { library, findIconDefinition, icon, IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { setCssProperties } from '../../utils';

@Component({
  tag: 'x-icon',
  styleUrl: 'x-icon.scss'
})
export class XIcon {

  @Element() host: HTMLElement;

  @Prop() name: IconName;

  @Prop() solid: boolean;

  @Prop() color: string;

  @Watch('color')
  colorHandler() {
    this.setColor();
  }

  constructor() {
    library.add(fas, far);
  }

  setColor(): void {
    setCssProperties(this.host, {
      '--icon-color': this.color
    })
  }

  componentWillLoad() {

    this.setColor();

    const prefix = this.solid ? 'fas' : 'far';

    const node = findIconDefinition({
      prefix: prefix,
      iconName: this.name
    });

    const i = icon(node);

    Array.from(i?.node || []).map(
      (n: any) => this.host.appendChild(n)
    );
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
