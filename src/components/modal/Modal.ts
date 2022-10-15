import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';
import { AppModule } from "@/assets/models";

function createOverlay(): HTMLElement {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  document.body.append(overlay);
  return overlay;
}

function createModal(content: string, id: string) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.dataset.modal = id;
  modal.innerHTML = `
      <div class="modal__content" data-modal-content>
          <div class="modal__close" data-modal-close>
            <svg viewBox="0 0 20 20" id="burger-close-desktop" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.378 16.957L3 4.32 4.293 3l12.379 12.637z"></path>
              <path d="M3 15.637L15.378 3l1.293 1.32L4.293 16.958z"></path>
            </svg>
          </div>
  
          <div class="modal__content-header"></div>
  
          <div class="modal__content-body" data-modal-content>
              ${content}
          </div>
      </div>
    `;
  document.body.append(modal);
}

function showModal(id: string) {
  const selector = `[data-modal="${id}"]`;
  const modal = document.querySelector(selector);

  if (!modal) return;
  modal.classList.add('modal_open');

  setTimeout(() => {
    modal.classList.add('modal_visible');
  }, 300);

  return modal;
}

function hideModal(modal: HTMLElement) {
  modal.classList.remove('modal_visible');

  setTimeout(() => {
    modal.classList.remove('modal_open');
  }, 200);
}

function showOverlay(overlay: HTMLElement) {
  overlay.classList.add('modal-overlay_open');

  setTimeout(() => {
    overlay.classList.add('modal-overlay_visible');
  }, 300);
}

function hideOverlay(overlay: HTMLElement) {
  overlay.classList.remove('modal-overlay_visible');

  setTimeout(() => {
    overlay.classList.remove('modal-overlay_open');
  }, 500);
}

// const Modal = (type = 'default') => {
//   const _type = type;
//   let _modal = null;
//   let _overlay: HTMLElement | null = null;
//   let _isOpen = false;
//
//   const overlay = document.querySelector('[data-modal-overlay]');
//   if (!overlay) {
//     _overlay = createOverlay();
//   } else {
//     _overlay = overlay as HTMLElement;
//   }
//
//   function open(id: string) {
//     /* TODO
//       Проверить существует ли модалки и попробовать ее получение из ajax, из атрибута
//       data-modal-content // Строка
//       data-modal-content-ajax // Урл запроса для ajax
//       data-modal-content-base64 // Строка base64. Разобрать и вывести в контент
//       Добавить событие открытия
//       Добавить событие закрытия
//      */
//
//     if (_type === 'default') {
//       showOverlay(_overlay!);
//     }
//
//     _modal = showModal(id);
//     _isOpen = true;
//   }
//
//   function close(item: HTMLElement) {
//     hideModal(item);
//
//     setTimeout(() => {
//       if (_type === 'default') {
//         hideOverlay(_overlay!);
//       }
//
//       _isOpen = false;
//     }, 200);
//   }
//
//   function closeAll() {
//     const selector = `[data-modal]`;
//     const modals = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
//
//     modals.forEach(item => {
//       close(item);
//       enablePageScroll(item);
//     });
//
//     clearQueueScrollLocks();
//   }
//
//   function documentClickHandler(e: MouseEvent) {
//     const target = e.target as HTMLElement;
//
//     if (_isOpen) {
//       // Close all modals
//       const currentModal = target.closest('[data-modal-content]') as HTMLElement;
//       const closeBtn = target.closest('[data-modal-close]') as HTMLElement;
//
//       if (!currentModal || closeBtn) {
//         closeAll();
//         _isOpen = false;
//       }
//
//       clearQueueScrollLocks();
//       enablePageScroll(currentModal);
//     } else {
//       const modalTrigger = target.closest('[data-modal-open]') as HTMLElement;
//
//       if (!modalTrigger) return;
//
//       // Open modal
//       const modalId = modalTrigger.dataset.modalOpen;
//       if (modalId) {
//         open(modalId);
//
//         disablePageScroll();
//         _isOpen = true;
//       }
//     }
//   }
//
//   function documentKeyupHandler(e: KeyboardEvent) {
//     if (e.key === 'Escape') {
//       closeAll();
//       _isOpen = false;
//     }
//   }
//
//   function init() {
//     document.addEventListener('click', documentClickHandler);
//     document.addEventListener('keyup', documentKeyupHandler);
//   }
//
//   function destroy() {
//     document.removeEventListener('click', documentClickHandler);
//     document.removeEventListener('keyup', documentKeyupHandler);
//   }
//
//   return {
//     open,
//     close,
//     init,
//     destroy,
//     createModal,
//     modal: _modal,
//     isOpen: _isOpen
//   };
// };

class Modal extends AppModule {
  constructor() {
    super();
  }

  init() {
    super.init();
  }
}

export { Modal };
