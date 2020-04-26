import { Image } from './image';
import { ImageSpecs } from './image-specs';

export interface ImageEdited extends Image {
  srcBefore: string;
  imageSpecs: ImageSpecs; // only edited images need to display the specs
}
