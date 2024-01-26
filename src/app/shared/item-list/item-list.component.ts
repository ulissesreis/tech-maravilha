import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from './item';

//  Estou deixando component AS module, porque um modulo shared com outros componentes poderia aumentar o tamanho do bundle.
//  A ideia é importar somente o que for usar...

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent {

  // Deixei input property para ser consumido por outros componentes
  @Input() items: Array<Item> = [];
  @Output() clickedItem = new EventEmitter<Item>();
  @Output() deletedItem = new EventEmitter<string>();


  // Optei por trabalhar o manualmente o changeDetection para não ter problemas de performance
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  /**
  * TrackBy para otimizar performance do ngFor
  * */
  public trackByFn(index) {
    return index;
  }

  /**
 * Emite evento ao clicar no item
 *  @param item a ser emitido
 * */
  public clickItem(item: Item): void {
    this.clickedItem.emit(item);
  }

  /**
* Adiciona item da lista
* @param nome do item a ser adicionado
* */
  public addItem(nome: string): void {
    const item = new Item(nome);
    this.items.push(item);

    this.changeDetectorRef.detectChanges();
  }

  /**
  * Remove item da lista
  * @param Id do item a ser removido
  * */
  public removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
    this.deletedItem.emit(id);

    this.changeDetectorRef.detectChanges();
  }

  /**
  *Atualiza item na lista
  *@param item a ser atualizado
  * */
  public updateItem(item: Item): void {
    const index = this.items.findIndex(i => i.id === item.id);
    this.items[index] = item;

    this.changeDetectorRef.detectChanges();
  }

}
