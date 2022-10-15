import { AppInstance } from './AppInstance.interface';

export interface AppModuleConstructable {
  new(params: unknown, root?: AppInstance): AppModule;
}

export class AppModule {
  public _name = '';

  constructor() {
    this.setName();
  }

  private setName() {
    this._name = this.constructor.name;
  }

  public init(): void {
  }
}
