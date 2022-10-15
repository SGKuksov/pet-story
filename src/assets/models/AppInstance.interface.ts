import { AppModule } from './AppModule.interface';

export interface AppInstance {
  modules: AppModule[];
  isLoaded: boolean;

  onCreate(): void;

  onInit(): void;

  onDestroy(): void;

  onLoadingHandler(): void;

  onClickHandler(): void;

  onMatchMediaHandler(): void;

  getModule(name: string): AppModule | undefined;
}
