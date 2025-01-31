import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';

interface ModalSignature {
  Args: {
    isOpen: boolean;
    close(): void;
  };
  Blocks: {};
  Element: HTMLDivElement;
}

export default class Modal extends Component<ModalSignature> {
  styleNamespace = podNames['modal'];
}
