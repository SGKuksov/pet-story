import { createError, hideAllError, checkInputs, getFormData } from '@/components/form/form.utils';
import { AppModule } from "@/assets/models";

// FIXME
// function Form() {
//   let _isFormValid: boolean | null = null;
//
//   function reset(form: { querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {
//     const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLInputElement[];
//     hideAllError(inputs);
//   }
//
//   function validate(form: HTMLElement) {
//     if (!form) return;
//     reset(form);
//
//     const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLInputElement[];
//     _isFormValid = checkInputs(inputs);
//   }
//
//   function documentFocusHandler(e: FocusEvent) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentBlurHandler(e: FocusEvent) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentInputHandler(e: Event) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentChangeHandler(e: Event) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentSubmitHandler(e: Event) {
//     const target = e.target as HTMLElement;
//     e.preventDefault();
//
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//
//     if (_isFormValid) {
//       console.log('Submit');
//       // form.submit();
//     }
//   }
//
//   function init() {
//     const forms = Array.from(document.forms);
//     forms.forEach(form => {
//       const inputs = Array.from(form.querySelectorAll('[required]')) as HTMLInputElement[];
//
//       inputs.forEach(input => {
//         input.dataset.required = '';
//         input.required = false;
//
//         // TODO Менять атрибут type у полей по словарю
//         // email -> text
//         // datetime -> text
//
//         if (input.type === 'email') {
//           input.type = 'text';
//         }
//       });
//     });
//
//     document.addEventListener('focus', documentFocusHandler);
//     document.addEventListener('blur', documentBlurHandler);
//     document.addEventListener('input', documentInputHandler);
//     document.addEventListener('change', documentChangeHandler);
//     document.addEventListener('submit', documentSubmitHandler);
//   }
//
//   function destroy() {
//     const forms = Array.from(document.forms);
//     forms.forEach(form => {
//       const inputs = Array.from(form.querySelectorAll('[data-required]')) as HTMLInputElement[];
//
//       inputs.forEach(input => {
//         input.required = true;
//       });
//     });
//
//     document.addEventListener('focus', documentFocusHandler);
//     document.addEventListener('blur', documentBlurHandler);
//     document.addEventListener('input', documentInputHandler);
//     document.addEventListener('change', documentChangeHandler);
//     document.addEventListener('submit', documentSubmitHandler);
//   }
//
//   return {
//     init,
//     destroy,
//     isFormValid: _isFormValid,
//     validate,
//     reset,
//     getFormData,
//     createError
//   };
// }

class Form extends AppModule {
  constructor() {
    super();
  }

  init() {
    super.init();
  }
}

export { Form };
