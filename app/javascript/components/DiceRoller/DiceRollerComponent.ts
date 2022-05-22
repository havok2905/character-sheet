import { DiceRoller } from './DiceRoller';
import { IEventRegistration } from '../types/IEventRegistration';

class DiceRollerComponent implements IEventRegistration {
  public diceRoller: DiceRoller;
  public rollCache: Array<string>;
  public rollCacheIndex: number | null;

  constructor() {
    this.diceRoller = new DiceRoller();
    this.rollCache = [];
    this.rollCacheIndex = null;
  }

  run() {
    const root = this.getRootElement();
    
    if (!root) return;
    
    const form = this.getFormElement(root);
    const input = this.getInputElement(root);
    
    this.registerSubmitEvent(form);
    this.registerKeyDownEvent(input);
  }

  private registerSubmitEvent(form: Element): void {
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      const roll = this.getRollElement(form);
      const input = this.getInputElement(form);
      const value = input?.value;

      if (!value || !roll) return;

      const response = this.diceRoller.roll(value);

      this.rollCache.push(value);
      this.rollCacheIndex = this.rollCache.length;
      console.log(this.rollCacheIndex);
      roll.innerHTML = String(response);
      input.value = '';
    });
  }

  private registerKeyDownEvent(input: Element): void {
    if (!input) return;

    input.addEventListener('keydown', e => {
      if (this.rollCacheIndex === null) return;

      const code = e.code;

      if (code === 'ArrowDown') {
        if (this.rollCacheIndex !== this.rollCache.length - 1) this.rollCacheIndex++;
        (<HTMLInputElement>e.target).value = this.rollCache[this.rollCacheIndex];
      }

      if (code === 'ArrowUp') {
        if (this.rollCacheIndex !== 0) this.rollCacheIndex--;
        (<HTMLInputElement>e.target).value = this.rollCache[this.rollCacheIndex];
      }
    });
  }

  private getFormElement(root: Element): Element {
    return root?.querySelector('.dice-roller-component-form');
  }

  private getInputElement(root: Element): HTMLInputElement {
    return root?.querySelector('.dice-roller-component-input');
  }

  private getRollElement(root: Element): Element {
    return root?.querySelector('.dice-roller-component-roll');
  }

  private getRootElement(): Element {
    return document.querySelector('.dice-roller-component');
  }
}

export { DiceRollerComponent };
