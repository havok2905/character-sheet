export interface IBaseFieldModel {
  fieldKey: string;
  label: string;
}

export interface IDestroyFieldModel extends IBaseFieldModel {
  type: 'destroy';
}

export interface INumberFieldModel extends IBaseFieldModel {
  type: 'number';
}

export interface ISelectFieldModel extends IBaseFieldModel {
  options: {
    label: string;
    value: string;
  }[];
  type: 'select';
}

export interface ITextFieldModel extends IBaseFieldModel {
  type: 'text';
}

export interface ITextAreaFieldModel extends IBaseFieldModel {
  type: 'textarea';
}

export type IFieldModel = IDestroyFieldModel | INumberFieldModel | ISelectFieldModel | ITextFieldModel | ITextAreaFieldModel;

export interface ICollectionFieldCollectionItem {
  collectionItem: any;
  collectionItemId: string;
}
