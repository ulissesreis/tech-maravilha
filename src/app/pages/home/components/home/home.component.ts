import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// note que fiz importações de @shared, configurei paths no tsconfig para deixar mais acessivel as importações
import { ItemListComponent } from '@shared/item-list/item-list.component';
import { Item } from '@shared/item-list/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('itemList') itemList: ItemListComponent;

  public itemsForm = new FormGroup({
    id: new FormControl('', []),
    nome: new FormControl('', [Validators.required]),
  });

  /** 
   * Ao clicar no botao salvar deve salvar o item no item list 
   * */
  public save(): void {
    this.itemsForm.markAllAsTouched();
    if (this.itemsForm.invalid) {
      return;
    }

    const { nome, id } = this.itemsForm.value;
    if (!nome || nome.trim() === '') {
      return;
    }

    if (!id || id.trim() === '') {
      this.itemList.addItem(nome);
    } else {
      this.itemList.updateItem(this.itemsForm.value as Item);
    }
    this.itemsForm.reset();

  }

  /** 
   * Ao clicar sob o item deve disponibilizar  para uso no formulario 
   * @param item - Item selecionado
   * */
  public clickOnItem(item: Item) {
    this.itemsForm.reset();
    this.itemsForm.patchValue(item);
  }

  /** 
   * Valida se o item em edição acaba de ser deletado, entao reseta o formulario 
   * @param id - Id do item deletado
   * */
  public compareDelete(id: string) {
    if (this.itemsForm.value.id === id) {
      this.itemsForm.reset();
    }
  }

}
