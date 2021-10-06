export type CssClassMap = { [key:string]: boolean };

/**
 *  Grids
 *  - Reference
 */
export type CssGridAttrs = 'start' | 'end' | 'center' | 'stretch' |  'space-around' |'space-between' | 'space-evenly';

export type GridContent = CssGridAttrs;

export type GridItem = Exclude<CssGridAttrs,   
  'space-around' | 'space-between' | 'space-evenly'>;
/**
 *  Default Colors
 */
export type Colors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'info' | 'warning' | string;

/**
 *  Placement
 *  - Components
 *   - Modal
 *   - Popover
 *   - Icon
 *   - Drawer
 * 
 */
export type Placement = 'top' | 'left' | 'bottom' | 'right';

/**
 *  Flex Parent
 *   - align-content
 *   - align-items
 *   - justify-content
 * 
 */
export type FlexboxAlignedContent = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-evently' | 'space-between' | 'space-around';

export type FlexboxAlignedItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'auto';

export type ButtonVariants = 'none' | 'outline' | 'solid';

export type Sizes = "small" | "mediumn" | "large";

export interface InputProps { 
  value: string, 
  labe: string, 
  readonly: boolean, 
  required: boolean, 
  maxLength: number
}
