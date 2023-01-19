import { Component, Element, Prop, Watch, Host, h } from '@stencil/core';
import { library, findIconDefinition, icon, IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { extractAttrs, setCssProperties } from '../../utils';

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
  }

  render() {

    const prefix = this.solid ? 'fas' : 'far';

    const node = findIconDefinition({
      prefix: prefix,
      iconName: this.name
    });

    const i = icon(node);

    const svg = Array.from(i?.node || []);

    return (
      <Host>
        {
          svg.map((el) => {
            const [svgAttrs, pathAttrs] = [
              extractAttrs(el as any),
              extractAttrs(el.children[0] as any)
            ]
            return (
              <svg {...svgAttrs}>
                <path {...pathAttrs} />
              </svg>
            )
          })
        }
        <slot></slot>
      </Host>
    );
  }
}
