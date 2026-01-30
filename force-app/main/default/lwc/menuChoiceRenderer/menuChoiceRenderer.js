import { LightningElement, api } from 'lwc';

export default class MenuChoiceRenderer extends LightningElement {
  @api value;

  get prompt() {
    return this.value?.prompt;
  }

  get items() {
    return this.value?.items || [];
  }

  get utilAPI() {
    return (
      window.embeddedservice_configuration?.util ||
      window.parent?.embeddedservice_configuration?.util ||
      null
    );
  }

  handlePick(event) {
    const choice = event.currentTarget.dataset.choice;

    const api = this.utilAPI;
    if (!api?.sendTextMessage) {
      console.warn('Enhanced Web Chat utilAPI.sendTextMessage is not available yet.');
      return;
    }

    // Send Message API: sends text "as if the end user had sent it". :contentReference[oaicite:9]{index=9}
    api.sendTextMessage(choice)
      .then(() => {
        console.log(`sendTextMessage succeeded: ${choice} `);
      })
      .catch((e) => {
        console.error('sendTextMessage failed', e);
      });
  }
}
