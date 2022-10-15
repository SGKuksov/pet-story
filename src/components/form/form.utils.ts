import is from 'is_js';

// error-empty
// error-len
// error-phone
// error-email
export const defaultErrorsMsg = {
  empty: 'Поле не должно быть пустым',
  minlen: (x: string) => `Минимальная длина ${x} символов`,
  maxlen: (x: string) => `Максимальная длина ${x} символов`,
  phone: 'Неверный формат номера телефона',
  email: 'Неверный формат e-mail'
};

export function createError(content: string, formItem: HTMLElement | null = null) {
  const error = document.createElement('span');
  error.classList.add('error', 'form__error');
  error.dataset.error = '';
  error.innerHTML = content;

  if (formItem) {
    formItem.append(error);
  }

  return error;
}

export function showError(item: HTMLElement, msg: string) {
  if (!item) return;
  let error = item.querySelector('[data-error]');

  if (!error) {
    error = createError(msg, item);
  }

  error.classList.add('error_shown');
}

export function hideError(item: HTMLElement) {
  if (!item) return;
  const error = item.querySelector('[data-error]');

  if (!error) return;
  error.classList.add('error_hide');
}

export function hideAllError(items: HTMLElement[]) {
  items.forEach(item => {
    hideError(item);
  });
}

export function getFormData(selector: string | HTMLFormElement) {
  let form: HTMLFormElement | null = null;

  if (typeof selector === 'string') {
    form = document.querySelector(selector);
  }

  if (selector instanceof Element) {
    form = selector;
  }

  return new FormData(form!);
}

export function getValue(input: HTMLInputElement) {
  if (input.tagName === 'INPUT') {
    if (input.type === 'checkbox' || input.type === 'radio') {
      let inputValue = null;

      if (input.checked && input.value === 'on') {
        inputValue = input.name;
      } else if (input.checked && input.value !== 'on') {
        inputValue = input.value;
      } else if (!input.checked) {
        inputValue = null;
      }

      return inputValue;
    }

    return input.value;
  }

  if (input.tagName === 'SELECT') {
    return input.value;
  }

  if (input.tagName === 'TEXTAREA') {
    return input.value;
  }

  return input.value;
}

export function getRules(input: HTMLInputElement) {
  const rules = [];

  if ('errorEmpty' in input.dataset || input.dataset.required) {
    rules.push('empty');
  }

  if ('errorLen' in input.dataset) {
    rules.push('len'); // TODO Добавить передачу значения
  }

  if ('errorPhoneMsg' in input.dataset) {
    rules.push('phone');
  }

  if ('errorEmailMsg' in input.dataset) {
    rules.push('email');
  }

  return [];
}

export function getErrorMessage(input: HTMLInputElement, error: string) {
  let errorMsg = null;

  // error-empty
  // error-len
  // error-phone
  // error-email
  if (error === 'empty') {
    if ('errorEmptyMsg' in input.dataset) {
      errorMsg = input.dataset.errorEmptyMsg;
    } else {
      errorMsg = defaultErrorsMsg[error];
    }
  } else if (error === 'maxlen') {
    if ('errorLenMsg' in input.dataset) {
      errorMsg = input.dataset.errorEmptyMsg;
    } else {
      errorMsg = defaultErrorsMsg[error](input.dataset.errorLen!);
    }
  } else if (error === 'minlen') {
    if ('errorLenMsg' in input.dataset) {
      errorMsg = input.dataset.errorEmptyMsg;
    } else {
      errorMsg = defaultErrorsMsg[error](input.dataset.errorLen!);
    }
  } else if (error === 'phone') {
    if ('errorPhoneMsg' in input.dataset) {
      errorMsg = input.dataset.errorEmptyMsg;
    } else {
      errorMsg = defaultErrorsMsg[error];
    }
  } else if (error === 'email') {
    if ('errorEmailMsg' in input.dataset) {
      errorMsg = input.dataset.errorEmptyMsg;
    } else {
      errorMsg = defaultErrorsMsg[error];
    }
  } else {
    errorMsg = 'Неверный формат';
  }

  return errorMsg;
}

export function checkValue(value: string, rules = []): string | null {
  let result = null;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    if (rule === 'empty') {
      is.empty(value);
      result = rule;
    }

    if (rule === 'phone') {
      is.empty(value);
      result = rule;
    }

    if (rule === 'email') {
      is.empty(value);
      result = rule;
    }

    if (result) break;
  }

  return result;
}

export function checkInputs(inputs: HTMLInputElement[]) {
  let isFormValid = true;

  inputs.forEach(input => {
    const value = getValue(input);
    const rules = getRules(input);
    console.log(value, rules);

    const failedRule = checkValue(value!, rules);

    if (!failedRule) {
      const msg = getErrorMessage(input, failedRule!);
      showError(input, msg!);
    }

    if (isFormValid) {
      isFormValid = !!failedRule;
    }
  });

  console.log(isFormValid);

  return isFormValid;
}
