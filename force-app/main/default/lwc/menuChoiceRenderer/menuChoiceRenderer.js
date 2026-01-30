import { LightningElement, api } from 'lwc';

export default class MenuChoiceRenderer extends LightningElement {
  @api value;

  get prompt() {
    return this.value?.prompt;
  }

  get items() {
    return this.value?.items || [];
  }

  handlePick(event) {
    const choice = event.currentTarget.dataset.choice;
    window.parent.sendMessage(choice);
  }
}
