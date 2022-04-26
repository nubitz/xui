# x-datepicker



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default     |
| ------------- | ------------- | ----------- | --------- | ----------- |
| `description` | `description` |             | `string`  | `undefined` |
| `fieldId`     | `field-id`    |             | `string`  | `undefined` |
| `fieldName`   | `field-name`  |             | `string`  | `undefined` |
| `label`       | `label`       |             | `string`  | `undefined` |
| `month`       | `month`       |             | `number`  | `1`         |
| `readonly`    | `readonly`    |             | `boolean` | `undefined` |
| `required`    | `required`    |             | `boolean` | `undefined` |
| `value`       | `value`       |             | `string`  | `undefined` |
| `year`        | `year`        |             | `number`  | `2021`      |


## Events

| Event         | Description | Type                              |
| ------------- | ----------- | --------------------------------- |
| `valueChange` |             | `CustomEvent<{ value: string; }>` |


## Dependencies

### Depends on

- [x-textbox](../x-textbox)
- [x-menu](../x-menu)
- [x-button](../x-button)
- [x-icon](../x-icon)
- [x-box](../x-box)
- [x-box-item](../x-box-item)

### Graph
```mermaid
graph TD;
  x-datepicker --> x-textbox
  x-datepicker --> x-menu
  x-datepicker --> x-button
  x-datepicker --> x-icon
  x-datepicker --> x-box
  x-datepicker --> x-box-item
  style x-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
