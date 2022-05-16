import { FunctionalComponent, h } from 'preact';

export const withArrayDataProvider =
  (BaseComponent) => (data: any[]) => (props) => {
    console.log(data);
    return <BaseComponent {...props} arrayData={data} />;
  };

export const withDeduplicateArrayDataProvider =
  (BaseComponent) => (data: any[]) => (props) => {
    console.log(data);
    return <BaseComponent {...props} arrayData={[...new Set(data)]} />;
  };
