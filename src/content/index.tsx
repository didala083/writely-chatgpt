import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import { createRoot } from 'react-dom/client';
import { appElement } from './app';
import './index.css';
import { tag, conatinerId } from './shadow-dom.js';
import { initI18n } from '../common/i18n';
import i18next from 'i18next';

const render = () => {
  window.addEventListener('load', async () => {
    const container = document.createElement(tag);
    container.className = 'writly-container';
    document.body.append(container);

    await initI18n();

    createRoot(container.shadowRoot.querySelector(`#${conatinerId}`)).render(
      appElement
    );
  });
};

render();