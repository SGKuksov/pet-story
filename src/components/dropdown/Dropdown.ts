import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock';
import { AppModule } from "@/assets/models";

function createDropdown(selector: string | HTMLElement, content: string, type = 'left') {
  let className = '';
  let button = null;

  if (type === 'left') {
    className = 'dropdown_left';
  }

  if (type === 'right') {
    className = 'dropdown_right';
  }

  if (typeof selector === 'string') {
    button = document.querySelector(`[data-dropdown-open="${selector}"]`) as HTMLElement;
  }

  if (selector instanceof Element) {
    button = selector;
  }

  if (!button) return;

  const id = button.dataset.dropdownOpen;
  if (!id) return;

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown', className);
  dropdown.dataset.dropdown = id;
  dropdown.innerHTML = `
    <div class="dropdown__content" data-dropdown-content>
        ${content}
        
        <button data-dropdown-close>Х</button>
    </div>   
  `;

  // @ts-ignore
  button.parentNode.insertBefore(dropdown, button.nextSibling);
  dropdown.prepend(button);
}

// TODO Fix me
// function Dropdown() {
//   let _isOpen = false;
//
//   function open(id: string) {
//     const selector = `[data-dropdown="${id}"]`;
//     const dropdown = document.querySelector(selector);
//
//     if (!dropdown) return;
//     dropdown.classList.add('dropdown_open');
//
//     setTimeout(() => {
//       dropdown.classList.add('dropdown_visible');
//     }, 300);
//   }
//
//   function close(dropdown: HTMLElement) {
//     dropdown.classList.remove('dropdown_visible');
//
//     setTimeout(() => {
//       dropdown.classList.remove('dropdown_open');
//     }, 200);
//   }
//
//   function closeAll() {
//     const selector = `[data-dropdown]`;
//     const dropdowns = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
//
//     dropdowns.forEach(item => {
//       close(item);
//       // enablePageScroll(item);
//     });
//
//     // clearQueueScrollLocks();
//   }
//
//   function documentClickHandler(e: MouseEvent) {
//     const target = e.target as HTMLElement;
//
//     if (_isOpen) {
//       // Close all
//       const currentDropdown = target.closest('[data-dropdown]');
//       const closeBtn = target.closest('[data-dropdown-close]');
//       const openBtn = target.closest('[data-dropdown-open]');
//
//       if (!currentDropdown || closeBtn || openBtn) {
//         closeAll();
//         _isOpen = false;
//       }
//
//       // clearQueueScrollLocks();
//       // enablePageScroll(currentDropdown);
//     } else {
//       const dropdownTrigger = target.closest('[data-dropdown-open]') as HTMLElement;
//
//       if (!dropdownTrigger) return;
//
//       // Open
//       const id = dropdownTrigger.dataset.dropdownOpen;
//       if (id) {
//         open(id);
//
//         // disablePageScroll();
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
//     init,
//     destroy,
//     open,
//     close,
//     createDropdown
//   };
// }

class Dropdown extends AppModule {
  constructor() {
    super();
  }

  init() {
    super.init();
  }
}

export { Dropdown };
