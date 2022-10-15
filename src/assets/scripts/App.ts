import { AppInstance, AppModule, AppModuleConstructable } from '@/assets/models';
import { breakpoints } from './utils/config';


class App implements AppInstance {
  public modules: AppModule[];
  public isLoaded = false;

  constructor(modules?: AppModuleConstructable[]) {
    this.modules = modules!.map(Module => {
      return new Module(null, this);
    });

    this.onLoadingHandler = this.onLoadingHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onMatchMediaHandler = this.onMatchMediaHandler.bind(this);

    this.onCreate();
  }

  onCreate() {
    document.addEventListener('DOMContentLoaded', this.onLoadingHandler);
    document.addEventListener('click', this.onClickHandler);

    window.matchMedia(breakpoints.desktop).addEventListener('change', this.onMatchMediaHandler);
  }

  onInit() {
    this.modules.forEach(module => module.init());
  }

  onDestroy() {
    document.removeEventListener('DOMContentLoaded', this.onLoadingHandler);
    document.removeEventListener('click', this.onClickHandler);

    window.matchMedia(breakpoints.desktop).removeEventListener('change', this.onMatchMediaHandler);
  }

  getModule(name: string) {
    return this.modules.find(module => module._name === name);
  }

  onLoadingHandler() {
    this.isLoaded = true;
    this.onInit();
  }

  onClickHandler() {
    /*
      Nothing
     */
  }

  onMatchMediaHandler() {
    /*
      Nothing
    */
  }
}

export default App;
