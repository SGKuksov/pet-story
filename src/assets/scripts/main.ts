import { getLCP, getFID, getCLS } from 'web-vitals';
import App from './App';
import { Dropdown } from "@/components/dropdown/Dropdown";
import { Form } from "@/components/form/Form";
import { Modal } from "@/components/modal/Modal";

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
}

/*
  Передать аргумент в конструктор можно через bind()
  Пример:
  `Ticker.bind(null, options)`
 */
new App([
  Dropdown,
  Form,
  Modal,
]);
