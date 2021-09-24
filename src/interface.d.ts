export type CssClassMap = { [key:string]: boolean };
/**
 *  Grids
 */
declare type CssGridAttrs = 'start' | 'end' | 'center' | 'stretch' |  'space-around' |'space-between' | 'space-evenly';

export type GridContent = CssGridAttrs;

export type GridItem = Exclude<CssGridAttrs,   
  'space-around' | 'space-between' | 'space-evenly'>;

/**
 *  Colors
 */
export type Colors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'info' | 'warning';

/**
 *  Placement
 *   -Modal
 *   -Popover
 *   -Icon
 *   -Drawer
 */
export type Placement = 'top' | 'left' | 'bottom' | 'right';
